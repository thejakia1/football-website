/* ===== FIXTURE DATA ===== */
/* kickoff times are stored as UTC ISO strings and displayed in the visitor's local timezone */
const GS = [
  // ── MATCHDAY 1 ──────────────────────────────────────────────
  // Jun 12 — Group A
  { md:1, g:'A', date:'Jun 12', day:'Fri', home:['🇲🇽','Mexico'],       away:['🇿🇦','South Africa'],          venue:'Estadio Azteca, Mexico City',          kickoff:'2026-06-11T19:00:00Z' },
  { md:1, g:'A', date:'Jun 12', day:'Fri', home:['🇰🇷','South Korea'],  away:['🇨🇿','Czechia'],               venue:'Estadio Akron, Guadalajara',           kickoff:'2026-06-12T02:00:00Z' },
  // Jun 13 — Groups B & D
  { md:1, g:'B', date:'Jun 13', day:'Sat', home:['🇨🇦','Canada'],       away:['🇧🇦','Bosnia and Herzegovina'],venue:'BMO Field, Toronto',                   kickoff:'2026-06-12T19:00:00Z' },
  { md:1, g:'D', date:'Jun 13', day:'Sat', home:['🇺🇸','USA'],          away:['🇵🇾','Paraguay'],              venue:'SoFi Stadium, Los Angeles',            kickoff:'2026-06-13T01:00:00Z' },
  // Jun 14 — Groups B, C & D
  { md:1, g:'B', date:'Jun 14', day:'Sun', home:['🇶🇦','Qatar'],        away:['🇨🇭','Switzerland'],           venue:"Levi's Stadium, San Francisco",         kickoff:'2026-06-13T19:00:00Z' },
  { md:1, g:'C', date:'Jun 14', day:'Sun', home:['🇧🇷','Brazil'],       away:['🇲🇦','Morocco'],               venue:'MetLife Stadium, New York/NJ',          kickoff:'2026-06-13T22:00:00Z' },
  { md:1, g:'C', date:'Jun 14', day:'Sun', home:['🇭🇹','Haiti'],        away:['🏴󠁧󠁢󠁳󠁣󠁴󠁿','Scotland'],               venue:'Gillette Stadium, Boston',              kickoff:'2026-06-14T01:00:00Z' },
  { md:1, g:'D', date:'Jun 14', day:'Sun', home:['🇦🇺','Australia'],    away:['🇹🇷','Türkiye'],               venue:'BC Place, Vancouver',                  kickoff:'2026-06-14T04:00:00Z' },
  { md:1, g:'E', date:'Jun 14', day:'Sun', home:['🇩🇪','Germany'],      away:['🇨🇼','Curaçao'],               venue:'NRG Stadium, Houston',                 kickoff:'2026-06-14T17:00:00Z' },
  // Jun 15 — Groups F & E
  { md:1, g:'F', date:'Jun 15', day:'Mon', home:['🇳🇱','Netherlands'],  away:['🇯🇵','Japan'],                 venue:'AT&T Stadium, Dallas',                 kickoff:'2026-06-14T20:00:00Z' },
  { md:1, g:'E', date:'Jun 15', day:'Mon', home:['🇨🇮','Ivory Coast'],  away:['🇪🇨','Ecuador'],               venue:'Lincoln Financial Field, Philadelphia', kickoff:'2026-06-14T23:00:00Z' },
  { md:1, g:'F', date:'Jun 15', day:'Mon', home:['🇸🇪','Sweden'],       away:['🇹🇳','Tunisia'],               venue:'Estadio BBVA, Monterrey',              kickoff:'2026-06-15T02:00:00Z' },
  { md:1, g:'H', date:'Jun 15', day:'Mon', home:['🇪🇸','Spain'],        away:['🇨🇻','Cabo Verde'],            venue:'Mercedes-Benz Stadium, Atlanta',       kickoff:'2026-06-15T16:00:00Z' },
  // Jun 16 — Groups G & H
  { md:1, g:'G', date:'Jun 16', day:'Tue', home:['🇧🇪','Belgium'],      away:['🇪🇬','Egypt'],                 venue:'Lumen Field, Seattle',                 kickoff:'2026-06-15T19:00:00Z' },
  { md:1, g:'H', date:'Jun 16', day:'Tue', home:['🇸🇦','Saudi Arabia'], away:['🇺🇾','Uruguay'],               venue:'Hard Rock Stadium, Miami',             kickoff:'2026-06-15T22:00:00Z' },
  { md:1, g:'G', date:'Jun 16', day:'Tue', home:['🇮🇷','Iran'],         away:['🇳🇿','New Zealand'],           venue:'SoFi Stadium, Los Angeles',            kickoff:'2026-06-16T01:00:00Z' },
  // Jun 17 — Groups I, J & K
  { md:1, g:'I', date:'Jun 17', day:'Wed', home:['🇫🇷','France'],       away:['🇸🇳','Senegal'],               venue:'MetLife Stadium, New York/NJ',          kickoff:'2026-06-16T19:00:00Z' },
  { md:1, g:'I', date:'Jun 17', day:'Wed', home:['🇮🇶','Iraq'],         away:['🇳🇴','Norway'],                venue:'Gillette Stadium, Boston',              kickoff:'2026-06-16T22:00:00Z' },
  { md:1, g:'J', date:'Jun 17', day:'Wed', home:['🇦🇷','Argentina'],    away:['🇩🇿','Algeria'],               venue:'Arrowhead Stadium, Kansas City',        kickoff:'2026-06-17T01:00:00Z' },
  { md:1, g:'J', date:'Jun 17', day:'Wed', home:['🇦🇹','Austria'],      away:['🇯🇴','Jordan'],                venue:"Levi's Stadium, San Francisco",         kickoff:'2026-06-17T04:00:00Z' },
  { md:1, g:'K', date:'Jun 17', day:'Wed', home:['🇵🇹','Portugal'],     away:['🇨🇩','DR Congo'],              venue:'NRG Stadium, Houston',                 kickoff:'2026-06-17T17:00:00Z' },
  // Jun 18 — Groups L & K

  // ── MATCHDAY 2 ──────────────────────────────────────────────
  // Jun 18 — Group A

  { md:2, g:'L', date:'Jun 18', day:'Thu', home:['🏴󠁧󠁢󠁥󠁮󠁧󠁿','England'],      away:['🇭🇷','Croatia'],               venue:'AT&T Stadium, Dallas',                 kickoff:'2026-06-17T20:00:00Z' },
  { md:2, g:'L', date:'Jun 18', day:'Thu', home:['🇬🇭','Ghana'],        away:['🇵🇦','Panama'],                venue:'BMO Field, Toronto',                   kickoff:'2026-06-17T23:00:00Z' },
  { md:2, g:'K', date:'Jun 18', day:'Thu', home:['🇺🇿','Uzbekistan'],   away:['🇨🇴','Colombia'],              venue:'Estadio Azteca, Mexico City',          kickoff:'2026-06-18T02:00:00Z' },
  { md:2, g:'A', date:'Jun 18', day:'Thu', home:['🇨🇿','Czechia'],      away:['🇿🇦','South Africa'],          venue:'Mercedes-Benz Stadium, Atlanta',       kickoff:'2026-06-18T16:00:00Z' },
  // Jun 19 — Groups B & A
  { md:2, g:'B', date:'Jun 19', day:'Fri', home:['🇨🇭','Switzerland'],  away:['🇧🇦','Bosnia and Herzegovina'],venue:'SoFi Stadium, Los Angeles',            kickoff:'2026-06-18T19:00:00Z' },
  { md:2, g:'B', date:'Jun 19', day:'Fri', home:['🇨🇦','Canada'],       away:['🇶🇦','Qatar'],                 venue:'BC Place, Vancouver',                  kickoff:'2026-06-18T22:00:00Z' },
  { md:2, g:'A', date:'Jun 19', day:'Fri', home:['🇲🇽','Mexico'],       away:['🇰🇷','South Korea'],           venue:'Estadio Akron, Guadalajara',           kickoff:'2026-06-19T01:00:00Z' },
  // Jun 20 — Groups D, C & F
  { md:2, g:'D', date:'Jun 20', day:'Sat', home:['🇺🇸','USA'],          away:['🇦🇺','Australia'],             venue:'Lumen Field, Seattle',                 kickoff:'2026-06-19T19:00:00Z' },
  { md:2, g:'C', date:'Jun 20', day:'Sat', home:['🏴󠁧󠁢󠁳󠁣󠁴󠁿','Scotland'],       away:['🇲🇦','Morocco'],               venue:'Gillette Stadium, Boston',              kickoff:'2026-06-19T22:00:00Z' },
  { md:2, g:'C', date:'Jun 20', day:'Sat', home:['🇧🇷','Brazil'],       away:['🇭🇹','Haiti'],                 venue:'Lincoln Financial Field, Philadelphia', kickoff:'2026-06-20T00:30:00Z' },
  { md:2, g:'D', date:'Jun 20', day:'Sat', home:['🇹🇷','Türkiye'],      away:['🇵🇾','Paraguay'],              venue:"Levi's Stadium, San Francisco",         kickoff:'2026-06-20T03:00:00Z' },
  { md:2, g:'F', date:'Jun 20', day:'Sat', home:['🇳🇱','Netherlands'],  away:['🇸🇪','Sweden'],               venue:'NRG Stadium, Houston',                 kickoff:'2026-06-20T17:00:00Z' },
  // Jun 21 — Groups E, F & H
  { md:2, g:'E', date:'Jun 21', day:'Sun', home:['🇩🇪','Germany'],      away:['🇨🇮','Ivory Coast'],           venue:'BMO Field, Toronto',                   kickoff:'2026-06-20T20:00:00Z' },
  { md:2, g:'E', date:'Jun 21', day:'Sun', home:['🇪🇨','Ecuador'],      away:['🇨🇼','Curaçao'],               venue:'Arrowhead Stadium, Kansas City',        kickoff:'2026-06-21T00:00:00Z' },
  { md:2, g:'F', date:'Jun 21', day:'Sun', home:['🇹🇳','Tunisia'],      away:['🇯🇵','Japan'],                 venue:'Estadio BBVA, Monterrey',              kickoff:'2026-06-21T04:00:00Z' },
  { md:2, g:'H', date:'Jun 21', day:'Sun', home:['🇪🇸','Spain'],        away:['🇸🇦','Saudi Arabia'],          venue:'Mercedes-Benz Stadium, Atlanta',       kickoff:'2026-06-21T16:00:00Z' },
  // Jun 22 — Groups G, H & J
  { md:2, g:'G', date:'Jun 22', day:'Mon', home:['🇧🇪','Belgium'],      away:['🇮🇷','Iran'],                  venue:'SoFi Stadium, Los Angeles',            kickoff:'2026-06-21T19:00:00Z' },
  { md:2, g:'H', date:'Jun 22', day:'Mon', home:['🇺🇾','Uruguay'],      away:['🇨🇻','Cabo Verde'],            venue:'Hard Rock Stadium, Miami',             kickoff:'2026-06-21T22:00:00Z' },
  { md:2, g:'G', date:'Jun 22', day:'Mon', home:['🇳🇿','New Zealand'],  away:['🇪🇬','Egypt'],                 venue:'BC Place, Vancouver',                  kickoff:'2026-06-22T01:00:00Z' },
  { md:2, g:'J', date:'Jun 22', day:'Mon', home:['🇦🇷','Argentina'],    away:['🇦🇹','Austria'],               venue:'AT&T Stadium, Dallas',                 kickoff:'2026-06-22T17:00:00Z' },
  // Jun 23 — Groups I, J & K
  { md:2, g:'I', date:'Jun 23', day:'Tue', home:['🇫🇷','France'],       away:['🇮🇶','Iraq'],                  venue:'Lincoln Financial Field, Philadelphia', kickoff:'2026-06-22T21:00:00Z' },
  { md:2, g:'I', date:'Jun 23', day:'Tue', home:['🇳🇴','Norway'],       away:['🇸🇳','Senegal'],               venue:'MetLife Stadium, New York/NJ',          kickoff:'2026-06-23T00:00:00Z' },
  { md:2, g:'J', date:'Jun 23', day:'Tue', home:['🇯🇴','Jordan'],       away:['🇩🇿','Algeria'],               venue:"Levi's Stadium, San Francisco",         kickoff:'2026-06-23T03:00:00Z' },
  { md:2, g:'K', date:'Jun 23', day:'Tue', home:['🇵🇹','Portugal'],     away:['🇺🇿','Uzbekistan'],            venue:'NRG Stadium, Houston',                 kickoff:'2026-06-23T17:00:00Z' },
  // Jun 24 — Groups L & K
  { md:2, g:'L', date:'Jun 24', day:'Wed', home:['🏴󠁧󠁢󠁥󠁮󠁧󠁿','England'],      away:['🇬🇭','Ghana'],                 venue:'Gillette Stadium, Boston',              kickoff:'2026-06-23T20:00:00Z' },
  { md:2, g:'L', date:'Jun 24', day:'Wed', home:['🇵🇦','Panama'],       away:['🇭🇷','Croatia'],               venue:'BMO Field, Toronto',                   kickoff:'2026-06-23T23:00:00Z' },
  { md:2, g:'K', date:'Jun 24', day:'Wed', home:['🇨🇴','Colombia'],     away:['🇨🇩','DR Congo'],              venue:'Estadio Akron, Guadalajara',           kickoff:'2026-06-24T02:00:00Z' },

  // ── MATCHDAY 3 (final matchday — simultaneous within each group) ──
  // Jun 25 — Groups B, C & A
  { md:3, g:'B', date:'Jun 25', day:'Thu', sim:true, home:['🇨🇭','Switzerland'],          away:['🇨🇦','Canada'],          venue:'BC Place, Vancouver',                  kickoff:'2026-06-24T19:00:00Z' },
  { md:3, g:'B', date:'Jun 25', day:'Thu', sim:true, home:['🇧🇦','Bosnia and Herzegovina'],away:['🇶🇦','Qatar'],           venue:'Lumen Field, Seattle',                 kickoff:'2026-06-24T19:00:00Z' },
  { md:3, g:'C', date:'Jun 25', day:'Thu', sim:true, home:['🇲🇦','Morocco'],              away:['🇭🇹','Haiti'],            venue:'Mercedes-Benz Stadium, Atlanta',       kickoff:'2026-06-24T22:00:00Z' },
  { md:3, g:'C', date:'Jun 25', day:'Thu', sim:true, home:['🏴󠁧󠁢󠁳󠁣󠁴󠁿','Scotland'],             away:['🇧🇷','Brazil'],          venue:'Hard Rock Stadium, Miami',             kickoff:'2026-06-24T22:00:00Z' },
  { md:3, g:'A', date:'Jun 25', day:'Thu', sim:true, home:['🇿🇦','South Africa'],         away:['🇰🇷','South Korea'],     venue:'Estadio BBVA, Monterrey',              kickoff:'2026-06-25T01:00:00Z' },
  { md:3, g:'A', date:'Jun 25', day:'Thu', sim:true, home:['🇨🇿','Czechia'],              away:['🇲🇽','Mexico'],          venue:'Estadio Azteca, Mexico City',          kickoff:'2026-06-25T01:00:00Z' },
  // Jun 26 — Groups E, F & D
  { md:3, g:'E', date:'Jun 26', day:'Fri', sim:true, home:['🇨🇼','Curaçao'],              away:['🇨🇮','Ivory Coast'],     venue:'Lincoln Financial Field, Philadelphia', kickoff:'2026-06-25T20:00:00Z' },
  { md:3, g:'E', date:'Jun 26', day:'Fri', sim:true, home:['🇪🇨','Ecuador'],              away:['🇩🇪','Germany'],         venue:'MetLife Stadium, New York/NJ',          kickoff:'2026-06-25T20:00:00Z' },
  { md:3, g:'F', date:'Jun 26', day:'Fri', sim:true, home:['🇹🇳','Tunisia'],              away:['🇳🇱','Netherlands'],     venue:'Arrowhead Stadium, Kansas City',        kickoff:'2026-06-25T23:00:00Z' },
  { md:3, g:'F', date:'Jun 26', day:'Fri', sim:true, home:['🇯🇵','Japan'],                away:['🇸🇪','Sweden'],          venue:'AT&T Stadium, Dallas',                 kickoff:'2026-06-25T23:00:00Z' },
  { md:3, g:'D', date:'Jun 26', day:'Fri', sim:true, home:['🇹🇷','Türkiye'],              away:['🇺🇸','USA'],             venue:'SoFi Stadium, Los Angeles',            kickoff:'2026-06-26T02:00:00Z' },
  { md:3, g:'D', date:'Jun 26', day:'Fri', sim:true, home:['🇵🇾','Paraguay'],             away:['🇦🇺','Australia'],       venue:"Levi's Stadium, San Francisco",         kickoff:'2026-06-26T02:00:00Z' },
  // Jun 27 — Groups I, H & G
  { md:3, g:'I', date:'Jun 27', day:'Sat', sim:true, home:['🇳🇴','Norway'],               away:['🇫🇷','France'],          venue:'Gillette Stadium, Boston',              kickoff:'2026-06-26T19:00:00Z' },
  { md:3, g:'I', date:'Jun 27', day:'Sat', sim:true, home:['🇸🇳','Senegal'],              away:['🇮🇶','Iraq'],            venue:'BMO Field, Toronto',                   kickoff:'2026-06-26T19:00:00Z' },
  { md:3, g:'H', date:'Jun 27', day:'Sat', sim:true, home:['🇨🇻','Cabo Verde'],           away:['🇸🇦','Saudi Arabia'],    venue:'NRG Stadium, Houston',                 kickoff:'2026-06-27T00:00:00Z' },
  { md:3, g:'H', date:'Jun 27', day:'Sat', sim:true, home:['🇺🇾','Uruguay'],              away:['🇪🇸','Spain'],           venue:'Estadio Akron, Guadalajara',           kickoff:'2026-06-27T00:00:00Z' },
  { md:3, g:'G', date:'Jun 27', day:'Sat', sim:true, home:['🇳🇿','New Zealand'],          away:['🇧🇪','Belgium'],         venue:'BC Place, Vancouver',                  kickoff:'2026-06-27T03:00:00Z' },
  { md:3, g:'G', date:'Jun 27', day:'Sat', sim:true, home:['🇪🇬','Egypt'],                away:['🇮🇷','Iran'],            venue:'Lumen Field, Seattle',                 kickoff:'2026-06-27T03:00:00Z' },
  // Jun 28 — Groups L, K & J
  { md:3, g:'L', date:'Jun 28', day:'Sun', sim:true, home:['🇵🇦','Panama'],               away:['🏴󠁧󠁢󠁥󠁮󠁧󠁿','England'],        venue:'MetLife Stadium, New York/NJ',          kickoff:'2026-06-27T21:00:00Z' },
  { md:3, g:'L', date:'Jun 28', day:'Sun', sim:true, home:['🇭🇷','Croatia'],              away:['🇬🇭','Ghana'],            venue:'Lincoln Financial Field, Philadelphia', kickoff:'2026-06-27T21:00:00Z' },
  { md:3, g:'K', date:'Jun 28', day:'Sun', sim:true, home:['🇨🇴','Colombia'],             away:['🇵🇹','Portugal'],        venue:'Hard Rock Stadium, Miami',             kickoff:'2026-06-27T23:30:00Z' },
  { md:3, g:'K', date:'Jun 28', day:'Sun', sim:true, home:['🇨🇩','DR Congo'],             away:['🇺🇿','Uzbekistan'],      venue:'Mercedes-Benz Stadium, Atlanta',       kickoff:'2026-06-27T23:30:00Z' },
  { md:3, g:'J', date:'Jun 28', day:'Sun', sim:true, home:['🇩🇿','Algeria'],              away:['🇦🇹','Austria'],         venue:'Arrowhead Stadium, Kansas City',        kickoff:'2026-06-28T02:00:00Z' },
  { md:3, g:'J', date:'Jun 28', day:'Sun', sim:true, home:['🇯🇴','Jordan'],               away:['🇦🇷','Argentina'],       venue:'AT&T Stadium, Dallas',                 kickoff:'2026-06-28T02:00:00Z' },
];

const KO = [
  // ── ROUND OF 32 (Jun 28–Jul 4) ──────────────────────────────
  { round:'R32', num:73,  label:'Match 73',  date:'Jun 29', day:'Mon', home:'TBD', away:'TBD', venue:'SoFi Stadium, Los Angeles',            kickoff:'2026-06-28T19:00:00Z' },
  { round:'R32', num:74,  label:'Match 74',  date:'Jun 29', day:'Mon', home:'TBD', away:'TBD', venue:'Gillette Stadium, Boston',              kickoff:'2026-06-29T17:00:00Z' },
  { round:'R32', num:75,  label:'Match 75',  date:'Jun 30', day:'Tue', home:'TBD', away:'TBD', venue:'Estadio BBVA, Monterrey',               kickoff:'2026-06-29T20:30:00Z' },
  { round:'R32', num:76,  label:'Match 76',  date:'Jun 30', day:'Tue', home:'TBD', away:'TBD', venue:'NRG Stadium, Houston',                  kickoff:'2026-06-30T01:00:00Z' },
  { round:'R32', num:77,  label:'Match 77',  date:'Jun 30', day:'Tue', home:'TBD', away:'TBD', venue:'MetLife Stadium, New York/NJ',          kickoff:'2026-06-30T17:00:00Z' },
  { round:'R32', num:78,  label:'Match 78',  date:'Jul 1',  day:'Wed', home:'TBD', away:'TBD', venue:'AT&T Stadium, Dallas',                  kickoff:'2026-06-30T21:00:00Z' },
  { round:'R32', num:79,  label:'Match 79',  date:'Jul 1',  day:'Wed', home:'TBD', away:'TBD', venue:'Estadio Azteca, Mexico City',           kickoff:'2026-07-01T01:00:00Z' },
  { round:'R32', num:80,  label:'Match 80',  date:'Jul 1',  day:'Wed', home:'TBD', away:'TBD', venue:'Mercedes-Benz Stadium, Atlanta',        kickoff:'2026-07-01T16:00:00Z' },
  { round:'R32', num:81,  label:'Match 81',  date:'Jul 2',  day:'Thu', home:'TBD', away:'TBD', venue:"Levi's Stadium, San Francisco",         kickoff:'2026-07-01T20:00:00Z' },
  { round:'R32', num:82,  label:'Match 82',  date:'Jul 2',  day:'Thu', home:'TBD', away:'TBD', venue:'Lumen Field, Seattle',                  kickoff:'2026-07-02T00:00:00Z' },
  { round:'R32', num:83,  label:'Match 83',  date:'Jul 3',  day:'Fri', home:'TBD', away:'TBD', venue:'BMO Field, Toronto',                    kickoff:'2026-07-02T19:00:00Z' },
  { round:'R32', num:84,  label:'Match 84',  date:'Jul 3',  day:'Fri', home:'TBD', away:'TBD', venue:'SoFi Stadium, Los Angeles',             kickoff:'2026-07-02T23:00:00Z' },
  { round:'R32', num:85,  label:'Match 85',  date:'Jul 3',  day:'Fri', home:'TBD', away:'TBD', venue:'BC Place, Vancouver',                   kickoff:'2026-07-03T03:00:00Z' },
  { round:'R32', num:86,  label:'Match 86',  date:'Jul 4',  day:'Sat', home:'TBD', away:'TBD', venue:'Hard Rock Stadium, Miami',              kickoff:'2026-07-03T18:00:00Z' },
  { round:'R32', num:87,  label:'Match 87',  date:'Jul 4',  day:'Sat', home:'TBD', away:'TBD', venue:'Arrowhead Stadium, Kansas City',        kickoff:'2026-07-03T22:00:00Z' },
  { round:'R32', num:88,  label:'Match 88',  date:'Jul 4',  day:'Sat', home:'TBD', away:'TBD', venue:'AT&T Stadium, Dallas',                  kickoff:'2026-07-04T01:30:00Z' },
  // ── ROUND OF 16 (Jul 4–8) ───────────────────────────────────
  { round:'R16', num:89,  label:'Match 89',  date:'Jul 4',  day:'Sat', home:'W-M74', away:'W-M77', venue:'Lincoln Financial Field, Philadelphia', kickoff:'2026-07-04T17:00:00Z' },
  { round:'R16', num:90,  label:'Match 90',  date:'Jul 5',  day:'Sun', home:'W-M73', away:'W-M75', venue:'NRG Stadium, Houston',             kickoff:'2026-07-04T21:00:00Z' },
  { round:'R16', num:91,  label:'Match 91',  date:'Jul 6',  day:'Mon', home:'W-M76', away:'W-M78', venue:'MetLife Stadium, New York/NJ',     kickoff:'2026-07-05T20:00:00Z' },
  { round:'R16', num:92,  label:'Match 92',  date:'Jul 6',  day:'Mon', home:'W-M79', away:'W-M80', venue:'Estadio Azteca, Mexico City',      kickoff:'2026-07-06T00:00:00Z' },
  { round:'R16', num:93,  label:'Match 93',  date:'Jul 7',  day:'Tue', home:'W-M83', away:'W-M84', venue:'AT&T Stadium, Dallas',             kickoff:'2026-07-06T19:00:00Z' },
  { round:'R16', num:94,  label:'Match 94',  date:'Jul 7',  day:'Tue', home:'W-M81', away:'W-M82', venue:'Lumen Field, Seattle',             kickoff:'2026-07-07T00:00:00Z' },
  { round:'R16', num:95,  label:'Match 95',  date:'Jul 7',  day:'Tue', home:'W-M86', away:'W-M88', venue:'Mercedes-Benz Stadium, Atlanta',   kickoff:'2026-07-07T16:00:00Z' },
  { round:'R16', num:96,  label:'Match 96',  date:'Jul 8',  day:'Wed', home:'W-M85', away:'W-M87', venue:'BC Place, Vancouver',              kickoff:'2026-07-07T20:00:00Z' },
  // ── QUARTER-FINALS (Jul 10–12) ───────────────────────────────
  { round:'QF',  num:97,  label:'QF 1',      date:'Jul 10', day:'Fri', home:'W-M89', away:'W-M90', venue:'Gillette Stadium, Boston',         kickoff:'2026-07-09T20:00:00Z' },
  { round:'QF',  num:98,  label:'QF 2',      date:'Jul 11', day:'Sat', home:'W-M93', away:'W-M94', venue:'SoFi Stadium, Los Angeles',        kickoff:'2026-07-10T19:00:00Z' },
  { round:'QF',  num:99,  label:'QF 3',      date:'Jul 12', day:'Sun', home:'W-M91', away:'W-M92', venue:'Hard Rock Stadium, Miami',         kickoff:'2026-07-11T21:00:00Z' },
  { round:'QF',  num:100, label:'QF 4',      date:'Jul 12', day:'Sun', home:'W-M95', away:'W-M96', venue:'Arrowhead Stadium, Kansas City',   kickoff:'2026-07-12T01:00:00Z' },
  // ── SEMI-FINALS (Jul 15–16) ──────────────────────────────────
  { round:'SF',  num:101, label:'Semi-Final 1', date:'Jul 15', day:'Wed', home:'W-M97',  away:'W-M98',  venue:'AT&T Stadium, Dallas',         kickoff:'2026-07-14T19:00:00Z' },
  { round:'SF',  num:102, label:'Semi-Final 2', date:'Jul 16', day:'Thu', home:'W-M99',  away:'W-M100', venue:'Mercedes-Benz Stadium, Atlanta',kickoff:'2026-07-15T19:00:00Z' },
  // ── THIRD PLACE (Jul 19) ─────────────────────────────────────
  { round:'3RD', num:103, label:'Third Place',  date:'Jul 19', day:'Sun', home:'L-M101', away:'L-M102', venue:'Hard Rock Stadium, Miami',      kickoff:'2026-07-18T21:00:00Z' },
  // ── FINAL (Jul 20) ───────────────────────────────────────────
  { round:'FINAL', num:104, label:'THE FINAL',  date:'Jul 20', day:'Mon', home:'W-M101', away:'W-M102', venue:'MetLife Stadium, New York/NJ',  kickoff:'2026-07-19T19:00:00Z' },
];

/* ===== TIMEZONE HELPERS ===== */
function formatKickoff(kickoff) {
  const date = new Date(kickoff);
  const timeStr = date.toLocaleTimeString(undefined, {
    hour: '2-digit',
    minute: '2-digit'
  });
  const tzAbbr = new Intl.DateTimeFormat(undefined, { timeZoneName: 'short' })
    .formatToParts(date)
    .find(p => p.type === 'timeZoneName')?.value || '';
  return `<span class="fx-time-val">${timeStr}</span> <span class="fx-tz">${tzAbbr}</span>`;
}

/* Group matches by local calendar date so headers match the visitor's timezone */
function localDateKey(kickoff) {
  const d = new Date(kickoff);
  return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
}

function localDateLabel(kickoff) {
  return new Date(kickoff).toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
}

function localDayLabel(kickoff) {
  return new Date(kickoff).toLocaleDateString(undefined, { weekday: 'short' });
}

/* ===== RENDER HELPERS ===== */
function dayHeader(dateStr, dayStr) {
  return `<div class="fx-day-hdr"><span class="fx-day-date">${dateStr}</span><span class="fx-day-name">${dayStr}</span></div>`;
}

function groupCard(m) {
  return `
    <div class="fx-card">
      <div class="fx-card-top">
        <span class="fx-grp-badge">Group ${m.g}</span>
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
      <div class="fx-meta">
        <span>📍 ${m.venue}</span>
        <span class="fx-time">🕐 ${formatKickoff(m.kickoff)}</span>
      </div>
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
        <span class="fx-ko-date">${localDateLabel(m.kickoff)} · ${localDayLabel(m.kickoff)}</span>
      </div>
      <div class="fx-teams">
        <div class="fx-team">${homeTxt}</div>
        <div class="fx-vs">${isFinal ? '🏆' : 'VS'}</div>
        <div class="fx-team fx-team--r">${awayTxt}</div>
      </div>
      <div class="fx-meta">
        <span>📍 ${m.venue}</span>
        <span class="fx-time">🕐 ${formatKickoff(m.kickoff)}</span>
      </div>
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
      const key = m.date;
      if (!byDate[key]) byDate[key] = { label: m.date, day: m.day, matches: [] };
      byDate[key].matches.push(m);
    });
    let html = '';
    for (const [, block] of Object.entries(byDate)) {
      html += dayHeader(block.label, block.day);
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
