// store/certificateStore.js
import { create } from 'zustand';
import { supabase } from '../utils/supabase/client';

export const useCertificateStore = create((set) => ({
  certificateData: [],
  loading: false,
  error: null,

  fetchCertificateData: async () => {
    set({ loading: true, error: null });
    try {
      const { data, error } = await supabase.from('certificates').select('*');
      if (error) throw error;
      set({ certificateData: data, loading: false });
    } catch (err) {
      console.error('Error fetching certificate data:', err);
      set({ error: 'Failed to fetch certificate data', loading: false });
    }
  },
}));
