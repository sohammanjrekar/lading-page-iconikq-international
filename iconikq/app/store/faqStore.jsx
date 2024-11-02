// store/faqStore.js
import { create } from 'zustand';
import { supabase } from '../utils/supabase/client';

export const useFaqStore = create((set) => ({
  faqData: [],
  loading: false,
  error: null,

  fetchFaqData: async () => {
    set({ loading: true, error: null });
    try {
      const { data, error } = await supabase.from('faqs').select('*');
      if (error) throw error;
      set({ faqData: data, loading: false });
    } catch (err) {
      console.error('Error fetching FAQ data:', err);
      set({ error: 'Failed to fetch FAQ data', loading: false });
    }
  },
}));
