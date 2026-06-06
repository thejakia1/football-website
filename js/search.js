function searchTeam(query) {
  const q = query.toLowerCase().trim();
  const cards = document.querySelectorAll('.group-card');
  const rows  = document.querySelectorAll('.team-row');
  const isMobile = window.innerWidth < 640;

  rows.forEach(r => r.classList.remove('search-match'));
  cards.forEach(c => {
    c.classList.remove('highlight');
    if (isMobile && !q) c.classList.remove('open');
  });

  if (!q) return;

  rows.forEach(row => {
    const name = (row.dataset.team || '').toLowerCase();
    if (name.includes(q)) {
      row.classList.add('search-match');
      const card = row.closest('.group-card');
      card.classList.add('highlight');
      if (isMobile) card.classList.add('open');
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