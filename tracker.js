# Copy this file to .env.local and fill in your values.
# .env.local is gitignored — never commit real keys.

# From Supabase → Settings → API
REACT_APP_SUPABASE_URL=https://YOURPROJECT.supabase.co
REACT_APP_SUPABASE_ANON_KEY=eyJ...your-anon-key...

# Your Vercel project URL + the ingest function path
# Use http://localhost:3000/api/ingest for local dev (with vercel dev)
REACT_APP_INGEST_URL=https://YOUR-PROJECT.vercel.app/api/ingest

# Server-side only — used by api/ingest.js, never sent to browser
SUPABASE_URL=https://YOURPROJECT.supabase.co
SUPABASE_SERVICE_ROLE_KEY=eyJ...your-service-role-key...
