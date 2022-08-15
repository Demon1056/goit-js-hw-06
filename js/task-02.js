const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

function createIngredientItem (ingredient){
  const ingredientItem = document.createElement('li')
ingredientItem.textContent=ingredient;
ingredientItem.classList.add('item')
  return ingredientItem;  
} 
 const ingredientsObject = ingredients.map(createIngredientItem); 
const ingredientsList=document.querySelector('#ingredients')
ingredientsList.append (...ingredientsObject)