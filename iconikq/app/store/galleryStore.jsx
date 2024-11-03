// store/galleryStore.js
import { create } from 'zustand';
import { supabase } from '../utils/supabase/client';

export const useGalleryStore = create((set) => ({
  galleryData: [],
  loading: false,
  error: null,

  fetchGalleryData: async () => {
    set({ loading: true, error: null });
    try {
      const { data, error } = await supabase.from('gallery').select('*');
      if (error) throw error;
      set({ galleryData: data, loading: false });
    } catch (err) {
      console.error('Error fetching gallery data:', err);
      set({ error: 'Failed to fetch gallery data', loading: false });
    }
  },
}));
