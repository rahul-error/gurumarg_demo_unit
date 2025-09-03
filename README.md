# GuruMarg - AI-Powered Career Guidance Platform

A comprehensive educational guidance platform that helps students make informed decisions about their academic and career paths through AI-powered assessments, college matching, career guidance, and scholarship discovery with a flexible subscription model.

## 🚀 Features

### Core Functionality
- **Smart Assessments**: AI-powered tests to identify strengths, interests, and ideal career paths
- **College Matching**: Find the perfect college based on preferences, budget, and location
- **Career Guidance**: Personalized career recommendations based on market trends and goals
- **Scholarship Navigator**: Discover scholarships and financial aid opportunities
- **User Profiles**: Track progress, goals, and achievements
- **AI Chat Assistant**: Gemini-powered career guidance conversations
- **Subscription Plans**: Free, Pro, and Max tiers with feature gating

### 🔐 Authentication System
- **OTP-based Authentication**: Secure passwordless login via email
- **Supabase Integration**: Real-time user management and data storage
- **Profile Management**: Comprehensive user profiles with subscription status
- **Session Management**: Secure authentication state handling

### 💳 Subscription Model
- **Free Plan**: Basic features with limited usage
- **Pro Plan (₹299/month)**: Advanced features and unlimited access
- **Max Plan (₹599/month)**: Premium features with personal mentorship
- **Feature Gating**: Smart access control based on subscription tier
- **Usage Tracking**: Monitor feature usage and limits

### Assessment Types
- Class 10 Stream Selector
- Career Compass Assessment
- Skill Gap Analysis
- Learning Style Assessment
- Personality Assessment

### Key Pages
- **Home**: Landing page with hero section, features, and CTA
- **Assessments**: Browse and take various assessments
- **Colleges**: Search and filter colleges with detailed information
- **Careers**: Explore career options with salary and growth data
- **Scholarships**: Find and apply for scholarships
- **Profile**: User dashboard with progress tracking and subscription status
- **Pricing**: Subscription plans comparison and management
- **Settings**: API configuration and subscription management
- **Authentication**: OTP-based login and signup

## 🛠️ Technology Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for fast development and building
- **React Router** for client-side routing
- **Tailwind CSS** for styling with custom design system
- **Radix UI** for accessible component primitives
- **Lucide React** for icons
- **React Hook Form** for form handling
- **TanStack Query** for data fetching and caching
- **Context API** for state management

### Backend & Database
- **Supabase** for authentication and database
- **PostgreSQL** for data storage
- **Real-time subscriptions** for live updates
- **OTP Authentication** for secure login

### AI Integration
- **Google Gemini API** for AI-powered career guidance
- **IndexedDB** for local API key storage
- **Dynamic content generation** based on user queries

### Development Tools
- **ESLint** for code linting
- **TypeScript** for type safety
- **PostCSS** for CSS processing
- **Autoprefixer** for CSS vendor prefixes

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Mobile devices** (320px and up)
- **Tablets** (768px and up)
- **Desktop** (1024px and up)
- **Large screens** (1280px and up)

### Responsive Features
- Mobile-first design approach
- Touch-friendly interactive elements
- Responsive typography and spacing
- Adaptive navigation and layouts
- Optimized images and media

## 🎨 Design System

### Color Palette
- **Primary**: Blue (#3B82F6)
- **Accent**: Green (#10B981)
- **Warning**: Orange (#F59E0B)
- **Success**: Green (#10B981)
- **Muted**: Gray tones for text and backgrounds

### Typography
- **Font Family**: Inter (system fallback)
- **Responsive text sizes** with mobile-first approach
- **Consistent line heights** and spacing

### Components
- **Gradient backgrounds** for visual appeal
- **Card-based layouts** with subtle shadows
- **Smooth transitions** and hover effects
- **Accessible form controls** with proper labeling
- **Feature gates** with upgrade prompts

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Supabase account (for backend services)
- Google Gemini API key (for AI features)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/rahul-error/gurumarg_demo_unit.git
   cd gurumarg_demo_unit
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Add your Supabase credentials:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

6. **Configure Gemini API**
   - Go to Settings page
   - Add your Gemini API key
   - Key is stored locally in IndexedDB

### Building for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components (buttons, cards, etc.)
│   ├── FeatureGate.tsx # Subscription feature gating
│   ├── hero-section.tsx
│   ├── features-section.tsx
│   └── cta-section.tsx
├── pages/              # Page components
│   ├── Index.tsx       # Home page
│   ├── Assessments.tsx
│   ├── Colleges.tsx
│   ├── Careers.tsx
│   ├── Scholarships.tsx
│   ├── StreamSelector.tsx
│   ├── CareerCompass.tsx
│   ├── CollegeDetails.tsx
│   ├── CareerDetails.tsx
│   ├── Profile.tsx     # User dashboard with subscription
│   ├── Pricing.tsx     # Subscription plans
│   ├── Settings.tsx    # API and subscription management
│   ├── Login.tsx       # OTP-based login
│   ├── Signup.tsx      # OTP-based signup
│   └── VerifyOtp.tsx   # OTP verification
├── hooks/              # Custom React hooks
│   ├── useApi.tsx      # API integration and auth
│   ├── useSubscription.tsx # Subscription management
│   ├── useGemini.ts    # Gemini AI integration
│   └── use-mobile.tsx
├── types/              # TypeScript type definitions
│   └── subscription.ts # Subscription types and data
├── services/           # API services and data fetching
│   └── api.ts
├── integrations/       # Third-party integrations
│   └── supabase/
├── lib/                # Utility functions
│   └── utils.ts        # IndexedDB helpers
├── assets/             # Static assets
└── index.css           # Global styles and design system
```

## 🔧 API Integration

### Authentication Flow
1. **User Registration**: Email-based signup with OTP verification
2. **OTP Verification**: Secure one-time password confirmation
3. **Session Management**: Automatic login state handling
4. **Profile Creation**: User data stored in Supabase

### AI Integration
- **Gemini API**: AI-powered career guidance and content generation
- **Local Storage**: API key stored securely in IndexedDB
- **Dynamic Responses**: Context-aware AI conversations
- **Feature Gating**: AI usage limits based on subscription plan

### Subscription System
- **Plan Management**: Free, Pro, and Max tiers
- **Feature Gating**: Access control based on subscription
- **Usage Tracking**: Monitor feature usage and limits
- **Local Storage**: Subscription data in IndexedDB

### Data Flow
1. **Client-side routing** with React Router
2. **Data fetching** with TanStack Query
3. **State management** with React Context
4. **Form handling** with React Hook Form
5. **API calls** through custom service layer
6. **Real-time updates** with Supabase subscriptions

## 🎯 Key Features Implementation

### Subscription System
- **Three-tier pricing**: Free (₹0), Pro (₹299), Max (₹599)
- **Feature gating**: Smart access control with upgrade prompts
- **Usage tracking**: Monitor and limit feature usage
- **Plan management**: Upgrade, downgrade, and cancel subscriptions

### Assessment System
- **Multi-step forms** with progress tracking
- **Question randomization** for variety
- **Result calculation** with personalized recommendations
- **Progress saving** and resume functionality
- **Subscription-based access** with usage limits

### AI Chat Assistant
- **Gemini integration** for intelligent responses
- **Context-aware conversations** about career guidance
- **Usage limits** based on subscription plan
- **Local API key storage** for privacy

### College Search
- **Advanced filtering** by location, type, stream
- **Search functionality** with real-time results
- **Detailed college pages** with comprehensive information
- **Comparison tools** for multiple colleges
- **Subscription-based advanced features**

### Career Guidance
- **Career exploration** with detailed information
- **Salary insights** and growth projections
- **Skill requirements** and development paths
- **Company information** and job market data
- **AI-powered recommendations**

### User Experience
- **Responsive design** across all devices
- **Smooth animations** and transitions
- **Accessible components** with proper ARIA labels
- **Loading states** and error handling
- **Form validation** with helpful error messages
- **Feature upgrade prompts** with clear value proposition

## 💳 Subscription Plans

### 🆓 Free Plan (₹0/month)
- 3 Basic Assessments per month
- Basic College & Career Search
- 5 AI Chat conversations per month
- Basic Profile management
- PDF Export of results
- Basic Scholarship Listings

### ⚡ Pro Plan (₹299/month)
- Unlimited Assessments
- Advanced College Search with filters & analytics
- Career Roadmaps & skill development plans
- AI-powered Scholarship Matching
- Unlimited AI Chat
- Advanced Profile with portfolio
- Multiple Export Formats (PDF, Excel, Word)
- Priority Support (24-hour response)
- Exclusive Webinars

### 👑 Max Plan (₹599/month)
- Everything in Pro
- Personal Career Mentor (2 sessions/month)
- Resume Review (3 reviews/month)
- Interview Preparation (2 sessions/month)
- Smart Job Alerts
- Networking Events access
- Certification Tracks
- Phone Support
- Custom Reports

## 🧪 Testing

```bash
# Run linting
npm run lint

# Type checking
npm run type-check

# Build verification
npm run build
```

## 📱 Mobile Optimization

- **Touch-friendly** buttons and interactive elements
- **Swipe gestures** for navigation
- **Optimized images** with lazy loading
- **Fast loading** with code splitting
- **Responsive subscription UI** for mobile users

## 🔒 Security

- **OTP Authentication** for secure passwordless login
- **Input validation** on both client and server
- **XSS protection** with proper sanitization
- **Local API key storage** in IndexedDB
- **Secure authentication** with Supabase Auth
- **Environment variables** for sensitive data
- **Feature gating** to prevent unauthorized access

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository
2. Set environment variables (Supabase credentials)
3. Deploy automatically on push

### Netlify
1. Build command: `npm run build`
2. Publish directory: `dist`
3. Set environment variables

### Manual Deployment
1. Build the project: `npm run build`
2. Upload `dist` folder to your web server
3. Configure server for SPA routing

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Check the documentation
- Contact the development team

## 🔮 Future Enhancements

- **Payment Integration**: Stripe/Razorpay for subscription billing
- **Advanced AI Features**: More sophisticated career recommendations
- **Video Assessments**: Interactive video-based evaluations
- **Social Features**: Peer connections and study groups
- **Mobile App**: React Native mobile application
- **Advanced Analytics**: Detailed usage and performance metrics
- **Integration**: Direct integration with educational institutions
- **Multi-language Support**: Internationalization
- **Accessibility Improvements**: Enhanced accessibility features
- **Real-time Collaboration**: Live assessment sessions
- **Gamification**: Points, badges, and achievements system

## 🎯 Business Model

- **Freemium Strategy**: Free plan attracts users, paid plans provide value
- **Student Discounts**: 20% off for verified students
- **Flexible Pricing**: Monthly and annual billing options
- **Feature-based Monetization**: Clear value proposition for each tier
- **Scalable Architecture**: Ready for growth and expansion

---

Built with ❤️ for students seeking educational guidance and career clarity. Powered by AI and designed for the future of education.