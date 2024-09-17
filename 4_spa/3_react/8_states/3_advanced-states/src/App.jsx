import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // wenn wir bei states mit arrays arbeiten, sollten wir ein leeres array als initialValue haben.
  const [names, setNames] = useState([]);
  
  // es ist ordentlicher und hübscher, wenn wir setter nicht direkt in JSX angeben, sondern funktionen schreiben, die den setter aufrufen, so können wir auch mehrere setter in eine funktion übergeben.
  const addNewName = () => {
    // beim hinzufügen von elementen in ein array müssen wir bestimmte dinge beachten.
    setNames([
      // zu allererst, pushen wir nicht in das array, sondern wir erstellen ein neues array mit den inhalten des alten. Um das zu bewerkstelligen nutzen wir den spread operator am anfang unseres arrays.
      ...names,
      // dann fügen wir den neuen inhalt an.
      "James"
    ]);

    /*
      konstrukt:
      setter([...aktuellesArray, neueDaten]);

      logik:
      im setter übergeben wir ein neues array, dieses füllen wir per spread operator mit den aktuellen daten des arrays, und den neuen daten, die wir hinzufügen wollen.
    */
  }

  const [itemList, setItemList] = useState([]);

  const addItemToList = () => {
    setItemList([
      ...itemList,
      { id: itemList.length, value: `Ich bin das item ${itemList.length + 1}`}
    ]);

    // moderner wäre es so:
    // setItemList(prev => [
    //    ...prev,
    //    { id: itemList.length, ... }
    // ])
  }

  // ein objekt verändern
  const [testObjekt, setTestObjekt] = useState({
    name: "",
    age: 0
  });

  const changeTestObject = (newAge, newName) => {
    setTestObjekt({
      ...testObjekt, // DONT FORGET THE SPREAD.
      name: newName,
      age: newAge,
    })
  }

  return (
    <>
      <h2>Namensliste</h2>

      <p>
        wenn wir eine liste in react ausgeben, schreiben wir meist eine UL, und setzen ein map in diese UL, wir können dies auch mit getrennten komponenten machen, für dieses live coding ist dies aber nicht nötig.
      </p>

      <button onClick={() => addNewName()}>Namen hinzufügen</button>
      {
        names.length > 0 ? (
          <ul>
          {
             // im code block nutzen wir map, auf das array, um durch die elemente zu loopen, hier macht es sinn etwas anzugeben, wenn das array leer ist.
            names.map((name, i) => (
              <li key={i}>{name}</li>
            ))
          }
          </ul>
        ) : (
          // wenn die länge des arrays 0 ist, dann gib ein feedback an den user ab, das die liste leer ist.
          <p style={{ color: "red" }}>Die liste ist leer.</p>
        )
      }

      <hr />

      <button onClick={() => addItemToList()}>Item hinzufügen</button>

      <ul>
        {
          itemList && itemList.map((item, i) => (
            <li key={i}>{ item.value }</li>
          ))
        }
      </ul>

      <hr />

      <button onClick={() => changeTestObject(52, "Walter")}>Alter anpassen</button>
    </>
  )
}

export default App
