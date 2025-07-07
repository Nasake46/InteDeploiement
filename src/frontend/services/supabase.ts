import { createClient } from '@supabase/supabase-js';

import('dotenv').then(dotenv => dotenv.config());

const supabaseUrl = process.env.VITE_SUPABASE_URL!;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY!;

console.log('SUPABASE_URL =', supabaseUrl);
console.log('SUPABASE_ANON_KEY =', supabaseAnonKey);

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
