import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const [name, setName] = useState(''); // der initiale wert für unsere namens state ist ein leerer string.

  // der standardname für eine handler funktion, die inputs behandelt, ist "handleChange"
  const handleChange = (e) => {
    // wie in der dom, kriegen wir den aktuell eingegebenen wert des input elements mit event.target.value, wir nehmen diesen wert, und speichern ihn mit setName(); ab.
    setName(e.target.value);
  }

  const [city, setCity] = useState('');

  const handleCityChange = (e) => {
    setCity(e.target.value);
  }

  return (
    <>
      <h1>Events</h1>

      <p>
        Um events in React zu nutzen, benötigen wir states, da wir hier die informationen speichern und anpassen können.
      </p>

      <p>im gegenteil zur DOM schreiben wir unsere event handler IMMER in unser html.</p>

      {/* nicht vergessen, in react schreiben wir die event handler in camelCase. */}
      <button onClick={() => console.log("Hello World!")}>Klick mich!</button>

      <br />
      <br />

      <input 
        type="text"
        value={name} // die value ist der wert, der in dem input drin steht.
        onChange={(e) => handleChange(e)} // das onChange event sorgt dafür, dass das aktuelle event übergeben wird, bei jeder änderung.
      />
      <p>Aktuelle eingabe: { name }</p>

      <br />

      <input 
        type="text"
        value={city}
        onChange={(e) => handleCityChange(e)}
      />
      <p>Aktuelle stadt: {city}</p>
    </>
  )
}

export default App
