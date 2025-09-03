import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Target, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-education.jpg";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Students learning with technology" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Target className="h-4 w-4 mr-2" />
                Empowering Educational Decisions
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Navigate Your
                <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Educational Journey
                </span>
                with Intelligence
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-2xl">
                From stream selection to career planning, GuruMarg provides personalized guidance, 
                smart assessments, and data-driven recommendations to help students make informed 
                educational decisions.
              </p>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="gradient-primary text-white border-0 shadow-elegant hover:shadow-lg transition-smooth group"
                onClick={() => navigate('/assessments')}
              >
                Start Your Assessment
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-white transition-smooth"
                onClick={() => navigate('/colleges')}
              >
                Explore Colleges
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Students Guided</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">500+</div>
                <div className="text-sm text-muted-foreground">Colleges Listed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-warning">95%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right column - Feature highlights */}
          <div className="space-y-6">
            <div className="gradient-card p-6 rounded-2xl shadow-card transition-smooth hover:shadow-elegant">
              <div className="flex items-start space-x-4">
                <div className="gradient-primary p-3 rounded-lg">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Smart Assessments</h3>
                  <p className="text-muted-foreground">
                    AI-powered tests to identify your strengths, interests, and ideal career paths.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-card p-6 rounded-2xl shadow-card transition-smooth hover:shadow-elegant">
              <div className="flex items-start space-x-4">
                <div className="bg-accent p-3 rounded-lg">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Career Compass</h3>
                  <p className="text-muted-foreground">
                    Personalized career recommendations based on your goals and market trends.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-card p-6 rounded-2xl shadow-card transition-smooth hover:shadow-elegant">
              <div className="flex items-start space-x-4">
                <div className="bg-warning p-3 rounded-lg">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">College Matching</h3>
                  <p className="text-muted-foreground">
                    Find the perfect college based on location, budget, and course preferences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;