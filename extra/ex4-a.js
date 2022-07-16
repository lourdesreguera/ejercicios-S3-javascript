const countries = [{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}];

// const ul$$ = document.createElement('ul');

// for (const country of countries) {
//     const li$$ = document.createElement('li');
//     const div$$ = document.createElement('div');
//     const h4$$ = document.createElement('h4');
//     const img$$ = document.createElement('img');

//     h4$$.textContent = country.title;
//     img$$.setAttribute('href', country.imgUrl);
    
//     ul$$.appendChild(li$$);
//     li$$.appendChild(div$$);
//     div$$.appendChild(h4$$);
//     div$$.appendChild(img$$);
// }

// document.body.appendChild(ul$$)

for (const country of countries) {
    const div$$ = document.createElement('div');
    div$$.innerHTML = `<h4>${country.title}</h4><img src='${country.imgUrl}'>`
    
    document.body.appendChild(div$$)
}