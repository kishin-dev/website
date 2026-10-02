# Admin API

These endpoints power the dashboard. All of them need an admin session (the dashboard's cookies), so they are not meant for plugins. Use the [Validation API](?p=keyshin&page=validation) from plugins.

| Method | Path | Description |
|---|---|---|
| POST | `/api/login` | `{"username","password"}`, starts a session |
| POST | `/api/logout` | Ends the session |
| GET | `/api/session` | The signed-in admin |
| GET | `/api/stats` | Totals for the overview |
| GET | `/api/products` | List products |
| POST | `/api/products` | Create a product |
| PATCH | `/api/products?id=…` | Edit name, description or key prefix |
| GET | `/api/licenses?q=&product=&state=&limit=&offset=` | Search licenses |
| GET | `/api/licenses?id=…` | One license with its machines |
| POST | `/api/licenses` | Issue a license |
| PATCH | `/api/licenses?id=…` | Edit, revoke (`"status":"revoked"`) or restore (`"status":"active"`) |
| DELETE | `/api/activations?id=…` | Remove a machine from its license |
