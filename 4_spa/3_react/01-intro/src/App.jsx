import { useState } from 'react'
import './App.css'

import { TestComponent } from './components/TestComponent/TestComponent';

function App() {
  //    eine variable, und einen setter, sowie einen default wert innerhalb des useState hooks.
  const [count, setCount] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDarkModeActive, setIsDarkModeActive] = useState(false);

  const beispielArray = [
    "Eintrag 1",
    "Eintrag 2",
    "Eintrag 3", 
    "Eintrag 4",
    "Eintrag 5",
    "Eintrag 6",
    "Eintrag 7"
  ]

  // außerhalb des JSX können wir javascript schreiben wie wir es gewohnt sind.
  if(isLoggedIn) {
    console.log("Hallo welt");
  }

  return (
    <>
      <div
        style={{
          background: isDarkModeActive ? "black" : "white",
          color: isDarkModeActive ? "white" : "black",
          width: "100%",
          height: "100%",
        }}
      >
        
      {/* in JSX schreiben wir nicht class, um eine klasse zu definieren, sondern className */}
      <div 
        className="card" 
        style={{
          background: isLoggedIn ? "green" : "red",
          borderRadius: "1rem",
          border: "10px solid lightgrey",
          marginBottom: "1rem"
        }}
      >
        <button onClick={() => setIsDarkModeActive(!isDarkModeActive)}>DarkModeTrigger</button>

        <br />
        <br />

        {/* unser onclick="" wird zu onClick={} mit großem C, und wir können dort javascript hinein schreiben. */}
        <button onClick={() => setCount((count) => count + 1)}>
          Wir haben aktuell bis {count} gezählt...
        </button>

        <br />
        <br />

        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {/* Innerhalb des returns (wo das JSX ist) müssen wir mit template literals und ternary operatoren arbeiten */}
        {
          // ein ODER schreiben wir mit ? und :
          isLoggedIn ? "Ausloggen" : "Einloggen"
        }
        </button>
        {
          isLoggedIn ? (
            <p>Ich bin eingeloggt...</p>
          ) : (
            <p>Ich bin nicht eingeloggt!</p>
          )
        }
      </div>

      <TestComponent prefix={"YAY"}/>

      {
        // ein NUR WENN schreiben wir mit &&
        isLoggedIn && (
          <div>
            Hallo ich bin eine div...
            <p>Bladiblubb</p>
            <ul>
            {
              beispielArray.map((item, i) => (
                <li key={i}>{item}</li>
              ))
            }
            </ul>
          </div>
        )
      }
      </div>
    </>
  )
}

export default App
