import { useEffect, useState } from "react";
import "./App.css";

function App() {
  // wir bauen einen state für die ladeanzeige, diesen setzen wir bei seiten, die inhalte anzeigen sollen, wenn die seite geladen wurde, immer auf true
  const [isLoading, setIsLoading] = useState(true);

  // wir erstellen noch einen state für unsere daten:
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const data = await fetch("https://jsonplaceholder.typicode.com/posts");
      const inhalt = await data.json();

      // wenn die daten erfolgreich geladen wurden, setzen wir die daten in den dafür vorhergesehen state.
      setData(inhalt);

      // und danach setzen wir isLoading auf false.
      setIsLoading(false);

      console.log(inhalt);
    } catch (error) {
      console.log(error);
    }
  };
  
  // um die daten zu laden nutzen wir useEffect
  useEffect(() => {
    
    // wir fügen eine funktion ein, die das laden der daten übernimmt
    fetchData();

    // damit das am anfang passiert, also wenn der komponent geöffnet wird, und NUR DANN PASSIEREN SOLL, nutzen wir als abhängigkeit bei useEffect das leere array (= mach dies, wenn der komponent eingeladen wird).
  }, []); // leeres array = componentDidMount = component wurde geladen

  return (
    <>
      {isLoading ? (
        <p>Lade gerade die daten...</p>
      ) : (
        <div>
          {
            data.map((item, i) => (
              <div key={i}>{i + 1} - {item.title}</div>
            ))
          }
        </div>
      )}
      <button onClick={() => fetchData()}>Lade Daten</button>
    </>
  );
}

export default App;
