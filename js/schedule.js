/* ===== FIXTURE DATA ===== */
const GS = [
  // ── MATCHDAY 1 ──────────────────────────────────────────────
  // Jun 11 — Group A
  { md:1, g:'A', date:'Jun 11', day:'Thu', home:['🇲🇽','Mexico'],       away:['🇿🇦','South Africa'], venue:'Mexico City' },
  { md:1, g:'A', date:'Jun 11', day:'Thu', home:['🇰🇷','South Korea'],  away:['🇨🇿','Czechia'],      venue:'Guadalajara' },
  // Jun 12 — Groups B & C
  { md:1, g:'B', date:'Jun 12', day:'Fri', home:['🇨🇦','Canada'],       away:['🇧🇦','Bosnia & Herz.'], venue:'Toronto' },
  { md:1, g:'B', date:'Jun 12', day:'Fri', home:['🇶🇦','Qatar'],        away:['🇨🇭','Switzerland'],    venue:'Vancouver' },
  { md:1, g:'C', date:'Jun 12', day:'Fri', home:['🇧🇷','Brazil'],       away:['🇲🇦','Morocco'],        venue:'Miami' },
  { md:1, g:'C', date:'Jun 12', day:'Fri', home:['🇭🇹','Haiti'],        away:['🏴󠁧󠁢󠁳󠁣󠁴󠁿','Scotland'],       venue:'Houston' },
  // Jun 13 — Groups D & E
  { md:1, g:'D', date:'Jun 13', day:'Sat', home:['🇺🇸','United States'],away:['🇵🇾','Paraguay'],      venue:'Los Angeles' },
  { md:1, g:'D', date:'Jun 13', day:'Sat', home:['🇦🇺','Australia'],    away:['🇹🇷','Türkiye'],        venue:'Dallas' },
  { md:1, g:'E', date:'Jun 13', day:'Sat', home:['🇩🇪','Germany'],      away:['🇪🇨','Ecuador'],        venue:'New York' },
  { md:1, g:'E', date:'Jun 13', day:'Sat', home:['🇨🇮','Ivory Coast'],  away:['🇨🇼','Curaçao'],        venue:'Philadelphia' },
  // Jun 14 — Groups F & G
  { md:1, g:'F', date:'Jun 14', day:'Sun', home:['🇳🇱','Netherlands'],  away:['🇯🇵','Japan'],          venue:'Dallas' },
  { md:1, g:'F', date:'Jun 14', day:'Sun', home:['🇸🇪','Sweden'],       away:['🇹🇳','Tunisia'],        venue:'Kansas City' },
  { md:1, g:'G', date:'Jun 14', day:'Sun', home:['🇧🇪','Belgium'],      away:['🇪🇬','Egypt'],          venue:'Los Angeles' },
  { md:1, g:'G', date:'Jun 14', day:'Sun', home:['🇮🇷','Iran'],         away:['🇳🇿','New Zealand'],    venue:'Seattle' },
  // Jun 15 — Groups H & I
  { md:1, g:'H', date:'Jun 15', day:'Mon', home:['🇪🇸','Spain'],        away:['🇺🇾','Uruguay'],        venue:'Monterrey' },
  { md:1, g:'H', date:'Jun 15', day:'Mon', home:['🇸🇦','Saudi Arabia'], away:['🇨🇻','Cape Verde'],     venue:'San Francisco' },
  { md:1, g:'I', date:'Jun 15', day:'Mon', home:['🇫🇷','France'],       away:['🇸🇳','Senegal'],        venue:'Miami' },
  { md:1, g:'I', date:'Jun 15', day:'Mon', home:['🇮🇶','Iraq'],         away:['🇳🇴','Norway'],         venue:'Philadelphia' },
  // Jun 16 — Groups J & K
  { md:1, g:'J', date:'Jun 16', day:'Tue', home:['🇦🇷','Argentina'],    away:['🇩🇿','Algeria'],        venue:'Dallas' },
  { md:1, g:'J', date:'Jun 16', day:'Tue', home:['🇦🇹','Austria'],      away:['🇯🇴','Jordan'],         venue:'Houston' },
  { md:1, g:'K', date:'Jun 16', day:'Tue', home:['🇵🇹','Portugal'],     away:['🇨🇴','Colombia'],       venue:'Boston' },
  { md:1, g:'K', date:'Jun 16', day:'Tue', home:['🇨🇩','Congo DR'],     away:['🇺🇿','Uzbekistan'],     venue:'New York' },
  // Jun 17 — Group L
  { md:1, g:'L', date:'Jun 17', day:'Wed', home:['🏴󠁧󠁢󠁥󠁮󠁧󠁿','England'],      away:['🇭🇷','Croatia'],         venue:'San Francisco' },
  { md:1, g:'L', date:'Jun 17', day:'Wed', home:['🇬🇭','Ghana'],        away:['🇵🇦','Panama'],         venue:'Seattle' },

  // ── MATCHDAY 2 ──────────────────────────────────────────────
  // Jun 18 — Groups A & B
  { md:2, g:'A', date:'Jun 18', day:'Thu', home:['🇲🇽','Mexico'],       away:['🇰🇷','South Korea'],    venue:'Mexico City' },
  { md:2, g:'A', date:'Jun 18', day:'Thu', home:['🇿🇦','South Africa'], away:['🇨🇿','Czechia'],        venue:'Guadalajara' },
  { md:2, g:'B', date:'Jun 18', day:'Thu', home:['🇨🇦','Canada'],       away:['🇶🇦','Qatar'],          venue:'Toronto' },
  { md:2, g:'B', date:'Jun 18', day:'Thu', home:['🇧🇦','Bosnia & Herz.'],away:['🇨🇭','Switzerland'],   venue:'Vancouver' },
  // Jun 19 — Groups C & D
  { md:2, g:'C', date:'Jun 19', day:'Fri', home:['🇧🇷','Brazil'],       away:['🇭🇹','Haiti'],          venue:'Atlanta' },
  { md:2, g:'C', date:'Jun 19', day:'Fri', home:['🇲🇦','Morocco'],      away:['🏴󠁧󠁢󠁳󠁣󠁴󠁿','Scotland'],       venue:'Houston' },
  { md:2, g:'D', date:'Jun 19', day:'Fri', home:['🇺🇸','United States'],away:['🇦🇺','Australia'],      venue:'Los Angeles' },
  { md:2, g:'D', date:'Jun 19', day:'Fri', home:['🇵🇾','Paraguay'],     away:['🇹🇷','Türkiye'],        venue:'Seattle' },
  // Jun 20 — Groups E & F
  { md:2, g:'E', date:'Jun 20', day:'Sat', home:['🇩🇪','Germany'],      away:['🇨🇮','Ivory Coast'],    venue:'New York' },
  { md:2, g:'E', date:'Jun 20', day:'Sat', home:['🇪🇨','Ecuador'],      away:['🇨🇼','Curaçao'],        venue:'Philadelphia' },
  { md:2, g:'F', date:'Jun 20', day:'Sat', home:['🇳🇱','Netherlands'],  away:['🇸🇪','Sweden'],         venue:'Dallas' },
  { md:2, g:'F', date:'Jun 20', day:'Sat', home:['🇯🇵','Japan'],        away:['🇹🇳','Tunisia'],        venue:'Kansas City' },
  // Jun 21 — Groups G & H
  { md:2, g:'G', date:'Jun 21', day:'Sun', home:['🇧🇪','Belgium'],      away:['🇮🇷','Iran'],           venue:'Seattle' },
  { md:2, g:'G', date:'Jun 21', day:'Sun', home:['🇪🇬','Egypt'],        away:['🇳🇿','New Zealand'],    venue:'Vancouver' },
  { md:2, g:'H', date:'Jun 21', day:'Sun', home:['🇪🇸','Spain'],        away:['🇸🇦','Saudi Arabia'],   venue:'Monterrey' },
  { md:2, g:'H', date:'Jun 21', day:'Sun', home:['🇺🇾','Uruguay'],      away:['🇨🇻','Cape Verde'],     venue:'Boston' },
  // Jun 22 — Groups I & J
  { md:2, g:'I', date:'Jun 22', day:'Mon', home:['🇫🇷','France'],       away:['🇮🇶','Iraq'],           venue:'Miami' },
  { md:2, g:'I', date:'Jun 22', day:'Mon', home:['🇸🇳','Senegal'],      away:['🇳🇴','Norway'],         venue:'Monterrey' },
  { md:2, g:'J', date:'Jun 22', day:'Mon', home:['🇦🇷','Argentina'],    away:['🇦🇹','Austria'],        venue:'Dallas' },
  { md:2, g:'J', date:'Jun 22', day:'Mon', home:['🇩🇿','Algeria'],      away:['🇯🇴','Jordan'],         venue:'Kansas City' },
  // Jun 23 — Group K
  { md:2, g:'K', date:'Jun 23', day:'Tue', home:['🇵🇹','Portugal'],     away:['🇨🇩','Congo DR'],       venue:'Boston' },
  { md:2, g:'K', date:'Jun 23', day:'Tue', home:['🇨🇴','Colombia'],     away:['🇺🇿','Uzbekistan'],     venue:'Atlanta' },
  // Jun 24 — Group L
  { md:2, g:'L', date:'Jun 24', day:'Wed', home:['🏴󠁧󠁢󠁥󠁮󠁧󠁿','England'],      away:['🇬🇭','Ghana'],           venue:'Los Angeles' },
  { md:2, g:'L', date:'Jun 24', day:'Wed', home:['🇭🇷','Croatia'],      away:['🇵🇦','Panama'],         venue:'San Francisco' },

  // ── MATCHDAY 3 (final matchday — simultaneous within each group) ──
  // Jun 26 — Groups A & B
  { md:3, g:'A', date:'Jun 26', day:'Fri', sim:true, home:['🇲🇽','Mexico'],       away:['🇨🇿','Czechia'],         venue:'Mexico City' },
  { md:3, g:'A', date:'Jun 26', day:'Fri', sim:true, home:['🇿🇦','South Africa'], away:['🇰🇷','South Korea'],     venue:'Guadalajara' },
  { md:3, g:'B', date:'Jun 26', day:'Fri', sim:true, home:['🇨🇦','Canada'],       away:['🇨🇭','Switzerland'],     venue:'Toronto' },
  { md:3, g:'B', date:'Jun 26', day:'Fri', sim:true, home:['🇧🇦','Bosnia & Herz.'],away:['🇶🇦','Qatar'],         venue:'Vancouver' },
  // Jun 27 — Groups C & D
  { md:3, g:'C', date:'Jun 27', day:'Sat', sim:true, home:['🇧🇷','Brazil'],       away:['🏴󠁧󠁢󠁳󠁣󠁴󠁿','Scotland'],       venue:'Miami' },
  { md:3, g:'C', date:'Jun 27', day:'Sat', sim:true, home:['🇲🇦','Morocco'],      away:['🇭🇹','Haiti'],           venue:'Atlanta' },
  { md:3, g:'D', date:'Jun 27', day:'Sat', sim:true, home:['🇺🇸','United States'],away:['🇹🇷','Türkiye'],         venue:'Los Angeles' },
  { md:3, g:'D', date:'Jun 27', day:'Sat', sim:true, home:['🇵🇾','Paraguay'],     away:['🇦🇺','Australia'],       venue:'Dallas' },
  // Jun 28 — Groups E & F
  { md:3, g:'E', date:'Jun 28', day:'Sun', sim:true, home:['🇩🇪','Germany'],      away:['🇨🇼','Curaçao'],         venue:'New York' },
  { md:3, g:'E', date:'Jun 28', day:'Sun', sim:true, home:['🇪🇨','Ecuador'],      away:['🇨🇮','Ivory Coast'],     venue:'Philadelphia' },
  { md:3, g:'F', date:'Jun 28', day:'Sun', sim:true, home:['🇳🇱','Netherlands'],  away:['🇹🇳','Tunisia'],         venue:'Dallas' },
  { md:3, g:'F', date:'Jun 28', day:'Sun', sim:true, home:['🇯🇵','Japan'],        away:['🇸🇪','Sweden'],          venue:'Kansas City' },
  // Jun 29 — Groups G & H
  { md:3, g:'G', date:'Jun 29', day:'Mon', sim:true, home:['🇧🇪','Belgium'],      away:['🇳🇿','New Zealand'],     venue:'Los Angeles' },
  { md:3, g:'G', date:'Jun 29', day:'Mon', sim:true, home:['🇪🇬','Egypt'],        away:['🇮🇷','Iran'],            venue:'Seattle' },
  { md:3, g:'H', date:'Jun 29', day:'Mon', sim:true, home:['🇪🇸','Spain'],        away:['🇨🇻','Cape Verde'],      venue:'San Francisco' },
  { md:3, g:'H', date:'Jun 29', day:'Mon', sim:true, home:['🇺🇾','Uruguay'],      away:['🇸🇦','Saudi Arabia'],    venue:'Boston' },
  // Jun 30 — Groups I & J
  { md:3, g:'I', date:'Jun 30', day:'Tue', sim:true, home:['🇫🇷','France'],       away:['🇳🇴','Norway'],          venue:'Philadelphia' },
  { md:3, g:'I', date:'Jun 30', day:'Tue', sim:true, home:['🇸🇳','Senegal'],      away:['🇮🇶','Iraq'],            venue:'Monterrey' },
  { md:3, g:'J', date:'Jun 30', day:'Tue', sim:true, home:['🇦🇷','Argentina'],    away:['🇯🇴','Jordan'],          venue:'Dallas' },
  { md:3, g:'J', date:'Jun 30', day:'Tue', sim:true, home:['🇩🇿','Algeria'],      away:['🇦🇹','Austria'],         venue:'Houston' },
  // Jul 1 — Group K
  { md:3, g:'K', date:'Jul 1',  day:'Wed', sim:true, home:['🇵🇹','Portugal'],     away:['🇺🇿','Uzbekistan'],      venue:'New York' },
  { md:3, g:'K', date:'Jul 1',  day:'Wed', sim:true, home:['🇨🇴','Colombia'],     away:['🇨🇩','Congo DR'],        venue:'Boston' },
  // Jul 2 — Group L
  { md:3, g:'L', date:'Jul 2',  day:'Thu', sim:true, home:['🏴󠁧󠁢󠁥󠁮󠁧󠁿','England'],      away:['🇵🇦','Panama'],           venue:'Atlanta' },
  { md:3, g:'L', date:'Jul 2',  day:'Thu', sim:true, home:['🇭🇷','Croatia'],      away:['🇬🇭','Ghana'],            venue:'Los Angeles' },
];

const KO = [
  // ── ROUND OF 32 (Jul 4-7) ───────────────────────────────────
  { round:'R32', num:73,  label:'Match 73',  date:'Jul 4', day:'Sat', home:'TBD', away:'TBD', venue:'TBD' },
  { round:'R32', num:74,  label:'Match 74',  date:'Jul 4', day:'Sat', home:'TBD', away:'TBD', venue:'TBD' },
  { round:'R32', num:75,  label:'Match 75',  date:'Jul 4', day:'Sat', home:'TBD', away:'TBD', venue:'TBD' },
  { round:'R32', num:76,  label:'Match 76',  date:'Jul 4', day:'Sat', home:'TBD', away:'TBD', venue:'TBD' },
  { round:'R32', num:77,  label:'Match 77',  date:'Jul 5', day:'Sun', home:'TBD', away:'TBD', venue:'TBD' },
  { round:'R32', num:78,  label:'Match 78',  date:'Jul 5', day:'Sun', home:'TBD', away:'TBD', venue:'TBD' },
  { round:'R32', num:79,  label:'Match 79',  date:'Jul 5', day:'Sun', home:'TBD', away:'TBD', venue:'TBD' },
  { round:'R32', num:80,  label:'Match 80',  date:'Jul 5', day:'Sun', home:'TBD', away:'TBD', venue:'TBD' },
  { round:'R32', num:81,  label:'Match 81',  date:'Jul 6', day:'Mon', home:'TBD', away:'TBD', venue:'TBD' },
  { round:'R32', num:82,  label:'Match 82',  date:'Jul 6', day:'Mon', home:'TBD', away:'TBD', venue:'TBD' },
  { round:'R32', num:83,  label:'Match 83',  date:'Jul 6', day:'Mon', home:'TBD', away:'TBD', venue:'TBD' },
  { round:'R32', num:84,  label:'Match 84',  date:'Jul 6', day:'Mon', home:'TBD', away:'TBD', venue:'TBD' },
  { round:'R32', num:85,  label:'Match 85',  date:'Jul 7', day:'Tue', home:'TBD', away:'TBD', venue:'TBD' },
  { round:'R32', num:86,  label:'Match 86',  date:'Jul 7', day:'Tue', home:'TBD', away:'TBD', venue:'TBD' },
  { round:'R32', num:87,  label:'Match 87',  date:'Jul 7', day:'Tue', home:'TBD', away:'TBD', venue:'TBD' },
  { round:'R32', num:88,  label:'Match 88',  date:'Jul 7', day:'Tue', home:'TBD', away:'TBD', venue:'TBD' },
  // ── ROUND OF 16 (Jul 9-12) ──────────────────────────────────
  { round:'R16', num:89,  label:'Match 89',  date:'Jul 9',  day:'Thu', home:'W-M73', away:'W-M74', venue:'TBD' },
  { round:'R16', num:90,  label:'Match 90',  date:'Jul 9',  day:'Thu', home:'W-M75', away:'W-M76', venue:'TBD' },
  { round:'R16', num:91,  label:'Match 91',  date:'Jul 10', day:'Fri', home:'W-M77', away:'W-M78', venue:'TBD' },
  { round:'R16', num:92,  label:'Match 92',  date:'Jul 10', day:'Fri', home:'W-M79', away:'W-M80', venue:'TBD' },
  { round:'R16', num:93,  label:'Match 93',  date:'Jul 11', day:'Sat', home:'W-M81', away:'W-M82', venue:'TBD' },
  { round:'R16', num:94,  label:'Match 94',  date:'Jul 11', day:'Sat', home:'W-M83', away:'W-M84', venue:'TBD' },
  { round:'R16', num:95,  label:'Match 95',  date:'Jul 12', day:'Sun', home:'W-M85', away:'W-M86', venue:'TBD' },
  { round:'R16', num:96,  label:'Match 96',  date:'Jul 12', day:'Sun', home:'W-M87', away:'W-M88', venue:'TBD' },
  // ── QUARTER-FINALS (Jul 14-15) ───────────────────────────────
  { round:'QF',  num:97,  label:'QF 1',      date:'Jul 14', day:'Tue', home:'W-M89', away:'W-M90', venue:'TBD' },
  { round:'QF',  num:98,  label:'QF 2',      date:'Jul 14', day:'Tue', home:'W-M91', away:'W-M92', venue:'TBD' },
  { round:'QF',  num:99,  label:'QF 3',      date:'Jul 15', day:'Wed', home:'W-M93', away:'W-M94', venue:'TBD' },
  { round:'QF',  num:100, label:'QF 4',      date:'Jul 15', day:'Wed', home:'W-M95', away:'W-M96', venue:'TBD' },
  // ── SEMI-FINALS (Jul 17-18) ──────────────────────────────────
  { round:'SF',  num:101, label:'Semi-Final 1', date:'Jul 17', day:'Fri', home:'W-M97',  away:'W-M98',  venue:'MetLife Stadium, NJ' },
  { round:'SF',  num:102, label:'Semi-Final 2', date:'Jul 18', day:'Sat', home:'W-M99',  away:'W-M100', venue:'AT&T Stadium, Dallas' },
  // ── THIRD PLACE ──────────────────────────────────────────────
  { round:'3RD', num:103, label:'Third Place',  date:'Jul 18', day:'Sat', home:'L-M101', away:'L-M102', venue:'Hard Rock Stadium, Miami' },
  // ── FINAL ────────────────────────────────────────────────────
  { round:'FINAL', num:104, label:'THE FINAL',  date:'Jul 19', day:'Sun', home:'W-M101', away:'W-M102', venue:'MetLife Stadium, NJ' },
];

/* ===== RENDER HELPERS ===== */
function dayHeader(dateStr, dayStr) {
  return `<div class="fx-day-hdr"><span class="fx-day-date">${dateStr}</span><span class="fx-day-name">${dayStr}</span></div>`;
}

function groupCard(m) {
  const simBadge = m.sim ? `<span class="fx-sim">● simultaneous</span>` : '';
  return `
    <div class="fx-card">
      <div class="fx-card-top">
        <span class="fx-grp-badge">Group ${m.g}</span>
        ${simBadge}
      </div>
      <div class="fx-teams">
        <div class="fx-team">
          <span class="fx-flag">${m.home[0]}</span>
          <span class="fx-name">${m.home[1]}</span>
        </div>
        <div class="fx-vs">VS</div>
        <div class="fx-team fx-team--r">
          <span class="fx-name">${m.away[1]}</span>
          <span class="fx-flag">${m.away[0]}</span>
        </div>
      </div>
      <div class="fx-meta">📍 ${m.venue}</div>
    </div>`;
}

function koCard(m) {
  const isKnown = m.home !== 'TBD';
  const homeTxt = isKnown ? `<span class="fx-ko-slot">${m.home}</span>` : `<span class="fx-ko-tbd">TBD</span>`;
  const awayTxt = isKnown ? `<span class="fx-ko-slot">${m.away}</span>` : `<span class="fx-ko-tbd">TBD</span>`;
  const isFinal = m.round === 'FINAL';
  const is3rd   = m.round === '3RD';
  return `
    <div class="fx-card fx-card--ko${isFinal ? ' fx-card--final' : ''}${is3rd ? ' fx-card--3rd' : ''}">
      <div class="fx-card-top">
        <span class="fx-round-badge fx-round-${m.round.toLowerCase()}">${m.label}</span>
        <span class="fx-ko-date">${m.date} · ${m.day}</span>
      </div>
      <div class="fx-teams">
        <div class="fx-team">${homeTxt}</div>
        <div class="fx-vs">${isFinal ? '🏆' : 'VS'}</div>
        <div class="fx-team fx-team--r">${awayTxt}</div>
      </div>
      <div class="fx-meta">📍 ${m.venue}</div>
    </div>`;
}

/* ===== MAIN RENDER ===== */
function renderSchedule(phase, md) {
  const container = document.getElementById('scheduleContainer');
  if (!container) return;

  if (phase === 'group') {
    const matches = GS.filter(m => m.md === md);
    const byDate = {};
    matches.forEach(m => {
      if (!byDate[m.date]) byDate[m.date] = { day: m.day, matches: [] };
      byDate[m.date].matches.push(m);
    });
    let html = '';
    for (const [date, block] of Object.entries(byDate)) {
      html += dayHeader(date, block.day);
      html += '<div class="fx-grid">';
      block.matches.forEach(m => html += groupCard(m));
      html += '</div>';
    }
    container.innerHTML = html;
  } else {
    // knockout: group by round
    const rounds = ['R32','R16','QF','SF','3RD','FINAL'];
    const labels = { R32:'Round of 32', R16:'Round of 16', QF:'Quarter-Finals', SF:'Semi-Finals', '3RD':'Third Place', FINAL:'The Final' };
    let html = '';
    rounds.forEach(r => {
      const ms = KO.filter(m => m.round === r);
      if (!ms.length) return;
      html += `<div class="fx-ko-round"><h3 class="fx-ko-round-title">${labels[r]}</h3><div class="fx-grid${r === 'FINAL' ? ' fx-grid--single' : ''}">`;
      ms.forEach(m => html += koCard(m));
      html += '</div></div>';
    });
    container.innerHTML = html;
  }
}

/* ===== INIT ===== */
document.addEventListener('app:ready', () => {
  let activePhase = 'group';
  let activeMd    = 1;

  const phaseTabs = document.querySelectorAll('.sched-phase-tab');
  const mdTabs    = document.querySelectorAll('.sched-md-tab');
  const mdRow     = document.getElementById('schedMdRow');

  function activate() {
    renderSchedule(activePhase, activeMd);
    if (mdRow) mdRow.style.display = activePhase === 'group' ? 'flex' : 'none';
  }

  phaseTabs.forEach(btn => {
    btn.addEventListener('click', () => {
      phaseTabs.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activePhase = btn.dataset.phase;
      activate();
    });
  });

  mdTabs.forEach(btn => {
    btn.addEventListener('click', () => {
      mdTabs.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeMd = +btn.dataset.md;
      activate();
    });
  });

  activate();
});
