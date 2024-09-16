// um states nutzen zu können, müssen wir den "hook" "useState" aus React importieren. Ein hook ist eine funktion, die in react während der laufzeit "eingehakt" wird, und inhalte dynamisch verwalten kann - hooks fangen immer mit "use" an.
import { useState } from 'react'; // also React.useState

import './App.css';

// states sind dynamisch veränderbar, innerhalb des lebenszyklus eines react-komponenten, ihre inhalte können also verändert werden, während der komponent angezeigt wird, sollte die seite neu laden, wird es auf den initialwert resettet.

function App() {
  /*
    ein state hat 2 inhalte, einmal eine variable, mit dem aktuellen wert, und eine funktion zum einstellen des neuen wertes. Um anzugeben, um welchen inhalt es sich bei der variable handelt, geben wir den initialwert in den funktionsausfruf des states ein.
  */
  //    variable, setter  = useState(wert);
  const [ count, setCount ] = useState(0);

  // die funktion selber sieht also warscheinlich etwa so aus:
  /**
   * const useState = (wert) => {
   * 
   *    const aktuellerWert = wert;
   * 
   *    const setter = (neuerWert, cb) => {
   *        aktuellerWert = neuerWert;
   *        cb(wert);
   *    }   
   * 
   *    return [
   *        aktuellerWert,
   *        setter
   *    ]
   * }
   */

  // mit dem namen der variable des states können wir den aktuellen wert ausgeben:
  console.log(count);

  return (
    <>
      {/* beim ausführen von setCount, also dem setter der state variable, geben wir den "prevValue" als callback, also den vorherigen wert an, um mit diesem arbeiten zu können. */}
      <button onClick={() => setCount((prev) => prev + 1)}>
        {/* 
          vereinfacht können wir auch schreiben: setCount(count + 1);
        */}
        {/* 
          logik:
          count = 0: count + 1 => 1
          count = 1: count + 1 => 2
          count = 2: count + 1 => 3
          ...
        */}
        PLUS +
      </button>&nbsp;

      {/* wir können im setter jegliche art von veränderung des states ausführen. */}
      <button onClick={() => setCount((prev) => prev - 1)}>
        MINUS - 
      </button>
      <p>
        count is {count}
      </p>
    </>
  )
}

export default App
