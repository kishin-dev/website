/* project.html?p=<id> - one project's story, features and links. */
(() => {
  "use strict";
  const K = window.KISHIN;
  const { esc, badge, serverStatus, reveal } = window.KishinUI;

  document.addEventListener("DOMContentLoaded", () => {
    const id = new URLSearchParams(location.search).get("p");
    const p = K.projects.find((x) => x.id === id);
    const root = document.getElementById("project");
    if (!p) {
      root.innerHTML = `<section class="grid min-h-[80vh] place-items-center px-4 pt-16 text-center">
        <div><p class="font-kanji text-8xl font-black text-crimson/30">無</p>
        <h1 class="mt-4 font-display text-6xl tracking-wide">Nothing here</h1>
        <p class="mt-2 text-ash">That project doesn't exist - yet.</p>
        <a href="./#works" class="mt-8 inline-block rounded-xl bg-crimson px-6 py-3 font-bold text-white">All projects</a></div></section>`;
      return;
    }
    document.title = `${p.name} · Kishin`;
    const others = K.projects.filter((x) => x.id !== p.id);
    root.innerHTML = `
      <section class="relative isolate overflow-hidden pb-20 pt-36">
        <div class="waves absolute inset-0 -z-20 opacity-[.06] [mask-image:linear-gradient(#000,transparent)]"></div>
        <div class="absolute left-1/2 top-24 -z-10 size-[36rem] -translate-x-1/2 rounded-full bg-crimson/25 blur-[120px]"></div>
        <span class="pointer-events-none absolute left-1/2 top-10 -z-10 -translate-x-1/2 select-none font-kanji text-[24rem] font-black leading-none text-crimson/[.07]">${esc(p.kanji || "✦")}</span>
        <div class="mx-auto max-w-4xl px-4 text-center">
          <a href="./#works" class="reveal text-sm font-semibold text-ash transition hover:text-ember">← All projects</a>
          <div class="reveal mt-6 flex items-center justify-center gap-3">${badge(p.status)}<span class="text-xs font-bold uppercase tracking-[.25em] text-ash">${esc(p.type)}</span></div>
          <h1 class="reveal mt-5 font-display text-[clamp(4rem,12vw,9rem)] leading-[.85] tracking-[.05em] text-blade">${esc(p.name.toUpperCase())}</h1>
          <p class="reveal mx-auto mt-6 max-w-2xl text-lg text-ash">${esc(p.summary)}</p>
          ${p.server ? `<div id="pStatus" class="reveal mx-auto mt-6 inline-flex items-center gap-3 rounded-xl border border-white/10 bg-ink/70 px-4 py-2.5"></div>` : ""}
          <div class="reveal mt-8 flex flex-wrap justify-center gap-3">
            ${p.docs ? `<a href="docs.html?p=${encodeURIComponent(p.id)}" class="rounded-xl bg-crimson px-6 py-3.5 font-bold text-white shadow-lg shadow-crimson/40 transition hover:bg-ember">Read the docs</a>` : ""}
            ${p.server ? `<button type="button" data-copy="${esc(p.server)}" data-copy-msg="Copied ${esc(p.server)} - see you in game!" class="rounded-xl ${p.docs ? "border border-white/10 bg-white/[.03]" : "bg-crimson shadow-lg shadow-crimson/40"} px-6 py-3.5 font-bold transition hover:border-crimson/60">Copy server IP</button>` : ""}
            ${p.repo ? `<a href="${esc(p.repo)}" target="_blank" rel="noopener" class="rounded-xl border border-white/10 bg-white/[.03] px-6 py-3.5 font-bold transition hover:border-crimson/60">GitHub</a>` : ""}
            <a href="${esc(K.discord)}" target="_blank" rel="noopener" class="rounded-xl border border-white/10 bg-white/[.03] px-6 py-3.5 font-bold transition hover:border-crimson/60">Discord</a>
          </div>
        </div>
      </section>

      <section class="mx-auto grid max-w-6xl gap-6 px-4 pb-16 sm:px-6 lg:grid-cols-[1.1fr_1fr]">
        <div class="reveal spotlight rounded-3xl border border-white/10 bg-panel/90 p-8">
          <p class="text-xs font-bold uppercase tracking-[.3em] text-ember">The story</p>
          <div class="mt-4 space-y-4 leading-relaxed text-ash">${(p.story || []).map((t) => `<p>${esc(t)}</p>`).join("")}</div>
          ${p.tech ? `<div class="mt-6 flex flex-wrap gap-2">${p.tech.map((t) => `<span class="rounded-md bg-white/5 px-2 py-1 font-mono text-xs text-bone/70 ring-1 ring-white/10">${esc(t)}</span>`).join("")}</div>` : ""}
        </div>
        ${p.features && p.features.length ? `<div class="reveal spotlight rounded-3xl border border-white/10 bg-panel/90 p-8">
          <p class="text-xs font-bold uppercase tracking-[.3em] text-ember">What's inside</p>
          <ul class="mt-4 space-y-3">${p.features.map((f) => `<li class="flex gap-3"><span class="text-ember">✦</span><span>${esc(f)}</span></li>`).join("")}</ul>
        </div>` : ""}
      </section>

      ${others.length ? `<section class="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        <h2 class="reveal font-display text-4xl tracking-wide">More from Kishin</h2>
        <div class="mt-6 grid gap-5 sm:grid-cols-2">${others.map((o) => `<a href="project.html?p=${encodeURIComponent(o.id)}"
          class="reveal spotlight group relative overflow-hidden rounded-2xl border border-white/10 bg-panel/90 p-6 transition hover:-translate-y-1 hover:border-crimson/50">
          <span class="pointer-events-none absolute -right-3 -top-6 select-none font-kanji text-8xl font-black text-crimson/10">${esc(o.kanji || "✦")}</span>
          <div class="relative flex items-center justify-between">${badge(o.status)}<span class="text-xs font-bold uppercase tracking-[.2em] text-ash">${esc(o.type)}</span></div>
          <h3 class="relative mt-8 font-display text-4xl tracking-wide">${esc(o.name)}</h3>
          <p class="relative mt-1 text-sm text-ash">${esc(o.summary)}</p></a>`).join("")}</div>
      </section>` : ""}`;
    serverStatus(document.getElementById("pStatus"), p.server);
    reveal();
  });
})();
