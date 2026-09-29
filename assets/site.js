/* Kishin - renders the home page and project pages from projects.js. */
(() => {
  "use strict";
  const P = window.KISHIN_PROJECTS || [];
  const S = window.KISHIN_SITE || {};
  const $ = (s) => document.querySelector(s);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const STATUS = {
    live: ["Live", "live"],
    beta: ["Open beta", "beta"],
    dev: ["In development", "dev"],
    soon: ["Coming soon", "soon"],
  };

  function toast(msg) {
    const t = $("#toast");
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(toast.t);
    toast.t = setTimeout(() => t.classList.remove("show"), 2800);
  }

  function badge(status) {
    const [label, cls] = STATUS[status] || [status, "dev"];
    return `<span class="badge ${cls}">${esc(label)}</span>`;
  }

  function buttons(links = []) {
    return links.map((l) => {
      const cls = l.primary ? "btn primary" : "btn ghost";
      if (l.copy) return `<button class="${cls}" type="button" data-copy="${esc(l.copy)}">${esc(l.label)}</button>`;
      if (!l.url) return `<span class="${cls} disabled" aria-disabled="true">${esc(l.label)}</span>`;
      const ext = /^https?:/.test(l.url) ? ` target="_blank" rel="noopener"` : "";
      return `<a class="${cls}" href="${esc(l.url)}"${ext}>${esc(l.label)}</a>`;
    }).join("");
  }

  function serverStatus(el, address) {
    if (!el || !address) return;
    el.innerHTML = `<span class="dot"></span><span>${esc(address)}</span><span class="dim">checking...</span>`;
    fetch(`https://api.mcsrvstat.us/3/${encodeURIComponent(address)}`)
      .then((r) => r.json())
      .then((s) => {
        const on = s && s.online;
        el.innerHTML = `<span class="dot${on ? " on" : ""}"></span><span>${esc(address)}</span>
          <span class="dim">${on ? `${(s.players && s.players.online) || 0} online` : "offline"}</span>`;
      })
      .catch(() => { el.querySelector(".dim").textContent = ""; });
  }

  function card(p) {
    return `<a class="card" href="project.html?p=${encodeURIComponent(p.id)}">
      <div class="card-top"><div class="icon">${esc(p.icon || "✦")}</div>${badge(p.status)}</div>
      <h3>${esc(p.name)}</h3>
      <p>${esc(p.summary)}</p>
      <div class="card-foot"><span class="type">${esc(p.type)}</span><span class="more">View project →</span></div>
    </a>`;
  }

  // ------------------------------------------------------------------ home
  function home() {
    $("#tagline").textContent = S.tagline || "";
    const featured = P.find((p) => p.featured);
    if (featured) {
      $("#featured").innerHTML = `<article class="feature">
        <div class="feature-mark" aria-hidden="true">${esc(featured.icon || "✦")}</div>
        <div class="feature-body">
          <div class="feature-meta">${badge(featured.status)}<span class="type">${esc(featured.type)}</span><span class="dim">Featured</span></div>
          <h2>${esc(featured.name)}</h2>
          <p>${esc(featured.summary)}</p>
          ${featured.server ? `<div class="status" id="featStatus"></div>` : ""}
          <div class="actions">${buttons(featured.links)}<a class="btn ghost" href="project.html?p=${encodeURIComponent(featured.id)}">Learn more</a></div>
        </div>
      </article>`;
      serverStatus($("#featStatus"), featured.server);
    } else {
      $("#featured").hidden = true;
    }

    const types = ["All", ...new Set(P.map((p) => p.type))];
    let active = "All";
    const draw = () => {
      const list = P.filter((p) => active === "All" || p.type === active);
      $("#grid").innerHTML = list.map(card).join("") +
        `<div class="card next"><div class="icon">+</div><h3>Next project</h3><p>Something new is always brewing. Follow along on Discord.</p></div>`;
      $("#filters").innerHTML = types.map((t) =>
        `<button type="button" role="tab" aria-selected="${t === active}" class="chip${t === active ? " on" : ""}" data-type="${esc(t)}">${esc(t)}</button>`).join("");
    };
    $("#filters").addEventListener("click", (e) => {
      const b = e.target.closest("[data-type]");
      if (!b) return;
      active = b.dataset.type;
      draw();
    });
    draw();
    $("#aboutBody").innerHTML = (S.about || []).map((t) => `<p>${esc(t)}</p>`).join("");
  }

  // ------------------------------------------------------------------ project page
  function project() {
    const id = new URLSearchParams(location.search).get("p");
    const p = P.find((x) => x.id === id);
    const root = $("#project");
    if (!p) {
      root.innerHTML = `<section class="hero small"><h1 class="title">NOT FOUND</h1><p class="lead">That project doesn't exist (yet).</p>
        <div class="hero-actions"><a class="btn primary" href="./#projects">All projects</a></div></section>`;
      return;
    }
    document.title = `${p.name} - Kishin`;
    const others = P.filter((x) => x.id !== p.id).slice(0, 3);
    root.innerHTML = `
      <section class="hero small">
        <a class="back" href="./#projects">← All projects</a>
        <div class="p-icon">${esc(p.icon || "✦")}</div>
        <div class="feature-meta center">${badge(p.status)}<span class="type">${esc(p.type)}</span></div>
        <h1 class="title">${esc(p.name.toUpperCase())}</h1>
        <p class="lead">${esc(p.summary)}</p>
        ${p.server ? `<div class="status center" id="pStatus"></div>` : ""}
        <div class="hero-actions">${buttons(p.links)}</div>
      </section>
      <section class="section two">
        <div class="panel">
          <h2><span class="star">✦</span> About</h2>
          ${(p.about || []).map((t) => `<p>${esc(t)}</p>`).join("")}
        </div>
        ${p.features && p.features.length ? `<div class="panel">
          <h2><span class="star">✦</span> Features</h2>
          <ul class="features">${p.features.map((f) => `<li>${esc(f)}</li>`).join("")}</ul>
        </div>` : ""}
      </section>
      ${others.length ? `<section class="section">
        <div class="section-head"><h2><span class="star">✦</span> More from Kishin</h2></div>
        <div class="grid">${others.map(card).join("")}</div>
      </section>` : ""}`;
    serverStatus($("#pStatus"), p.server);
  }

  // ------------------------------------------------------------------ shared
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-discord]").forEach((a) => {
      if (S.discord) a.href = S.discord; else a.hidden = true;
    });
    $("#year").textContent = new Date().getFullYear();
    if (document.body.dataset.page === "project") project(); else home();
    document.addEventListener("click", async (e) => {
      const b = e.target.closest("[data-copy]");
      if (!b) return;
      try { await navigator.clipboard.writeText(b.dataset.copy); toast(`Copied ${b.dataset.copy} - see you in game!`); }
      catch { toast(b.dataset.copy); }
    });
  });
})();
