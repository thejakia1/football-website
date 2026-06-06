function searchTeam(query) {
  const q = query.toLowerCase().trim();
  const cards = document.querySelectorAll('.group-card');
  const rows  = document.querySelectorAll('.team-row');

  rows.forEach(r => r.classList.remove('search-match'));
  cards.forEach(c => c.classList.remove('highlight'));

  if (!q) return;

  rows.forEach(row => {
    const name = (row.dataset.team || '').toLowerCase();
    if (name.includes(q)) {
      row.classList.add('search-match');
      row.closest('.group-card').classList.add('highlight');
    }
  });
}

function filterCities(country, btn) {
  document.querySelectorAll('.city-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');

  document.querySelectorAll('.city-card').forEach(card => {
    card.classList.toggle('hidden', country !== 'all' && card.dataset.country !== country);
  });
}