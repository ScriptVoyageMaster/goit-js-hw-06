function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const button = document.querySelector('.change-color');
const color = document.querySelector('.color');


function changeColor() {
    const hehColor = getRandomHexColor();
    color.textContent = hehColor;
    document.body.style.backgroundColor = hehColor;
}
button.addEventListener('click', changeColor);
//setInterval(changeColor,5000);