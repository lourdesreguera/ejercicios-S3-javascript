const countries = [{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}];


for (const country of countries) {
    const div$$ = document.createElement('div');
    const btn2$$ = document.createElement('button');
    
    div$$.innerHTML = `<h4>${country.title}</h4><img src='${country.imgUrl}'>`;
    btn2$$.textContent = 'Remove element';

    div$$.appendChild(btn2$$);
    document.body.appendChild(div$$)

    btn2$$.addEventListener('click', function () {
        div$$.remove();
    })   
}

const btn$$ = document.querySelector('[data-fn="btn"]');

function remove() {
    const divAll$$ = document.querySelectorAll('div');
    const lastDiv$$ = divAll$$[divAll$$.length-1];
    lastDiv$$.remove();
}
btn$$.addEventListener('click', remove);
