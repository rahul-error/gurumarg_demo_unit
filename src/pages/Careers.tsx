import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  TrendingUp, 
  DollarSign, 
  Users, 
  Briefcase,
  Filter,
  ArrowRight,
  Eye,
  Star
} from "lucide-react";
import Navigation from "@/components/ui/navigation";

const Careers = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedExperience, setSelectedExperience] = useState("all");
  const [selectedSalary, setSelectedSalary] = useState("all");

  const careers = [
    {
      id: 1,
      title: "Software Engineer",
      category: "Technology",
      experience: "0-2 years",
      salary: "₹6L - ₹15L",
      growth: "High",
      demand: "Very High",
      description: "Design, develop, and maintain software applications and systems.",
      skills: ["Programming", "Problem Solving", "Teamwork", "Communication"],
      companies: ["Google", "Microsoft", "Amazon", "TCS"],
      rating: 4.7,
      icon: "💻"
    },
    {
      id: 2,
      title: "Data Scientist",
      category: "Technology",
      experience: "2-5 years",
      salary: "₹8L - ₹20L",
      growth: "Very High",
      demand: "High",
      description: "Analyze complex data to help organizations make informed decisions.",
      skills: ["Statistics", "Machine Learning", "Python", "SQL"],
      companies: ["Netflix", "Uber", "Spotify", "PayPal"],
      rating: 4.8,
      icon: "📊"
    },
    {
      id: 3,
      title: "Doctor",
      category: "Healthcare",
      experience: "5+ years",
      salary: "₹10L - ₹50L",
      growth: "Stable",
      demand: "Very High",
      description: "Diagnose and treat patients, providing medical care and advice.",
      skills: ["Medical Knowledge", "Empathy", "Decision Making", "Communication"],
      companies: ["AIIMS", "Apollo", "Fortis", "Max Healthcare"],
      rating: 4.9,
      icon: "🩺"
    },
    {
      id: 4,
      title: "Investment Banker",
      category: "Finance",
      experience: "2-5 years",
      salary: "₹15L - ₹40L",
      growth: "High",
      demand: "Medium",
      description: "Help companies raise capital and provide financial advisory services.",
      skills: ["Financial Analysis", "Negotiation", "Risk Assessment", "Networking"],
      companies: ["Goldman Sachs", "JP Morgan", "Morgan Stanley", "Credit Suisse"],
      rating: 4.6,
      icon: "💰"
    },
    {
      id: 5,
      title: "Marketing Manager",
      category: "Marketing",
      experience: "3-7 years",
      salary: "₹8L - ₹18L",
      growth: "Medium",
      demand: "High",
      description: "Develop and execute marketing strategies to promote products and services.",
      skills: ["Digital Marketing", "Analytics", "Creativity", "Leadership"],
      companies: ["Unilever", "P&G", "Nike", "Coca-Cola"],
      rating: 4.5,
      icon: "📈"
    },
    {
      id: 6,
      title: "Civil Engineer",
      category: "Engineering",
      experience: "1-4 years",
      salary: "₹4L - ₹12L",
      growth: "Medium",
      demand: "High",
      description: "Design and oversee construction projects and infrastructure development.",
      skills: ["CAD", "Project Management", "Problem Solving", "Technical Knowledge"],
      companies: ["L&T", "Reliance", "Adani", "Tata Projects"],
      rating: 4.4,
      icon: "🏗️"
    },
    {
      id: 7,
      title: "Graphic Designer",
      category: "Design",
      experience: "0-3 years",
      salary: "₹3L - ₹8L",
      growth: "Medium",
      demand: "Medium",
      description: "Create visual concepts to communicate ideas and inspire consumers.",
      skills: ["Adobe Creative Suite", "Creativity", "Typography", "Color Theory"],
      companies: ["Apple", "Google", "Adobe", "Canva"],
      rating: 4.3,
      icon: "🎨"
    },
    {
      id: 8,
      title: "Teacher",
      category: "Education",
      experience: "1-5 years",
      salary: "₹3L - ₹8L",
      growth: "Stable",
      demand: "Very High",
      description: "Educate students and help them develop knowledge and skills.",
      skills: ["Communication", "Patience", "Subject Knowledge", "Classroom Management"],
      companies: ["Kendriya Vidyalaya", "Delhi Public School", "Amity", "Manipal"],
      rating: 4.6,
      icon: "👨‍🏫"
    }
  ];

  const categories = ["all", "Technology", "Healthcare", "Finance", "Marketing", "Engineering", "Design", "Education"];
  const experienceLevels = ["all", "0-2 years", "2-5 years", "5+ years"];
  const salaryRanges = ["all", "₹3L - ₹8L", "₹8L - ₹15L", "₹15L - ₹30L", "₹30L+"];

  const filteredCareers = careers.filter(career => {
    const matchesSearch = career.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         career.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || career.category === selectedCategory;
    const matchesExperience = selectedExperience === "all" || career.experience === selectedExperience;
    const matchesSalary = selectedSalary === "all" || career.salary === selectedSalary;
    
    return matchesSearch && matchesCategory && matchesExperience && matchesSalary;
  });

  const getGrowthColor = (growth: string) => {
    switch (growth) {
      case "Very High": return "bg-green-100 text-green-800";
      case "High": return "bg-blue-100 text-blue-800";
      case "Medium": return "bg-yellow-100 text-yellow-800";
      case "Stable": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getDemandColor = (demand: string) => {
    switch (demand) {
      case "Very High": return "bg-red-100 text-red-800";
      case "High": return "bg-orange-100 text-orange-800";
      case "Medium": return "bg-yellow-100 text-yellow-800";
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
                Explore Your
                <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Career Possibilities
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Discover career paths that match your interests, skills, and goals. 
                Get insights into salary expectations, growth opportunities, and required skills.
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
                    placeholder="Search careers, skills, or companies..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category === "all" ? "All Categories" : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedExperience} onValueChange={setSelectedExperience}>
                <SelectTrigger>
                  <SelectValue placeholder="Experience" />
                </SelectTrigger>
                <SelectContent>
                  {experienceLevels.map((experience) => (
                    <SelectItem key={experience} value={experience}>
                      {experience === "all" ? "All Levels" : experience}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedSalary} onValueChange={setSelectedSalary}>
                <SelectTrigger>
                  <SelectValue placeholder="Salary" />
                </SelectTrigger>
                <SelectContent>
                  {salaryRanges.map((salary) => (
                    <SelectItem key={salary} value={salary}>
                      {salary === "all" ? "All Ranges" : salary}
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
              Showing {filteredCareers.length} career options
            </p>
          </div>
        </section>

        {/* Careers Grid */}
        <section className="py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCareers.map((career) => (
                <Card key={career.id} className="group gradient-card border-0 shadow-card hover:shadow-elegant transition-smooth">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-3xl">{career.icon}</div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{career.rating}</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl mb-2">{career.title}</CardTitle>
                    <CardDescription className="text-sm line-clamp-2">
                      {career.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">
                        {career.category}
                      </Badge>
                      <Badge className={getGrowthColor(career.growth)}>
                        {career.growth} Growth
                      </Badge>
                      <Badge className={getDemandColor(career.demand)}>
                        {career.demand} Demand
                      </Badge>
                    </div>
                    
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center justify-between">
                        <span>Experience:</span>
                        <span className="font-medium">{career.experience}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Salary:</span>
                        <span className="font-medium text-primary">{career.salary}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Key Skills:</p>
                      <div className="flex flex-wrap gap-1">
                        {career.skills.slice(0, 3).map((skill, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                        {career.skills.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{career.skills.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-2">
                      <div className="text-xs text-muted-foreground">
                        Top companies: {career.companies.slice(0, 2).join(", ")}
                      </div>
                      <Button 
                        size="sm"
                        className="gradient-primary text-white border-0 shadow-elegant"
                        onClick={() => navigate(`/career/${career.id}`)}
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
            <h2 className="text-3xl font-bold mb-4">Find Your Perfect Career Match</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Take our career assessment to discover which careers align best 
              with your interests, skills, and personality.
            </p>
            <Button 
              size="lg" 
              className="gradient-primary text-white border-0 shadow-elegant"
              onClick={() => navigate('/career-compass')}
            >
              Take Career Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Careers;
