// store/companiesStore.js
import { create } from "zustand";
import { supabase } from "../utils/supabase/client";

export const useCompaniesStore = create((set) => ({
  companyData: [],
  loading: false,
  error: null,

  fetchCompanyData: async () => {
    set({ loading: true, error: null });
    try {
      const { data, error } = await supabase
        .from("companies")
        .select("id, title, imageurl");
      if (error) throw error;
      set({ companyData: data, loading: false });
    } catch (err) {
      console.error("Error fetching company data:", err);
      set({ error: "Failed to fetch company data", loading: false });
    }
  },
}));
