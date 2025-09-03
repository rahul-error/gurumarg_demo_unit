export type SubscriptionPlan = 'free' | 'pro' | 'max';

export interface SubscriptionFeature {
  id: string;
  name: string;
  description: string;
  included: boolean;
  limit?: number;
  unlimited?: boolean;
}

export interface SubscriptionPlanDetails {
  id: SubscriptionPlan;
  name: string;
  price: number;
  currency: string;
  billingPeriod: 'month' | 'year';
  description: string;
  features: SubscriptionFeature[];
  popular?: boolean;
  buttonText: string;
  buttonVariant: 'default' | 'secondary' | 'outline';
}

export interface UserSubscription {
  plan: SubscriptionPlan;
  status: 'active' | 'inactive' | 'cancelled' | 'expired';
  startDate: string;
  endDate?: string;
  autoRenew: boolean;
  features: string[];
}

export const SUBSCRIPTION_PLANS: SubscriptionPlanDetails[] = [
  {
    id: 'free',
    name: 'Free',
    price: 0,
    currency: '₹',
    billingPeriod: 'month',
    description: 'Perfect for students getting started with career guidance',
    buttonText: 'Get Started Free',
    buttonVariant: 'outline',
    features: [
      {
        id: 'basic_assessments',
        name: 'Basic Assessments',
        description: 'Access to 3 career assessment tests',
        included: true,
        limit: 3
      },
      {
        id: 'college_search',
        name: 'College Search',
        description: 'Search and browse college information',
        included: true
      },
      {
        id: 'career_info',
        name: 'Career Information',
        description: 'Basic career information and details',
        included: true
      },
      {
        id: 'scholarship_basic',
        name: 'Scholarship Listings',
        description: 'Access to basic scholarship information',
        included: true
      },
      {
        id: 'ai_chat_limited',
        name: 'AI Career Chat',
        description: '5 AI-powered career guidance conversations per month',
        included: true,
        limit: 5
      },
      {
        id: 'profile_basic',
        name: 'Basic Profile',
        description: 'Create and manage basic profile',
        included: true
      },
      {
        id: 'export_basic',
        name: 'Basic Export',
        description: 'Export assessment results as PDF',
        included: true
      }
    ]
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 299,
    currency: '₹',
    billingPeriod: 'month',
    description: 'Advanced features for serious career planning',
    popular: true,
    buttonText: 'Upgrade to Pro',
    buttonVariant: 'default',
    features: [
      {
        id: 'unlimited_assessments',
        name: 'Unlimited Assessments',
        description: 'Access to all career assessment tests',
        included: true,
        unlimited: true
      },
      {
        id: 'advanced_college_search',
        name: 'Advanced College Search',
        description: 'Advanced filters, comparison tools, and detailed analytics',
        included: true
      },
      {
        id: 'career_roadmap',
        name: 'Career Roadmaps',
        description: 'Detailed career progression paths and skill development plans',
        included: true
      },
      {
        id: 'scholarship_advanced',
        name: 'Advanced Scholarship Search',
        description: 'AI-powered scholarship matching and application tracking',
        included: true
      },
      {
        id: 'ai_chat_unlimited',
        name: 'Unlimited AI Chat',
        description: 'Unlimited AI-powered career guidance conversations',
        included: true,
        unlimited: true
      },
      {
        id: 'profile_advanced',
        name: 'Advanced Profile',
        description: 'Detailed profile with portfolio and achievements',
        included: true
      },
      {
        id: 'export_advanced',
        name: 'Advanced Export',
        description: 'Export in multiple formats (PDF, Excel, Word)',
        included: true
      },
      {
        id: 'priority_support',
        name: 'Priority Support',
        description: 'Priority email support within 24 hours',
        included: true
      },
      {
        id: 'webinar_access',
        name: 'Exclusive Webinars',
        description: 'Access to monthly career guidance webinars',
        included: true
      }
    ]
  },
  {
    id: 'max',
    name: 'Max',
    price: 599,
    currency: '₹',
    billingPeriod: 'month',
    description: 'Complete career guidance with personal mentorship',
    buttonText: 'Go Max',
    buttonVariant: 'secondary',
    features: [
      {
        id: 'everything_pro',
        name: 'Everything in Pro',
        description: 'All Pro features included',
        included: true
      },
      {
        id: 'personal_mentor',
        name: 'Personal Career Mentor',
        description: '1-on-1 sessions with industry experts (2 sessions/month)',
        included: true,
        limit: 2
      },
      {
        id: 'resume_review',
        name: 'Resume Review',
        description: 'Professional resume review and optimization',
        included: true,
        limit: 3
      },
      {
        id: 'interview_prep',
        name: 'Interview Preparation',
        description: 'Mock interviews and preparation sessions',
        included: true,
        limit: 2
      },
      {
        id: 'job_alerts',
        name: 'Smart Job Alerts',
        description: 'AI-powered job recommendations and alerts',
        included: true
      },
      {
        id: 'networking_events',
        name: 'Networking Events',
        description: 'Access to exclusive networking events and meetups',
        included: true
      },
      {
        id: 'certification_tracks',
        name: 'Certification Tracks',
        description: 'Guided certification and skill development tracks',
        included: true
      },
      {
        id: 'phone_support',
        name: 'Phone Support',
        description: 'Direct phone support with career experts',
        included: true
      },
      {
        id: 'custom_reports',
        name: 'Custom Reports',
        description: 'Detailed career analysis and progress reports',
        included: true
      }
    ]
  }
];

export const getPlanById = (planId: SubscriptionPlan): SubscriptionPlanDetails | undefined => {
  return SUBSCRIPTION_PLANS.find(plan => plan.id === planId);
};

export const getFeatureLimit = (plan: SubscriptionPlan, featureId: string): number | 'unlimited' | null => {
  const planDetails = getPlanById(plan);
  if (!planDetails) return null;
  
  const feature = planDetails.features.find(f => f.id === featureId);
  if (!feature || !feature.included) return null;
  
  if (feature.unlimited) return 'unlimited';
  return feature.limit || null;
};

export const hasFeature = (plan: SubscriptionPlan, featureId: string): boolean => {
  const planDetails = getPlanById(plan);
  if (!planDetails) return false;
  
  const feature = planDetails.features.find(f => f.id === featureId);
  return feature?.included || false;
};
