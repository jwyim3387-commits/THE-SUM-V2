// supabase-config.js
// Supabase V2 Client Initialization Placeholder for THE SUM V2

const SUPABASE_URL = 'https://rlxvvrheiluqzrgqheds.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_77rSQxD6gRGo7w7L8zL-Dw_mGnx6vP2';

let supabaseClient = null;

// Initialize client only if Supabase JS SDK CDN has loaded successfully
if (typeof window.supabase !== 'undefined' && typeof window.supabase.createClient === 'function') {
  supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
} else {
  console.warn("Supabase SDK is not loaded. Please ensure the CDN script is included in index.html.");
}

// Expose globally for index.html scripts
window.supabase = supabaseClient;
