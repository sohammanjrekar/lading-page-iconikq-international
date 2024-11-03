// store/mediaStore.js
import { create } from 'zustand';
import { supabase } from '../utils/supabase/client';

export const useMediaStore = create((set) => ({
  mediaData: [],
  loading: false,
  error: null,

  fetchMediaData: async () => {
    set({ loading: true, error: null });
    try {
      const { data, error } = await supabase.from('media').select('*');
      if (error) throw error;
      set({ mediaData: data, loading: false });
    } catch (err) {
      console.error('Error fetching media data:', err);
      set({ error: 'Failed to fetch media data', loading: false });
    }
  },
}));
