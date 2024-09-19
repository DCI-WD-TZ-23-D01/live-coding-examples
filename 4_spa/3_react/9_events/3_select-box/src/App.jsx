import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [selectedFruit, setSelectedFruit] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value);
    setSelectedFruit(e.target.value);
  };

  return (
    <>
      <label htmlFor="fuits">Früchte zur auswahl:</label>
      {/* das select element ist das eigentlich element, an dem die änderungen ausgeführt werden */}
      <select
        id="fruits"
        value={selectedFruit}
        onChange={(e) => handleChange(e)}
        // oder: onChange={(e) => setSelectedFruit(e.target.value)}
      >
        {/* Wenn wir einen default text in der select box anzeigen wollen, lassen wir value leer */}
        <option value="">Frucht auswählen...</option>
        {/* die option elemente sind die jeweiligen optionen die die select box zur auswahl hat, der text zwischen den elementpfeilen ist der text, der in der box angezeigt wird - der wert der in value angegeben wird, ist der wert, den wir an unseren code übergeben */}
        <option value="apple">Apfel</option>
        <option value="banana">Banana</option>
        <option value="strawberry">Erdbeere</option>
      </select>

      <p>selektierte frucht: {selectedFruit}</p>
    </>
  );
}

export default App;
