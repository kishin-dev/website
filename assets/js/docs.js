/* docs.html?p=<project>&page=<page> - renders docs/<project>/<file>.md with a sidebar,
 * search, "on this page" and prev/next. The page list lives in docs/<project>/_index.json. */
(() => {
  "use strict";
  const K = window.KISHIN;
  const { esc, toast } = window.KishinUI;
  const $ = (s) => document.querySelector(s);

  const projects = K.projects.filter((p) => p.docs);
  let project = null;   // current project
  let index = null;     // its _index.json
  let flat = [];        // every page, in order
  const cache = new Map();

  const slug = (t) => t.toLowerCase().replace(/<[^>]+>/g, "").replace(/[^\w\s-]/g, "").trim().replace(/\s+/g, "-");

  async function loadIndex(id) {
    const res = await fetch(`docs/${id}/_index.json`, { cache: "no-cache" });
    if (!res.ok) throw new Error(`No docs index for ${id}`);
    return res.json();
  }

  async function loadPage(page) {
    const key = `${project.id}/${page.file}`;
    if (!cache.has(key)) {
      const res = await fetch(`docs/${project.id}/${page.file}`, { cache: "no-cache" });
      cache.set(key, res.ok ? await res.text() : `# Not found\n\nThis page is missing (\`${page.file}\`).`);
    }
    return cache.get(key);
  }

  // ------------------------------------------------------------------ sidebar
  function drawNav(activeId) {
    $("#nav").innerHTML = index.sections.map((s) => `<div>
      <p class="mb-2 text-[11px] font-bold uppercase tracking-[.25em] text-ash">${esc(s.title)}</p>
      <ul class="space-y-0.5 border-l border-white/10">${s.pages.map((p) => `<li>
        <a href="?p=${encodeURIComponent(project.id)}&page=${encodeURIComponent(p.id)}" data-page="${esc(p.id)}"
          class="-ml-px block border-l py-1.5 pl-4 transition ${p.id === activeId ? "border-crimson font-semibold text-bone" : "border-transparent text-ash hover:border-white/30 hover:text-bone"}">${esc(p.title)}</a></li>`).join("")}</ul>
    </div>`).join("");
  }

  function setMenu(open) {
    $("#sidebar").classList.toggle("-translate-x-full", !open);
    $("#scrim").classList.toggle("hidden", !open);
  }

  // ------------------------------------------------------------------ page
  async function show(pageId, push) {
    const page = flat.find((p) => p.id === pageId) || flat[0];
    if (!page) return;
    if (push) history.pushState(null, "", `?p=${encodeURIComponent(project.id)}&page=${encodeURIComponent(page.id)}`);
    drawNav(page.id);
    setMenu(false);
    const md = await loadPage(page);
    const article = $("#article");
    article.innerHTML = marked.parse(md, { gfm: true });

    // headings: ids + hover anchors + table of contents
    const toc = [];
    article.querySelectorAll("h2, h3").forEach((h) => {
      h.id = h.id || slug(h.textContent);
      h.classList.add("group");
      h.insertAdjacentHTML("beforeend", ` <a href="#${h.id}" class="ml-1 text-ember no-underline opacity-0 transition group-hover:opacity-100" aria-label="Link to this section">#</a>`);
      toc.push(`<a href="#${h.id}" class="-ml-px block border-l border-transparent py-1 ${h.tagName === "H3" ? "pl-7" : "pl-4"} text-ash transition hover:border-crimson hover:text-bone">${esc(h.textContent.replace(/#$/, "").trim())}</a>`);
    });
    $("#toc").innerHTML = toc.join("") || `<span class="pl-4 text-ash/60">-</span>`;

    // code: highlighting + copy buttons
    article.querySelectorAll("pre > code").forEach((code) => {
      if (window.hljs) hljs.highlightElement(code);
      const pre = code.parentElement;
      pre.classList.add("relative", "group");
      const btn = document.createElement("button");
      btn.type = "button";
      btn.textContent = "Copy";
      btn.className = "absolute right-3 top-3 rounded-md border border-white/10 bg-ink/90 px-2 py-1 font-sans text-xs font-semibold text-ash opacity-0 transition group-hover:opacity-100 hover:text-bone";
      btn.addEventListener("click", async () => {
        try { await navigator.clipboard.writeText(code.innerText); btn.textContent = "Copied!"; setTimeout(() => (btn.textContent = "Copy"), 1500); }
        catch { toast("Couldn't copy"); }
      });
      pre.appendChild(btn);
    });
    article.querySelectorAll("a[href^='http']").forEach((a) => { a.target = "_blank"; a.rel = "noopener"; });

    // breadcrumbs, title, prev / next
    const section = index.sections.find((s) => s.pages.some((p) => p.id === page.id));
    $("#crumbs").innerHTML = `<span class="text-ember">${esc(index.title)}</span><span>/</span><span>${esc(section ? section.title : "")}</span>`;
    document.title = `${page.title} · ${index.title} · Kishin Docs`;
    const i = flat.indexOf(page);
    const link = (p, dir) => p ? `<a href="?p=${encodeURIComponent(project.id)}&page=${encodeURIComponent(p.id)}" data-page="${esc(p.id)}"
      class="group rounded-2xl border border-white/10 bg-panel/80 p-5 transition hover:border-crimson/50 ${dir === "next" ? "sm:col-start-2 sm:text-right" : ""}">
      <span class="text-xs font-bold uppercase tracking-[.2em] text-ash">${dir === "next" ? "Next" : "Previous"}</span>
      <span class="mt-1 block font-semibold text-bone group-hover:text-ember">${dir === "next" ? "" : "← "}${esc(p.title)}${dir === "next" ? " →" : ""}</span></a>` : "";
    $("#pager").innerHTML = link(flat[i - 1], "prev") + link(flat[i + 1], "next");

    if (location.hash) document.getElementById(location.hash.slice(1))?.scrollIntoView();
    else if (push) scrollTo({ top: 0 });
  }

  // ------------------------------------------------------------------ search
  let searchReady = null;
  async function preloadAll() {
    if (!searchReady) searchReady = Promise.all(flat.map((p) => loadPage(p)));
    return searchReady;
  }

  async function search(q) {
    const query = q.trim().toLowerCase();
    if (!query) { drawNav(new URLSearchParams(location.search).get("page") || flat[0].id); return; }
    await preloadAll();
    const results = [];
    for (const p of flat) {
      const text = cache.get(`${project.id}/${p.file}`) || "";
      const plain = text.replace(/```[\s\S]*?```/g, " ").replace(/[#*`>|_-]/g, " ").replace(/\s+/g, " ");
      const inTitle = p.title.toLowerCase().includes(query);
      const at = plain.toLowerCase().indexOf(query);
      if (!inTitle && at < 0) continue;
      const snippet = at >= 0 ? plain.slice(Math.max(0, at - 40), at + query.length + 60) : "";
      results.push({ p, score: inTitle ? 2 : 1, snippet });
    }
    results.sort((a, b) => b.score - a.score);
    const mark = (s) => esc(s).replace(new RegExp(esc(query).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi"), (m) => `<mark class="rounded bg-crimson/40 px-0.5 text-bone">${m}</mark>`);
    $("#nav").innerHTML = `<p class="text-[11px] font-bold uppercase tracking-[.25em] text-ash">${results.length} result${results.length === 1 ? "" : "s"}</p>` +
      results.map((r) => `<a href="?p=${encodeURIComponent(project.id)}&page=${encodeURIComponent(r.p.id)}" data-page="${esc(r.p.id)}"
        class="block rounded-xl border border-white/5 bg-panel/70 p-3 transition hover:border-crimson/50">
        <span class="font-semibold text-bone">${mark(r.p.title)}</span>
        ${r.snippet ? `<span class="mt-1 block text-xs leading-relaxed text-ash">…${mark(r.snippet)}…</span>` : ""}</a>`).join("");
  }

  // ------------------------------------------------------------------ start
  async function openProject(id, pageId, push) {
    project = projects.find((p) => p.id === id) || projects[0];
    if (!project) {
      $("#article").innerHTML = "<h1>Documentation</h1><p>No project has docs yet.</p>";
      return;
    }
    $("#projectSelect").value = project.id;
    index = await loadIndex(project.id);
    flat = index.sections.flatMap((s) => s.pages);
    searchReady = null;
    $("#search").value = "";
    await show(pageId, push);
  }

  document.addEventListener("DOMContentLoaded", async () => {
    $("#projectSelect").innerHTML = projects.map((p) => `<option value="${esc(p.id)}">${esc(p.name)}</option>`).join("");
    $("#projectSelect").addEventListener("change", (e) => openProject(e.target.value, null, true));
    $("#navBtn").addEventListener("click", () => setMenu(true));
    $("#scrim").addEventListener("click", () => setMenu(false));

    // in-page navigation without reloading
    document.addEventListener("click", (e) => {
      const a = e.target.closest("a[href^='?']");
      if (!a) return;
      const params = new URLSearchParams(a.getAttribute("href").slice(1));
      if (params.get("p") && params.get("p") !== project?.id) return; // another project: normal load
      e.preventDefault();
      $("#search").value = "";
      show(params.get("page"), true);
    });
    addEventListener("popstate", () => {
      const q = new URLSearchParams(location.search);
      openProject(q.get("p"), q.get("page"), false);
    });

    let timer;
    $("#search").addEventListener("input", (e) => { clearTimeout(timer); timer = setTimeout(() => search(e.target.value), 120); });
    $("#search").addEventListener("focus", () => preloadAll());
    addEventListener("keydown", (e) => {
      if (e.key === "/" && document.activeElement !== $("#search")) { e.preventDefault(); $("#search").focus(); }
      if (e.key === "Escape") setMenu(false);
    });

    const q = new URLSearchParams(location.search);
    try { await openProject(q.get("p"), q.get("page"), false); }
    catch (err) { $("#article").innerHTML = `<h1>Docs unavailable</h1><p>${esc(err.message)}</p>`; }
  });
})();
