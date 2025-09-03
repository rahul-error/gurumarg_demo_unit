import { createContext, useContext, ReactNode, useState, useEffect, useCallback } from 'react';
import { SubscriptionPlan, UserSubscription, hasFeature, getFeatureLimit, getPlanById } from '@/types/subscription';
import { idbGet, idbSet, idbDel } from '@/lib/utils';

type SubscriptionContextValue = {
  subscription: UserSubscription | null;
  loading: boolean;
  upgradePlan: (plan: SubscriptionPlan) => Promise<void>;
  cancelSubscription: () => Promise<void>;
  checkFeature: (featureId: string) => boolean;
  getFeatureUsage: (featureId: string) => number;
  incrementFeatureUsage: (featureId: string) => void;
  canUseFeature: (featureId: string) => boolean;
  refreshSubscription: () => Promise<void>;
};

const SubscriptionContext = createContext<SubscriptionContextValue | undefined>(undefined);

export const SubscriptionProvider = ({ children }: { children: ReactNode }) => {
  const [subscription, setSubscription] = useState<UserSubscription | null>(null);
  const [loading, setLoading] = useState(true);
  const [featureUsage, setFeatureUsage] = useState<Record<string, number>>({});

  const refreshSubscription = useCallback(async () => {
    setLoading(true);
    try {
      const stored = await idbGet<UserSubscription>('user_subscription');
      const usage = await idbGet<Record<string, number>>('feature_usage') || {};
      
      setSubscription(stored || {
        plan: 'free',
        status: 'active',
        startDate: new Date().toISOString(),
        autoRenew: false,
        features: getPlanById('free')?.features.map(f => f.id) || []
      });
      setFeatureUsage(usage);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refreshSubscription();
  }, [refreshSubscription]);

  const upgradePlan = async (plan: SubscriptionPlan) => {
    const planDetails = getPlanById(plan);
    if (!planDetails) throw new Error('Invalid plan');

    const newSubscription: UserSubscription = {
      plan,
      status: 'active',
      startDate: new Date().toISOString(),
      endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(), // 30 days from now
      autoRenew: true,
      features: planDetails.features.map(f => f.id)
    };

    await idbSet('user_subscription', newSubscription);
    setSubscription(newSubscription);
  };

  const cancelSubscription = async () => {
    if (!subscription) return;

    const cancelledSubscription: UserSubscription = {
      ...subscription,
      status: 'cancelled',
      autoRenew: false
    };

    await idbSet('user_subscription', cancelledSubscription);
    setSubscription(cancelledSubscription);
  };

  const checkFeature = (featureId: string): boolean => {
    if (!subscription) return false;
    return hasFeature(subscription.plan, featureId);
  };

  const getFeatureUsage = (featureId: string): number => {
    return featureUsage[featureId] || 0;
  };

  const incrementFeatureUsage = (featureId: string) => {
    const currentUsage = getFeatureUsage(featureId);
    const newUsage = { ...featureUsage, [featureId]: currentUsage + 1 };
    setFeatureUsage(newUsage);
    idbSet('feature_usage', newUsage);
  };

  const canUseFeature = (featureId: string): boolean => {
    if (!subscription) return false;
    
    const hasAccess = hasFeature(subscription.plan, featureId);
    if (!hasAccess) return false;

    const limit = getFeatureLimit(subscription.plan, featureId);
    if (limit === 'unlimited') return true;
    if (limit === null) return true;

    const usage = getFeatureUsage(featureId);
    return usage < limit;
  };

  return (
    <SubscriptionContext.Provider value={{
      subscription,
      loading,
      upgradePlan,
      cancelSubscription,
      checkFeature,
      getFeatureUsage,
      incrementFeatureUsage,
      canUseFeature,
      refreshSubscription
    }}>
      {children}
    </SubscriptionContext.Provider>
  );
};

export const useSubscription = () => {
  const context = useContext(SubscriptionContext);
  if (!context) {
    throw new Error('useSubscription must be used within a SubscriptionProvider');
  }
  return context;
};

// Feature gating hook
export const useFeatureGate = (featureId: string) => {
  const { canUseFeature, checkFeature, getFeatureUsage, incrementFeatureUsage, subscription } = useSubscription();
  
  const canUse = canUseFeature(featureId);
  const hasAccess = checkFeature(featureId);
  const usage = getFeatureUsage(featureId);
  const limit = subscription ? getFeatureLimit(subscription.plan, featureId) : null;
  
  const useFeature = () => {
    if (canUse) {
      incrementFeatureUsage(featureId);
      return true;
    }
    return false;
  };

  return {
    canUse,
    hasAccess,
    usage,
    limit,
    useFeature,
    remaining: typeof limit === 'number' ? Math.max(0, limit - usage) : null
  };
};
