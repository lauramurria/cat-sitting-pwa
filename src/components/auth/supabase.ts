import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables');
  console.error('Please ensure you have a .env file in the root directory with the following variables:');
  console.error('REACT_APP_SUPABASE_URL=your-supabase-url');
  console.error('REACT_APP_SUPABASE_ANON_KEY=your-supabase-key');
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);