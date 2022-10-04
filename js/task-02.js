const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
  ];



const ingredientsItems = ingredients.map(ingridient =>{

  const ingridientEl = document.createElement('li');

  ingridientEl.textContent = ingridient;
  ingridientEl.classList = 'item';

  return ingridientEl;
})

console.log(ingredientsItems);

const ingredientsList  = document.querySelector('#ingredients');

ingredientsList.append(...ingredientsItems);
