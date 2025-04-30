import { createClient } from '@supabase/supabase-js'

// Get the environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Check if the environment variables are loaded
if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Supabase URL or Anon Key is not set in environment variables!')
  // Depending on how critical this is, you might want to throw an error
  // throw new Error('Supabase environment variables not set')
}

// Create a single supabase client for interacting with your database
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

console.log('Supabase client initialized!') // Optional: just to confirm it runs