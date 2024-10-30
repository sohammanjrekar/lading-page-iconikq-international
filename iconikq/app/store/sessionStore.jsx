// stores/sessionStore.js
import { create } from 'zustand';

export const useSessionStore = create((set) => ({
  isAuthenticated: false,
  login: () => set({ isAuthenticated: true }),
  logout: () => set({ isAuthenticated: false }),
}));
