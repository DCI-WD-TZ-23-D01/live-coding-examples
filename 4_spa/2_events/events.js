// Um auf ein Element (h1) aus DOM zuzugreifen, können wir hier mit getElementById oder querySelector arbeiten

const h1 = document.querySelector('h1');
// const h1 = document.getElementById('site-title');
// const h1 = document.querySelector('#site-title');

h1.style.color = 'blue';

/* 
Wir benutzen die Methode addEventListener, um mit Events zu arbeiten 
Auf English sagt man event fires (feuern) / event triggers (auslösen)
*/

// Die Callbackfunktion für EventListener hat das event-Objekt als Parameter
// häufig als "event" oder "e" geschrieben
function arial(eventObjekt) {
  // console.log(eventObjekt);
  // target ist das Element, wo das Event stattgefunden hat. Hier das Element, worauf geklickt wurde
  eventObjekt.target.style.fontFamily = 'Arial';
}
// Hier wird die Callback-Funktion draußen mit einem Namen erstellt. Dann mit dem Namen an addEventListener übergeben
h1.addEventListener('click', arial);

const introP = document.querySelector('.intro');

// Hier wird die Callback-Funktion direkt als eine anonyme Funktion übergeben
introP.addEventListener('click', (event) => {
  if (event.target.style.fontSize) {
    event.target.style.fontSize = '';
  } else {
    event.target.style.fontSize = '1.4rem';
  }
});

const incrementButton = document.querySelector('.increment');
const counter = document.querySelector('.counter');

const increment = () => {
  const currentValue = counter.innerText; // z.B. 6
  const newValue = parseInt(currentValue) + 1; // 7
  counter.innerText = newValue; // 7
};
incrementButton.addEventListener('click', increment);

/* 
Wir benutzen element.removeEventListener, um einen EventListener wieder zu entfernen. Das funktioniert nur, wenn die Callback-Funktion einen Namen hat. D.h. die Callback-Funktion muss draußen mit einem Namen erstellt werden.
*/
const stopButton = document.querySelector('.remove-increment');
stopButton.addEventListener('click', () =>
  incrementButton.removeEventListener('click', increment)
);

const mousemoveDemo = document.querySelector('.mousemove');

// Das event wird ausgelöst, wenn sich die Maus in <section class="mousemove"> bewegt.
// Ich könnte das Event auch an document setzen (document.addEventListener), dann wird das Event ausgelöst, wenn sich die Maus irgendwo im Browserfenster bewegt.
mousemoveDemo.addEventListener('mousemove', (event) => {
  // besonders interessante Eigenschaften aus event-Objekt sind hier screenX, screenY, clientX, clientY
  console.log(event);
});

const mouseenterLeaveDemo = document.querySelector('.mouseenter-leave');

mouseenterLeaveDemo.addEventListener('mouseenter', (event) => {
  // relatedTarget in eventObjekt ist, woher die Maus kommt
  console.log(event);
  event.target.style.backgroundColor = 'yellow';
});

mouseenterLeaveDemo.addEventListener('mouseleave', (event) => {
  // relatedTarget in eventObjekt ist, wohin die Maus geht
  console.log(event);
  event.target.style.backgroundColor = '';
});

/* 
DOMContentLoaded-Event wird gefeuert, wenn das HTML fertig geparst/einglesen und das DOM im Speicher geladen wurde.
Um ganz sicher zu sein, dass alles im DOM geladen wurde, um danach weiteren Code auszuführen, müsste man den Code im Callback von DOMContentLoaded schreiben.
In der Praxis reicht es, wenn man den script-Tag am Ende von Body schreibt oder in Head mit defer-Attribut. "Theoretisch" ist es möglich, dass da der HTML fertig geparst aber das DOM im Speicher noch nicht fertig gebaut ist. In der Praxis passiert es aber bei keinem gängigen Browser.
Bzw. man benutzt DOMContentLoaded, falls der Chef es will.
*/
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded fires! 🔥');
});

const keyboardList = document.querySelector('.keyboard-event');
// keypress-Event ist veraltet. Benutzt keydown und keyup
document.addEventListener('keydown', (event) => {
  // console.log(event);
  const li = document.createElement('li');
  // Es gibt auch eine keycode-Eigenschaft. Die ist auch eher veraltert und ihr braucht sie nicht
  li.innerText = `key: ${event.key}, code: ${event.code}. keydown`;
  keyboardList.append(li);
});

document.addEventListener('keyup', (event) => {
  const li = document.createElement('li');
  li.innerText = `key: ${event.key}, code: ${event.code}. keyup`;
  keyboardList.append(li);
});

const input = document.querySelector('#keyboard');
const verschiebenSection = document.querySelector('.verschieben-demo');

let xOffset = 0;
input.addEventListener('keydown', (event) => {
  // tue nur etwas, wenn auf bestimmte Taste gedrückt wird
  if (event.key === 'ArrowLeft') {
    xOffset -= 10;
    verschiebenSection.style.transform = `translateX(${xOffset}px)`;
  } else if (event.key === 'ArrowRight') {
    xOffset += 10;
    verschiebenSection.style.transform = `translateX(${xOffset}px)`;
  }
});
