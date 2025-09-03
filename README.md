# GuruMarg - Educational Guidance Platform

A comprehensive educational guidance platform that helps students make informed decisions about their academic and career paths through AI-powered assessments, college matching, career guidance, and scholarship discovery.

## 🚀 Features

### Core Functionality
- **Smart Assessments**: AI-powered tests to identify strengths, interests, and ideal career paths
- **College Matching**: Find the perfect college based on preferences, budget, and location
- **Career Guidance**: Personalized career recommendations based on market trends and goals
- **Scholarship Navigator**: Discover scholarships and financial aid opportunities
- **User Profiles**: Track progress, goals, and achievements

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
- **Profile**: User dashboard with progress tracking
- **Authentication**: Login and signup with form validation

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

### Backend & Database
- **Supabase** for authentication and database
- **PostgreSQL** for data storage
- **Real-time subscriptions** for live updates

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

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Supabase account (for backend services)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd stream-select-smart-main
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
│   ├── Profile.tsx
│   ├── Login.tsx
│   └── Signup.tsx
├── hooks/              # Custom React hooks
│   ├── useApi.ts       # API integration hooks
│   └── use-mobile.tsx
├── services/           # API services and data fetching
│   └── api.ts
├── integrations/       # Third-party integrations
│   └── supabase/
├── lib/                # Utility functions
│   └── utils.ts
├── assets/             # Static assets
└── index.css           # Global styles and design system
```

## 🔧 API Integration

### Mock Data
The application includes comprehensive mock data for:
- Colleges and universities
- Career options with salary data
- Scholarships and financial aid
- Assessment questions and results

### Real API Integration
- **Supabase** for user authentication
- **Database tables** for user profiles, assessment results
- **Real-time updates** for collaborative features

### Data Flow
1. **Client-side routing** with React Router
2. **Data fetching** with TanStack Query
3. **State management** with React hooks
4. **Form handling** with React Hook Form
5. **API calls** through custom service layer

## 🎯 Key Features Implementation

### Assessment System
- **Multi-step forms** with progress tracking
- **Question randomization** for variety
- **Result calculation** with personalized recommendations
- **Progress saving** and resume functionality

### College Search
- **Advanced filtering** by location, type, stream
- **Search functionality** with real-time results
- **Detailed college pages** with comprehensive information
- **Comparison tools** for multiple colleges

### Career Guidance
- **Career exploration** with detailed information
- **Salary insights** and growth projections
- **Skill requirements** and development paths
- **Company information** and job market data

### User Experience
- **Responsive design** across all devices
- **Smooth animations** and transitions
- **Accessible components** with proper ARIA labels
- **Loading states** and error handling
- **Form validation** with helpful error messages

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
- **Offline support** with service workers (planned)

## 🔒 Security

- **Input validation** on both client and server
- **XSS protection** with proper sanitization
- **CSRF protection** with secure tokens
- **Secure authentication** with Supabase Auth
- **Environment variables** for sensitive data

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository
2. Set environment variables
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

- **AI-powered recommendations** with machine learning
- **Video assessments** and interactive content
- **Social features** for peer connections
- **Mobile app** with React Native
- **Advanced analytics** and reporting
- **Integration** with educational institutions
- **Multi-language support**
- **Accessibility improvements**

---

Built with ❤️ for students seeking educational guidance and career clarity.