# Kishin

The home of every Kishin project: servers, plugins, websites and tools.
Plain HTML, CSS and JavaScript - no build step. Hosted free on Vercel.

## Adding or changing a project

Everything is in `assets/projects.js`. To add a project, copy one entry, give it a new `id`
and fill it in:

| Field | What |
|---|---|
| `id` | Short name for the link: `project.html?p=<id>` |
| `name`, `icon`, `summary` | What the card shows (icon = one character or emoji) |
| `type` | `Server`, `Plugin`, `Website`, `Tool`... - the filter buttons are made from these |
| `status` | `live`, `beta`, `dev` or `soon` - the coloured badge |
| `about`, `features` | Paragraphs and bullet points on the project page |
| `links` | Buttons: `{ label, url, primary: true }`; `{ label, copy: "ip" }` copies text; no `url` = greyed out |
| `server` | A Minecraft address - shows live online/offline and the player count |
| `featured` | `true` = the big card at the top of the home page (one project) |

`KISHIN_SITE` at the bottom holds the Discord link, the tagline and the About text.

## Deploy

1. New GitHub repository (e.g. `kishin`), upload every file and the `assets` folder.
2. vercel.com -> Add New -> Project -> import it. Framework preset: **Other**, no build command.
3. Deploy. It's live at `https://<project-name>.vercel.app`. Every commit goes live automatically.
