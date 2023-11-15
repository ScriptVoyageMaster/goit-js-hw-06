const counter = document.getElementById("counter");
const value = document.getElementById("value");


counter.addEventListener('click', function (ev) { 
    const action = ev.target.dataset.action;
    if (action === 'decrement') {
        decrementElement();
    } else if(action === 'increment') {
        incrementElement();
    };
    //console.log(action);
});
function decrementElement() { 
    value.textContent =parseInt(value.textContent) - 1;
}
function incrementElement() { 
    value.textContent =parseInt(value.textContent) + 1;
}
