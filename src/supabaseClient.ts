// supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://cbcmbvlinobknzpyfnry.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNiY21idmxpbm9ia256cHlmbnJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQxNzcxOTcsImV4cCI6MjA1OTc1MzE5N30._SL5VSc17L6eSFM5t4SZ6UzoCZNRyqrRQWlGr22VXqI';
export const supabase = createClient(supabaseUrl, supabaseKey);
