import { useState, useEffect, createContext, useContext, ReactNode, useCallback } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import apiService, { College, Career, Scholarship, Assessment } from '@/services/api';
import { supabase } from '@/integrations/supabase/client';

// Custom hook for colleges
export const useColleges = (filters?: {
  search?: string;
  location?: string;
  type?: string;
  stream?: string;
}) => {
  return useQuery({
    queryKey: ['colleges', filters],
    queryFn: () => apiService.getColleges(filters),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export const useCollege = (id: number) => {
  return useQuery({
    queryKey: ['college', id],
    queryFn: () => apiService.getCollegeById(id),
    enabled: !!id,
  });
};

// Custom hook for careers
export const useCareers = (filters?: {
  search?: string;
  category?: string;
  experience?: string;
  salary?: string;
}) => {
  return useQuery({
    queryKey: ['careers', filters],
    queryFn: () => apiService.getCareers(filters),
    staleTime: 5 * 60 * 1000,
  });
};

export const useCareer = (id: number) => {
  return useQuery({
    queryKey: ['career', id],
    queryFn: () => apiService.getCareerById(id),
    enabled: !!id,
  });
};

// Custom hook for scholarships
export const useScholarships = (filters?: {
  search?: string;
  category?: string;
  amount?: string;
  deadline?: string;
}) => {
  return useQuery({
    queryKey: ['scholarships', filters],
    queryFn: () => apiService.getScholarships(filters),
    staleTime: 5 * 60 * 1000,
  });
};

export const useScholarship = (id: number) => {
  return useQuery({
    queryKey: ['scholarship', id],
    queryFn: () => apiService.getScholarshipById(id),
    enabled: !!id,
  });
};

// Custom hook for assessments
export const useAssessments = (category?: string) => {
  return useQuery({
    queryKey: ['assessments', category],
    queryFn: () => apiService.getAssessments(category),
    staleTime: 5 * 60 * 1000,
  });
};

export const useAssessment = (id: number) => {
  return useQuery({
    queryKey: ['assessment', id],
    queryFn: () => apiService.getAssessmentById(id),
    enabled: !!id,
  });
};

// Custom hook for authentication
export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      try {
        const currentUser = await apiService.getCurrentUser();
        setUser(currentUser);
      } catch (error) {
        console.error('Error getting user:', error);
      } finally {
        setLoading(false);
      }
    };

    getUser();

    // Listen for auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setUser(session?.user ?? null);
        setLoading(false);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const signUp = useMutation({
    mutationFn: ({ email, password, userData }: { email: string; password: string; userData: any }) =>
      apiService.signUp(email, password, userData),
    onSuccess: (data) => {
      // Don't set user here as they need to verify OTP first
      console.log('Signup successful, OTP sent');
    },
  });

  const signIn = useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      apiService.signIn(email, password),
    onSuccess: (data) => {
      setUser(data.user);
    },
  });

  const signInWithOtp = useMutation({
    mutationFn: async ({ email }: { email: string }) => {
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          shouldCreateUser: false,
        }
      });
      if (error) throw error;
    },
  });

  const verifyOtp = useMutation({
    mutationFn: async ({ email, token }: { email: string; token: string }) => {
      const { data, error } = await supabase.auth.verifyOtp({
        email,
        token,
        type: 'email'
      });
      if (error) throw error;
      return data;
    },
    onSuccess: (data) => {
      setUser(data.user);
    },
  });

  const signOut = useMutation({
    mutationFn: apiService.signOut,
    onSuccess: () => {
      setUser(null);
    },
  });

  return {
    user,
    loading,
    signUp,
    signIn,
    signInWithOtp,
    verifyOtp,
    signOut,
    isAuthenticated: !!user,
  };
};

// Custom hook for user profile
export const useUserProfile = (userId?: string) => {
  return useQuery({
    queryKey: ['userProfile', userId],
    queryFn: () => apiService.getUserProfile(userId!),
    enabled: !!userId,
  });
};

export const useUpdateUserProfile = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ userId, profileData }: { userId: string; profileData: any }) =>
      apiService.updateUserProfile(userId, profileData),
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: ['userProfile', variables.userId] });
    },
  });
};

// Custom hook for assessment results
export const useAssessmentResults = (userId?: string) => {
  return useQuery({
    queryKey: ['assessmentResults', userId],
    queryFn: () => apiService.getAssessmentResults(userId!),
    enabled: !!userId,
  });
};

export const useSaveAssessmentResult = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ userId, assessmentId, answers, result }: {
      userId: string;
      assessmentId: number;
      answers: any;
      result: any;
    }) => apiService.saveAssessmentResult(userId, assessmentId, answers, result),
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: ['assessmentResults', variables.userId] });
    },
  });
};

// Custom hook for loading states
export const useLoading = () => {
  const [loading, setLoading] = useState(false);

  async function withLoading<T>(asyncFn: () => Promise<T>): Promise<T> {
    setLoading(true);
    try {
      const result = await asyncFn();
      return result;
    } finally {
      setLoading(false);
    }
  }

  return { loading, withLoading };
};

// Custom hook for error handling
export const useError = () => {
  const [error, setError] = useState<string | null>(null);

  const handleError = (err: any) => {
    const errorMessage = err?.message || 'An unexpected error occurred';
    setError(errorMessage);
    console.error('API Error:', err);
  };

  const clearError = () => setError(null);

  return { error, handleError, clearError };
};

export default {
  useColleges,
  useCollege,
  useCareers,
  useCareer,
  useScholarships,
  useScholarship,
  useAssessments,
  useAssessment,
  useAuth,
  useUserProfile,
  useUpdateUserProfile,
  useAssessmentResults,
  useSaveAssessmentResult,
  useLoading,
  useError,
};

// ---------- API Key Context (Gemini) ----------
import { idbGet, idbSet, idbDel } from '@/lib/utils';

type ApiKeyContextValue = {
  apiKey?: string;
  loading: boolean;
  setKey: (key: string) => Promise<void>;
  clearKey: () => Promise<void>;
  refresh: () => Promise<void>;
};

const ApiKeyContext = createContext<ApiKeyContextValue | undefined>(undefined);

export const ApiKeyProvider = ({ children }: { children: ReactNode }) => {
  const [apiKey, setApiKey] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    setLoading(true);
    try {
      const stored = await idbGet<string>('gemini_api_key');
      setApiKey(stored);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const setKey = async (key: string) => {
    await idbSet('gemini_api_key', key);
    setApiKey(key);
  };

  const clearKey = async () => {
    await idbDel('gemini_api_key');
    setApiKey(undefined);
  };

  return (
    <ApiKeyContext.Provider value={{ apiKey, loading, setKey, clearKey, refresh }}>
      {children}
    </ApiKeyContext.Provider>
  );
};

export const useApiKey = () => {
  const ctx = useContext(ApiKeyContext);
  if (!ctx) throw new Error('useApiKey must be used within ApiKeyProvider');
  return ctx;
};


