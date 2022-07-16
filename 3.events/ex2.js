const input$$ = document.querySelector('[data-fn="input"]');

function myFunc(event) {
    console.log(event.target.value);
}

input$$.addEventListener('focus', myFunc);