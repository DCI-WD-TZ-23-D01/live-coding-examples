// Task 1
const clickMeButton = document.querySelector('#clickMe');

clickMeButton.addEventListener('click', () =>
  console.log('Ein Click-Ereignis!')
);

// clickMe.addEventListener('click', () =>
//   console.log('Ein Click-Ereignis!'));

// Task 2
clickMeButton.addEventListener('mouseenter', () => {
  console.log('mouse kommt rein!');
});
clickMeButton.addEventListener('mouseleave', () => {
  console.log('mouse geht raus!');
});

// Task 3
const clickMeOnceButton = document.querySelector('#clickMeOnce');
/* 
// Variante 1
const klickEinmal = () => console.log('Der once-Button wird geklickt');
clickMeOnceButton.addEventListener('click', klickEinmal);
clickMeOnceButton.addEventListener('click', () => clickMeOnceButton.removeEventListener('click', klickEinmal));
 */
// Variante 2
function clickHandler(event) {
  console.log('klick!');
  // clickMeOnceButton.removeEventListener('click', clickHandler);
  // event.target ist das Element, worauf geklickt wurde
  // event.target.removeEventListener('click', clickHandler)
  // event.currentTarget ist das Element, wo der EventLitener hinzugefügt wurde.
  event.currentTarget.removeEventListener('click', clickHandler);
}
clickMeOnceButton.addEventListener('click', clickHandler);

// Task 4
document.addEventListener('DOMContentLoaded', () =>
  console.log('DOM ist geladen')
);
