const SITE_URL = 'https://fifa-wc-26.netlify.app/';

function showShareToast(msg) {
  if (!document.getElementById('share-toast-style')) {
    const s = document.createElement('style');
    s.id = 'share-toast-style';
    s.textContent =
      '@keyframes toastIn{from{opacity:0;transform:translateX(-50%) translateY(-12px)}to{opacity:1;transform:translateX(-50%) translateY(0)}}';
    document.head.appendChild(s);
  }

  const prev = document.getElementById('share-toast');
  if (prev) prev.remove();

  const toast = document.createElement('div');
  toast.id = 'share-toast';
  toast.textContent = msg;
  toast.style.cssText = [
    'position:fixed',
    'top:24px',
    'left:50%',
    'transform:translateX(-50%)',
    'background:#1877F2',
    'color:#fff',
    'padding:13px 26px',
    'border-radius:10px',
    'font-family:Barlow,sans-serif',
    'font-size:15px',
    'font-weight:600',
    'z-index:99999',
    'box-shadow:0 6px 24px rgba(0,0,0,0.35)',
    'white-space:nowrap',
    'pointer-events:none',
    'animation:toastIn 0.3s ease forwards',
  ].join(';');
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.transition = 'opacity 0.4s ease';
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 420);
  }, 4000);
}

function copyToClipboard(text) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).catch(() => _fallbackCopy(text));
  } else {
    _fallbackCopy(text);
  }
}

function _fallbackCopy(text) {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.cssText = 'position:fixed;opacity:0;pointer-events:none';
  document.body.appendChild(ta);
  ta.select();
  document.execCommand('copy');
  document.body.removeChild(ta);
}

function _openFacebook() {
  window.open(
    'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(SITE_URL),
    '_blank',
    'width=620,height=440'
  );
}

// Hero & footer share button
function shareFacebook() {
  const text =
    '🌍 FIFA World Cup 2026 is almost here — I cannot wait! 🏆\n\n' +
    '48 teams, 3 nations, 104 matches. The biggest one yet.\n\n' +
    'Check out the full schedule, groups, host cities and pick your winner 🏟️\n\n' +
    '👉 ' + SITE_URL;

  copyToClipboard(text);
  showShareToast('📋 Post text copied — paste it into your Facebook post!');
  _openFacebook();
}

// Predictor share button
function shareResult() {
  if (!selectedTeam) return;

  const text =
    '🏆 I just made my #WorldCup2026 prediction — and I\'m going ALL IN on ' +
    selectedTeam.flag + ' ' + selectedTeam.name + ' to win it on July 19!\n\n' +
    'No doubts. Full backing. 🔥\n\n' +
    "Who's YOUR pick? Make your prediction 👇\n" +
    '⚽ ' + SITE_URL;

  copyToClipboard(text);
  showShareToast('📋 Your prediction is copied — paste it into your Facebook post! 🏆');
  _openFacebook();
}

function getShareText() {
  return (
    '⚽ FIFA World Cup 2026 is HERE!\n\n' +
    '🏆 48 Teams | 12 Groups | 104 Matches\n' +
    '📅 June 11 – July 19, 2026\n' +
    '🌎 USA • Mexico • Canada\n\n' +
    'Check out the ultimate guide 👇\n' +
    SITE_URL
  );
}

function copyLink() {
  copyToClipboard(getShareText());
  showShareToast('✅ Copied! Paste it anywhere to share 🎉');
}
