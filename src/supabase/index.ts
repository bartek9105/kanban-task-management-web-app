import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.REACT_APP_SUPABASE_PROJECT_URL as string;
const supabaseKey = process.env.REACT_APP_SUPABASE_API_KEY as string;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
