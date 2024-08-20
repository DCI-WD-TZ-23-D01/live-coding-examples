const formElement = document.querySelector('form');
const mainElement = document.querySelector('main');

formElement.onsubmit = (e) => {
  e.preventDefault();

  const title = e.target.title.value;
  const recipe = e.target.recipe.value;
  const vegan = e.target.vegan.value;
  const gluten = e.target.gluten.checked;
  const lactose = e.target.lactose.checked;
  const peanuts = e.target.peanuts.checked;

  const newCard = document.createElement('section');
  newCard.classList.add('card');
  newCard.innerHTML = `<h2>${title}</h2>
        <p>${recipe}</p>
        <p>
          ${vegan == 'true' ? '<span class="vegan">Vegan</span>' : ''}
          ${gluten ? '<span>Gluten</span>' : ''}
          ${lactose ? '<span>Laktose</span>' : ''}
          ${peanuts ? '<span>Erdnüsse</span>' : ''}
        </p>`;
  mainElement.append(newCard);
};
