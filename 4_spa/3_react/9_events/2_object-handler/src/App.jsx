import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // formulardaten speichern wir normalerweise in objekten, um sie dynamisch nutzen zu können.
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: 0,
  })

  // wenn wir mit events arbeiten, erstellen wir handler funktionen
  const handleChange = (e) => {
    // wenn wir mit dynamischen handlern arbeiten, macht es sinn, sich "name" und "value" aus dem zielelement zu holen.
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value // wir schrieben den variabennamen in klammern, um ihn im string format als key anzulegen, und übergeben die value des jeweiligen input elements.
    });
  }

  // formulare zurücksetzen können wir indem wir die daten wieder auf den ursprungszustand setzen.
  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      age: 0,
    })
  }

  // formulare absenden können wir GENAU wie wir es in der DOM gelernt haben.
  const sendData = async (e) => {
    e.preventDefault(); // .preventDefault(); funktioniert genau so auch in react.

    try {
      fetch(
        "https://httpbin.org/post",
        // hier kommt unser konfigurationsobjekt rein
        {
          method: "POST", // die default methode ist "GET", weswegen wir hier "POST" angeben müssen.
          headers: // hier können wir die kopf-informationen mitteilen, für die daten, die wir senden.
          {
            'Content-Type': 'application/json' // wir sagen aus, das wir JSON senden
          },
          body: JSON.stringify(formData) // wir nehmen unser datenobjekt, und senden es umgewandelt als string, mit dem body an den server.
        }
      ).then(response => {
        console.log("Das senden hat funktioniert!");

        resetForm(); // wir resetten das formular, wenn das abschicken funktioniert hat.
        
        return response.json(); // das umwandeln des READABLESTREAMS aus der api antwort
      }).then(data => {
        console.log(data.json); // die ausgabe der daten aus der umgewandelten api antwort
      })
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={(e) => sendData(e)}>
      <h1>Events</h1>

      <h2>Handler mit objekten</h2>

      {/* in react nutzen wir das <form> element (zumindest seine funktionalitäten) nicht. */}

      <input
        type="text"
        placeholder='Vorname'
        value={formData.firstName}
        onChange={(e) => handleChange(e)}
        // onChange={handleChange} <== kurzschreibweise einer event übergabe
        name="firstName" // wenn wir mit einem dynamischen handler arbeiten, brauchen wir "name", dieser sollte genauso heißen, wie die property des objektes.
      />
      <br />
      <input
        type="text"
        placeholder='Nachname'
        value={formData.lastName}
        onChange={(e) => handleChange(e)}
        name="lastName"
      />
      <br />
      <input
        type="number"
        placeholder='Alter'
        value={formData.age}
        onChange={(e) => handleChange(e)}
        name="age"
      />
      <br />
      <br />

      <button type="submit" onClick={(e) => sendData(e)}>Senden</button>
      <button type="reset" onClick={() => resetForm()}>Reset</button>
      <br />
      <p>
        Vorname: {formData.firstName}<br />
        Nachname: {formData.lastName}<br />
        Alter: {formData.age}
      </p>
    </form>
  )
}

export default App
