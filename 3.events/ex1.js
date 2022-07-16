const btn$$ = document.querySelector('button');
btn$$.setAttribute('id', 'btnToClick');

function handleclick(event) {
    console.log(event)
}

btn$$.addEventListener('click', handleclick);
