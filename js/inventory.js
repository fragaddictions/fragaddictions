/* Shared inventory data and helpers for the Fragrance Addictions site.
   This is the single source of truth for bottles, stats, filters, and demo videos. */

/* FEATURED VIDEOS — four slots you can rotate in and out later.
   These appear on the home page (just after the hero) and at the top of videos.html.

   To add or swap a video, edit one of the four objects below:
     title:    a short heading for the card
     youtube:  a YouTube URL or 11-character video ID
     caption:  an optional line under the title (leave "" if you do not need one)

   youtube examples:
     "https://www.youtube.com/watch?v=xxxxxxxxxxx"
     "https://youtu.be/xxxxxxxxxxx"
     "https://www.youtube.com/shorts/xxxxxxxxxxx"
     "xxxxxxxxxxx"

   A slot shows a player only when youtube is filled in with a real URL or ID.
   If youtube is empty, the card says "Featured video coming soon".
   To take a video down, set that slot's youtube back to "".
   Leave unused fields as "". Do not invent videos.
*/
var FEATURED = [
  { title: "", youtube: "", caption: "" },
  { title: "", youtube: "", caption: "" },
  { title: "", youtube: "", caption: "" },
  { title: "", youtube: "", caption: "" }
];

/* INV columns:
   0 brand, 1 name, 2 qty, 3 gender, 4 MSRP, 5 received, 6 sold, 7 note,
   8 video  — paste a YouTube URL or video ID here (leave empty if none).
   Example: "https://www.youtube.com/watch?v=xxxxxxxxxxx"
   Example: "xxxxxxxxxxx"
*/
var INV = [
  ["Armani", "Acqua Di Gio", 1, "Mens", 175.00, "", "", "", ""],
  ["Azzaro", "Forever Wanted", 1, "Mens", 155.00, "", "1 (11/8/2026)", "", ""],
  ["Chanel", "Bleu", 0, "Mens", 248.00, "", "", "", ""],
  ["Creed", "Absolu Aventus", 2, "Mens", 539.90, "", "", "", ""],
  ["Creed", "Millesime Imperial", 2, "Unisex", 308.69, "", "", "", ""],
  ["Creed", "Silver Mountain Water", 1, "Mens", 349.64, "", "", "", ""],
  ["Dior", "Sauvage", 1, "Mens", 142.00, "", "1 (11/8/2026)", "", ""],
  ["Dolce & Gabbana", "The One", 1, "Mens", 190.00, "11/4/2026", "", "", ""],
  ["Dolce & Gabbana", "Intenso", 1, "Mens", 90.00, "", "", "", ""],
  ["Fragrance Story", "Mafia", 1, "Womens", 96.00, "", "1 (11/8/2026)", "", ""],
  ["Fragrance Story", "Deadly", 1, "Mens", 96.00, "", "1 (11/8/2026)", "", ""],
  ["Game of Spades", "Full House", 0, "Unisex", 220.00, "", "", "", ""],
  ["Givenchy", "Gentleman", 2, "Mens", 155.00, "11/4/2026", "", "", ""],
  ["Gucci", "Flora Gorgeous Gardenia", 1, "Womens", 181.00, "", "", "", ""],
  ["Hugo Boss", "Boss", 1, "Mens", 160.00, "", "1 (11/8/2026)", "", ""],
  ["Initio", "Oud for Greatness", 1, "Unisex", 435.00, "", "", "", ""],
  ["Kayali", "Yum Boujee Marshmallow", 1, "Womens", 150.00, "11/4/2026", "", "", ""],
  ["Louis Vuitton", "Orage", 2, "Mens", 360.00, "", "", "1 - personal inventory", ""],
  ["Maison Francis Kurkdjian", "Baccarat Rouge 540", 4, "Womens", 360.00, "", "", "", ""],
  ["NYC", "Bond No. 9 New York Nights", 2, "Unisex", 355.00, "11/5/2026", "", "", ""],
  ["Paco Rabanne", "1 Million Royal", 1, "Mens", 145.00, "11/4/2026", "1 (11/8/2026)", "", ""],
  ["Paco Rabanne", "1 Million", 1, "Mens", 172.00, "", "1 (11/8/2026)", "", ""],
  ["Parfums de Marly", "Haltane", 1, "Mens", 460.00, "11/4/2026", "1 (11/8/2026)", "", ""],
  ["Penhaligon's", "Lord George", 1, "Mens", 350.00, "11/4/2026", "", "", ""],
  ["Prada", "Ocean EDP", 2, "Mens", 136.00, "11/4/2026", "", "", ""],
  ["Prada", "Ocean Le Parfum-Red", 2, "Mens", 186.00, "", "", "", ""],
  ["Prada", "Energy", 1, "Mens", 20.00, "", "1 (11/8/2026)", "", ""],
  ["Replica", "By the Fireplace", 2, "Unisex", 170.00, "11/4/2026", "", "", ""],
  ["Replica", "Jazz Club", 1, "Unisex", 170.00, "", "", "", ""],
  ["Tom Ford", "Red Label Fabulous", 2, "Unisex", 545.00, "11/4/2026", "", "", ""],
  ["Tom Ford", "Ombre Leather", 1, "Unisex", 240.00, "", "1 (11/8/2026)", "", ""],
  ["Tom Ford", "Fucking Fabulous", 2, "Unisex", 545.00, "", "", "", ""],
  ["Tom Ford", "Oud Wood", 2, "Mens", 460.00, "", "", "", ""],
  ["Valentino", "Uomo Born in Roma (1 tester)", 3, "Womens", 165.00, "", "", "", ""],
  ["Valentino", "Donna Born in Roma Intense", 2, "Womens", 180.00, "", "", "", ""],
  ["Valentino", "Donna", 2, "Womens", 185.00, "", "", "", ""],
  ["Viktor & Rolf", "Spicebomb Dark Leather", 1, "Mens", 140.00, "", "", "", ""],
  ["Xerjoff", "Renaissance", 1, "Unisex", 285.00, "", "", "", ""],
  ["Xerjoff", "Alexandria II", 1, "Unisex", 550.00, "", "", "", ""],
  ["YSL", "Black Opium", 2, "Womens", 174.00, "", "", "", ""],
  ["YSL", "Y (blue label) EDP", 1, "Mens", 170.00, "", "", "", ""],
  ["YSL", "Myslf Eau De Parfum", 1, "Mens", 170.00, "", "", "", ""],
  ["YSL", "Black Opium Over Red", 1, "Womens", 174.00, "", "", "", ""],
  ["YSL", "Libre Eau De Parfum Silver/gold", 2, "Womens", 185.00, "", "", "", ""],
  ["YSL", "Libre Le Parfum Gold/Black", 1, "Womens", 185.00, "", "", "", ""],
  ["YSL", "Myslf - Le Parfum (black)", 2, "Mens", 170.00, "11/4/2026", "", "", ""],
  ["YSL", "Myslf - L'absolu (silver)", 2, "Mens", 170.00, "11/4/2026", "", "", ""],
  ["Zakart", "Z25", 1, "Unisex", 65.00, "", "", "", ""]
];

/* Optional video map. Paste a YouTube URL or video ID here.
   Keys may be:
     "Brand|Name"  — a demo for one bottle (same name as in INV)
     "Brand"       — a demo shown under that brand heading
   Examples:
     "Creed|Absolu Aventus": "https://www.youtube.com/watch?v=xxxxxxxxxxx",
     "Creed": "https://youtu.be/xxxxxxxxxxx",
     "Tom Ford": "https://www.youtube.com/shorts/xxxxxxxxxxx",
     "Chanel|Bleu": "xxxxxxxxxxx"
   Leave values empty. Do not invent videos. A bottle's INV[8] field, if set, wins over this map.
*/
var VIDEOS = {
  // "Brand|Name": "",
  // "Brand": ""
};

/* Parse a YouTube watch, short, embed, youtu.be, or bare 11-character ID.
   Returns { id, isShort } or null. */
function parseYouTube(value) {
  if (value == null) return null;
  var s = String(value).trim();
  if (!s) return null;
  var isShort = /\/shorts\//i.test(s);
  var id = null;
  if (/^[\w-]{11}$/.test(s)) {
    id = s;
  } else {
    var raw = s;
    if (!/^https?:\/\//i.test(raw)) raw = "https://" + raw.replace(/^\/\//, "");
    var u;
    try { u = new URL(raw); } catch (e) { return null; }
    var host = u.hostname.replace(/^www\./, "").toLowerCase();
    if (host === "youtu.be") {
      id = u.pathname.split("/").filter(Boolean)[0] || "";
    } else if (host === "youtube.com" || host === "m.youtube.com" || host === "youtube-nocookie.com") {
      if (u.searchParams.get("v")) {
        id = u.searchParams.get("v");
      } else {
        var parts = u.pathname.split("/").filter(Boolean);
        var i = -1;
        for (var p = 0; p < parts.length; p++) {
          if (parts[p] === "embed" || parts[p] === "shorts" || parts[p] === "v" || parts[p] === "live") { i = p; break; }
        }
        if (i >= 0 && parts[i + 1]) {
          id = parts[i + 1];
          if (parts[i] === "shorts") isShort = true;
        }
      }
    } else {
      return null;
    }
  }
  if (id) id = String(id).replace(/[^A-Za-z0-9_-].*$/, "");
  if (!id || !/^[\w-]{11}$/.test(id)) return null;
  return { id: id, isShort: !!isShort };
}

function bottleKey(row) { return row[0] + "|" + row[1]; }

function getBottleVideo(row) {
  return parseYouTube(row[8]) || parseYouTube(VIDEOS[bottleKey(row)]) || null;
}

function getBrandVideo(brand) {
  return parseYouTube(VIDEOS[brand]) || null;
}

function esc(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function brandSlug(brand) {
  return String(brand).toLowerCase()
    .replace(/&/g, "and")
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function formatMoney(n) {
  var parts = Number(n).toFixed(2).split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return "$" + parts[0] + "." + parts[1];
}

function computeStats() {
  var bottles = 0, retail = 0, brandSet = {};
  INV.forEach(function (r) {
    bottles += r[2];
    retail += r[2] * r[4];
    brandSet[r[0]] = true;
  });
  return {
    bottles: bottles,
    retail: retail,
    brands: Object.keys(brandSet).length,
    lines: INV.length
  };
}

function uniqueBrands() {
  var brands = [];
  INV.forEach(function (r) { if (brands.indexOf(r[0]) < 0) brands.push(r[0]); });
  brands.sort();
  return brands;
}

function brandCounts() {
  var map = {};
  INV.forEach(function (r) {
    if (!map[r[0]]) map[r[0]] = { lines: 0, bottles: 0 };
    map[r[0]].lines += 1;
    map[r[0]].bottles += r[2];
  });
  return map;
}

function fillStats(root) {
  var scope = root || document;
  var s = computeStats();
  scope.querySelectorAll("[data-stat]").forEach(function (el) {
    var key = el.getAttribute("data-stat");
    if (key === "bottles") el.textContent = String(s.bottles);
    else if (key === "retail") el.textContent = formatMoney(s.retail);
    else if (key === "brands") el.textContent = String(s.brands);
    else if (key === "lines") el.textContent = String(s.lines);
  });
}

function youtubeEmbed(info, title) {
  if (!info) return "";
  var ratio = info.isShort ? "player is-short" : "player";
  var src = "https://www.youtube-nocookie.com/embed/" + encodeURIComponent(info.id);
  return '<div class="' + ratio + '">' +
    '<iframe data-yt="1" src="' + src + '" title="' + esc(title || "Demo video") +
    '" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen></iframe>' +
    "</div>";
}

function stopPlayers(root) {
  if (!root) return;
  root.querySelectorAll("iframe[data-yt]").forEach(function (frame) {
    frame.src = "";
    if (frame.parentNode) frame.parentNode.removeChild(frame);
  });
}

var collectionFilter = "All";

function renderCollection() {
  var list = document.getElementById("list");
  if (!list) return;
  var brands = uniqueBrands();
  var html = "";
  var shown = 0;
  brands.forEach(function (b) {
    var rows = INV.map(function (r, i) { return { r: r, i: i }; })
      .filter(function (o) {
        return o.r[0] === b && (collectionFilter === "All" || o.r[3] === collectionFilter);
      });
    if (!rows.length) return;
    var brandVid = getBrandVideo(b);
    html += '<section class="brand-group" id="brand-' + esc(brandSlug(b)) + '">';
    html += "<h2>" + esc(b) + "</h2>";
    if (brandVid) {
      html += '<div class="brand-video">' + youtubeEmbed(brandVid, b + " demo") + "</div>";
    }
    rows.forEach(function (o) {
      var r = o.r;
      var vid = getBottleVideo(r);
      shown += 1;
      html += '<div class="item' + (r[2] === 0 ? " oos" : "") + '" role="button" tabindex="0" data-index="' + o.i + '">';
      html += '<div class="left"><div class="name">' + esc(r[1]) + "</div><div class=\"tags\">";
      if (r[6]) html += '<span class="tag sold">Sold</span>';
      if (r[5]) html += '<span class="tag recv">Received</span>';
      if (r[7]) html += '<span class="tag note">Note</span>';
      if (vid) html += '<span class="tag demo">Demo</span>';
      html += '</div></div><div class="right">';
      if (r[2] === 0) html += '<div class="oos-banner">Out of stock</div>';
      else html += '<div class="qty">' + r[2] + ' <small>in stock</small></div>';
      html += '<div class="msrp">' + formatMoney(r[4]) + "</div></div></div>";
    });
    html += "</section>";
  });
  if (!shown) {
    html = '<p class="empty-filter">No bottles in this filter.</p>';
  }
  list.innerHTML = html;
  var countEl = document.getElementById("result-count");
  if (countEl) {
    countEl.textContent = shown + (shown === 1 ? " line" : " lines");
  }
}

function bindCollection() {
  var list = document.getElementById("list");
  if (!list) return;
  document.querySelectorAll(".chip").forEach(function (c) {
    c.addEventListener("click", function () {
      document.querySelectorAll(".chip").forEach(function (x) {
        x.classList.remove("active");
        x.setAttribute("aria-pressed", "false");
      });
      c.classList.add("active");
      c.setAttribute("aria-pressed", "true");
      collectionFilter = c.getAttribute("data-f");
      renderCollection();
    });
  });
  list.addEventListener("click", function (e) {
    var item = e.target.closest(".item");
    if (item) openModal(Number(item.getAttribute("data-index")));
  });
  list.addEventListener("keydown", function (e) {
    if (e.key !== "Enter" && e.key !== " ") return;
    var item = e.target.closest(".item");
    if (item) { e.preventDefault(); openModal(Number(item.getAttribute("data-index"))); }
  });
  renderCollection();
  if (location.hash && location.hash.indexOf("#brand-") === 0) {
    var target = document.getElementById(location.hash.slice(1));
    if (target) setTimeout(function () { target.scrollIntoView({ block: "start" }); }, 50);
  }
}

function openModal(i) {
  var r = INV[i];
  if (!r) return;
  var overlay = document.getElementById("overlay");
  if (!overlay) return;
  document.getElementById("mBrand").textContent = r[0];
  document.getElementById("mName").textContent = r[1];
  document.getElementById("mGender").textContent = r[3];
  document.getElementById("mQty").textContent = r[2] === 0 ? "Out of stock" : String(r[2]);
  document.getElementById("mMsrp").textContent = formatMoney(r[4]);
  var recvRow = document.getElementById("rRecv");
  var soldRow = document.getElementById("rSold");
  var noteRow = document.getElementById("rNote");
  recvRow.hidden = !r[5];
  document.getElementById("mRecv").textContent = r[5] || "";
  soldRow.hidden = !r[6];
  document.getElementById("mSold").textContent = r[6] || "";
  noteRow.hidden = !r[7];
  document.getElementById("mNote").textContent = r[7] || "";
  var videoMount = document.getElementById("mVideo");
  stopPlayers(videoMount);
  var vid = getBottleVideo(r);
  if (vid) {
    videoMount.hidden = false;
    videoMount.innerHTML = youtubeEmbed(vid, r[0] + " " + r[1] + " demo");
  } else {
    videoMount.hidden = true;
    videoMount.innerHTML = "";
  }
  overlay.classList.add("open");
  overlay.setAttribute("aria-hidden", "false");
  var closeBtn = overlay.querySelector(".close");
  if (closeBtn) closeBtn.focus();
}

function closeModal() {
  var overlay = document.getElementById("overlay");
  if (!overlay) return;
  stopPlayers(document.getElementById("mVideo"));
  overlay.classList.remove("open");
  overlay.setAttribute("aria-hidden", "true");
}

function bindModal() {
  var overlay = document.getElementById("overlay");
  if (!overlay) return;
  overlay.addEventListener("click", function (e) { if (e.target === overlay) closeModal(); });
  var closeBtn = overlay.querySelector(".close");
  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && overlay.classList.contains("open")) closeModal();
  });
}

function allDemoEntries() {
  var entries = [];
  uniqueBrands().forEach(function (b) {
    var bv = getBrandVideo(b);
    if (bv) entries.push({ kind: "brand", brand: b, name: b + " (brand demo)", video: bv });
  });
  INV.forEach(function (r) {
    var v = getBottleVideo(r);
    if (v) entries.push({ kind: "bottle", brand: r[0], name: r[1], video: v, row: r });
  });
  return entries;
}

function renderVideosPage() {
  var empty = document.getElementById("video-empty");
  var list = document.getElementById("video-list");
  if (!list) return;
  var entries = allDemoEntries();
  if (!entries.length) {
    if (empty) empty.hidden = false;
    list.hidden = true;
    list.innerHTML = "";
    return;
  }
  if (empty) empty.hidden = true;
  list.hidden = false;
  var html = "";
  entries.forEach(function (e) {
    html += '<article class="video-card">';
    html += '<p class="eyebrow">' + esc(e.kind === "brand" ? "Brand demo" : e.brand) + "</p>";
    html += "<h2>" + esc(e.name) + "</h2>";
    html += youtubeEmbed(e.video, e.brand + " " + e.name + " demo");
    if (e.kind === "bottle") {
      html += '<p class="muted"><a class="text-link" href="collection.html#brand-' + esc(brandSlug(e.brand)) + '">See in the collection →</a></p>';
    } else {
      html += '<p class="muted"><a class="text-link" href="collection.html#brand-' + esc(brandSlug(e.brand)) + '">See this brand →</a></p>';
    }
    html += "</article>";
  });
  list.innerHTML = html;
}

function renderBrandDirectory() {
  var el = document.getElementById("brand-directory");
  if (!el) return;
  var counts = brandCounts();
  var html = "";
  uniqueBrands().forEach(function (b) {
    var c = counts[b];
    var label = c.bottles === 1 ? "1 bottle" : c.bottles + " bottles";
    html += '<a class="brand-chip" href="collection.html#brand-' + esc(brandSlug(b)) + '">';
    html += "<strong>" + esc(b) + "</strong>";
    html += "<small>" + label + " · " + c.lines + (c.lines === 1 ? " line" : " lines") + "</small>";
    html += "</a>";
  });
  el.innerHTML = html;
}

function renderFeatured() {
  var mount = document.getElementById("featured-videos");
  if (!mount) return;
  var slots = FEATURED || [];
  var html = "";
  var count = Math.max(4, slots.length);
  for (var i = 0; i < count; i++) {
    var slot = slots[i] || { title: "", youtube: "", caption: "" };
    var info = parseYouTube(slot.youtube);
    var title = String(slot.title || "").trim();
    var caption = String(slot.caption || "").trim();
    html += '<article class="featured-card' + (info ? " has-video" : " is-placeholder") + '">';
    html += '<p class="eyebrow">Featured ' + (i + 1) + "</p>";
    if (info) {
      html += "<h3>" + esc(title || "Featured video") + "</h3>";
      if (caption) html += '<p class="muted featured-caption">' + esc(caption) + "</p>";
      html += youtubeEmbed(info, title || "Featured video");
    } else {
      html += '<div class="featured-placeholder">';
      html += '<span class="play-mark" aria-hidden="true">▶</span>';
      html += "<h3>" + esc(title || "Featured video coming soon") + "</h3>";
      if (caption) html += '<p class="muted featured-caption">' + esc(caption) + "</p>";
      if (title) html += '<p class="muted">Featured video coming soon</p>';
      html += "</div>";
    }
    html += "</article>";
  }
  mount.innerHTML = html;
}
