const element = document.getElementById('categories');
const childElements = Array.from(element.children);
console.log("Number of categories: " + childElements.length);
childElements.forEach((element) => {
    console.log(`Category: ${element.firstElementChild.textContent}`);
    console.log(`Elements: ${element.firstElementChild.nextElementSibling.children.length}`);
});