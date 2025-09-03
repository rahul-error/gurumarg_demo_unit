import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { 
  Brain, 
  Compass, 
  University, 
  Award, 
  Calendar, 
  TrendingUp,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const FeaturesSection = () => {
  const navigate = useNavigate();
  
  const features = [
    {
      icon: Brain,
      title: "Smart Assessments",
      description: "AI-powered tests to identify your strengths, interests, and ideal career paths.",
      features: ["Class 10 Stream Selector", "Class 12 Career Compass", "Skill Gap Analysis"],
      color: "primary"
    },
    {
      icon: University,
      title: "College Match",
      description: "Find the perfect college based on your preferences, budget, and location.",
      features: ["Advanced Search Filters", "Ranking Analysis", "Alumni Reviews"],
      color: "accent"
    },
    {
      icon: Compass,
      title: "Career Compass",
      description: "Personalized career recommendations based on market trends and your goals.",
      features: ["Future-Ready Careers", "Salary Insights", "Growth Projections"],
      color: "warning"
    },
    {
      icon: Award,
      title: "Scholarship Navigator",
      description: "Discover scholarships and financial aid opportunities tailored to your profile.",
      features: ["Eligibility Matching", "Application Tracking", "Deadline Reminders"],
      color: "success"
    }
  ];

  return (
    <section id="features" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <TrendingUp className="h-4 w-4 mr-2" />
            Comprehensive Educational Platform
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need for Your
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Educational Success
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From assessment to admission, GuruMarg provides comprehensive tools and insights 
            to guide your educational journey every step of the way.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="group gradient-card border-0 shadow-card hover:shadow-elegant transition-smooth">
              <CardHeader className="text-center pb-4">
                <div className={`mx-auto mb-4 p-3 rounded-xl bg-${feature.color} text-white w-fit`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                <CardDescription className="text-sm">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {feature.features.map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* How it Works */}
        <div className="bg-card rounded-3xl p-8 md:p-12 shadow-card">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">How GuruMarg Works</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our intelligent platform guides you through a structured process to make informed educational decisions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Take Assessment",
                description: "Complete our comprehensive assessment to understand your strengths, interests, and preferences."
              },
              {
                step: "02", 
                title: "Get Recommendations",
                description: "Receive personalized recommendations for streams, careers, and colleges based on your profile."
              },
              {
                step: "03",
                title: "Make Decisions",
                description: "Use our insights and tools to make confident decisions about your educational path."
              }
            ].map((step, index) => (
              <div key={index} className="relative text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-primary text-white text-xl font-bold mb-4">
                  {step.step}
                </div>
                
                <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
                <p className="text-muted-foreground">{step.description}</p>
                
                {index < 2 && (
                  <div className="hidden md:block absolute top-8 left-full w-full">
                    <ArrowRight className="h-6 w-6 text-muted-foreground mx-auto" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="gradient-primary text-white border-0 shadow-elegant"
              onClick={() => navigate('/assessments')}
            >
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;