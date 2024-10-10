import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

/**
 *  Response von Dog API:
 *  {
 *      "message": Hier ist die URL von dem Bild
 *      "status": ("error" || "success"),Um zu wissen, ob die Anfrage erfolgreich war
 * }
 *
 */

export const Dog = ({ params }) => {
  //   const breed = params.breed; // Funktioniert nicht, da deprecated
  const { breed } = useParams();
  const [breedImage, setBreedImage] = useState("");

  // Verwende useEffect und useState, um ein Bild mit der dementsprechenden Rasse von API zu holen

  // Hilfsfunktion, um die URL richtig zu formattieren
  const getUrl = (breed) => `https://dog.ceo/api/breed/${breed}/images/random`;

  // Die Funktion wird verwendet, um ein Bild von der API zu fetchen
  async function fetchDog(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      // data ist ein Objekt mit einem "message" und "status" Feld.
      // status Feld vom response begutachten
      if (data.status === "success") setBreedImage(data.message);
    } catch (e) {
      console.error(e);
    }
  }

  // Wenn die Seite, das erste mal lädt, dann rufen wir die API auf
  useEffect(() => {
    fetchDog(getUrl(breed));
  }, []);

  return (
    <>
      {/* <p>Hello Dog: {breed}</p> */}
      {/* {breedImage && <img src={breedImage} />} */}
      {breedImage ? <img src={breedImage} /> : <p>Breed not found!</p>}
    </>
  );
};
