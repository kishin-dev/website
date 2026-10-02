# Validation API

One public endpoint, no login needed. Call it when your plugin or service starts.

```
POST https://licenses.kishin.lol/api/v1/validate
Content-Type: application/json
```

## Request

```json
{
  "key": "DBOT-VNHG-QX4Z-LEXA-ZJ74",
  "product": "discord-bot-pro",
  "fingerprint": "a-stable-id-for-this-machine",
  "label": "bot-server-1"
}
```

| Field | Required | Meaning |
|---|---|---|
| `key` | yes | The key the customer entered. Case and surrounding spaces don't matter. |
| `product` | yes | The product's slug. |
| `fingerprint` | no | Something that stays the same on one machine, like a hash of the machine ID. With it, the machine takes one of the license's slots. Without it, the key is checked but no machine is recorded. |
| `label` | no | A readable name shown in the dashboard, like a hostname. |

## Response

The answer is always HTTP `200` when the check itself worked.

```json
{
  "valid": true,
  "code": "valid",
  "message": "License is valid.",
  "product": "discord-bot-pro",
  "expiresAt": null,
  "maxActivations": 2,
  "activations": 1,
  "newActivation": true
}
```

A failed check looks like this:

```json
{
  "valid": false,
  "code": "activation_limit",
  "message": "This license is already active on the maximum number of machines. ...",
  "maxActivations": 2,
  "activations": 2
}
```

## Result codes

| `code` | Meaning |
|---|---|
| `valid` | The key works for this product on this machine. |
| `not_found` | No such key. |
| `wrong_product` | The key exists, but for a different product. |
| `revoked` | You revoked it. |
| `expired` | Past its expiry date. |
| `activation_limit` | All machine slots are taken by other machines. |

`message` is written for customers, so your plugin can show it directly.

## Errors

Other HTTP statuses mean the request itself was wrong (`400`, with an `error` field) or KeyShin couldn't reach the database (`502`). Treat these as **"couldn't check"**, not as "invalid".

> **Tip:** remember the last successful check for a while, for example 24 hours, and only refuse to run when the server *says* the key is invalid. That way a short KeyShin outage, or the customer's internet, never stops your plugin.

## Example (JavaScript, Node 18+)

```js
async function checkLicense(key) {
  const res = await fetch('https://licenses.kishin.lol/api/v1/validate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      key,
      product: 'discord-bot-pro',
      fingerprint: machineId(),
      label: os.hostname(),
    }),
    signal: AbortSignal.timeout(8000),
  });
  if (!res.ok) throw new Error(`License server error ${res.status}`);
  return res.json(); // { valid, code, message, ... }
}
```

For a Paper plugin, see the [Java plugin example](?p=keyshin&page=java-example).
