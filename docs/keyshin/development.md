# Local development

You need **Go 1.22+** and **Node 18+**.

```bash
cp .env.example .env       # fill in your Supabase URL and keys
npm install
npm run build              # or `npm run watch` in another terminal while editing
go run ./cmd/dev           # http://localhost:3000
```

To let the login cookies work over plain `http://localhost`, uncomment `KEYSHIN_DEV=1` in `.env`. **Never set it on Vercel.**

## Project layout

```
api/            Admin endpoints, one Vercel function per file
api/v1/         Public API your plugins call
lib/auth/       Admin sign-in with Supabase Auth, session cookies
lib/supa/       Small Supabase client (Auth + database REST API)
lib/store/      Products, licenses, key generation and validation
lib/httpx/      JSON/HTTP helpers shared by the handlers
lib/supafake/   In-memory fake Supabase Auth for tests
db/             SQL to run in the Supabase SQL Editor, in order
public/         Dashboard pages: / (login), /dashboard, /licenses, /products
web/            Tailwind source, compiled into public/css/tailwind.css
cmd/dev/        Local dev server that mimics Vercel (not deployed)
```

Each file in `api/` is deployed by Vercel as its own function, so shared code lives in `lib/`.

## Tests

```bash
go test ./...
```

The database tests in `lib/store` need a real Postgres with PostgREST and are skipped unless you point them at one:

```bash
KEYSHIN_TEST_POSTGREST_URL=http://127.0.0.1:3001 \
KEYSHIN_TEST_SERVICE_JWT=<JWT with {"role":"service_role"}> \
go test ./lib/store/
```

Use a throwaway database with `db/001_init.sql` and `db/003_licensing.sql` applied. **Never point the tests at production.**
