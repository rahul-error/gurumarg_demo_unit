import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Calendar, 
  DollarSign, 
  Users, 
  Award,
  Filter,
  ArrowRight,
  Eye,
  Clock,
  CheckCircle
} from "lucide-react";
import Navigation from "@/components/ui/navigation";

const Scholarships = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedAmount, setSelectedAmount] = useState("all");
  const [selectedDeadline, setSelectedDeadline] = useState("all");

  const scholarships = [
    {
      id: 1,
      title: "National Merit Scholarship",
      provider: "Government of India",
      category: "Merit-based",
      amount: "₹50,000 - ₹1,00,000",
      deadline: "2024-03-15",
      description: "Awarded to students with exceptional academic performance and leadership qualities.",
      eligibility: ["Class 12 with 90%+ marks", "Indian citizenship", "Age 17-25"],
      requirements: ["Academic transcripts", "Recommendation letters", "Essay"],
      status: "Open",
      applicants: 15000,
      icon: "🏆"
    },
    {
      id: 2,
      title: "Need-Based Financial Aid",
      provider: "Tata Trust",
      category: "Need-based",
      amount: "₹25,000 - ₹75,000",
      deadline: "2024-04-30",
      description: "Financial assistance for students from economically disadvantaged backgrounds.",
      eligibility: ["Family income < ₹5L", "Class 12 completion", "Admission to recognized college"],
      requirements: ["Income certificate", "Bank statements", "Admission proof"],
      status: "Open",
      applicants: 25000,
      icon: "💝"
    },
    {
      id: 3,
      title: "Women in STEM Scholarship",
      provider: "Google India",
      category: "Merit-based",
      amount: "₹1,00,000 - ₹2,00,000",
      deadline: "2024-02-28",
      description: "Encouraging women to pursue careers in Science, Technology, Engineering, and Mathematics.",
      eligibility: ["Female students", "STEM field admission", "Class 12 with 85%+ marks"],
      requirements: ["Academic records", "Personal statement", "Project portfolio"],
      status: "Open",
      applicants: 8000,
      icon: "👩‍🔬"
    },
    {
      id: 4,
      title: "Sports Excellence Scholarship",
      provider: "Reliance Foundation",
      category: "Sports",
      amount: "₹30,000 - ₹1,50,000",
      deadline: "2024-05-15",
      description: "Supporting talented athletes to balance sports and academics.",
      eligibility: ["National/State level participation", "Academic performance", "Age 16-22"],
      requirements: ["Sports certificates", "Medical fitness", "Academic transcripts"],
      status: "Open",
      applicants: 5000,
      icon: "🏃‍♀️"
    },
    {
      id: 5,
      title: "Rural Development Scholarship",
      provider: "NGO Rural India",
      category: "Need-based",
      amount: "₹20,000 - ₹50,000",
      deadline: "2024-03-31",
      description: "Supporting students from rural areas to pursue higher education.",
      eligibility: ["Rural area residence", "Class 12 completion", "Family income < ₹3L"],
      requirements: ["Domicile certificate", "Income proof", "Academic records"],
      status: "Open",
      applicants: 12000,
      icon: "🌾"
    },
    {
      id: 6,
      title: "Innovation and Research Grant",
      provider: "Indian Institute of Science",
      category: "Research",
      amount: "₹2,00,000 - ₹5,00,000",
      deadline: "2024-04-20",
      description: "Funding for innovative research projects in science and technology.",
      eligibility: ["Research proposal", "Academic excellence", "Faculty recommendation"],
      requirements: ["Research proposal", "CV", "Recommendation letters"],
      status: "Open",
      applicants: 3000,
      icon: "🔬"
    },
    {
      id: 7,
      title: "Arts and Culture Scholarship",
      provider: "Ministry of Culture",
      category: "Merit-based",
      amount: "₹40,000 - ₹80,000",
      deadline: "2024-03-10",
      description: "Supporting students pursuing studies in arts, music, and cultural fields.",
      eligibility: ["Arts field admission", "Portfolio submission", "Class 12 completion"],
      requirements: ["Portfolio", "Academic records", "Performance videos"],
      status: "Open",
      applicants: 6000,
      icon: "🎨"
    },
    {
      id: 8,
      title: "International Exchange Program",
      provider: "Fulbright Commission",
      category: "International",
      amount: "Full Tuition + Living",
      deadline: "2024-01-31",
      description: "Opportunity to study abroad with full financial support.",
      eligibility: ["Academic excellence", "English proficiency", "Leadership qualities"],
      requirements: ["TOEFL/IELTS scores", "Academic transcripts", "Personal essays"],
      status: "Closed",
      applicants: 2000,
      icon: "✈️"
    }
  ];

  const categories = ["all", "Merit-based", "Need-based", "Sports", "Research", "International", "Arts"];
  const amounts = ["all", "₹20K - ₹50K", "₹50K - ₹1L", "₹1L - ₹2L", "₹2L+"];
  const deadlines = ["all", "This Month", "Next Month", "Next 3 Months"];

  const filteredScholarships = scholarships.filter(scholarship => {
    const matchesSearch = scholarship.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         scholarship.provider.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         scholarship.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || scholarship.category === selectedCategory;
    const matchesAmount = selectedAmount === "all" || scholarship.amount === selectedAmount;
    const matchesDeadline = selectedDeadline === "all" || 
      (selectedDeadline === "This Month" && new Date(scholarship.deadline) <= new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)) ||
      (selectedDeadline === "Next Month" && new Date(scholarship.deadline) <= new Date(Date.now() + 60 * 24 * 60 * 60 * 1000)) ||
      (selectedDeadline === "Next 3 Months" && new Date(scholarship.deadline) <= new Date(Date.now() + 90 * 24 * 60 * 60 * 1000));
    
    return matchesSearch && matchesCategory && matchesAmount && matchesDeadline;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Open": return "bg-green-100 text-green-800";
      case "Closed": return "bg-red-100 text-red-800";
      case "Upcoming": return "bg-blue-100 text-blue-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const formatDeadline = (deadline: string) => {
    const date = new Date(deadline);
    const now = new Date();
    const diffTime = date.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) return "Expired";
    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "Tomorrow";
    if (diffDays <= 7) return `${diffDays} days left`;
    return date.toLocaleDateString();
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
                Find Your Perfect
                <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Scholarship Match
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Discover scholarships and financial aid opportunities that match your profile. 
                Get personalized recommendations and application guidance.
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
                    placeholder="Search scholarships, providers, or categories..."
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

              <Select value={selectedAmount} onValueChange={setSelectedAmount}>
                <SelectTrigger>
                  <SelectValue placeholder="Amount" />
                </SelectTrigger>
                <SelectContent>
                  {amounts.map((amount) => (
                    <SelectItem key={amount} value={amount}>
                      {amount === "all" ? "All Amounts" : amount}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedDeadline} onValueChange={setSelectedDeadline}>
                <SelectTrigger>
                  <SelectValue placeholder="Deadline" />
                </SelectTrigger>
                <SelectContent>
                  {deadlines.map((deadline) => (
                    <SelectItem key={deadline} value={deadline}>
                      {deadline === "all" ? "All Deadlines" : deadline}
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
              Showing {filteredScholarships.length} scholarships
            </p>
          </div>
        </section>

        {/* Scholarships Grid */}
        <section className="py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredScholarships.map((scholarship) => (
                <Card key={scholarship.id} className="group gradient-card border-0 shadow-card hover:shadow-elegant transition-smooth">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-3xl">{scholarship.icon}</div>
                      <Badge className={getStatusColor(scholarship.status)}>
                        {scholarship.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl mb-2 line-clamp-2">{scholarship.title}</CardTitle>
                    <CardDescription className="text-sm line-clamp-2">
                      {scholarship.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">
                        {scholarship.category}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        {scholarship.provider}
                      </Badge>
                    </div>
                    
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center justify-between">
                        <span>Amount:</span>
                        <span className="font-medium text-primary">{scholarship.amount}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Deadline:</span>
                        <span className="font-medium">{formatDeadline(scholarship.deadline)}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Applicants:</span>
                        <span className="font-medium">{scholarship.applicants.toLocaleString()}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Key Eligibility:</p>
                      <div className="space-y-1">
                        {scholarship.eligibility.slice(0, 2).map((item, index) => (
                          <div key={index} className="flex items-center space-x-2 text-xs text-muted-foreground">
                            <CheckCircle className="h-3 w-3 text-green-500" />
                            <span>{item}</span>
                          </div>
                        ))}
                        {scholarship.eligibility.length > 2 && (
                          <div className="text-xs text-muted-foreground">
                            +{scholarship.eligibility.length - 2} more requirements
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-2">
                      <div className="text-xs text-muted-foreground">
                        {scholarship.requirements.length} documents required
                      </div>
                      <Button 
                        size="sm"
                        className="gradient-primary text-white border-0 shadow-elegant"
                        onClick={() => navigate(`/scholarship/${scholarship.id}`)}
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
            <h2 className="text-3xl font-bold mb-4">Need Help Finding Scholarships?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Take our assessment to get personalized scholarship recommendations 
              based on your academic profile and financial needs.
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

export default Scholarships;
