const form = document.querySelector('form');
const output = document.querySelector('#abgeschickt');

/* 
Wenn wir mit einem Formular etwas absenden, dann ist es Best Practice, mit submit-Event auf form-Element zu arbeiten (statt mit click-Event auf den Button).
Es gibt nämlich mehrere Möglichkeiten, ein Formular abzusenden (z.B. mit Enter-Taste).
Das ist besser für UX und a11y
*/

form.addEventListener('submit', (event) => {
  /* event.preventDefault() unterbindet das Standardverhalten von diesem Event
  Das Standardverhalten von submit-event ist es, dass der Browser zu der URL, die in action-Attribut steht, navigiert. Wenn in action-Attribut nichts  steht, wird die Seite neu geladen bzw. zur selben Seite navigiert */
  event.preventDefault();

  // ein HTML-Form-Element hat eine spezielle elements-Eigenschaft. Damit kann ich auf alle input u.ä. zugreifen über ihr name- oder id-Attribut form.elements.name/id
  // const nameValue = event.target.elements.name.value;
  // man kann auch .elements weglassen
  const nameValue = event.target.benutzername.value;
  const passwortValue = event.target.password.value;
  output.innerText = `Name: ${nameValue}, Passwort: ${passwortValue}`;

  // Alle input u.ä. Elemente zurücksetzen/reset
  event.target.reset();
});
