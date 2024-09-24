// apps/docs/utils/supabaseClient.ts

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Supabase URL or Anon Key is missing:");
  console.log("NEXT_PUBLIC_SUPABASE_URL:", supabaseUrl);
  console.log("NEXT_PUBLIC_SUPABASE_ANON_KEY:", supabaseAnonKey);
} else {
  console.log("Supabase environment variables are loaded successfully.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);