/* Home page: story chapters, project grid, the realm. */
(() => {
  "use strict";
  const K = window.KISHIN;
  const { esc, badge, serverStatus, reveal } = window.KishinUI;

  function chapters() {
    const ol = document.getElementById("chapters");
    ol.innerHTML = K.story.map((c, i) => {
      const right = i % 2 === 1;
      return `<li class="reveal relative grid md:grid-cols-2 md:gap-16">
        <span class="absolute left-6 top-8 z-10 grid size-5 -translate-x-1/2 place-items-center rounded-full bg-ink ring-2 ring-crimson md:left-1/2">
          <span class="size-2 rounded-full bg-ember shadow-[0_0_14px] shadow-ember"></span></span>
        <div class="${right ? "md:col-start-2" : "md:text-right"} pl-14 md:pl-0">
          <div class="spotlight group relative overflow-hidden rounded-3xl border border-white/10 bg-panel/80 p-7 backdrop-blur transition duration-500 hover:-translate-y-1 hover:border-crimson/50 sm:p-9">
            <span class="pointer-events-none absolute ${right ? "-right-4" : "-left-4 md:left-auto md:-right-4"} -top-10 select-none font-kanji text-[9rem] font-black leading-none text-crimson/10 transition duration-500 group-hover:text-crimson/20">${esc(c.mark)}</span>
            <p class="relative text-xs font-bold uppercase tracking-[.3em] text-ember">${esc(c.label)}</p>
            <h3 class="relative mt-2 font-display text-4xl tracking-wide sm:text-5xl">${esc(c.title)}</h3>
            <p class="relative mt-4 leading-relaxed text-ash">${esc(c.text)}</p>
          </div>
        </div>
      </li>`;
    }).join("");

    // fill the timeline as the story scrolls past
    const line = document.getElementById("storyLine");
    const section = document.getElementById("story");
    const update = () => {
      const r = section.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, (innerHeight * 0.6 - r.top) / r.height));
      line.style.height = `${progress * 100}%`;
    };
    addEventListener("scroll", update, { passive: true });
    update();
  }

  function marquee() {
    const words = ["Islands", "Yokai pets", "World bosses", "Minions", "Crates", "Skills", "Battlepass", "KeyShin", "Docs", "Open source"];
    const row = words.map((w) => `<span>${esc(w.toUpperCase())}</span><span class="text-crimson">✦</span>`).join("");
    document.getElementById("marquee").innerHTML = row + row; // twice for a seamless loop
  }

  function card(p, big) {
    const links = [
      p.docs ? `<a href="docs.html?p=${encodeURIComponent(p.id)}" class="rounded-lg bg-crimson/15 px-3 py-1.5 text-xs font-bold text-ember ring-1 ring-crimson/30 transition hover:bg-crimson hover:text-white">Docs</a>` : "",
      p.repo ? `<a href="${esc(p.repo)}" target="_blank" rel="noopener" class="rounded-lg bg-white/5 px-3 py-1.5 text-xs font-bold text-bone ring-1 ring-white/10 transition hover:bg-white/10">GitHub</a>` : "",
    ].join("");
    return `<article class="reveal spotlight ${big ? "beam sm:col-span-2 lg:row-span-2" : ""} group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-panel/90 p-7 transition duration-500 hover:-translate-y-1.5 hover:border-crimson/50 hover:shadow-2xl hover:shadow-crimson/15">
      <span class="pointer-events-none absolute -right-6 -top-10 select-none font-kanji ${big ? "text-[16rem]" : "text-[10rem]"} font-black leading-none text-crimson/[.07] transition duration-700 group-hover:scale-110 group-hover:text-crimson/[.14]">${esc(p.kanji || "✦")}</span>
      <div class="relative flex items-center justify-between gap-3">
        <span class="text-xs font-bold uppercase tracking-[.25em] text-ash">${esc(p.type)}</span>
        ${badge(p.status)}
      </div>
      <h3 class="relative mt-auto ${big ? "pt-24" : "pt-16"} font-display ${big ? "text-6xl sm:text-7xl" : "text-5xl"} tracking-wide">${esc(p.name)}</h3>
      <p class="relative mt-3 ${big ? "max-w-lg text-lg" : ""} text-ash">${esc(p.summary)}</p>
      ${big && p.features ? `<ul class="relative mt-5 grid gap-2 text-sm text-bone/80 sm:grid-cols-2">${p.features.slice(0, 6).map((f) => `<li class="flex gap-2"><span class="text-ember">✦</span><span>${esc(f)}</span></li>`).join("")}</ul>` : ""}
      ${big && p.tech ? `<div class="relative mt-5 flex flex-wrap gap-2">${p.tech.map((t) => `<span class="rounded-md bg-white/5 px-2 py-1 font-mono text-xs text-bone/70 ring-1 ring-white/10">${esc(t)}</span>`).join("")}</div>` : ""}
      <div class="relative mt-6 flex flex-wrap items-center gap-2">
        <a href="project.html?p=${encodeURIComponent(p.id)}" class="mr-auto inline-flex items-center gap-1.5 text-sm font-bold text-bone transition group-hover:text-ember">Explore <span class="transition group-hover:translate-x-1">→</span></a>
        ${links}
      </div>
    </article>`;
  }

  function works() {
    const types = ["All", ...new Set(K.projects.map((p) => p.type))];
    let active = "All";
    const grid = document.getElementById("grid");
    const filters = document.getElementById("filters");
    const draw = () => {
      const list = K.projects.filter((p) => active === "All" || p.type === active);
      grid.innerHTML = list.map((p, i) => card(p, active === "All" && i === 0)).join("") +
        `<div class="reveal flex min-h-56 flex-col items-center justify-center rounded-3xl border border-dashed border-white/10 p-7 text-center">
          <span class="font-kanji text-5xl font-black text-crimson/40">次</span>
          <p class="mt-3 font-display text-3xl tracking-wide">Next chapter</p>
          <p class="mt-1 text-sm text-ash">Something new is always brewing.</p>
        </div>`;
      filters.innerHTML = types.map((t) => `<button type="button" data-type="${esc(t)}"
        class="rounded-full px-4 py-2 text-sm font-semibold ring-1 transition ${t === active ? "bg-crimson text-white ring-crimson" : "bg-white/[.03] text-ash ring-white/10 hover:text-bone"}">${esc(t)}</button>`).join("");
      reveal();
    };
    filters.addEventListener("click", (e) => {
      const b = e.target.closest("[data-type]");
      if (b) { active = b.dataset.type; draw(); }
    });
    draw();
  }

  function realm() {
    const server = K.projects.find((p) => p.server);
    const section = document.getElementById("realm");
    if (!server) { section.hidden = true; return; }
    const btn = document.getElementById("realmCopy");
    btn.dataset.copy = server.server;
    btn.dataset.copyMsg = `Copied ${server.server} - see you in the realm!`;
    serverStatus(document.getElementById("realmStatus"), server.server);
  }

  document.addEventListener("DOMContentLoaded", () => {
    chapters();
    marquee();
    works();
    realm();
  });
})();
