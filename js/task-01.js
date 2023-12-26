
const listCategories = document.querySelector("#categories");
console.log(`Number of categories: ${listCategories.children.length}`);

Array.from(listCategories.children).forEach(categoria => {

    console.log(`Category: ${categoria.querySelector("h2").textContent}`);
    console.log(`Elements: ${categoria.querySelector("ul").children.length}`);
    
})