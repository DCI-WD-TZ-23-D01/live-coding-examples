import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./Button";
import { useEffect } from "react";

function App() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const [gesamtWert, setGesamtWert] = useState(0);

  useEffect(() => {
    setGesamtWert(counter1 + counter2);
  }, [counter1, counter2]); // wenn counter1 ODER counter2 sich verändern

  return (
    <>
      <div>
        <h3>Elternkomponent</h3>
        <ul>
          <li>Counter1: {counter1}</li>
          <li>Counter2: {counter2}</li>
        </ul>
        <b>Gesamt: {gesamtWert}</b>
        <br />
        <br />
      </div>
      <h3>Counter 1 (Button 1)</h3>
      {/* wir übergeben den anfangswert unseres counters an den komponenten (nennen wir es hier mal currentCount) */}
      <Button
        currentCount={counter1}
        onCountChange={(value) => setCounter1(value)}
      />
      <br />
      <h3>Counter 2 (Button 2)</h3>
      <Button
        currentCount={counter2}
        onCountChange={(value) => setCounter2(value)}
      />

      {/* jedes mal wenn der wert von count sich im komponetnen verändert, wird onCountChange ausgeführt, und übergibt den wert den wir übergeben wollen an das eltern element weiter */}
    </>
  );
}

export default App;
