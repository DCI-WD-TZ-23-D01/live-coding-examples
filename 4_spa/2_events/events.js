// Um auf ein Element (h1) aus DOM zuzugreifen, können wir hier mit getElementById oder querySelector

const h1 = document.querySelector('h1');
// const h1 = document.getElementById('site-title');
// const h1 = document.querySelector('#site-title');

h1.style.color = "blue";

// Wir benutzen die Methode addEventListener, um mit Events zu arbeiten

function arial(eventObjekt) {
  console.log(eventObjekt);
  // target ist das Element, wo das Event stattgefunden hat. Hier das Element, worauf geklickt wurde
  eventObjekt.target.style.fontFamily = "Arial";
}
h1.addEventListener('click', arial);

