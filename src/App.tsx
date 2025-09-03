import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Assessments from "./pages/Assessments";
import Colleges from "./pages/Colleges";
import Careers from "./pages/Careers";
import Scholarships from "./pages/Scholarships";
import StreamSelector from "./pages/StreamSelector";
import CareerCompass from "./pages/CareerCompass";
import CollegeDetails from "./pages/CollegeDetails";
import CareerDetails from "./pages/CareerDetails";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Settings from "./pages/Settings";
import VerifyOtp from "./pages/VerifyOtp";
import Pricing from "./pages/Pricing";
import { ApiKeyProvider } from "./hooks/useApi";
import { SubscriptionProvider } from "./hooks/useSubscription";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ApiKeyProvider>
          <SubscriptionProvider>
            <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/assessments" element={<Assessments />} />
          <Route path="/colleges" element={<Colleges />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/scholarships" element={<Scholarships />} />
          <Route path="/stream-selector" element={<StreamSelector />} />
          <Route path="/career-compass" element={<CareerCompass />} />
          <Route path="/college/:id" element={<CollegeDetails />} />
          <Route path="/career/:id" element={<CareerDetails />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/verify-otp" element={<VerifyOtp />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/settings" element={<Settings />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
          </Routes>
          </SubscriptionProvider>
        </ApiKeyProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
