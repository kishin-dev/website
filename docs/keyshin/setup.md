# Setup

KeyShin runs on Supabase (database and sign-in) and Vercel (hosting). Both have free tiers that are enough to start.

## 1. Supabase

1. Open **SQL Editor → New query**, paste `db/001_init.sql` and click **Run**. Do the same with `db/003_licensing.sql`. Both are safe to run again.
2. Go to **Authentication → Users → Add user → Create new user**. Enter your email and a strong password, and tick **Auto Confirm User**.
3. Open `db/002_add_admin.sql`, put in your email and the username you want to log in with, and run it in the SQL Editor.
4. Under **Authentication → Sign In / Providers**, turn off **Allow new users to sign up**. Admins are only ever added by you.
5. Under **Project Settings → API Keys**, copy the publishable key and the secret key.

## 2. Vercel

Import the repository, then add these under **Settings → Environment Variables** (all environments) and redeploy:

| Name | Value |
|---|---|
| `SUPABASE_URL` | `https://<project-ref>.supabase.co` |
| `SUPABASE_PUBLISHABLE_KEY` | `sb_publishable_...` (or the legacy anon key) |
| `SUPABASE_SECRET_KEY` | `sb_secret_...` (or the legacy service_role key) |

`vercel.json` already sets the build command, the output folder and the Frankfurt region.

> **Security:** the secret key can read and write everything. Only put it in Vercel's environment variables, never in the repository.

## 3. Sign in

Open your deployment, sign in with the username from step 1.3 and the password you chose. Continue with [Using the dashboard](?p=keyshin&page=dashboard).
