import { createClient } from "@supabase/supabase-js";

//where we store supabase url and key

export const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);
