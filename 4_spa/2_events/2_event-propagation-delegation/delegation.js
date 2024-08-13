// Ich möchte etwas machen, wenn der Benutzer auf ein <li> klickt

// "naive" Variante: Ich füge allen li einzeln einen Event Listener hinzu

const alleLi = document.querySelectorAll('ul li');

// alleLi[0].addEventListener('click', (event) => {
//   console.log(`Ich habe auf ${event.target.innerText} geklickt`)
// })
// alleLi[1].addEventListener('click', (event) => {
//   console.log(`Ich habe auf ${event.target.innerText} geklickt`)
// })
// alleLi[2].addEventListener('click', (event) => {
//   console.log(`Ich habe auf ${event.target.innerText} geklickt`)
// });

// etwas kürzere Variante: Mit einer Schleife füge ich allen li einen Event Listener hinzu
/* alleLi.forEach(li => li.addEventListener('click', (event) => {
  console.log(`Ich habe auf ${event.target.innerText} geklickt`)
})); */

// Die neue Variante mit Event Delegation: Ich füge nicht allen li jeweils einen Event Listener hinzu, sondern ich füge nur dem ul einen Event Listener hinzu
const ul = document.querySelector('ul');
ul.addEventListener('click', event => {
  // ich prüfe, ob ich genau auf ein klickt habe
  if (event.target.matches('li')) {
    console.log(`Ich habe auf ${event.target.innerText} geklickt`);
    // mit element.remove() entfernen wir ein Element aus DOM
    event.target.remove();
  }
});