// store/achievementStore.js
import { create } from 'zustand';
import { supabase } from '../utils/supabase/client';

export const useAchievementStore = create((set) => ({
  achievementData: [],
  loading: false,
  error: null,

  fetchAchievementData: async () => {
    set({ loading: true, error: null });
    try {
      const { data, error } = await supabase.from('achievements').select('id, title, description, image_url');
      if (error) throw error;
      set({ achievementData: data, loading: false });
    } catch (err) {
      console.error('Error fetching achievement data:', err);
      set({ error: 'Failed to fetch achievement data', loading: false });
    }
  },
}));
