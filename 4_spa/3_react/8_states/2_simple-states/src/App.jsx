import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // das beispiel von vite nutzt immer count / setCount, aber wir können unsere states nennen wie wir wollen, solange wir am ende useState(); mit unserem initialwert angeben.
  const [count, setCount] = useState(0);

  // der original state: const [ state, setState ] = useState(null);

  // wir schreiben unseren variablen namen, und geben dem setter den selben namen mit set davor. also variablenName, setVariablenName.
  const [ isVisible, setIsVisible ] = useState(false);

  //bei einem string können wir einfach einen leeren string angeben, wenn wir keinen initialwert haben, und diesen mit einem neuen string überschreiben.
  const [ username, setUsername ] = useState("");

  const [ isLoggedIn, setIsLoggedIn ] = useState(false);

  // wenn wir funktionen schreiben, die auf buttons reagieren sollen, nennen wir sie in react normalerweise handle...
  const handleLogin = () => {
    
    // innerhalb der handle funktion, schreiben wir unsere state-change logik. Das macht sinn, wenn wir mehrere states auf einmal managen wollen.
    setIsLoggedIn(true);
    setUsername("Michael");
  }

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
  }

  return (
    <>
      {/* bei booleans können, wenn wir den wert umdrehen wollen, ihn einfach als gegenteilsangabe einfügen */}

      {/* equivalent: setIsVisible(prev => !prev); */}
      <button onClick={() => setIsVisible(!isVisible)}>Toggle</button>
      {
        isVisible && (
          <p>Ich bin sichtbar!</p>
        )
      }

      <br />
      <br />

      {/* equivalent: setUsername(prev => prev = "Max"); */}
      <button onClick={() => setUsername("Max")}>usernamen ändern in Max</button>
      <br />
      <button onClick={() => setUsername("James")}>usernamen ändern in James</button>
      <br />
      username: {username}

      <br />
      <br />
      <br />

      <button onClick={() => handleLogin()}>Login</button>
      <button onClick={() => handleLogout()}>Logout</button>

      <br />

      Der user ist { isLoggedIn ? 'Eingeloggt' : 'Nicht eingeloggt'}
    </>
  )
}

export default App
