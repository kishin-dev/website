# Using the dashboard

The dashboard has three pages: an overview, **Products** and **Licenses**.

## Create a product

Go to **Products → New product** and fill in:

- **Name** and optional description, shown only to you.
- **Slug**, for example `discord-bot-pro`. This is what your plugin sends to say which product it is. **It can't be changed later.**
- **Key prefix**, 2 to 8 letters or digits, which starts every key for this product (`DBOT` gives `DBOT-XXXX-XXXX-XXXX-XXXX`). If you leave it empty, `KSHN` is used. Keys you already issued keep their old prefix if you change it.

## Issue a license

Go to **Licenses → Issue license**, pick the product and optionally set:

- **Customer** name or email, so you can find the key later.
- **Machines allowed**, how many machines or servers may use the key at once (default 1).
- **Expiry date**, after which the key stops working. Leave empty for a license that never expires.

Copy the generated key and send it to the customer.

## Find a license

The search box on **Licenses** matches the key, the customer name and the customer email. You can also filter by product and by state: `active`, `expired` or `revoked`.

## Revoke and restore

Open a license and click **Revoke license**. Validation immediately answers `revoked`. Click restore to turn it back on.

## Free a machine slot

Each license lists the machines using it, with the label you sent. Remove an old machine to free its slot, for example when a customer moves to a new server.
