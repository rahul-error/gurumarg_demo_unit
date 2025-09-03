import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowLeft, 
  TrendingUp, 
  DollarSign, 
  Users, 
  Briefcase,
  BookOpen,
  Award,
  CheckCircle,
  ExternalLink,
  MapPin,
  Clock,
  Star
} from "lucide-react";
import Navigation from "@/components/ui/navigation";

const CareerDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock data - in real app, this would come from API
  const career = {
    id: 1,
    title: "Software Engineer",
    category: "Technology",
    icon: "💻",
    rating: 4.7,
    description: "Software engineers design, develop, and maintain software applications and systems. They work with programming languages, frameworks, and tools to create solutions for various industries.",
    overview: "Software engineering is a rapidly growing field that combines technical skills with problem-solving abilities. Engineers work in teams to build applications, websites, and systems that power our digital world.",
    salary: {
      entry: "₹6L - ₹10L",
      mid: "₹12L - ₹20L",
      senior: "₹25L - ₹50L",
      average: "₹15L"
    },
    growth: "Very High",
    demand: "Very High",
    experience: "0-2 years (Entry Level)",
    education: "Bachelor's in Computer Science or related field",
    skills: {
      technical: ["Programming Languages", "Data Structures", "Algorithms", "Database Management", "Version Control"],
      soft: ["Problem Solving", "Teamwork", "Communication", "Time Management", "Adaptability"]
    },
    responsibilities: [
      "Design and develop software applications",
      "Write clean, maintainable code",
      "Collaborate with cross-functional teams",
      "Debug and fix software issues",
      "Participate in code reviews",
      "Stay updated with latest technologies"
    ],
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "Proficiency in at least one programming language",
      "Understanding of software development lifecycle",
      "Problem-solving and analytical skills",
      "Good communication skills"
    ],
    companies: [
      { name: "Google", location: "Bangalore, Mumbai", size: "10,000+", rating: 4.8 },
      { name: "Microsoft", location: "Hyderabad, Bangalore", size: "5,000+", rating: 4.7 },
      { name: "Amazon", location: "Bangalore, Chennai", size: "8,000+", rating: 4.6 },
      { name: "TCS", location: "Multiple Cities", size: "50,000+", rating: 4.2 }
    ],
    careerPath: [
      { level: "Junior Developer", experience: "0-2 years", salary: "₹6L - ₹10L" },
      { level: "Software Engineer", experience: "2-4 years", salary: "₹10L - ₹15L" },
      { level: "Senior Engineer", experience: "4-6 years", salary: "₹15L - ₹25L" },
      { level: "Tech Lead", experience: "6-8 years", salary: "₹25L - ₹40L" },
      { level: "Engineering Manager", experience: "8+ years", salary: "₹40L+" }
    ],
    courses: [
      { name: "Computer Science Engineering", duration: "4 years", colleges: ["IIT", "NIT", "IIIT"] },
      { name: "Information Technology", duration: "4 years", colleges: ["IIT", "NIT", "Private Colleges"] },
      { name: "Software Engineering", duration: "4 years", colleges: ["Private Universities"] }
    ],
    certifications: [
      "AWS Certified Developer",
      "Google Cloud Professional Developer",
      "Microsoft Azure Developer Associate",
      "Oracle Java SE Developer"
    ],
    jobMarket: {
      openings: "50,000+",
      growth: "22% (2020-2030)",
      competition: "High",
      remote: "Yes"
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Header */}
        <section className="py-8 border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-4 mb-6">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => navigate('/careers')}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Careers
              </Button>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-4xl">{career.icon}</div>
                  <div>
                    <h1 className="text-4xl font-bold">{career.title}</h1>
                    <div className="flex items-center space-x-2 mt-2">
                      <Badge variant="outline">{career.category}</Badge>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{career.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground mb-6">{career.description}</p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-3 rounded-lg bg-muted/50">
                    <DollarSign className="h-6 w-6 text-primary mx-auto mb-1" />
                    <p className="text-sm text-muted-foreground">Average Salary</p>
                    <p className="font-semibold">{career.salary.average}</p>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-muted/50">
                    <TrendingUp className="h-6 w-6 text-accent mx-auto mb-1" />
                    <p className="text-sm text-muted-foreground">Growth</p>
                    <p className="font-semibold">{career.growth}</p>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-muted/50">
                    <Users className="h-6 w-6 text-warning mx-auto mb-1" />
                    <p className="text-sm text-muted-foreground">Demand</p>
                    <p className="font-semibold">{career.demand}</p>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-muted/50">
                    <Clock className="h-6 w-6 text-success mx-auto mb-1" />
                    <p className="text-sm text-muted-foreground">Experience</p>
                    <p className="font-semibold text-xs">{career.experience}</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">Quick Stats</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Job Openings</span>
                        <span className="font-medium">{career.jobMarket.openings}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Growth Rate</span>
                        <span className="font-medium">{career.jobMarket.growth}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Remote Work</span>
                        <span className="font-medium">{career.jobMarket.remote}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col space-y-2 mt-6">
                      <Button className="gradient-primary text-white border-0 shadow-elegant">
                        Find Jobs
                      </Button>
                      <Button variant="outline">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Information */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="overview" className="space-y-8">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
                <TabsTrigger value="career-path">Career Path</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="companies">Companies</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Job Responsibilities</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {career.responsibilities.map((responsibility, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                            <span className="text-sm">{responsibility}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Requirements</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {career.requirements.map((requirement, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                            <span className="text-sm">{requirement}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Salary Progression</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="text-center p-4 rounded-lg bg-muted/50">
                        <p className="text-sm text-muted-foreground mb-1">Entry Level</p>
                        <p className="text-xl font-bold text-primary">{career.salary.entry}</p>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-muted/50">
                        <p className="text-sm text-muted-foreground mb-1">Mid Level</p>
                        <p className="text-xl font-bold text-accent">{career.salary.mid}</p>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-muted/50">
                        <p className="text-sm text-muted-foreground mb-1">Senior Level</p>
                        <p className="text-xl font-bold text-warning">{career.salary.senior}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="skills" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <BookOpen className="h-5 w-5 mr-2" />
                        Technical Skills
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {career.skills.technical.map((skill, index) => (
                          <Badge key={index} variant="secondary" className="mr-2 mb-2">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Users className="h-5 w-5 mr-2" />
                        Soft Skills
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {career.skills.soft.map((skill, index) => (
                          <Badge key={index} variant="outline" className="mr-2 mb-2">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Recommended Certifications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {career.certifications.map((cert, index) => (
                        <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50">
                          <Award className="h-5 w-5 text-primary" />
                          <span>{cert}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="career-path" className="space-y-6">
                <div className="space-y-4">
                  {career.careerPath.map((level, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                              {index + 1}
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold">{level.level}</h3>
                              <p className="text-sm text-muted-foreground">{level.experience}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold text-primary">{level.salary}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="education" className="space-y-6">
                <div className="grid gap-6">
                  {career.courses.map((course, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-xl font-semibold">{course.name}</h3>
                          <Badge variant="secondary">{course.duration}</Badge>
                        </div>
                        <div className="space-y-2">
                          <p className="text-sm text-muted-foreground">Available at:</p>
                          <div className="flex flex-wrap gap-2">
                            {course.colleges.map((college, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs">
                                {college}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="companies" className="space-y-6">
                <div className="grid gap-6">
                  {career.companies.map((company, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-xl font-semibold">{company.name}</h3>
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-medium">{company.rating}</span>
                          </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                          <div className="flex items-center space-x-2">
                            <MapPin className="h-4 w-4 text-muted-foreground" />
                            <span>{company.location}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Users className="h-4 w-4 text-muted-foreground" />
                            <span>{company.size} employees</span>
                          </div>
                        </div>
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

export default CareerDetails;
