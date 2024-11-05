// store/servicesStore.js
import { create } from 'zustand';
import { supabase } from '../utils/supabase/client';

export const useServicesStore = create((set) => ({
  servicesData: [],
  loading: false,
  error: null,

  fetchServicesData: async (categorySlug) => {
    set({ loading: true, error: null });
    try {
      const { data, error } = await supabase
        .from('services')
        .select('*')
        .eq('categorySlug', categorySlug); // Fetch data based on category slug
      if (error) throw error;
      set({ servicesData: data, loading: false });
    } catch (err) {
      console.error('Error fetching services data:', err);
      set({ error: 'Failed to fetch services data', loading: false });
    }
  },
}));
