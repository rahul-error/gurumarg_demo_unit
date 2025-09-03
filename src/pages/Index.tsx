import Navigation from "@/components/ui/navigation";
import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import CTASection from "@/components/cta-section";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <FeaturesSection />
        <CTASection />
      </main>
      
      {/* Footer */}
      <footer className="bg-card py-12 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="gradient-primary p-2 rounded-lg">
                <span className="text-white font-bold text-lg">GM</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                GuruMarg
              </span>
            </div>
            <p className="text-muted-foreground mb-4">
              Empowering educational decisions with intelligence
            </p>
            <div className="flex justify-center space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">Privacy</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">Terms</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">Support</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
