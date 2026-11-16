document.documentElement.classList.add("js");

document.addEventListener("DOMContentLoaded", function () {
  var menu = document.querySelector(".menu-toggle");
  var nav = document.querySelector("#main-nav");
  if (menu && nav) {
    menu.addEventListener("click", function () {
      var expanded = menu.getAttribute("aria-expanded") !== "true";
      menu.setAttribute("aria-expanded", String(expanded));
      nav.classList.toggle("is-open", expanded);
    });
  }

  fillStats();
  renderBrandDirectory();
  renderFeatured();

  var page = document.body.getAttribute("data-page");
  if (page === "collection") {
    bindModal();
    bindCollection();
  }
  if (page === "videos") {
    renderVideosPage();
  }

  initMusicPlayer();
});

function initMusicPlayer() {
  var STORAGE_ON = "fa-music-on";
  var STORAGE_TIME = "fa-music-time";
  var ICON_NOTE = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M10 18.5V7.2c0-.5.3-1 .8-1.2l8-2.4c.8-.2 1.5.3 1.5 1.1v10.8c0 1.7-1.6 2.8-3.1 2.2l-.4-.2c-.8-.4-1.2-1.2-1.2-2.1V8.3L12 9.6v8.9c0 1.7-1.6 2.8-3.1 2.2l-.4-.2c-.8-.4-1.2-1.2-1.2-2.1 0-1.3.8-2.4 2.1-2.7.3-.1.6.2.6.5z"/></svg>';
  var ICON_PAUSE = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="6" y="5" width="4.5" height="14" rx="1"/><rect x="13.5" y="5" width="4.5" height="14" rx="1"/></svg>';

  var audio = document.createElement("audio");
  audio.src = "audio/fireflies-and-stardust.mp3";
  audio.loop = true;
  audio.preload = "metadata";
  audio.setAttribute("playsinline", "");
  audio.volume = 0.35;

  var btn = document.createElement("button");
  btn.type = "button";
  btn.className = "music-toggle";
  btn.setAttribute("aria-label", "Play background music");
  btn.setAttribute("aria-pressed", "false");
  btn.innerHTML = ICON_NOTE;

  function wantedOn() {
    try { return sessionStorage.getItem(STORAGE_ON) === "1"; } catch (err) { return false; }
  }
  function saveWanted(on) {
    try { sessionStorage.setItem(STORAGE_ON, on ? "1" : "0"); } catch (err) {}
  }
  function savePosition() {
    try {
      if (!isNaN(audio.currentTime)) sessionStorage.setItem(STORAGE_TIME, String(audio.currentTime));
    } catch (err) {}
  }
  function savedPosition() {
    try {
      var t = parseFloat(sessionStorage.getItem(STORAGE_TIME) || "0");
      return isFinite(t) && t > 0 ? t : 0;
    } catch (err) { return 0; }
  }
  function setPlayingUI(playing) {
    btn.setAttribute("aria-pressed", playing ? "true" : "false");
    btn.setAttribute("aria-label", playing ? "Pause background music" : "Play background music");
    btn.innerHTML = playing ? ICON_PAUSE : ICON_NOTE;
  }
  function applySavedPosition() {
    var t = savedPosition();
    if (!t) return;
    try { audio.currentTime = t; } catch (err) {}
  }
  function tryPlay() {
    var playResult;
    try { playResult = audio.play(); } catch (err) { setPlayingUI(false); return; }
    if (playResult && typeof playResult.then === "function") {
      playResult.then(function () { setPlayingUI(true); }).catch(function () { setPlayingUI(false); });
    } else {
      setPlayingUI(!audio.paused);
    }
  }

  var lastSaved = 0;
  audio.addEventListener("timeupdate", function () {
    var now = Date.now();
    if (now - lastSaved > 1000) {
      lastSaved = now;
      savePosition();
    }
  });
  audio.addEventListener("play", function () { setPlayingUI(true); });
  audio.addEventListener("pause", function () {
    savePosition();
    setPlayingUI(false);
  });

  btn.addEventListener("click", function () {
    if (audio.paused) {
      saveWanted(true);
      tryPlay();
    } else {
      audio.pause();
      saveWanted(false);
      savePosition();
      setPlayingUI(false);
    }
  });

  var didResume = false;
  function readyToResume() {
    if (didResume) return;
    didResume = true;
    applySavedPosition();
    if (wantedOn()) tryPlay();
  }
  audio.addEventListener("loadedmetadata", readyToResume);
  if (audio.readyState >= 1) readyToResume();

  document.body.appendChild(audio);
  document.body.appendChild(btn);
}

