import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Si alguna es undefined, esto nos avisará en la consola antes del error
if (!supabaseUrl || !supabaseAnonKey) {
  console.error("⚠️ Error: Las variables de entorno de Supabase no están cargadas. Revisa tu archivo .env");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);