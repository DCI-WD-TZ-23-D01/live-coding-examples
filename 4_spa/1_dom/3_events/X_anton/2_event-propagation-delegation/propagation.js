/* 
event is das event-Objekt.
event.target entspricht dem Element, wo das Event passiert ist.
event.currentTarget entspricht dem Element, wo der EventListener gesetzt ist.
*/

// Hier gebe ich alle 4 div einem Click-EventListener. Hier kann man die event phases besser sehen
const phases = ["none", "capture", "target", "bubble"];
const alleDivs = document.querySelectorAll('div');
let letztesDiv;
alleDivs.forEach((div) => {
  div.addEventListener('click', (event) => {
    console.log("target:", event.target.id);
    console.log("current target:", event.currentTarget.id);
    console.log("event phase:", event.eventPhase, phases[event.eventPhase]);
    if (letztesDiv) {
      letztesDiv.style.backgroundColor = "";
    }
    event.target.style.backgroundColor = "blue";
    letztesDiv = event.target;
  });
  // mit dem dritten Argument true wird Capturing benutzt statt Bubbling
  // }, true);
});

// Alternativ gebe ich nur #d1 einen Event Listener.
/* 
document.querySelector('#d1').addEventListener('click', (event) => {
  console.log("target:", event.target.id);
  console.log("current target:", event.currentTarget.id);
  console.log("event phase:", event.eventPhase, phases[event.eventPhase]);
  if (letztesDiv) {
    letztesDiv.style.backgroundColor = "";
  }
  event.target.style.backgroundColor = "blue";
  letztesDiv = event.target;
});
 */