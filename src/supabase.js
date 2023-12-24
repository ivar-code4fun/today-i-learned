
import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://ixnfjsrjmolhbuqkzegg.supabase.co';
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml4bmZqc3JqbW9saGJ1cWt6ZWdnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI1MDM0MzEsImV4cCI6MjAxODA3OTQzMX0.z13bjv7PZn6Te51K_FCMM2kIZ4MYF1kH0_uelbo9hzY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;