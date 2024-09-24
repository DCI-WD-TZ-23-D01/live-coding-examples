// wir importieren useEffect von react, damit wir darauf zugreifen können um es in unserem code zu verwenden.
import { 
  useState, 
  useEffect // useEffect als named import angegeben.
} from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  // weitere states ...

  // vordefinierte variablen, zum beispiel ein daten-array

  // funktionsdeklarationen, die dinge kontrollieren wie textveränderung, oder api calls.

  // wir schreiben die useEffects in unseren javascript code, innerhalb des komponenten ist dies meist ganz am ende, vor den return, damit wir vorher alle funktionen oder states stehen haben, die wir nutzen würden.

  // useEffect();

  // innerhalb des useEffects schreiben wir eine anonyme callback funktion, die besagt was genau innerhalb des effekts passieren soll:

  // useEffect(() => {});

  // zb:
  // useEffect(() => {
  //     console.log("Hallo Welt");
  // });

  // am ende des useEffects haben wir die möglichkeit anzugeben, wann dieser effekt passieren soll / oder wodurch er ausgelöst werden kann. Dies machen wir, indem wir ein array einsetzen.

  // bei jedem rerender ausführen: 
  // useEffekt(() => {}); <=== kein array

  // nur am anfang ausführen, wenn der komponent geladen wird (ComponentDidMound):
  // useEffect(() => {}, []);

  // nur ausführen wenn sich bestimmte states oder props verändert haben:
  // useEffect(() => {}, [count]); <=== wann auch immer sich count verändert, wird dieser effekt ausgeführt

  // Warum useEffect nutzen?
  // Wenn wir funktionen oder logiken direkt im code ausführen, werden sie unkontrolliert bei jedem rerender ausgeführt, das ist das equivalent zum useEffect OHNE array.
  // useEffect IST auch eine funktion, aber sie kann steuern, wann der callback innerhalb der funktion ausgeführt wird, so können wir dafür sorgen, das eine gewünschte funktion, zwar in unserem code aufgerufen wird, aber NUR DANN, wann wir es wollen, also zum beispiel beim öffnen der seite (wenn der komponent geladen wird), oder wenn ein oder mehrere gewisse werte, den wir in react kontrollieren (useState) sich verändert.

  // beispiel ohne useEffect:
  console.log("1. Ich werde ausgeführt! (direkt im code)");

  // beispiel mit useEffect OHNE array:
  useEffect(() => {
    console.log("2. Ich werde ausgeführt! (mit useEffect ohne array)");
  }); // kein array, bedeutet keine regel zum überprüfen der ausführung

  // beispiel mit useEffect mit leerem array:
  useEffect(() => {
    console.log("3. Ich werde ausgeführt! (mit leerem array)");
  }, []); // leeres array bedeutet, keine abhängigkeiten (dependencies) also wird es nur am anfang ein mal ausgeführt.

  // beispiel mit useEffect mit abhängigkeiten:
  useEffect(() => {
    console.log("4. Ich werde ausgeführt! (mit abhängigkeit im array)");
  }, [count]); // wird ein mal beim ersten render ausgeführt, und dann nur noch, wenn sich der state verändert.

  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </>
  );
}

export default App;

/*
// Der zusammengefasste code:

import { useState, useEffect } from 'react';
import 'App.css';

function App () {
  const [count, setCount] = useState(0);

  console.log("1. ich wurde ausgeführt!");

  useEffect(() => {
    console.log("2. ich wurde ausgeführt!");
  });

  useEffect(() => {
    console.log("3. ich wurde ausgeführt!");
  }, []);

  useEffect(() => {
    console.log("4. ich wurde ausgeführt!");  
  }, [count]);

  return(
    <>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </>
  )
}

export default App;

*/