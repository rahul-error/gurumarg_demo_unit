import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowLeft, 
  MapPin, 
  Star, 
  Users, 
  Calendar,
  DollarSign,
  Phone,
  Mail,
  Globe,
  BookOpen,
  Award,
  TrendingUp,
  CheckCircle,
  ExternalLink
} from "lucide-react";
import Navigation from "@/components/ui/navigation";

const CollegeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock data - in real app, this would come from API
  const college = {
    id: 1,
    name: "Indian Institute of Technology Delhi",
    location: "New Delhi, India",
    type: "Government",
    established: 1961,
    rating: 4.8,
    students: 8500,
    faculty: 450,
    fees: {
      tuition: "₹2.5L - ₹4L",
      hostel: "₹1L - ₹1.5L",
      total: "₹3.5L - ₹5.5L"
    },
    description: "IIT Delhi is one of India's premier engineering institutes, known for its excellence in technology and innovation. The institute offers world-class education and research opportunities.",
    image: "/api/placeholder/800/400",
    website: "https://www.iitd.ac.in",
    email: "info@iitd.ac.in",
    phone: "+91-11-2659-7135",
    address: "Hauz Khas, New Delhi - 110016",
    courses: [
      { name: "Computer Science Engineering", duration: "4 years", seats: 120, cutoff: "98.5%" },
      { name: "Mechanical Engineering", duration: "4 years", seats: 150, cutoff: "97.2%" },
      { name: "Electrical Engineering", duration: "4 years", seats: 100, cutoff: "97.8%" },
      { name: "Civil Engineering", duration: "4 years", seats: 80, cutoff: "96.5%" }
    ],
    facilities: [
      "24/7 Library with 2M+ books",
      "Modern Computer Labs",
      "Sports Complex",
      "Hostel Accommodation",
      "Medical Center",
      "Cafeteria & Food Courts",
      "WiFi Campus",
      "Research Labs"
    ],
    placement: {
      average: "₹18L",
      highest: "₹1.2Cr",
      companies: ["Google", "Microsoft", "Amazon", "Goldman Sachs", "McKinsey"],
      percentage: "100%"
    },
    rankings: [
      { organization: "NIRF", rank: 1, year: 2023 },
      { organization: "QS World", rank: 185, year: 2023 },
      { organization: "Times Higher Education", rank: 201-250, year: 2023 }
    ],
    admission: {
      process: "JEE Advanced",
      requirements: ["Class 12 with 75%+", "JEE Advanced qualified", "Age 17-25"],
      documents: ["JEE Score Card", "Class 12 Marksheet", "Identity Proof", "Passport Photos"]
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
                onClick={() => navigate('/colleges')}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Colleges
              </Button>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h1 className="text-4xl font-bold mb-4">{college.name}</h1>
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>{college.location}</span>
                  </div>
                  <Badge variant="outline">{college.type}</Badge>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{college.rating}</span>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground">{college.description}</p>
              </div>
              
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Established</span>
                        <span className="font-medium">{college.established}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Students</span>
                        <span className="font-medium">{college.students.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Faculty</span>
                        <span className="font-medium">{college.faculty}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Total Fees</span>
                        <span className="font-medium text-primary">{college.fees.total}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col space-y-2 mt-6">
                      <Button className="gradient-primary text-white border-0 shadow-elegant">
                        Apply Now
                      </Button>
                      <Button variant="outline">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Visit Website
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
                <TabsTrigger value="courses">Courses</TabsTrigger>
                <TabsTrigger value="admission">Admission</TabsTrigger>
                <TabsTrigger value="placement">Placement</TabsTrigger>
                <TabsTrigger value="facilities">Facilities</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Award className="h-5 w-5 mr-2" />
                        Rankings & Recognition
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {college.rankings.map((ranking, index) => (
                        <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                          <div>
                            <p className="font-medium">{ranking.organization}</p>
                            <p className="text-sm text-muted-foreground">{ranking.year}</p>
                          </div>
                          <Badge variant="secondary">#{ranking.rank}</Badge>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <TrendingUp className="h-5 w-5 mr-2" />
                        Placement Statistics
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-3 rounded-lg bg-muted/50">
                          <p className="text-2xl font-bold text-primary">{college.placement.average}</p>
                          <p className="text-sm text-muted-foreground">Average Package</p>
                        </div>
                        <div className="text-center p-3 rounded-lg bg-muted/50">
                          <p className="text-2xl font-bold text-accent">{college.placement.highest}</p>
                          <p className="text-sm text-muted-foreground">Highest Package</p>
                        </div>
                      </div>
                      <div className="text-center p-3 rounded-lg bg-muted/50">
                        <p className="text-2xl font-bold text-warning">{college.placement.percentage}</p>
                        <p className="text-sm text-muted-foreground">Placement Rate</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Users className="h-5 w-5 mr-2" />
                      Top Recruiters
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {college.placement.companies.map((company, index) => (
                        <Badge key={index} variant="outline" className="text-sm">
                          {company}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="courses" className="space-y-6">
                <div className="grid gap-6">
                  {college.courses.map((course, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-xl font-semibold">{course.name}</h3>
                          <Badge variant="secondary">{course.duration}</Badge>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                          <div className="flex items-center justify-between">
                            <span className="text-muted-foreground">Available Seats:</span>
                            <span className="font-medium">{course.seats}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-muted-foreground">Cutoff (2023):</span>
                            <span className="font-medium text-primary">{course.cutoff}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="admission" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Admission Process</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">1</div>
                          <span>Appear for JEE Advanced</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">2</div>
                          <span>Register for JoSAA Counselling</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">3</div>
                          <span>Fill Choice Preferences</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">4</div>
                          <span>Document Verification</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Requirements</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {college.admission.requirements.map((requirement, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span className="text-sm">{requirement}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="placement" className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <Card>
                    <CardContent className="p-6 text-center">
                      <DollarSign className="h-8 w-8 text-primary mx-auto mb-2" />
                      <p className="text-2xl font-bold">{college.placement.average}</p>
                      <p className="text-sm text-muted-foreground">Average Package</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 text-center">
                      <TrendingUp className="h-8 w-8 text-accent mx-auto mb-2" />
                      <p className="text-2xl font-bold">{college.placement.highest}</p>
                      <p className="text-sm text-muted-foreground">Highest Package</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 text-center">
                      <Users className="h-8 w-8 text-warning mx-auto mb-2" />
                      <p className="text-2xl font-bold">{college.placement.percentage}</p>
                      <p className="text-sm text-muted-foreground">Placement Rate</p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="facilities" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {college.facilities.map((facility, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>{facility}</span>
                    </div>
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

export default CollegeDetails;
