// API service for handling data fetching and API calls
import { supabase } from '@/integrations/supabase/client';

// Types
export interface College {
  id: number;
  name: string;
  location: string;
  type: string;
  stream: string;
  rating: number;
  students: number;
  established: number;
  fees: {
    tuition: string;
    hostel: string;
    total: string;
  };
  description: string;
  image: string;
  website: string;
  email: string;
  phone: string;
  address: string;
  courses: Array<{
    name: string;
    duration: string;
    seats: number;
    cutoff: string;
  }>;
  facilities: string[];
  placement: {
    average: string;
    highest: string;
    companies: string[];
    percentage: string;
  };
  rankings: Array<{
    organization: string;
    rank: string | number;
    year: number;
  }>;
  admission: {
    process: string;
    requirements: string[];
    documents: string[];
  };
}

export interface Career {
  id: number;
  title: string;
  category: string;
  icon: string;
  rating: number;
  description: string;
  overview: string;
  salary: {
    entry: string;
    mid: string;
    senior: string;
    average: string;
  };
  growth: string;
  demand: string;
  experience: string;
  education: string;
  skills: {
    technical: string[];
    soft: string[];
  };
  responsibilities: string[];
  requirements: string[];
  companies: Array<{
    name: string;
    location: string;
    size: string;
    rating: number;
  }>;
  careerPath: Array<{
    level: string;
    experience: string;
    salary: string;
  }>;
  courses: Array<{
    name: string;
    duration: string;
    colleges: string[];
  }>;
  certifications: string[];
  jobMarket: {
    openings: string;
    growth: string;
    competition: string;
    remote: string;
  };
}

export interface Scholarship {
  id: number;
  title: string;
  provider: string;
  category: string;
  amount: string;
  deadline: string;
  description: string;
  eligibility: string[];
  requirements: string[];
  status: string;
  applicants: number;
  icon: string;
}

export interface Assessment {
  id: number;
  title: string;
  description: string;
  category: string;
  duration: string;
  questions: number;
  difficulty: string;
  rating: number;
  participants: number;
  icon: string;
  color: string;
}

// Mock data
const mockColleges: College[] = [
  {
    id: 1,
    name: "Indian Institute of Technology Delhi",
    location: "New Delhi",
    type: "Government",
    stream: "Engineering",
    rating: 4.8,
    students: 8500,
    established: 1961,
    fees: {
      tuition: "₹2.5L - ₹4L",
      hostel: "₹1L - ₹1.5L",
      total: "₹3.5L - ₹5.5L"
    },
    description: "Premier engineering institute known for excellence in technology and innovation.",
    image: "/api/placeholder/300/200",
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
      { organization: "Times Higher Education", rank: "201-250", year: 2023 }
    ],
    admission: {
      process: "JEE Advanced",
      requirements: ["Class 12 with 75%+", "JEE Advanced qualified", "Age 17-25"],
      documents: ["JEE Score Card", "Class 12 Marksheet", "Identity Proof", "Passport Photos"]
    }
  },
  // Add more colleges...
];

const mockCareers: Career[] = [
  {
    id: 1,
    title: "Software Engineer",
    category: "Technology",
    icon: "💻",
    rating: 4.7,
    description: "Software engineers design, develop, and maintain software applications and systems.",
    overview: "Software engineering is a rapidly growing field that combines technical skills with problem-solving abilities.",
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
  },
  // Add more careers...
];

const mockScholarships: Scholarship[] = [
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
  // Add more scholarships...
];

const mockAssessments: Assessment[] = [
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
    icon: "BookOpen",
    color: "primary"
  },
  // Add more assessments...
];

// API functions
export const apiService = {
  // Colleges
  async getColleges(filters?: {
    search?: string;
    location?: string;
    type?: string;
    stream?: string;
  }): Promise<College[]> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    let filteredColleges = [...mockColleges];
    
    if (filters) {
      if (filters.search) {
        filteredColleges = filteredColleges.filter(college =>
          college.name.toLowerCase().includes(filters.search!.toLowerCase()) ||
          college.location.toLowerCase().includes(filters.search!.toLowerCase())
        );
      }
      if (filters.location && filters.location !== 'all') {
        filteredColleges = filteredColleges.filter(college => college.location === filters.location);
      }
      if (filters.type && filters.type !== 'all') {
        filteredColleges = filteredColleges.filter(college => college.type === filters.type);
      }
      if (filters.stream && filters.stream !== 'all') {
        filteredColleges = filteredColleges.filter(college => college.stream === filters.stream);
      }
    }
    
    return filteredColleges;
  },

  async getCollegeById(id: number): Promise<College | null> {
    await new Promise(resolve => setTimeout(resolve, 300));
    return mockColleges.find(college => college.id === id) || null;
  },

  // Careers
  async getCareers(filters?: {
    search?: string;
    category?: string;
    experience?: string;
    salary?: string;
  }): Promise<Career[]> {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    let filteredCareers = [...mockCareers];
    
    if (filters) {
      if (filters.search) {
        filteredCareers = filteredCareers.filter(career =>
          career.title.toLowerCase().includes(filters.search!.toLowerCase()) ||
          career.description.toLowerCase().includes(filters.search!.toLowerCase())
        );
      }
      if (filters.category && filters.category !== 'all') {
        filteredCareers = filteredCareers.filter(career => career.category === filters.category);
      }
      if (filters.experience && filters.experience !== 'all') {
        filteredCareers = filteredCareers.filter(career => career.experience === filters.experience);
      }
      if (filters.salary && filters.salary !== 'all') {
        filteredCareers = filteredCareers.filter(career => career.salary.average === filters.salary);
      }
    }
    
    return filteredCareers;
  },

  async getCareerById(id: number): Promise<Career | null> {
    await new Promise(resolve => setTimeout(resolve, 300));
    return mockCareers.find(career => career.id === id) || null;
  },

  // Scholarships
  async getScholarships(filters?: {
    search?: string;
    category?: string;
    amount?: string;
    deadline?: string;
  }): Promise<Scholarship[]> {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    let filteredScholarships = [...mockScholarships];
    
    if (filters) {
      if (filters.search) {
        filteredScholarships = filteredScholarships.filter(scholarship =>
          scholarship.title.toLowerCase().includes(filters.search!.toLowerCase()) ||
          scholarship.provider.toLowerCase().includes(filters.search!.toLowerCase())
        );
      }
      if (filters.category && filters.category !== 'all') {
        filteredScholarships = filteredScholarships.filter(scholarship => scholarship.category === filters.category);
      }
      if (filters.amount && filters.amount !== 'all') {
        filteredScholarships = filteredScholarships.filter(scholarship => scholarship.amount === filters.amount);
      }
    }
    
    return filteredScholarships;
  },

  async getScholarshipById(id: number): Promise<Scholarship | null> {
    await new Promise(resolve => setTimeout(resolve, 300));
    return mockScholarships.find(scholarship => scholarship.id === id) || null;
  },

  // Assessments
  async getAssessments(category?: string): Promise<Assessment[]> {
    await new Promise(resolve => setTimeout(resolve, 300));
    
    if (category && category !== 'all') {
      return mockAssessments.filter(assessment => assessment.category === category);
    }
    
    return mockAssessments;
  },

  async getAssessmentById(id: number): Promise<Assessment | null> {
    await new Promise(resolve => setTimeout(resolve, 300));
    return mockAssessments.find(assessment => assessment.id === id) || null;
  },

  // User Authentication (using Supabase)
  async signUp(email: string, password: string, userData: any) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: userData
      }
    });
    
    if (error) throw error;
    return data;
  },

  async signIn(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    
    if (error) throw error;
    return data;
  },

  async signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  },

  async getCurrentUser() {
    const { data: { user } } = await supabase.auth.getUser();
    return user;
  },

  // User Profile
  async getUserProfile(userId: string) {
    const { data, error } = await supabase
      .from('user_profiles')
      .select('*')
      .eq('user_id', userId)
      .single();
    
    if (error) throw error;
    return data;
  },

  async updateUserProfile(userId: string, profileData: any) {
    const { data, error } = await supabase
      .from('user_profiles')
      .upsert({ user_id: userId, ...profileData })
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  // Assessment Results
  async saveAssessmentResult(userId: string, assessmentId: number, answers: any, result: any) {
    const { data, error } = await supabase
      .from('assessment_results')
      .insert({
        user_id: userId,
        assessment_id: assessmentId,
        answers,
        result,
        completed_at: new Date().toISOString()
      })
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  async getAssessmentResults(userId: string) {
    const { data, error } = await supabase
      .from('assessment_results')
      .select('*')
      .eq('user_id', userId)
      .order('completed_at', { ascending: false });
    
    if (error) throw error;
    return data;
  }
};

export default apiService;
