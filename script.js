/* No framework, tracking, or external player is required. */
'use strict';

// OPTIONAL REEL: local MP4/WebM or an HTTPS Vimeo/YouTube embed URL.
// Leave src empty until a real reel is ready; nothing unfinished appears on the site.
const reel = { src: '', type: 'video', poster: '' };

document.getElementById('year').textContent = new Date().getFullYear();

// Retains the original kt project-link / data-modal / data-close interface.
const modals = [...document.querySelectorAll('.modal')];
let activeModal = null;
let returnFocus = null;
let previousOverflow = '';

function syncProject() {
  const next = modals.find(modal => '#' + modal.id === location.hash) || null;
  if (activeModal && activeModal !== next) {
    activeModal.querySelectorAll('video').forEach(video => video.pause());
    activeModal.removeAttribute('aria-modal');
    activeModal.removeAttribute('role');
  }
  if (next && !activeModal) {
    previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.querySelectorAll('body > header, body > main, body > footer, .skip-link').forEach(el => { el.inert = true; });
  }
  modals.forEach(modal => { modal.inert = modal !== next; });
  activeModal = next;
  if (next) {
    if (next.dataset.return === 'all-projects') document.getElementById('all-projects').open = true;
    next.setAttribute('role', 'dialog');
    next.setAttribute('aria-modal', 'true');
    next.scrollTop = 0;
    next.querySelector('.close-modal').focus({ preventScroll: true });
  } else {
    document.body.style.overflow = previousOverflow;
    document.querySelectorAll('[inert]').forEach(el => { if (!el.classList.contains('modal')) el.inert = false; });
    if (returnFocus && ['#work', '#all-projects'].includes(location.hash)) returnFocus.focus({ preventScroll: true });
    returnFocus = null;
  }
}

function closeProject() {
  location.hash = activeModal?.dataset.return || 'work';
}

document.addEventListener('click', event => {
  const link = event.target.closest('.project-link');
  if (link) returnFocus = link;
  if (activeModal && event.target === activeModal) closeProject();
});
window.addEventListener('hashchange', syncProject);
document.addEventListener('keydown', event => {
  if (!activeModal) return;
  if (event.key === 'Escape') { event.preventDefault(); closeProject(); }
  if (event.key === 'Tab') {
    const focusable = [...activeModal.querySelectorAll('a[href], button, video[controls], [tabindex="0"]')];
    const first = focusable[0], last = focusable[focusable.length - 1];
    if (!activeModal.contains(document.activeElement)) { event.preventDefault(); (event.shiftKey ? last : first).focus(); }
    else if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  }
});
syncProject();
window.addEventListener('load', () => {
  if (activeModal) requestAnimationFrame(() => activeModal.querySelector('.close-modal').focus({ preventScroll: true }));
});

if (reel.src) {
  const section = document.getElementById('reel');
  let player;
  if (reel.type === 'embed') {
    const url = new URL(reel.src, location.href);
    const allowed = ['player.vimeo.com', 'www.youtube-nocookie.com', 'www.youtube.com'];
    if (url.protocol === 'https:' && allowed.includes(url.hostname)) {
      player = document.createElement('iframe');
      player.title = 'Shree Tandel production reel';
      player.allow = 'fullscreen; picture-in-picture';
      player.allowFullscreen = true;
      player.loading = 'lazy';
    }
  } else {
    player = document.createElement('video');
    player.controls = true;
    player.playsInline = true;
    player.preload = 'none';
    if (reel.poster) player.poster = reel.poster;
  }
  if (player) { player.src = reel.src; section.querySelector('.reel-player').append(player); section.hidden = false; }
}

// Respect motion preferences and let visitors pause the silent homepage film.
const heroReel = document.getElementById('homepage-reel');
const reelToggle = document.getElementById('reel-toggle');
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
if (heroReel && reelToggle) {
  heroReel.muted = true;
  reelToggle.hidden = false;
  const updateReelButton = () => { reelToggle.textContent = heroReel.paused ? 'Play reel' : 'Pause reel'; };
  const applyMotionPreference = () => {
    if (motionPreference.matches) { heroReel.autoplay = false; heroReel.pause(); }
    else { heroReel.autoplay = true; heroReel.play().catch(updateReelButton); }
    updateReelButton();
  };
  heroReel.addEventListener('play', updateReelButton);
  heroReel.addEventListener('pause', updateReelButton);
  heroReel.addEventListener('error', () => { heroReel.hidden = true; reelToggle.hidden = true; const img = document.createElement('img'); img.src = heroReel.poster; img.alt = 'Selected production work'; heroReel.before(img); });
  reelToggle.addEventListener('click', () => { if (heroReel.paused) heroReel.play().catch(updateReelButton); else heroReel.pause(); });
  motionPreference.addEventListener('change', applyMotionPreference);
  document.addEventListener('visibilitychange', () => { if (document.hidden) heroReel.pause(); });
  applyMotionPreference();
}
