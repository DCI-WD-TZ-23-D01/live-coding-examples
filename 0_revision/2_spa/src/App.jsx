import "./App.css";
import { useState } from "react";

const DEFAULT_DOG = "https://images.dog.ceo/breeds/leonberg/n02111129_638.jpg";
const DOG_API = "https://dog.ceo/api/breeds/image/random";

function App() {
  const [lightOn, setLightOn] = useState(false);
  const [dogUrl, setDogUrl] = useState(DEFAULT_DOG);

  const handleClick = () => {
    if (!lightOn) {
      // Wir fetchen ein neues Bild und machen das Licht an
      fetchDogUrl().then((newDogUrl) => {
        // useState wird angepasst, wenn die Anfrage erfolgreich war
        setDogUrl(newDogUrl);
        setTimeout(() => {
          setLightOn(true);
        }, 300);
      });
    } else {
      // Ansonsten wird das Licht ausgemacht
      setLightOn(false);
    }
  };

  // useEffect(() => {
  //   setDogUrl(DOG_API);
  // }, [lightOn]); // Abhängigkeiten können zu Problemen führen

  const fetchDogUrl = async () => {
    const res = await fetch(DOG_API); // Fetches die Daten von der API
    const data = await res.json(); // Parsen die Daten
    return data.message; // Entnehmen das Bild aus der Antwort von der API
  };

  return (
    <div className="container">
      <div className={`wrapper ${lightOn ? "on" : "off"}`}>
        <img className="dog-img" aria-placeholder="Dog" src={dogUrl}></img>
        {!lightOn && <div className="overlay"></div>}
      </div>
      <button onClick={handleClick}>
        {lightOn ? "Ausschalten" : "Einschalten"}
      </button>
    </div>
  );
}

export default App;
