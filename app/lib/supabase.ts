import { createClient } from '@supabase/supabase-js';

export const SUPABASE_URL = 'https://mrnbdgazbyerpltftogc.supabase.co'
export const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ybmJkZ2F6YnllcnBsdGZ0b2djIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIxOTE1ODYsImV4cCI6MjAyNzc2NzU4Nn0.qDTj0GLJrjfnu0CHf1MLZPiFVa-e9xwxEKDw7D14wds'

export default createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
