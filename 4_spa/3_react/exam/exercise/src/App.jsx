import "./App.css";
import { useState, useEffect } from "react";
import { CatFactList } from "./components/CatFactList";

const API_URL = "https://cat-fact.herokuapp.com/facts";
/**
 * => [
 *  {
 *    _id: string
 *    text: string
 *    createdAt: string (Date)
 *    user: string
 *  }
 * ]
 *  API-Fetch:
 *  1. Nutze useState um die Antwort von der API zu speichern
 *  2. Erstellen des useEffects
 *  3. Implementiere der "fetch"-Funktion (async function)
 *
 *  Erstellen von zwei Komponenten:
 *  CatFactList-Komponente: Empfängt catFacts als prop
 *
 */

function App() {
  const [catFacts, setCatFacts] = useState([]);

  useEffect(() => {
    async function fetchCatFacts() {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setCatFacts(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCatFacts();
  }, []);
  return (
    <>
      <h1>Cat Facts</h1>
      <CatFactList items={catFacts} />
    </>
  );
}

export default App;
