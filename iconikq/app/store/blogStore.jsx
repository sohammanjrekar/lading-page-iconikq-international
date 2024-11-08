// store/blogStore.js
import { create } from "zustand";
import { supabase } from "../utils/supabase/client";

export const useBlogStore = create((set) => ({
  blogPosts: [],
  loading: false,
  error: null,

  fetchBlogPosts: async () => {
    set({ loading: true, error: null });
    try {
      const { data, error } = await supabase.from("blog_posts").select("*");
      if (error) throw error;
      set({ blogPosts: data, loading: false });
    } catch (err) {
      console.error("Error fetching blog posts:", err);
      set({ error: "Failed to fetch blog posts", loading: false });
    }
  },
}));
