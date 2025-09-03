import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Star, Users, Trophy } from "lucide-react";

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero opacity-95" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center text-white">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Shape Your Future?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Join thousands of students who have discovered their ideal career path 
              with GuruMarg's intelligent guidance system.
            </p>
          </div>

          {/* Social proof */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12">
            <div className="flex items-center space-x-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-white/20 border-2 border-white" />
                ))}
              </div>
              <div className="ml-4">
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-white/80">4.9/5 from 10,000+ students</p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5" />
                <span className="text-lg font-semibold">10K+ Guided</span>
              </div>
              <div className="flex items-center space-x-2">
                <Trophy className="h-5 w-5" />
                <span className="text-lg font-semibold">95% Success</span>
              </div>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 shadow-elegant border-0 px-8 py-6 text-lg font-semibold"
              onClick={() => navigate('/signup')}
            >
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary px-8 py-6 text-lg font-semibold transition-smooth"
              onClick={() => navigate('/assessments')}
            >
              Start Assessment
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-white/80 mb-4">Trusted by students from</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
              {["CBSE", "ICSE", "State Boards", "International"].map((board) => (
                <div key={board} className="px-4 py-2 rounded-lg bg-white/10 text-sm font-medium">
                  {board}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;