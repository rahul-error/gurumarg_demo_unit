import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  User, 
  Settings, 
  BookOpen, 
  Award, 
  Target,
  TrendingUp,
  Calendar,
  MapPin,
  Mail,
  Phone,
  Edit,
  LogOut,
  CheckCircle,
  Clock,
  Star
} from "lucide-react";
import Navigation from "@/components/ui/navigation";

const Profile = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  // Mock user data - in real app, this would come from API
  const user = {
    name: "Rahul Sharma",
    email: "rahul.sharma@email.com",
    phone: "+91 98765 43210",
    class: "Class 12",
    stream: "Science (PCM)",
    location: "New Delhi, India",
    joinDate: "January 2024",
    avatar: "/api/placeholder/100/100",
    progress: {
      assessmentsCompleted: 3,
      totalAssessments: 5,
      profileCompletion: 85,
      goalsAchieved: 2,
      totalGoals: 4
    },
    assessments: [
      {
        id: 1,
        name: "Stream Selection Assessment",
        completed: true,
        score: 85,
        date: "2024-01-15",
        recommendation: "Science (PCM)"
      },
      {
        id: 2,
        name: "Career Compass Assessment",
        completed: true,
        score: 78,
        date: "2024-01-20",
        recommendation: "Engineering"
      },
      {
        id: 3,
        name: "Skill Gap Analysis",
        completed: true,
        score: 92,
        date: "2024-01-25",
        recommendation: "Strong in Mathematics"
      },
      {
        id: 4,
        name: "Learning Style Assessment",
        completed: false,
        score: null,
        date: null,
        recommendation: null
      },
      {
        id: 5,
        name: "Personality Assessment",
        completed: false,
        score: null,
        date: null,
        recommendation: null
      }
    ],
    goals: [
      {
        id: 1,
        title: "Complete all assessments",
        description: "Take all 5 available assessments",
        progress: 60,
        target: 100,
        deadline: "2024-03-01",
        completed: false
      },
      {
        id: 2,
        title: "Research 10 colleges",
        description: "Explore colleges matching my profile",
        progress: 100,
        target: 100,
        deadline: "2024-02-15",
        completed: true
      },
      {
        id: 3,
        title: "Apply to 5 colleges",
        description: "Submit applications to top choices",
        progress: 40,
        target: 100,
        deadline: "2024-04-30",
        completed: false
      },
      {
        id: 4,
        title: "Improve weak areas",
        description: "Focus on identified skill gaps",
        progress: 25,
        target: 100,
        deadline: "2024-05-15",
        completed: false
      }
    ],
    achievements: [
      {
        id: 1,
        title: "Assessment Master",
        description: "Completed 3 assessments",
        icon: "🏆",
        date: "2024-01-25"
      },
      {
        id: 2,
        title: "Goal Achiever",
        description: "Completed first goal",
        icon: "🎯",
        date: "2024-02-15"
      },
      {
        id: 3,
        title: "High Scorer",
        description: "Scored 90+ in an assessment",
        icon: "⭐",
        date: "2024-01-25"
      }
    ],
    recommendations: {
      stream: "Science (PCM)",
      careers: ["Software Engineer", "Data Scientist", "Mechanical Engineer"],
      colleges: ["IIT Delhi", "IIT Bombay", "NIT Delhi"],
      skills: ["Programming", "Mathematics", "Problem Solving"]
    }
  };

  const handleLogout = () => {
    // Handle logout logic
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Profile Header */}
        <section className="py-8 border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex items-center space-x-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white text-2xl font-bold">
                  {user.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h1 className="text-3xl font-bold">{user.name}</h1>
                  <div className="flex flex-wrap items-center gap-4 mt-2 text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Mail className="h-4 w-4" />
                      <span>{user.email}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{user.location}</span>
                    </div>
                    <Badge variant="outline">{user.class} - {user.stream}</Badge>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-3">
                <Button variant="outline">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>
                <Button variant="outline" onClick={handleLogout}>
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Progress Overview */}
        <section className="py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-2xl font-bold">{user.progress.assessmentsCompleted}/{user.progress.totalAssessments}</p>
                  <p className="text-sm text-muted-foreground">Assessments</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3">
                    <Target className="h-6 w-6 text-accent" />
                  </div>
                  <p className="text-2xl font-bold">{user.progress.goalsAchieved}/{user.progress.totalGoals}</p>
                  <p className="text-sm text-muted-foreground">Goals</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-warning/10 flex items-center justify-center mx-auto mb-3">
                    <TrendingUp className="h-6 w-6 text-warning" />
                  </div>
                  <p className="text-2xl font-bold">{user.progress.profileCompletion}%</p>
                  <p className="text-sm text-muted-foreground">Profile Complete</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-3">
                    <Award className="h-6 w-6 text-success" />
                  </div>
                  <p className="text-2xl font-bold">{user.achievements.length}</p>
                  <p className="text-sm text-muted-foreground">Achievements</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Detailed Information */}
        <section className="py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="assessments">Assessments</TabsTrigger>
                <TabsTrigger value="goals">Goals</TabsTrigger>
                <TabsTrigger value="achievements">Achievements</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Personal Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Name</span>
                        <span className="font-medium">{user.name}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Email</span>
                        <span className="font-medium">{user.email}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Phone</span>
                        <span className="font-medium">{user.phone}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Class & Stream</span>
                        <span className="font-medium">{user.class} - {user.stream}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Member Since</span>
                        <span className="font-medium">{user.joinDate}</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Recommendations</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <p className="text-sm text-muted-foreground mb-2">Recommended Stream</p>
                        <Badge className="bg-primary text-white">{user.recommendations.stream}</Badge>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-2">Top Careers</p>
                        <div className="flex flex-wrap gap-2">
                          {user.recommendations.careers.map((career, index) => (
                            <Badge key={index} variant="outline">{career}</Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-2">Key Skills</p>
                        <div className="flex flex-wrap gap-2">
                          {user.recommendations.skills.map((skill, index) => (
                            <Badge key={index} variant="secondary">{skill}</Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="assessments" className="space-y-6">
                <div className="grid gap-6">
                  {user.assessments.map((assessment) => (
                    <Card key={assessment.id}>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-4">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                              assessment.completed ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'
                            }`}>
                              {assessment.completed ? (
                                <CheckCircle className="h-5 w-5" />
                              ) : (
                                <Clock className="h-5 w-5" />
                              )}
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold">{assessment.name}</h3>
                              <p className="text-sm text-muted-foreground">
                                {assessment.completed ? `Completed on ${assessment.date}` : 'Not completed'}
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            {assessment.completed ? (
                              <div>
                                <p className="text-lg font-bold text-primary">{assessment.score}%</p>
                                <Badge variant="secondary">{assessment.recommendation}</Badge>
                              </div>
                            ) : (
                              <Button 
                                size="sm"
                                className="gradient-primary text-white border-0 shadow-elegant"
                                onClick={() => navigate('/assessments')}
                              >
                                Take Assessment
                              </Button>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="goals" className="space-y-6">
                <div className="grid gap-6">
                  {user.goals.map((goal) => (
                    <Card key={goal.id}>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h3 className="text-lg font-semibold">{goal.title}</h3>
                            <p className="text-sm text-muted-foreground">{goal.description}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-muted-foreground">Deadline: {goal.deadline}</p>
                            {goal.completed && (
                              <Badge className="bg-green-100 text-green-800">Completed</Badge>
                            )}
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Progress</span>
                            <span>{goal.progress}%</span>
                          </div>
                          <Progress value={goal.progress} className="h-2" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="achievements" className="space-y-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {user.achievements.map((achievement) => (
                    <Card key={achievement.id}>
                      <CardContent className="p-6 text-center">
                        <div className="text-4xl mb-3">{achievement.icon}</div>
                        <h3 className="text-lg font-semibold mb-2">{achievement.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{achievement.description}</p>
                        <p className="text-xs text-muted-foreground">Earned on {achievement.date}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Profile;
