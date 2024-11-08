import { create } from 'zustand';
import { supabase } from '../utils/supabase/client';

export const useServicesStore = create((set) => ({
  servicesData: [],
  singleServiceData: null, // Store for a single service
  loading: false,
  error: null,

  // Fetch services data based on category slug
  fetchServicesData: async (categorySlug) => {
    set({ loading: true, error: null });
    try {
      const { data, error } = await supabase
        .from('services')
        .select('*')
        .eq('categoryslug', categorySlug);
      if (error) throw error;
      set({ servicesData: data, loading: false });
    } catch (err) {
      console.error('Error fetching services data:', err);
      set({ error: 'Failed to fetch services data', loading: false });
    }
  },

  // Fetch all services data without filtering by category
  fetchAllServicesData: async () => {
    set({ loading: true, error: null });
    try {
      const { data, error } = await supabase
        .from('services')
        .select('*');
      if (error) throw error;
      set({ servicesData: data, loading: false });
    } catch (err) {
      console.error('Error fetching all services data:', err);
      set({ error: 'Failed to fetch all services data', loading: false });
    }
  },

  // Fetch a single service by ID
  fetchSingleServiceData: async (serviceId) => {
    set({ loading: true, error: null });
    try {
      const { data, error } = await supabase
        .from('services')
        .select('*')
        .eq('id', serviceId)
        .single(); // Ensure only one item is returned
      if (error) throw error;
      set({ singleServiceData: data, loading: false });
    } catch (err) {
      console.error('Error fetching single service data:', err);
      set({ error: 'Failed to fetch single service data', loading: false });
    }
  },
}));
