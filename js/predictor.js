const TEAMS = {
  'Europe': [
    { flag: '🇫🇷', name: 'France',      fact: 'Les Bleus won in 1998 & 2018. Can Mbappé make it three?' },
    { flag: '🇩🇪', name: 'Germany',     fact: '4-time champions looking to reclaim glory after 2018 group exit.' },
    { flag: '🇪🇸', name: 'Spain',       fact: 'Defending European champions. Lamine Yamal is only 18. Scary.' },
    { flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', name: 'England',    fact: "Football's coming home? They've been saying this since 1966..." },
    { flag: '🇵🇹', name: 'Portugal',    fact: "Ronaldo's record 6th World Cup. Can CR7 finally win it?" },
    { flag: '🇧🇪', name: 'Belgium',     fact: "De Bruyne leads Belgium's latest golden generation attempt." },
    { flag: '🇳🇱', name: 'Netherlands', fact: 'The Dutch are back with a frightening front three.' },
  ],
  'Americas': [
    { flag: '🇦🇷', name: 'Argentina', fact: 'Defending champions! Messi leads La Albiceleste once more.' },
    { flag: '🇧🇷', name: 'Brazil',    fact: '5-time winners. Endrick & Vinicius Junior could be unstoppable.' },
    { flag: '🇺🇾', name: 'Uruguay',   fact: 'Small country, massive football history. 2x World Cup winners.' },
    { flag: '🇺🇸', name: 'USA',       fact: 'Home soil advantage. Pulisic and co. have nothing to lose.' },
    { flag: '🇨🇴', name: 'Colombia',  fact: 'James Rodríguez led them to the QFs in 2014. Sequel incoming?' },
    { flag: '🇲🇽', name: 'Mexico',    fact: "Host nation pressure. They've reached R16 seven straight times — can they finally go further?" },
  ],
  'Africa': [
    { flag: '🇲🇦', name: 'Morocco', fact: "2022 semi-finalists! Africa's finest are ready to shock the world again." },
    { flag: '🇸🇳', name: 'Senegal', fact: '2022 Round of 16. Sadio Mané leads the Lions of Teranga.' },
    { flag: '🇪🇬', name: 'Egypt',   fact: "Seven-time African champions. Mo Salah's final World Cup chance?" },
    { flag: '🇩🇿', name: 'Algeria', fact: 'Dark horses who could upset Argentina in Group J.' },
  ],
  'Asia/Pacific': [
    { flag: '🇯🇵', name: 'Japan',       fact: '2022 shockers who beat Germany AND Spain. Never count them out.' },
    { flag: '🇰🇷', name: 'South Korea', fact: '2002 semi-finalists. Son Heung-min leads a dangerous squad.' },
    { flag: '🇦🇺', name: 'Australia',   fact: 'The Socceroos punched above their weight in 2022. Ready again.' },
    { flag: '🇸🇦', name: 'Saudi Arabia',fact: 'Remember 2022? They beat Argentina. Lightning strikes twice?' },
  ],
};

let selectedTeam = null;

function pickRegion(region, _emoji) {
  document.querySelectorAll('#step-1 .pick-btn').forEach(b => b.classList.remove('selected'));
  event.currentTarget.classList.add('selected');

  const grid = document.getElementById('teamPickGrid');
  grid.innerHTML = '';
  TEAMS[region].forEach(team => {
    const btn = document.createElement('button');
    btn.className = 'pick-btn';
    btn.innerHTML = `<span class="pick-flag">${team.flag}</span><span class="pick-name">${team.name}</span>`;
    btn.onclick = () => pickTeam(team, btn);
    grid.appendChild(btn);
  });

  goToStep(2);
}

function pickTeam(team, btn) {
  selectedTeam = team;
  document.querySelectorAll('#step-2 .pick-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  setTimeout(() => showResult(team), 300);
}

function showResult(team) {
  document.getElementById('resultTrophy').textContent    = team.flag;
  document.getElementById('resultTitle').textContent     = team.name;
  document.getElementById('resultSubtitle').textContent  = 'is my pick to win World Cup 2026!';
  document.getElementById('resultShareText').innerHTML   =
    `🏆 My #WorldCup2026 prediction: <strong>${team.flag} ${team.name}</strong> wins it all on July 19!\n\n💬 "${team.fact}"\n\n⚽ Who's your pick?`;

  goToStep(3);
  document.getElementById('stepNav').style.display = 'none';
}

function goToStep(n) {
  document.querySelectorAll('.predictor-step').forEach((s, i) => {
    s.classList.toggle('active', i === n - 1);
  });
  document.getElementById('dot1').classList.toggle('active', n <= 1);
  document.getElementById('dot2').classList.toggle('active', n >= 2);
  document.getElementById('stepText').textContent = `Step ${Math.min(n, 2)} of 2`;
}

function goBack() {
  goToStep(1);
  document.getElementById('stepNav').style.display = 'flex';
}

function resetPredictor() {
  selectedTeam = null;
  goToStep(1);
  document.getElementById('stepNav').style.display = 'flex';
  document.querySelectorAll('.pick-btn').forEach(b => b.classList.remove('selected'));
}