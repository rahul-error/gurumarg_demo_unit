import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, X, Star, ArrowRight, GraduationCap } from "lucide-react";
import Navigation from "@/components/ui/navigation";
import { useSubscription } from "@/hooks/useSubscription";
import { useToast } from "@/hooks/use-toast";
import { SUBSCRIPTION_PLANS, SubscriptionPlan } from "@/types/subscription";

const Pricing = () => {
  const navigate = useNavigate();
  const { subscription, upgradePlan } = useSubscription();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState<SubscriptionPlan | null>(null);

  const handleUpgrade = async (plan: SubscriptionPlan) => {
    if (plan === 'free') {
      navigate('/signup');
      return;
    }

    setIsLoading(plan);
    try {
      await upgradePlan(plan);
      toast({
        title: "Upgrade Successful!",
        description: `Welcome to ${plan.charAt(0).toUpperCase() + plan.slice(1)} plan!`,
      });
      navigate('/profile');
    } catch (error: any) {
      toast({
        title: "Upgrade Failed",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(null);
    }
  };

  const getButtonText = (plan: SubscriptionPlan) => {
    if (subscription?.plan === plan) {
      return "Current Plan";
    }
    if (subscription?.plan === 'free' && plan !== 'free') {
      return "Upgrade";
    }
    if (subscription?.plan === 'pro' && plan === 'max') {
      return "Upgrade to Max";
    }
    if (subscription?.plan === 'max' && plan !== 'max') {
      return "Downgrade";
    }
    return plan === 'free' ? 'Get Started' : 'Choose Plan';
  };

  const getButtonVariant = (plan: SubscriptionPlan) => {
    if (subscription?.plan === plan) {
      return 'secondary' as const;
    }
    return plan === 'pro' ? 'default' as const : 'outline' as const;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="gradient-primary p-2 rounded-lg">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                GuruMarg
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Choose Your <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Career Path</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Unlock your potential with our comprehensive career guidance platform. 
              Start free and upgrade as you grow.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {SUBSCRIPTION_PLANS.map((plan) => (
              <Card 
                key={plan.id} 
                className={`relative transition-all duration-300 hover:shadow-xl ${
                  plan.popular 
                    ? 'border-primary shadow-lg scale-105' 
                    : 'hover:border-primary/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">
                      <Star className="h-3 w-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">
                      {plan.currency}{plan.price}
                    </span>
                    <span className="text-muted-foreground">/{plan.billingPeriod}</span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Features */}
                  <div className="space-y-3">
                    {plan.features.map((feature) => (
                      <div key={feature.id} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 mt-0.5">
                          {feature.included ? (
                            <Check className="h-4 w-4 text-green-500" />
                          ) : (
                            <X className="h-4 w-4 text-muted-foreground" />
                          )}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">
                            {feature.name}
                            {feature.limit && !feature.unlimited && (
                              <span className="text-muted-foreground ml-1">
                                ({feature.limit} {feature.limit === 1 ? 'per month' : 'per month'})
                              </span>
                            )}
                            {feature.unlimited && (
                              <span className="text-green-600 ml-1 font-medium">Unlimited</span>
                            )}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button
                    className={`w-full ${
                      plan.popular 
                        ? 'gradient-primary text-white border-0 shadow-elegant' 
                        : ''
                    }`}
                    variant={getButtonVariant(plan.id)}
                    onClick={() => handleUpgrade(plan.id)}
                    disabled={isLoading === plan.id || subscription?.plan === plan.id}
                  >
                    {isLoading === plan.id ? (
                      "Processing..."
                    ) : (
                      <>
                        {getButtonText(plan.id)}
                        {subscription?.plan !== plan.id && (
                          <ArrowRight className="ml-2 h-4 w-4" />
                        )}
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="mt-20 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Can I change plans anytime?</h3>
                  <p className="text-sm text-muted-foreground">
                    Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">What happens to my data if I cancel?</h3>
                  <p className="text-sm text-muted-foreground">
                    Your data is always safe. You can export your information before cancelling, and it's stored for 30 days.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Is there a free trial?</h3>
                  <p className="text-sm text-muted-foreground">
                    Our Free plan is always free with no time limits. You can upgrade to Pro or Max anytime for more features.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Do you offer student discounts?</h3>
                  <p className="text-sm text-muted-foreground">
                    Yes! Students get 20% off on Pro and Max plans. Contact support with your student ID for the discount.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4">Ready to Start Your Career Journey?</h2>
              <p className="text-muted-foreground mb-6">
                Join thousands of students who have found their perfect career path with GuruMarg.
              </p>
              <Button 
                size="lg" 
                className="gradient-primary text-white border-0 shadow-elegant"
                onClick={() => navigate('/signup')}
              >
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Pricing;
