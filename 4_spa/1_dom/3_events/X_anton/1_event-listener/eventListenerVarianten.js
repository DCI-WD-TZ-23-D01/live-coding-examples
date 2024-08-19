// Variante mit DOM-Eigenschaft
const domP = document.querySelector('#dom');
// Man kann mit DOM-Eigenschaft nicht mehrere Event Listeners zum selben Event hinzufügen, da Objekteigenschaften einzigartig sind und die zweite Zuweisung die erste überschreibt
domP.onclick = (event) => (event.target.style.color = 'blue');
domP.onclick = (event) => (event.target.style.fontSize = '0.7rem');

// Variante mit element.addEventListener
const mehrereListenersLi = document.querySelector('#mehrere-listeners');

// Man kann mehrere Listener zu einem Event hinzufügen
mehrereListenersLi.addEventListener('click', (event) => {
  event.target.style.color = 'orange';
});
mehrereListenersLi.addEventListener(
  'click',
  (event) => (event.target.style.fontSize = '1.3rem')
);

// Optionales drittes Argument. In diesem Beispiel wird der Listener nur einmal aufgerufen und danach entfernt
const einmalLi = document.querySelector('#einmal');
einmalLi.addEventListener(
  'click',
  (event) => (event.target.innerText += ' Hallo!'),
  { once: true }
);
