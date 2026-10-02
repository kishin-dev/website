# Security

## Sign-in

Sign-in goes through Supabase Auth, which hashes passwords and rate-limits attempts. Admins type a username and the server looks up the matching Supabase user. **Only users listed in the `admins` table can sign in**, even if someone manages to create a Supabase account.

## Sessions

Sessions use Supabase's access and refresh tokens, stored in `HttpOnly`, `Secure`, `SameSite=Strict`, `__Host-` cookies that browser JavaScript can't read.

- A warm server instance remembers a verified session for 30 seconds so the dashboard stays fast.
- Logging out takes effect immediately. Removing an admin takes effect within 30 seconds.
- Sessions end after 12 hours of inactivity.

## Database

Every table has Row Level Security and no privileges for the public roles, so the publishable key can't read anything. Only the server, using the secret key, can.

## License keys

Keys carry 80 random bits, far too many to guess. Activation limits are enforced inside the database with a row lock, so they hold even when many machines activate at the same moment.

## The dashboard pages

The dashboard HTML is public, like any static file, but holds no data. All data comes from API endpoints that check the session.

## Good practice

- Keep `SUPABASE_SECRET_KEY` only in Vercel's environment variables. The repository is public.
- Disable sign-ups in Supabase so only you can add admins.
- Remember that licensing deters casual sharing. Code running on a customer's machine can always be modified, so treat KeyShin as a seal, not a vault.
