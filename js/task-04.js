const decrement = document.getElementById("decrement");
const increment = document.getElementById("increment");
const value = document.getElementById("value");

function decrementButtonClick() { 
    value.textContent -= 1;
};
decrement.addEventListener('click', decrementButtonClick);