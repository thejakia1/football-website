const KICKOFF = new Date('2026-06-11T19:00:00Z');

function initCountdown() {
  function updateCountdown() {
    const diff = KICKOFF - new Date();

    if (diff <= 0) {
      document.getElementById('countdown').innerHTML =
        '<div class="tournament-started">🔴 TOURNAMENT IS LIVE!</div>';
      return;
    }

    const pad = n => String(n).padStart(2, '0');
    document.getElementById('cd-days').textContent    = pad(Math.floor(diff / 864e5));
    document.getElementById('cd-hours').textContent   = pad(Math.floor((diff % 864e5) / 36e5));
    document.getElementById('cd-minutes').textContent = pad(Math.floor((diff % 36e5) / 6e4));
    document.getElementById('cd-seconds').textContent = pad(Math.floor((diff % 6e4) / 1000));
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
}

document.addEventListener('app:ready', initCountdown);