import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { 
  ArrowLeft, 
  ArrowRight, 
  Briefcase, 
  Clock, 
  CheckCircle,
  Brain,
  Target,
  TrendingUp,
  DollarSign
} from "lucide-react";
import Navigation from "@/components/ui/navigation";

const CareerCompass = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const questions = [
    {
      id: 1,
      question: "What type of work environment do you prefer?",
      options: [
        { value: "office", label: "Traditional office setting with structured hours" },
        { value: "remote", label: "Remote work with flexible schedule" },
        { value: "field", label: "Field work and travel opportunities" },
        { value: "creative", label: "Creative and collaborative spaces" }
      ]
    },
    {
      id: 2,
      question: "What motivates you most in a career?",
      options: [
        { value: "money", label: "High salary and financial security" },
        { value: "impact", label: "Making a positive impact on society" },
        { value: "growth", label: "Continuous learning and personal growth" },
        { value: "recognition", label: "Recognition and leadership opportunities" }
      ]
    },
    {
      id: 3,
      question: "How do you prefer to work with others?",
      options: [
        { value: "team", label: "As part of a collaborative team" },
        { value: "independent", label: "Independently with minimal supervision" },
        { value: "lead", label: "Leading and managing others" },
        { value: "client", label: "Working directly with clients/customers" }
      ]
    },
    {
      id: 4,
      question: "What type of challenges do you enjoy?",
      options: [
        { value: "technical", label: "Technical and analytical problems" },
        { value: "creative", label: "Creative and innovative challenges" },
        { value: "social", label: "Social and interpersonal challenges" },
        { value: "strategic", label: "Strategic and planning challenges" }
      ]
    },
    {
      id: 5,
      question: "What is your ideal work-life balance?",
      options: [
        { value: "balanced", label: "Stable 9-5 with weekends off" },
        { value: "flexible", label: "Flexible hours and remote options" },
        { value: "intense", label: "Intense periods with longer breaks" },
        { value: "variable", label: "Variable schedule based on projects" }
      ]
    },
    {
      id: 6,
      question: "What skills do you want to develop most?",
      options: [
        { value: "technical", label: "Technical and specialized skills" },
        { value: "leadership", label: "Leadership and management skills" },
        { value: "communication", label: "Communication and presentation skills" },
        { value: "creative", label: "Creative and artistic skills" }
      ]
    },
    {
      id: 7,
      question: "How important is job security to you?",
      options: [
        { value: "very_important", label: "Very important - prefer stable, long-term positions" },
        { value: "important", label: "Important - but open to calculated risks" },
        { value: "moderate", label: "Moderately important - value growth over security" },
        { value: "low", label: "Not very important - prefer dynamic, changing roles" }
      ]
    },
    {
      id: 8,
      question: "What type of industry interests you most?",
      options: [
        { value: "technology", label: "Technology and innovation" },
        { value: "healthcare", label: "Healthcare and wellness" },
        { value: "finance", label: "Finance and business" },
        { value: "education", label: "Education and social impact" }
      ]
    },
    {
      id: 9,
      question: "How do you handle stress and pressure?",
      options: [
        { value: "systematic", label: "Break down problems systematically" },
        { value: "collaborative", label: "Seek support from colleagues and mentors" },
        { value: "creative", label: "Use creativity and innovation to solve issues" },
        { value: "resilient", label: "Stay focused and push through challenges" }
      ]
    },
    {
      id: 10,
      question: "What is your long-term career vision?",
      options: [
        { value: "expert", label: "Become an expert in a specific field" },
        { value: "entrepreneur", label: "Start my own business or venture" },
        { value: "leader", label: "Rise to senior leadership positions" },
        { value: "mentor", label: "Mentor and develop others in my field" }
      ]
    }
  ];

  const careerRecommendations = {
    technology: {
      careers: ["Software Engineer", "Data Scientist", "Product Manager", "UX Designer"],
      description: "You're drawn to innovation and problem-solving in the tech world",
      skills: ["Programming", "Analytics", "Problem Solving", "Innovation"],
      salary: "₹6L - ₹25L",
      growth: "Very High",
      color: "primary"
    },
    healthcare: {
      careers: ["Doctor", "Nurse", "Medical Researcher", "Healthcare Administrator"],
      description: "You want to make a meaningful impact on people's lives",
      skills: ["Empathy", "Medical Knowledge", "Communication", "Critical Thinking"],
      salary: "₹5L - ₹50L",
      growth: "High",
      color: "accent"
    },
    business: {
      careers: ["Investment Banker", "Management Consultant", "Marketing Manager", "Entrepreneur"],
      description: "You're driven by business success and strategic thinking",
      skills: ["Leadership", "Analytics", "Negotiation", "Strategic Planning"],
      salary: "₹8L - ₹40L",
      growth: "High",
      color: "warning"
    },
    education: {
      careers: ["Teacher", "Professor", "Educational Consultant", "Training Manager"],
      description: "You're passionate about learning and helping others grow",
      skills: ["Communication", "Patience", "Subject Expertise", "Mentoring"],
      salary: "₹3L - ₹15L",
      growth: "Stable",
      color: "success"
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswerSelect = (value: string) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion]: value
    }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const calculateRecommendation = () => {
    const answerCounts = {
      technology: 0,
      healthcare: 0,
      business: 0,
      education: 0
    };

    Object.values(answers).forEach(answer => {
      if (['remote', 'growth', 'technical', 'flexible', 'technical', 'moderate', 'technology', 'systematic', 'expert'].includes(answer)) {
        answerCounts.technology++;
      } else if (['impact', 'client', 'social', 'balanced', 'communication', 'very_important', 'healthcare', 'collaborative', 'mentor'].includes(answer)) {
        answerCounts.healthcare++;
      } else if (['money', 'lead', 'strategic', 'intense', 'leadership', 'important', 'finance', 'resilient', 'entrepreneur'].includes(answer)) {
        answerCounts.business++;
      } else if (['creative', 'recognition', 'independent', 'creative', 'variable', 'creative', 'low', 'education', 'creative', 'leader'].includes(answer)) {
        answerCounts.education++;
      }
    });

    return Object.keys(answerCounts).reduce((a, b) => answerCounts[a] > answerCounts[b] ? a : b);
  };

  if (isCompleted) {
    const recommendation = calculateRecommendation();
    const careerData = careerRecommendations[recommendation as keyof typeof careerRecommendations];

    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main className="pt-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full gradient-primary text-white text-2xl mb-6">
                  <CheckCircle className="h-10 w-10" />
                </div>
                <h1 className="text-4xl font-bold mb-4">Career Assessment Complete!</h1>
                <p className="text-xl text-muted-foreground">
                  Based on your responses, here are your personalized career recommendations.
                </p>
              </div>

              <Card className="gradient-card border-0 shadow-elegant mb-8">
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl mb-4">Your Career Path</CardTitle>
                  <div className={`inline-flex items-center px-6 py-3 rounded-full bg-${careerData.color} text-white text-xl font-bold mb-4`}>
                    {careerData.description}
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4 flex items-center">
                        <Briefcase className="h-5 w-5 mr-2" />
                        Recommended Careers
                      </h3>
                      <div className="space-y-2">
                        {careerData.careers.map((career, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>{career}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-4 flex items-center">
                        <Target className="h-5 w-5 mr-2" />
                        Key Skills to Develop
                      </h3>
                      <div className="space-y-2">
                        {careerData.skills.map((skill, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>{skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="flex items-center space-x-4 p-4 rounded-lg bg-muted/50">
                      <DollarSign className="h-8 w-8 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Expected Salary Range</p>
                        <p className="text-lg font-semibold">{careerData.salary}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 p-4 rounded-lg bg-muted/50">
                      <TrendingUp className="h-8 w-8 text-accent" />
                      <div>
                        <p className="text-sm text-muted-foreground">Growth Potential</p>
                        <p className="text-lg font-semibold">{careerData.growth}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => {
                    setCurrentQuestion(0);
                    setAnswers({});
                    setIsCompleted(false);
                  }}
                >
                  Retake Assessment
                </Button>
                <Button 
                  size="lg" 
                  className="gradient-primary text-white border-0 shadow-elegant"
                  onClick={() => navigate('/careers')}
                >
                  Explore Career Options
                </Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Career Compass Assessment
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Discover your ideal career path based on your preferences, values, and goals.
              </p>
              
              <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>15-20 minutes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Brain className="h-4 w-4" />
                  <span>{questions.length} questions</span>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between text-sm text-muted-foreground mb-2">
                <span>Question {currentQuestion + 1} of {questions.length}</span>
                <span>{Math.round(progress)}% Complete</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            {/* Question Card */}
            <Card className="gradient-card border-0 shadow-elegant mb-8">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl">
                  {currentQ.question}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <RadioGroup
                  value={answers[currentQuestion] || ""}
                  onValueChange={handleAnswerSelect}
                  className="space-y-4"
                >
                  {currentQ.options.map((option) => (
                    <div key={option.value} className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:bg-muted/50 transition-smooth">
                      <RadioGroupItem value={option.value} id={option.value} />
                      <Label htmlFor={option.value} className="flex-1 cursor-pointer">
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </CardContent>
            </Card>

            {/* Navigation */}
            <div className="flex justify-between">
              <Button 
                variant="outline" 
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              
              <Button 
                className="gradient-primary text-white border-0 shadow-elegant"
                onClick={handleNext}
                disabled={!answers[currentQuestion]}
              >
                {currentQuestion === questions.length - 1 ? "Complete" : "Next"}
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CareerCompass;
