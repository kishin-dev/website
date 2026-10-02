# Kishin

The home of every Kishin project: the story, the projects and their documentation.
Static site: HTML + Tailwind CSS + a little JavaScript. No server needed.

```
index.html            home: story, projects, docs teaser, the server ("The Realm")
project.html          one project: project.html?p=<id>
docs.html             documentation: docs.html?p=<id>&page=<page>
assets/js/data.js     <- the story chapters and every project (edit this)
assets/app.css        built Tailwind CSS (generated - don't edit by hand)
src/input.css         Tailwind source: theme colours, fonts, effects
docs/<project>/       Markdown docs + _index.json (sidebar order): core, keyshin
tools/gen_core_docs.py  generates the Kishin Core reference pages from the plugin
```

## Editing text

- **Story and projects:** `assets/js/data.js`. A new project = a new entry; set `docs: true` once it has docs.
- **Docs:** write Markdown in `docs/<project>/`, then add the page to `docs/<project>/_index.json`:
  ```json
  { "id": "my-page", "title": "My page", "file": "my-page.md" }
  ```
  Link between pages with `[Pets](?p=core&page=pets)`.

## Changing the design (Tailwind)

The site uses Tailwind CSS v4. `assets/app.css` is already built, so the site works without any build step.
Only when you add or change Tailwind classes, rebuild it:

```
npm install          # once
npm run build        # rebuilds assets/app.css
npm run watch        # rebuilds on every save while you work
```

## Kishin Core reference docs

Commands, permissions and the config file pages are generated from the plugin. With the plugin repo next to
this one (`../Kishin`), run:

```
pip install pyyaml   # once
npm run docs
```

It only rewrites the generated pages and the "Reference" / "Config files" sections of `_index.json`;
hand-written pages are never touched.

## Hosting (Cloudflare Pages)

Connect this repository in Cloudflare Pages: Framework preset **None**, build command **empty**,
build output directory **`/`**. Every push goes live automatically.
