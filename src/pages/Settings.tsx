import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useApiKey } from '@/hooks/useApi';
import { useSubscription } from '@/hooks/useSubscription';
import { getPlanById } from '@/types/subscription';
import { Crown, Zap, User, ArrowRight, Settings as SettingsIcon, Key } from 'lucide-react';
import Navigation from '@/components/ui/navigation';

const Settings = () => {
  const { apiKey, loading, setKey, clearKey } = useApiKey();
  const { subscription, cancelSubscription } = useSubscription();
  const [value, setValue] = useState('');
  const [saved, setSaved] = useState(false);
  const [activeTab, setActiveTab] = useState('api');

  useEffect(() => {
    if (apiKey) setValue(apiKey);
  }, [apiKey]);

  const handleSave = async () => {
    await setKey(value.trim());
    setSaved(true);
    setTimeout(() => setSaved(false), 1500);
  };

  const handleClear = async () => {
    await clearKey();
    setValue('');
  };

  const handleCancelSubscription = async () => {
    await cancelSubscription();
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Settings</h1>
            <p className="text-muted-foreground">Manage your account settings and preferences</p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="api" className="flex items-center space-x-2">
                <Key className="h-4 w-4" />
                <span>API Settings</span>
              </TabsTrigger>
              <TabsTrigger value="subscription" className="flex items-center space-x-2">
                <SettingsIcon className="h-4 w-4" />
                <span>Subscription</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="api" className="space-y-6">
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle>Gemini API Configuration</CardTitle>
                  <CardDescription>Configure your Gemini API access for AI-powered features</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="apiKey">Gemini API Key</Label>
                    <Input
                      id="apiKey"
                      type="password"
                      placeholder="AIza..."
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                      disabled={loading}
                    />
                    <p className="text-sm text-muted-foreground">
                      Your key is stored locally in your browser (IndexedDB). It never leaves your device.
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button onClick={handleSave} disabled={loading || !value.trim()}>
                    {saved ? 'Saved' : 'Save Key'}
                  </Button>
                  <Button variant="secondary" onClick={handleClear} disabled={loading || !apiKey}>
                    Remove Key
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="subscription" className="space-y-6">
              {subscription && (
                <div className="grid lg:grid-cols-2 gap-6">
                  <Card className="shadow-elegant">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        {subscription.plan === 'free' ? (
                          <User className="h-5 w-5" />
                        ) : subscription.plan === 'pro' ? (
                          <Zap className="h-5 w-5" />
                        ) : (
                          <Crown className="h-5 w-5" />
                        )}
                        <span>Current Plan</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Plan</span>
                        <Badge 
                          variant={subscription.plan === 'free' ? 'outline' : 'default'}
                          className={subscription.plan !== 'free' ? 'bg-primary text-white' : ''}
                        >
                          {subscription.plan.charAt(0).toUpperCase() + subscription.plan.slice(1)}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Status</span>
                        <Badge 
                          variant={subscription.status === 'active' ? 'default' : 'secondary'}
                          className={subscription.status === 'active' ? 'bg-green-100 text-green-800' : ''}
                        >
                          {subscription.status.charAt(0).toUpperCase() + subscription.status.slice(1)}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Started</span>
                        <span className="font-medium">
                          {new Date(subscription.startDate).toLocaleDateString()}
                        </span>
                      </div>
                      {subscription.endDate && (
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground">Expires</span>
                          <span className="font-medium">
                            {new Date(subscription.endDate).toLocaleDateString()}
                          </span>
                        </div>
                      )}
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Auto Renew</span>
                        <span className="font-medium">
                          {subscription.autoRenew ? 'Yes' : 'No'}
                        </span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="shadow-elegant">
                    <CardHeader>
                      <CardTitle>Plan Management</CardTitle>
                      <CardDescription>
                        Manage your subscription and billing
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <Button 
                          className="w-full gradient-primary text-white border-0 shadow-elegant"
                          onClick={() => window.location.href = '/pricing'}
                        >
                          {subscription.plan === 'free' ? 'Upgrade Plan' : 'Change Plan'}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        
                        {subscription.plan !== 'free' && subscription.status === 'active' && (
                          <Button 
                            variant="outline" 
                            className="w-full"
                            onClick={handleCancelSubscription}
                          >
                            Cancel Subscription
                          </Button>
                        )}
                      </div>
                      
                      <div className="pt-4 border-t">
                        <h4 className="font-medium mb-2">Plan Features</h4>
                        <div className="space-y-2">
                          {subscription.features.slice(0, 4).map((featureId) => {
                            const planDetails = getPlanById(subscription.plan);
                            const feature = planDetails?.features.find(f => f.id === featureId);
                            return feature ? (
                              <div key={featureId} className="flex items-center space-x-2 text-sm">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                <span>{feature.name}</span>
                              </div>
                            ) : null;
                          })}
                          {subscription.features.length > 4 && (
                            <p className="text-sm text-muted-foreground">
                              +{subscription.features.length - 4} more features
                            </p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Settings;


