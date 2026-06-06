const PARTIALS = [
  ['slot-nav',       'partials/nav.html'],
  ['slot-hero',      'partials/hero.html'],
  ['slot-stats',     'partials/stats.html'],
  ['slot-groups',    'partials/groups.html'],
  ['slot-format',    'partials/format.html'],
  ['slot-cities',    'partials/cities.html'],
  ['slot-predictor', 'partials/predictor.html'],
  ['slot-footer',    'partials/footer.html'],
];

Promise.all(
  PARTIALS.map(([id, src]) =>
    fetch(src).then(r => r.text()).then(html => {
      document.getElementById(id).innerHTML = html;
    })
  )
).then(() => {
  document.dispatchEvent(new Event('app:ready'));
});