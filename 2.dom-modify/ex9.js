const text = 'Voy dentro!';
const divAll$$ = document.querySelectorAll('.fn-insert-here');

for (const div$$ of divAll$$) {
    const p$$ = document.createElement('p');
    p$$.textContent = text;
    div$$.appendChild(p$$);
}