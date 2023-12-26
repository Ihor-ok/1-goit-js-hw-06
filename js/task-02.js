const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const fillingIngredients =[];
const listIngredientsEl = document.querySelector("#ingredients");

for (let i = 0; i < ingredients.length; i += 1) {
  const ingredientEl = document.createElement("li");
  ingredientEl.textContent = ingredients[i];
  ingredientEl.classList.add("item");
  fillingIngredients.push(ingredientEl);

}

listIngredientsEl.append(...fillingIngredients);

