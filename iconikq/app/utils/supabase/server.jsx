import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { createPagesBrowserClient } from "@supabase/auth-helpers-nextjs";

export const serverSupabaseClient = createServerSupabaseClient();
export const pagesBrowserClient = createPagesBrowserClient();
