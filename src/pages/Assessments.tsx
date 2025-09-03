import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Target, 
  BookOpen, 
  Clock, 
  Users, 
  Star,
  ArrowRight,
  Play
} from "lucide-react";
import Navigation from "@/components/ui/navigation";

const Assessments = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const assessments = [
    {
      id: 1,
      title: "Class 10 Stream Selector",
      description: "Discover the perfect stream for your Class 11 based on your interests, strengths, and career goals.",
      category: "stream",
      duration: "15-20 min",
      questions: 25,
      difficulty: "Easy",
      rating: 4.8,
      participants: 15000,
      icon: BookOpen,
      color: "primary"
    },
    {
      id: 2,
      title: "Career Compass Assessment",
      description: "Comprehensive career assessment to identify your ideal career path and growth opportunities.",
      category: "career",
      duration: "25-30 min",
      questions: 40,
      difficulty: "Medium",
      rating: 4.9,
      participants: 12000,
      icon: Target,
      color: "accent"
    },
    {
      id: 3,
      title: "Skill Gap Analysis",
      description: "Evaluate your current skills and identify areas for improvement to achieve your career goals.",
      category: "skills",
      duration: "20-25 min",
      questions: 35,
      difficulty: "Medium",
      rating: 4.7,
      participants: 8500,
      icon: Brain,
      color: "warning"
    },
    {
      id: 4,
      title: "Learning Style Assessment",
      description: "Understand your preferred learning methods to optimize your study approach and academic performance.",
      category: "learning",
      duration: "10-15 min",
      questions: 20,
      difficulty: "Easy",
      rating: 4.6,
      participants: 22000,
      icon: BookOpen,
      color: "success"
    }
  ];

  const categories = [
    { id: "all", name: "All Assessments", count: assessments.length },
    { id: "stream", name: "Stream Selection", count: assessments.filter(a => a.category === "stream").length },
    { id: "career", name: "Career Guidance", count: assessments.filter(a => a.category === "career").length },
    { id: "skills", name: "Skills Analysis", count: assessments.filter(a => a.category === "skills").length },
    { id: "learning", name: "Learning Style", count: assessments.filter(a => a.category === "learning").length }
  ];

  const filteredAssessments = selectedCategory === "all" 
    ? assessments 
    : assessments.filter(a => a.category === selectedCategory);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "bg-green-100 text-green-800";
      case "Medium": return "bg-yellow-100 text-yellow-800";
      case "Hard": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-primary/10 via-accent/10 to-warning/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Smart Assessments for
                <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Educational Success
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Discover your strengths, interests, and ideal career path through our comprehensive 
                AI-powered assessment suite.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4" />
                  <span>50K+ Students Assessed</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4" />
                  <span>4.8/5 Average Rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>15-30 Min Duration</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className="transition-smooth"
                >
                  {category.name}
                  <Badge variant="secondary" className="ml-2">
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Assessments Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredAssessments.map((assessment) => (
                <Card key={assessment.id} className="group gradient-card border-0 shadow-card hover:shadow-elegant transition-smooth">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-xl bg-${assessment.color} text-white`}>
                        <assessment.icon className="h-6 w-6" />
                      </div>
                      <Badge className={getDifficultyColor(assessment.difficulty)}>
                        {assessment.difficulty}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl mb-2">{assessment.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {assessment.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{assessment.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <BookOpen className="h-4 w-4" />
                        <span>{assessment.questions} questions</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>{assessment.participants.toLocaleString()}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{assessment.rating}</span>
                      </div>
                      <Button 
                        className="gradient-primary text-white border-0 shadow-elegant group-hover:shadow-lg transition-smooth"
                        onClick={() => navigate(`/stream-selector`)}
                      >
                        <Play className="h-4 w-4 mr-2" />
                        Start Assessment
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Discover Your Path?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Take our comprehensive assessments and get personalized recommendations 
              for your educational and career journey.
            </p>
            <Button 
              size="lg" 
              className="gradient-primary text-white border-0 shadow-elegant"
              onClick={() => navigate('/stream-selector')}
            >
              Start Your Assessment Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Assessments;
