function getShareText() {
  return `⚽ FIFA World Cup 2026 is HERE!\n\n🏆 48 Teams | 12 Groups | 104 Matches\n📅 June 11 – July 19, 2026\n🌎 USA • Mexico • Canada\n\nCheck out the ultimate guide 👇\n${window.location.href}`;
}

function shareFacebook() {
  const url  = encodeURIComponent(window.location.href);
  const text = encodeURIComponent('⚽ FIFA World Cup 2026 is HERE! 48 Teams. 12 Groups. 104 Matches. The biggest World Cup ever. Check out the full guide!');
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${text}`, '_blank', 'width=600,height=400');
}

function shareResult() {
  if (!selectedTeam) return;
  const text = encodeURIComponent(`🏆 My #WorldCup2026 pick: ${selectedTeam.flag} ${selectedTeam.name} wins it all on July 19! Who's your pick? ⚽`);
  const url  = encodeURIComponent(window.location.href);
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${text}`, '_blank', 'width=600,height=400');
}

function copyLink() {
  const text = getShareText();

  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => alert('Copied! Paste it anywhere to share 🎉'));
    return;
  }

  const ta = document.createElement('textarea');
  ta.value = text;
  document.body.appendChild(ta);
  ta.select();
  document.execCommand('copy');
  document.body.removeChild(ta);
  alert('Copied! Paste it anywhere to share 🎉');
}