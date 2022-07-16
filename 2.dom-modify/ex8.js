const div2$$ = document.querySelector('[data-fn="div2"]');
const p$$ = document.createElement('p');
p$$.textContent = 'Voy en medio!';

document.body.insertBefore(p$$, div2$$);
