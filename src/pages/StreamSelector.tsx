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
  BookOpen, 
  Clock, 
  CheckCircle,
  Brain,
  Target
} from "lucide-react";
import Navigation from "@/components/ui/navigation";

const StreamSelector = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const questions = [
    {
      id: 1,
      question: "What subjects do you enjoy studying the most?",
      options: [
        { value: "science", label: "Mathematics, Physics, Chemistry" },
        { value: "commerce", label: "Economics, Business Studies, Accountancy" },
        { value: "arts", label: "History, Literature, Political Science" },
        { value: "mixed", label: "A combination of different subjects" }
      ]
    },
    {
      id: 2,
      question: "How do you prefer to learn new concepts?",
      options: [
        { value: "practical", label: "Through experiments and hands-on activities" },
        { value: "theoretical", label: "Through reading and theoretical understanding" },
        { value: "visual", label: "Through diagrams, charts, and visual aids" },
        { value: "discussion", label: "Through group discussions and debates" }
      ]
    },
    {
      id: 3,
      question: "What type of problems do you enjoy solving?",
      options: [
        { value: "mathematical", label: "Mathematical equations and calculations" },
        { value: "analytical", label: "Logical reasoning and analysis" },
        { value: "creative", label: "Creative writing and artistic problems" },
        { value: "social", label: "Social issues and human behavior" }
      ]
    },
    {
      id: 4,
      question: "What are your career aspirations?",
      options: [
        { value: "engineering", label: "Engineering and Technology" },
        { value: "medicine", label: "Medicine and Healthcare" },
        { value: "business", label: "Business and Management" },
        { value: "arts", label: "Arts, Literature, or Social Sciences" }
      ]
    },
    {
      id: 5,
      question: "How do you handle challenges?",
      options: [
        { value: "systematic", label: "Break them down into smaller parts" },
        { value: "intuitive", label: "Trust my instincts and creativity" },
        { value: "collaborative", label: "Seek help and work with others" },
        { value: "persistent", label: "Keep trying until I find a solution" }
      ]
    },
    {
      id: 6,
      question: "What extracurricular activities interest you?",
      options: [
        { value: "science_club", label: "Science clubs and competitions" },
        { value: "debate", label: "Debate and public speaking" },
        { value: "arts", label: "Music, drama, or visual arts" },
        { value: "sports", label: "Sports and physical activities" }
      ]
    },
    {
      id: 7,
      question: "How do you prefer to spend your free time?",
      options: [
        { value: "reading", label: "Reading books and articles" },
        { value: "experimenting", label: "Building or experimenting with things" },
        { value: "socializing", label: "Spending time with friends and family" },
        { value: "creating", label: "Creating art, music, or writing" }
      ]
    },
    {
      id: 8,
      question: "What motivates you to study?",
      options: [
        { value: "curiosity", label: "Curiosity and desire to understand" },
        { value: "achievement", label: "Achievement and recognition" },
        { value: "helping", label: "Helping others and making a difference" },
        { value: "creativity", label: "Expressing creativity and innovation" }
      ]
    }
  ];

  const streamRecommendations = {
    science: {
      stream: "Science (PCM/PCB)",
      description: "Perfect for students interested in engineering, medicine, or research",
      careers: ["Engineer", "Doctor", "Scientist", "Researcher"],
      subjects: ["Physics", "Chemistry", "Mathematics/Biology", "English"],
      color: "primary"
    },
    commerce: {
      stream: "Commerce",
      description: "Ideal for students interested in business, finance, and economics",
      careers: ["CA", "MBA", "Banking", "Entrepreneur"],
      subjects: ["Accountancy", "Business Studies", "Economics", "Mathematics"],
      color: "accent"
    },
    arts: {
      stream: "Arts/Humanities",
      description: "Great for students interested in social sciences, literature, and creative fields",
      careers: ["Journalist", "Lawyer", "Teacher", "Writer"],
      subjects: ["History", "Political Science", "Literature", "Psychology"],
      color: "warning"
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
      science: 0,
      commerce: 0,
      arts: 0
    };

    Object.values(answers).forEach(answer => {
      if (['science', 'practical', 'mathematical', 'engineering', 'systematic', 'science_club', 'experimenting', 'curiosity'].includes(answer)) {
        answerCounts.science++;
      } else if (['commerce', 'theoretical', 'analytical', 'business', 'collaborative', 'debate', 'reading', 'achievement'].includes(answer)) {
        answerCounts.commerce++;
      } else if (['arts', 'visual', 'creative', 'social', 'intuitive', 'arts', 'socializing', 'creating', 'helping', 'creativity'].includes(answer)) {
        answerCounts.arts++;
      }
    });

    return Object.keys(answerCounts).reduce((a, b) => answerCounts[a] > answerCounts[b] ? a : b);
  };

  if (isCompleted) {
    const recommendation = calculateRecommendation();
    const streamData = streamRecommendations[recommendation as keyof typeof streamRecommendations];

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
                <h1 className="text-4xl font-bold mb-4">Assessment Complete!</h1>
                <p className="text-xl text-muted-foreground">
                  Based on your responses, here's your personalized stream recommendation.
                </p>
              </div>

              <Card className="gradient-card border-0 shadow-elegant mb-8">
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl mb-4">Recommended Stream</CardTitle>
                  <div className={`inline-flex items-center px-6 py-3 rounded-full bg-${streamData.color} text-white text-xl font-bold mb-4`}>
                    {streamData.stream}
                  </div>
                  <CardDescription className="text-lg">
                    {streamData.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4 flex items-center">
                        <Target className="h-5 w-5 mr-2" />
                        Career Opportunities
                      </h3>
                      <div className="space-y-2">
                        {streamData.careers.map((career, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>{career}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-4 flex items-center">
                        <BookOpen className="h-5 w-5 mr-2" />
                        Core Subjects
                      </h3>
                      <div className="space-y-2">
                        {streamData.subjects.map((subject, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>{subject}</span>
                          </div>
                        ))}
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
                  onClick={() => navigate('/colleges')}
                >
                  Explore Colleges
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
                Stream Selection Assessment
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Help us understand your interests and preferences to recommend the perfect stream for you.
              </p>
              
              <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>10-15 minutes</span>
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

export default StreamSelector;
