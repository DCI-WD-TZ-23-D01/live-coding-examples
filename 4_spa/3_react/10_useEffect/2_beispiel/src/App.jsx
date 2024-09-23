import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  // kein useEffect bedeutet, der code wird die ganze zeit immer wieder ausgeführt:
  console.log("ich werde halt ausgeführt wenn irgendwas passiert...");

  // useEffect der die ganze zeit wiederholt
  useEffect(() => {
    console.log("Ich werde bei jeder änderung ausgeführt!");
  });

  // useEffect der beim laden der komponente ausgeführt wird wird
  useEffect(() => {
    console.log("Ich werde ausführt wenn der komponent geladen wurde!");
  }, []);

  // useEffect der nur dann ausgeführt wird, wenn sich ein spezifischer state verändern:
  useEffect(() => {
    console.log("Ich werde ausführt wenn 'count' sich verändert!");
  }, [count]);

  // const checkCountAmount = (amount) => {
  //   if(count > amount) {
  //     document.title = "Hallo Welt";
  //   }
  // }

  // useEffect(() => {
  //   checkCountAmount(10);

  //   return () => {
  //     console.log("Hallo Welt");
  //   } 
  // }, [count]);

  return (
    <>
      <div className="card">
      <button onClick={() => setCount((count) => count + 1)}>
          count 1 is {count}
        </button>
        <button onClick={() => setCount2((count2) => count2 + 1)}>
          count 2 is {count2}
        </button>
        
      </div>
    </>
  );
}

export default App;
