# Installation

## Requirements

| | |
|---|---|
| **Server** | [Paper](https://papermc.io) 1.21 (or a Paper fork) |
| **Java** | 21 or newer |
| **Database** | PostgreSQL (recommended), MySQL 8+ / MariaDB 10.5+, or SQLite for small and test servers |
| **Plugins** | [PacketEvents](https://modrinth.com/plugin/packetevents) (for the tab list grid and NPCs) |
| **Optional** | PlaceholderAPI, Vault, WorldEdit / FastAsyncWorldEdit |

Kishin downloads its own database drivers on the first start (Paper's `libraries` feature), so there's nothing else to install.

## Steps

1. Put `Kishin.jar` (and PacketEvents) in your server's `plugins` folder.
2. Start the server once so Kishin creates `plugins/Kishin/` with every config file, then stop it.
3. Open `plugins/Kishin/config.yml` and fill in the `database` section:

```yaml
database:
  type: "postgresql"      # postgresql | mysql | sqlite
  host: "localhost"
  port: 5432
  name: "kishin"
  user: "kishin"
  password: "your-password"
  ssl-mode: "require"     # postgresql: disable | require | verify-full
```

4. Restart. Kishin creates all of its tables by itself - and adds new columns on later updates, so you never have to run SQL by hand.

> **Tip:** for a quick test server use `type: "sqlite"`. Everything is stored in `plugins/Kishin/database.db` and the connection settings are ignored.

> **Security:** your database password only belongs in the server's `plugins/Kishin/config.yml`. Never commit it to a repository or share the file.

## Worlds

Islands live in their own world, `islands` by default (`config.yml` -> `islands.world`). Kishin creates it if it doesn't exist. The hub is the world in `hub.world`.

For extra worlds (for example a separate arena world for bosses) use the built-in world tool:

```
/world create arenas void
/world arenas
```

## Running next to other plugins

If another plugin already owns commands like `/home`, `/ban` or `/msg`, switch that group off in `config.yml`:

```yaml
modules:
  moderation: true
  homes: true
  teleport-requests: true
  messaging: true
  essentials: true
  economy-commands: true
  vault-economy: true     # Kishin as the Vault economy
  chat-format: true
  chat-filter: true
```

Restart the server after changing `modules`.
