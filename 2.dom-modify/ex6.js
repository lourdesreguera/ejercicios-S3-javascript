const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const ul$$ = document.createElement('ul');

for (const app of apps) {
    const li$$ = document.createElement('li');
    li$$.innerHTML = app;
    ul$$.appendChild(li$$);
}

document.body.appendChild(ul$$);