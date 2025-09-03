import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Mail, 
  GraduationCap,
  ArrowRight,
  ArrowLeft,
  RefreshCw
} from "lucide-react";
import Navigation from "@/components/ui/navigation";
import { useAuth } from "@/hooks/useApi";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const VerifyOtp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const { signIn } = useAuth();
  
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [countdown, setCountdown] = useState(0);
  
  const email = location.state?.email;
  const type = location.state?.type || 'signup';

  useEffect(() => {
    if (!email) {
      navigate('/signup');
      return;
    }
  }, [email, navigate]);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length !== 6) {
      toast({
        title: "Invalid OTP",
        description: "Please enter a 6-digit OTP.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const { data, error } = await supabase.auth.verifyOtp({
        email,
        token: otp,
        type: 'email'
      });

      if (error) throw error;

      if (type === 'signup') {
        toast({
          title: "Email Verified!",
          description: "Your account has been successfully created.",
        });
      } else {
        toast({
          title: "Login Successful!",
          description: "Welcome back!",
        });
      }

      // Navigate to main app
      navigate('/');
    } catch (error: any) {
      toast({
        title: "Verification Failed",
        description: error.message || "Invalid OTP. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOtp = async () => {
    setIsResending(true);
    try {
      const { error } = await supabase.auth.resend({
        type: type === 'signup' ? 'signup' : 'magiclink',
        email
      });

      if (error) throw error;

      toast({
        title: "OTP Resent!",
        description: "A new verification code has been sent to your email.",
      });

      setCountdown(60);
    } catch (error: any) {
      toast({
        title: "Resend Failed",
        description: error.message || "Failed to resend OTP. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsResending(false);
    }
  };

  const handleOtpChange = (value: string) => {
    // Only allow digits and limit to 6 characters
    const digitsOnly = value.replace(/\D/g, '').slice(0, 6);
    setOtp(digitsOnly);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <div className="gradient-primary p-2 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  GuruMarg
                </span>
              </div>
              <h1 className="text-3xl font-bold mb-2">Verify Your Email</h1>
              <p className="text-muted-foreground">
                We've sent a 6-digit code to your email address
              </p>
            </div>

            <Card className="gradient-card border-0 shadow-elegant">
              <CardHeader>
                <CardTitle>Enter Verification Code</CardTitle>
                <CardDescription>
                  Check your email and enter the code below
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground mb-4">
                      <Mail className="h-4 w-4" />
                      <span>{email}</span>
                    </div>
                  </div>

                  <form onSubmit={handleVerifyOtp} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="otp">Verification Code</Label>
                      <Input
                        id="otp"
                        type="text"
                        placeholder="000000"
                        value={otp}
                        onChange={(e) => handleOtpChange(e.target.value)}
                        className="text-center text-2xl tracking-widest"
                        maxLength={6}
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full gradient-primary text-white border-0 shadow-elegant"
                      disabled={isLoading || otp.length !== 6}
                    >
                      {isLoading ? "Verifying..." : "Verify Email"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>

                  <div className="text-center space-y-4">
                    <div className="text-sm text-muted-foreground">
                      Didn't receive the code?{" "}
                      {countdown > 0 ? (
                        <span>Resend in {countdown}s</span>
                      ) : (
                        <button
                          onClick={handleResendOtp}
                          disabled={isResending}
                          className="text-primary hover:underline font-medium"
                        >
                          {isResending ? (
                            <>
                              <RefreshCw className="inline h-3 w-3 mr-1 animate-spin" />
                              Resending...
                            </>
                          ) : (
                            "Resend Code"
                          )}
                        </button>
                      )}
                    </div>

                    <Button
                      variant="ghost"
                      onClick={() => navigate(type === 'signup' ? '/signup' : '/login')}
                      className="w-full"
                    >
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Back to {type === 'signup' ? 'Signup' : 'Login'}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default VerifyOtp;
