import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  MapPin, 
  Star, 
  Users, 
  GraduationCap,
  Filter,
  ArrowRight,
  Eye
} from "lucide-react";
import Navigation from "@/components/ui/navigation";

const Colleges = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedStream, setSelectedStream] = useState("all");

  const colleges = [
    {
      id: 1,
      name: "Indian Institute of Technology Delhi",
      location: "New Delhi",
      type: "Government",
      stream: "Engineering",
      rating: 4.8,
      students: 8500,
      established: 1961,
      fees: "₹2.5L - ₹4L",
      image: "/api/placeholder/300/200",
      description: "Premier engineering institute known for excellence in technology and innovation.",
      courses: ["Computer Science", "Mechanical", "Electrical", "Civil"],
      highlights: ["IIT", "NIRF Rank 1", "Placement 100%"]
    },
    {
      id: 2,
      name: "Delhi University",
      location: "New Delhi",
      type: "Government",
      stream: "Arts & Science",
      rating: 4.6,
      students: 150000,
      established: 1922,
      fees: "₹10K - ₹50K",
      image: "/api/placeholder/300/200",
      description: "One of India's largest and most prestigious universities offering diverse programs.",
      courses: ["Economics", "Political Science", "English", "Mathematics"],
      highlights: ["Central University", "NIRF Rank 12", "Alumni Network"]
    },
    {
      id: 3,
      name: "St. Stephen's College",
      location: "New Delhi",
      type: "Private",
      stream: "Arts & Science",
      rating: 4.7,
      students: 1200,
      established: 1881,
      fees: "₹20K - ₹80K",
      image: "/api/placeholder/300/200",
      description: "Historic college known for academic excellence and vibrant campus life.",
      courses: ["History", "Philosophy", "Physics", "Chemistry"],
      highlights: ["Heritage College", "Small Class Size", "Research Focus"]
    },
    {
      id: 4,
      name: "All India Institute of Medical Sciences",
      location: "New Delhi",
      type: "Government",
      stream: "Medical",
      rating: 4.9,
      students: 2500,
      established: 1956,
      fees: "₹1.5K - ₹3K",
      image: "/api/placeholder/300/200",
      description: "Premier medical institute and hospital providing world-class healthcare education.",
      courses: ["MBBS", "MD", "MS", "DM"],
      highlights: ["AIIMS", "NIRF Rank 1", "Research Excellence"]
    },
    {
      id: 5,
      name: "Indian Institute of Management Ahmedabad",
      location: "Ahmedabad",
      type: "Government",
      stream: "Management",
      rating: 4.8,
      students: 1200,
      established: 1961,
      fees: "₹20L - ₹25L",
      image: "/api/placeholder/300/200",
      description: "Leading business school known for management education and leadership development.",
      courses: ["MBA", "PGP", "FPM", "ePGP"],
      highlights: ["IIM", "NIRF Rank 1", "Global Recognition"]
    },
    {
      id: 6,
      name: "National Institute of Fashion Technology",
      location: "New Delhi",
      type: "Government",
      stream: "Design",
      rating: 4.5,
      students: 3000,
      established: 1986,
      fees: "₹2L - ₹4L",
      image: "/api/placeholder/300/200",
      description: "Premier fashion and design institute fostering creativity and innovation.",
      courses: ["Fashion Design", "Textile Design", "Accessory Design", "Fashion Communication"],
      highlights: ["NIFT", "Industry Connect", "Creative Excellence"]
    }
  ];

  const locations = ["all", "New Delhi", "Mumbai", "Bangalore", "Chennai", "Kolkata", "Pune", "Hyderabad"];
  const types = ["all", "Government", "Private", "Deemed", "Autonomous"];
  const streams = ["all", "Engineering", "Medical", "Management", "Arts & Science", "Design", "Law", "Commerce"];

  const filteredColleges = colleges.filter(college => {
    const matchesSearch = college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         college.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = selectedLocation === "all" || college.location === selectedLocation;
    const matchesType = selectedType === "all" || college.type === selectedType;
    const matchesStream = selectedStream === "all" || college.stream === selectedStream;
    
    return matchesSearch && matchesLocation && matchesType && matchesStream;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-primary/10 via-accent/10 to-warning/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Find Your Perfect
                <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  College Match
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Discover colleges that align with your academic goals, budget, and preferences 
                from our comprehensive database of 500+ institutions.
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-8 border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="lg:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search colleges, courses, or locations..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger>
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  {locations.map((location) => (
                    <SelectItem key={location} value={location}>
                      {location === "all" ? "All Locations" : location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger>
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  {types.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type === "all" ? "All Types" : type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedStream} onValueChange={setSelectedStream}>
                <SelectTrigger>
                  <SelectValue placeholder="Stream" />
                </SelectTrigger>
                <SelectContent>
                  {streams.map((stream) => (
                    <SelectItem key={stream} value={stream}>
                      {stream === "all" ? "All Streams" : stream}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>

        {/* Results Count */}
        <section className="py-4">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-muted-foreground">
              Showing {filteredColleges.length} colleges
            </p>
          </div>
        </section>

        {/* Colleges Grid */}
        <section className="py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredColleges.map((college) => (
                <Card key={college.id} className="group gradient-card border-0 shadow-card hover:shadow-elegant transition-smooth">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className="gradient-primary p-3 rounded-xl">
                        <GraduationCap className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{college.rating}</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl mb-2 line-clamp-2">{college.name}</CardTitle>
                    <CardDescription className="text-sm line-clamp-2">
                      {college.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {college.highlights.map((highlight, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4" />
                        <span>{college.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4" />
                        <span>{college.students.toLocaleString()} students</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Est. {college.established}</span>
                        <span className="font-medium text-primary">{college.fees}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-2">
                      <Badge variant="outline" className="text-xs">
                        {college.type}
                      </Badge>
                      <Button 
                        size="sm"
                        className="gradient-primary text-white border-0 shadow-elegant"
                        onClick={() => navigate(`/college/${college.id}`)}
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
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
            <h2 className="text-3xl font-bold mb-4">Need Help Choosing?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Take our assessment to get personalized college recommendations 
              based on your preferences and academic profile.
            </p>
            <Button 
              size="lg" 
              className="gradient-primary text-white border-0 shadow-elegant"
              onClick={() => navigate('/assessments')}
            >
              Get Personalized Recommendations
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Colleges;
