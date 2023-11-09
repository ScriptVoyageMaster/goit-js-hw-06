const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const elementUl = document.getElementById('ingredients');
const fragment = document.createDocumentFragment();
ingredients.forEach(el => { 
  const liElement = document.createElement('li');
  liElement.classList.add('item');
  liElement.textContent = el;
  fragment.appendChild(liElement);
});
elementUl.appendChild(fragment);