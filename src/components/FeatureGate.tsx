import { ReactNode } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useFeatureGate } from '@/hooks/useSubscription';
import { Crown, Zap, Lock, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface FeatureGateProps {
  featureId: string;
  children: ReactNode;
  fallback?: ReactNode;
  showUpgradePrompt?: boolean;
  requiredPlan?: 'pro' | 'max';
}

export const FeatureGate = ({ 
  featureId, 
  children, 
  fallback, 
  showUpgradePrompt = true,
  requiredPlan 
}: FeatureGateProps) => {
  const { canUse, hasAccess, usage, limit, remaining } = useFeatureGate(featureId);
  const navigate = useNavigate();

  if (canUse) {
    return <>{children}</>;
  }

  if (fallback) {
    return <>{fallback}</>;
  }

  if (!showUpgradePrompt) {
    return null;
  }

  const getUpgradeMessage = () => {
    if (!hasAccess) {
      return {
        title: "Feature Not Available",
        description: "This feature is not available in your current plan.",
        icon: <Lock className="h-5 w-5" />,
        buttonText: "Upgrade Plan"
      };
    }

    if (limit && remaining !== null && remaining <= 0) {
      return {
        title: "Usage Limit Reached",
        description: `You've used all ${limit} ${featureId.replace('_', ' ')} for this month.`,
        icon: <Lock className="h-5 w-5" />,
        buttonText: "Upgrade for More"
      };
    }

    return {
      title: "Upgrade Required",
      description: "This feature requires a higher plan.",
      icon: <Crown className="h-5 w-5" />,
      buttonText: "Upgrade Now"
    };
  };

  const message = getUpgradeMessage();

  return (
    <Card className="border-dashed border-2 border-muted-foreground/25">
      <CardHeader className="text-center">
        <div className="mx-auto w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4">
          {message.icon}
        </div>
        <CardTitle className="text-lg">{message.title}</CardTitle>
        <CardDescription>{message.description}</CardDescription>
      </CardHeader>
      <CardContent className="text-center space-y-4">
        {usage > 0 && limit && (
          <div className="text-sm text-muted-foreground">
            Used: {usage}/{limit} this month
          </div>
        )}
        
        <div className="flex justify-center space-x-2">
          <Badge variant="outline">Free Plan</Badge>
          <ArrowRight className="h-4 w-4 text-muted-foreground" />
          <Badge className="bg-primary text-white">
            <Zap className="h-3 w-3 mr-1" />
            Pro Plan
          </Badge>
          {requiredPlan === 'max' && (
            <>
              <ArrowRight className="h-4 w-4 text-muted-foreground" />
              <Badge className="bg-secondary text-secondary-foreground">
                <Crown className="h-3 w-3 mr-1" />
                Max Plan
              </Badge>
            </>
          )}
        </div>

        <Button 
          className="gradient-primary text-white border-0 shadow-elegant"
          onClick={() => navigate('/pricing')}
        >
          {message.buttonText}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
};

// Usage indicator component
interface UsageIndicatorProps {
  featureId: string;
  className?: string;
}

export const UsageIndicator = ({ featureId, className = "" }: UsageIndicatorProps) => {
  const { usage, limit, remaining } = useFeatureGate(featureId);

  if (limit === 'unlimited' || limit === null) {
    return null;
  }

  const percentage = (usage / limit) * 100;
  const isNearLimit = percentage >= 80;
  const isAtLimit = percentage >= 100;

  return (
    <div className={`text-xs ${className}`}>
      <div className="flex justify-between items-center mb-1">
        <span className="text-muted-foreground">
          {featureId.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
        </span>
        <span className={isAtLimit ? 'text-red-500' : isNearLimit ? 'text-yellow-500' : 'text-muted-foreground'}>
          {usage}/{limit}
        </span>
      </div>
      <div className="w-full bg-muted rounded-full h-1.5">
        <div 
          className={`h-1.5 rounded-full transition-all ${
            isAtLimit ? 'bg-red-500' : isNearLimit ? 'bg-yellow-500' : 'bg-primary'
          }`}
          style={{ width: `${Math.min(percentage, 100)}%` }}
        />
      </div>
      {remaining !== null && remaining <= 2 && remaining > 0 && (
        <p className="text-yellow-600 mt-1">
          Only {remaining} remaining this month
        </p>
      )}
    </div>
  );
};
