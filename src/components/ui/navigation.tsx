import { Button } from "@/components/ui/button";
import { GraduationCap, Menu, X } from "lucide-react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => navigate('/')}
          >
            <div className="gradient-primary p-2 rounded-lg">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              GuruMarg
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleNavigation('/assessments')}
              className={`transition-smooth ${isActive('/assessments') ? 'text-foreground font-medium' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Assessments
            </button>
            <button 
              onClick={() => handleNavigation('/colleges')}
              className={`transition-smooth ${isActive('/colleges') ? 'text-foreground font-medium' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Colleges
            </button>
            <button 
              onClick={() => handleNavigation('/careers')}
              className={`transition-smooth ${isActive('/careers') ? 'text-foreground font-medium' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Careers
            </button>
            <button 
              onClick={() => handleNavigation('/scholarships')}
              className={`transition-smooth ${isActive('/scholarships') ? 'text-foreground font-medium' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Scholarships
            </button>
            <button 
              onClick={() => handleNavigation('/settings')}
              className={`transition-smooth ${isActive('/settings') ? 'text-foreground font-medium' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Settings
            </button>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="ghost"
              onClick={() => handleNavigation('/login')}
            >
              Sign In
            </Button>
            <Button 
              className="gradient-primary text-white border-0 shadow-elegant"
              onClick={() => handleNavigation('/signup')}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => handleNavigation('/assessments')}
                className={`text-left transition-smooth ${isActive('/assessments') ? 'text-foreground font-medium' : 'text-muted-foreground hover:text-foreground'}`}
              >
                Assessments
              </button>
              <button 
                onClick={() => handleNavigation('/colleges')}
                className={`text-left transition-smooth ${isActive('/colleges') ? 'text-foreground font-medium' : 'text-muted-foreground hover:text-foreground'}`}
              >
                Colleges
              </button>
              <button 
                onClick={() => handleNavigation('/careers')}
                className={`text-left transition-smooth ${isActive('/careers') ? 'text-foreground font-medium' : 'text-muted-foreground hover:text-foreground'}`}
              >
                Careers
              </button>
              <button 
                onClick={() => handleNavigation('/scholarships')}
                className={`text-left transition-smooth ${isActive('/scholarships') ? 'text-foreground font-medium' : 'text-muted-foreground hover:text-foreground'}`}
              >
                Scholarships
              </button>
              <button 
                onClick={() => handleNavigation('/settings')}
                className={`text-left transition-smooth ${isActive('/settings') ? 'text-foreground font-medium' : 'text-muted-foreground hover:text-foreground'}`}
              >
                Settings
              </button>
              <div className="flex flex-col space-y-2 pt-4">
                <Button 
                  variant="ghost"
                  onClick={() => handleNavigation('/login')}
                >
                  Sign In
                </Button>
                <Button 
                  className="gradient-primary text-white border-0 shadow-elegant"
                  onClick={() => handleNavigation('/signup')}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;