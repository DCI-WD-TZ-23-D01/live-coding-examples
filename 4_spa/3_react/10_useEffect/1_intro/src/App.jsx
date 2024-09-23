// Referenz: https://react.dev/reference/react/useEffect

// mit useEffect können wir side effects in functional components hinzufügen, das bedeutet das wir bestimmte dinge ausführen können während des component lifecycles. Wenn wir zum beispiel den titel der seite ändern wollen, können wir auf das document objekt der DOM zugreifen. Dies könnten wir direkt hier machen, allerdings wird der befehl dann konstant andauernd neu ausgeführt, sobald der komponent verändert wird. Das wollen wir nicht. Wenn wir useEffect allerdings dafür benutzen, passiert der effekt NUR an der stelle, wo wir es haben wollen, also zum beispiel beim laden der seite, und wenn wir den titel verändern wollen.

// wir nennen dieses konstrukt "Seiteneffekt", da es passiert während der komponent lebt, wie erwähnt im "lebenszyklus" - nebenbei, werden diese hooks eingesetzte.

// als erstes importieren wir .useState(); und .useEffect(); aus react:
import { useState, useEffect } from 'react';

import './App.css';

function App() {
  
  // als nächstes erstellen wir einen state, der unseren seitentitel speichern soll:
  const [ pageTitle, setPageTitle ] = useState('Unsere test app!');

  // jetzt erstellen wir einen useEffect hook und schauen uns den mal an:
  // wir schreiben useEffect, und fügen IMMER eine anonyme funktion ein, um den ausführenden teil unseres efefekts in dessen body zu schreiben.
  
  useEffect(() => {
    // in unserem effekt greifen wir jetzt auf document.title zu, und geben den inhalt des states daran weiter:
    
    document.title = pageTitle; // unsere seite hat jetzt einen anderen titel.

    // um zu entscheiden, wann der effekt ausgeführt wird, setzen wir ein leeres array ans ende des useEffects.

    // Das unmount, also die phase des effekts, wenn die seite "beendet" wird, ist dafür da, zum beispiel verbindungen zu beenden oder einen interval (also eine wartezeit) zu löschen, dieser kann innerhalb von useEffekt einfach ausgeführt werden, indem wir ans ende des effekts einen anonymen return schreiben, und dort die befehle angeben, die passieren sollen, wenn der komponent "entladen" wird. Dies wird sehr selten eingesetzt und da es gerade schwierig ist ein beispiel dafür anzugeben, nutzen wir console log.

    return () => {
      console.log("Hier wird aufgeräumt");
    }

    // Was kann das array am ende von useEffect?

    /*
    - LEERES ARRAY: wenn wir das array einfügen, aber leer lassen, so wie es jetzt ist, haben wir entschieden, das der komplette code in diesem use-effekt nur einmal ausgeführt wird, undzwar, wenn der komponent geladen wird, dies nennt sich "ComponentDidMount"
    - GARKEIN ARRAY: Wenn wir das array weglassen, wird der effekt bei jedem rendern neu ausgeführt, alsowird der seitentitel auch verändert, wenn irgend etwas anderes auf der seite passiert, es wird also diese komplette funktion ausgeführt, egal was mit dem komponenten gerade passiert "ComponentDidUpdate"
    - ARRAY MIT PROPS ODER STATES: die dritte möglichkeit ist, das wir angeben, dass das useEffect nach dem laden des komponenten nur dann ausgeführt wird wenn einer, oder mehrere verschiedene states oder props verändert wurden. Wenn wir in das array also den namen der jeweiligen option schreiben, wird das useEffect nur dann ausgeführt, wenn einer dieser werte sich verändert. 
    */

  }, [pageTitle]); // Das entscheidungs array kommt hinter die codeblockklammern, aber vor die funktionsklammern.

  // wir erstellen eine event funktion, mit der wir über einen button klick den state pageTitle ändern wollen:
  const handlePageTitle = (e) => {
    setPageTitle('Wir haben den namen der seite verändert');
  }

  return (
    <>
      <button onClick={handlePageTitle}>Klick mich!</button>
    </>
  )
}

export default App
