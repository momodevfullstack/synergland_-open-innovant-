import { create } from 'zustand';

export type UserRole = 'creator' | 'contributor' | null;

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

interface AuthState {
  user: UserProfile | null;
  isAuthenticated: boolean;
  setAuth: (user: UserProfile) => void;
  logout: () => void;
  setRole: (role: UserRole) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null, // Default to null, set dummy data for tests if needed
  isAuthenticated: false,
  setAuth: (user) => set({ user, isAuthenticated: true }),
  logout: () => set({ user: null, isAuthenticated: false }),
  setRole: (role) => set((state) => ({ 
    user: state.user ? { ...state.user, role } : null 
  })),
}));
