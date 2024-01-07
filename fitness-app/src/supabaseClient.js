import { createClient } from "@supabase/supabase-js";

const supasbaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supasbaseKey = process.env.REACT_APP_SUPABASE_KEY;

// console.log("Supabase URL:", supasbaseUrl);
// console.log("Supabase Key:", supasbaseKey);

const supabase = createClient(supasbaseUrl, supasbaseKey);

export default supabase;
