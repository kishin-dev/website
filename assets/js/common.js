/* Shared by every page: header, footer, scroll reveal, spotlight cards, embers, helpers. */
(() => {
  "use strict";
  const K = window.KISHIN || { projects: [] };

  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const STATUS = {
    live: ["Live", "bg-emerald-400/15 text-emerald-300 ring-emerald-400/30"],
    beta: ["Open beta", "bg-amber-300/15 text-amber-200 ring-amber-300/30"],
    dev: ["In development", "bg-sky-400/15 text-sky-300 ring-sky-400/30"],
    planned: ["Planned", "bg-crimson/20 text-ember ring-crimson/40"],
  };

  function badge(status) {
    const [label, cls] = STATUS[status] || [status, "bg-white/10 text-bone ring-white/20"];
    return `<span class="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider ring-1 ${cls}">
      <span class="size-1.5 rounded-full bg-current"></span>${esc(label)}</span>`;
  }

  function toast(msg) {
    let t = document.getElementById("toast");
    if (!t) {
      t = document.createElement("div");
      t.id = "toast";
      t.setAttribute("role", "status");
      t.className = "fixed bottom-6 left-1/2 z-[70] -translate-x-1/2 translate-y-24 rounded-xl border border-crimson/50 bg-panel/95 px-5 py-3 text-sm font-semibold opacity-0 shadow-2xl shadow-black/60 backdrop-blur transition duration-300";
      document.body.appendChild(t);
    }
    t.textContent = msg;
    t.classList.remove("translate-y-24", "opacity-0");
    clearTimeout(toast.timer);
    toast.timer = setTimeout(() => t.classList.add("translate-y-24", "opacity-0"), 2600);
  }

  async function copy(text, msg) {
    try { await navigator.clipboard.writeText(text); toast(msg || `Copied ${text}`); }
    catch { toast(text); }
  }

  function serverStatus(el, address) {
    if (!el || !address) return;
    const draw = (dot, text) => {
      el.innerHTML = `<span class="relative flex size-2.5">${dot ? `<span class="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60"></span>` : ""}
        <span class="relative inline-flex size-2.5 rounded-full ${dot ? "bg-emerald-400" : "bg-white/30"}"></span></span>
        <span class="font-mono text-sm">${esc(address)}</span><span class="text-sm text-ash">${esc(text)}</span>`;
    };
    draw(false, "checking...");
    fetch(`https://api.mcsrvstat.us/3/${encodeURIComponent(address)}`)
      .then((r) => r.json())
      .then((s) => draw(!!(s && s.online), s && s.online ? `${(s.players && s.players.online) || 0} online` : "offline"))
      .catch(() => draw(false, ""));
  }

  // ------------------------------------------------------------------ header / footer
  function header(active) {
    const link = (href, label, key) =>
      `<a href="${href}" class="rounded-lg px-3 py-2 text-sm font-semibold transition ${active === key ? "text-bone" : "text-ash hover:text-bone"}">${label}</a>`;
    return `<header class="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-ink/60 backdrop-blur-xl">
      <div class="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6">
        <a href="./" class="group flex items-center gap-2.5">
          <span class="grid size-9 place-items-center rounded-xl bg-crimson/15 font-kanji text-lg font-black text-ember ring-1 ring-crimson/40 transition group-hover:bg-crimson group-hover:text-white">鬼</span>
          <span class="font-display text-2xl tracking-[.18em]">KISHIN</span>
        </a>
        <nav class="ml-4 hidden items-center gap-1 md:flex">
          ${link("./#story", "Story", "story")}
          ${link("./#works", "Projects", "works")}
          ${link("docs.html", "Docs", "docs")}
          ${link("./#realm", "The Realm", "realm")}
        </nav>
        <div class="ml-auto flex items-center gap-2">
          ${K.github ? `<a href="${esc(K.github)}" target="_blank" rel="noopener" aria-label="GitHub" class="grid size-9 place-items-center rounded-lg text-ash transition hover:bg-white/5 hover:text-bone">
            <svg viewBox="0 0 24 24" class="size-5" fill="currentColor"><path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.78 1.2 1.78 1.2 1.04 1.77 2.72 1.26 3.38.96.1-.75.4-1.26.74-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.81 1.19 1.83 1.19 3.09 0 4.41-2.7 5.38-5.26 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z"/></svg></a>` : ""}
          <a href="${esc(K.discord)}" target="_blank" rel="noopener" class="rounded-lg bg-crimson px-3.5 py-2 text-sm font-bold text-white shadow-lg shadow-crimson/30 transition hover:bg-ember">Discord</a>
          <button id="menuBtn" class="grid size-9 place-items-center rounded-lg text-ash hover:bg-white/5 md:hidden" aria-label="Menu">
            <svg viewBox="0 0 24 24" class="size-5" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
          </button>
        </div>
      </div>
      <nav id="mobileNav" class="hidden border-t border-white/5 px-4 pb-4 md:hidden">
        <div class="flex flex-col pt-2">${link("./#story", "Story", "story")}${link("./#works", "Projects", "works")}${link("docs.html", "Docs", "docs")}${link("./#realm", "The Realm", "realm")}</div>
      </nav>
    </header>`;
  }

  function footer() {
    return `<footer class="relative border-t border-white/5 bg-coal/60">
      <div class="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div class="flex items-center gap-3"><span class="font-kanji text-3xl font-black text-ember">鬼神</span><span class="font-display text-3xl tracking-[.18em]">KISHIN</span></div>
          <p class="mt-3 max-w-sm text-sm text-ash">Minecraft servers, plugins and tools - with a story behind every one of them.</p>
        </div>
        <div>
          <h4 class="text-xs font-bold uppercase tracking-[.2em] text-ash">Projects</h4>
          <ul class="mt-3 space-y-2 text-sm">${(K.projects || []).map((p) => `<li><a class="text-bone/80 hover:text-ember" href="project.html?p=${encodeURIComponent(p.id)}">${esc(p.name)}</a></li>`).join("")}</ul>
        </div>
        <div>
          <h4 class="text-xs font-bold uppercase tracking-[.2em] text-ash">Community</h4>
          <ul class="mt-3 space-y-2 text-sm">
            <li><a class="text-bone/80 hover:text-ember" href="docs.html">Documentation</a></li>
            <li><a class="text-bone/80 hover:text-ember" href="${esc(K.discord)}" target="_blank" rel="noopener">Discord</a></li>
            ${K.github ? `<li><a class="text-bone/80 hover:text-ember" href="${esc(K.github)}" target="_blank" rel="noopener">GitHub</a></li>` : ""}
          </ul>
        </div>
      </div>
      <p class="border-t border-white/5 px-4 py-6 text-center text-xs text-ash/70">© ${new Date().getFullYear()} Kishin · Not affiliated with or endorsed by Mojang Studios or Microsoft. Minecraft is a trademark of Mojang Studios.</p>
    </footer>`;
  }

  // ------------------------------------------------------------------ effects
  function reveal() {
    const items = document.querySelectorAll(".reveal:not(.in)");
    if (!("IntersectionObserver" in window)) { items.forEach((e) => e.classList.add("in")); return; }
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    items.forEach((e) => io.observe(e));
  }

  function spotlights() {
    document.addEventListener("pointermove", (e) => {
      const card = e.target.closest && e.target.closest(".spotlight");
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty("--x", `${e.clientX - r.left}px`);
      card.style.setProperty("--y", `${e.clientY - r.top}px`);
    });
  }

  /** Rising embers on a canvas (hero). */
  function embers(canvas) {
    if (!canvas || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = canvas.getContext("2d");
    let w, h, dpr, parts = [];
    const resize = () => {
      dpr = Math.min(2, devicePixelRatio || 1);
      w = canvas.clientWidth; h = canvas.clientHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.round(Math.min(90, w / 14));
      parts = Array.from({ length: n }, () => spawn(true));
    };
    const spawn = (any) => ({
      x: Math.random() * w, y: any ? Math.random() * h : h + 10,
      r: Math.random() * 1.8 + .4, s: Math.random() * .6 + .25,
      drift: Math.random() * .6 - .3, life: Math.random() * Math.PI * 2,
      hue: Math.random() < .8 ? "255,90,106" : "255,209,102",
    });
    let visible = true;
    new IntersectionObserver(([e]) => { visible = e.isIntersecting; }).observe(canvas);
    const tick = () => {
      if (visible) {
        ctx.clearRect(0, 0, w, h);
        for (const p of parts) {
          p.y -= p.s; p.x += p.drift + Math.sin((p.life += .02)) * .3;
          if (p.y < -10) Object.assign(p, spawn(false));
          const a = Math.max(0, Math.min(1, p.y / h)) * .9;
          ctx.beginPath();
          ctx.fillStyle = `rgba(${p.hue},${a})`;
          ctx.shadowBlur = 8; ctx.shadowColor = `rgba(${p.hue},1)`;
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      requestAnimationFrame(tick);
    };
    addEventListener("resize", resize);
    resize();
    tick();
  }

  // ------------------------------------------------------------------ start
  document.addEventListener("DOMContentLoaded", () => {
    const page = document.body.dataset.page;
    const h = document.getElementById("site-header");
    if (h) h.outerHTML = header(page);
    const f = document.getElementById("site-footer");
    if (f) f.outerHTML = footer();
    const btn = document.getElementById("menuBtn");
    if (btn) btn.addEventListener("click", () => document.getElementById("mobileNav").classList.toggle("hidden"));
    document.addEventListener("click", (e) => {
      const c = e.target.closest && e.target.closest("[data-copy]");
      if (c) copy(c.dataset.copy, c.dataset.copyMsg);
    });
    spotlights();
    embers(document.getElementById("embers"));
    requestAnimationFrame(reveal);
  });

  window.KishinUI = { esc, badge, toast, copy, serverStatus, reveal };
})();
