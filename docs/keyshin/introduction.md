# KeyShin

KeyShin (鍵 key + 神 god) is a **licensing system** for Kishin projects. You issue license keys to customers, your plugins and services check them with one API call, and you can revoke a key whenever you need to.

It is a small Go service with an admin dashboard, backed by a PostgreSQL database (through Supabase). It is live at **licenses.kishin.lol**.

## Concepts

| Concept | What it is |
|---|---|
| **Product** | Anything you sell access to. Each product has a **slug** (what your plugin sends) and a **key prefix** (what its keys start with, like `DBOT-` or `MCP-`). |
| **License** | A random key such as `DBOT-VNHG-QX4Z-LEXA-ZJ74`, with an optional customer, expiry date and machine limit. |
| **Activation** | One machine using a license. KeyShin counts them so a key can't be shared beyond its limit. |
| **Validation API** | The single public endpoint your plugins call to check a key. |

## How it fits together

1. You create a product and issue a license in the dashboard.
2. You send the key to your customer.
3. Your plugin calls `POST /api/v1/validate` when it starts.
4. KeyShin answers with `valid: true` or a reason why not, written so you can show it to the customer.

## Stack

- **Go** (standard library only), deployed as Vercel serverless functions in Frankfurt
- **Supabase** for the Postgres database and admin sign-in
- **HTML, Tailwind and vanilla JavaScript** for the dashboard

## Where to go next

- [Setup](?p=keyshin&page=setup) - host your own KeyShin
- [Using the dashboard](?p=keyshin&page=dashboard) - products, licenses and revoking
- [Validation API](?p=keyshin&page=validation) - check a key from your plugin
- [Java plugin example](?p=keyshin&page=java-example) - a ready-to-adapt snippet for Paper plugins
