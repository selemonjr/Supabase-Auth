import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://xqyeihbipbdqpfbpmsqj.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNjQyNzQ3MDYxLCJleHAiOjE5NTgzMjMwNjF9.gh7UYQxM_OPakm6b5s7XWgfYdq-68GTCt9UiVUy4lkc"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)