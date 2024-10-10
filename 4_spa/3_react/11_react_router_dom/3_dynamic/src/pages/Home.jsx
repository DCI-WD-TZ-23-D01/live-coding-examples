import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const [breed, setBreed] = useState("");
  // Wir verwenden useNavigate um beim submit die dog Seite anzusprechen
  const navigate = useNavigate();

  function handleChange(event) {
    setBreed(event.target.value);
  }

  function handleSubmit() {
    // alert(breed);
    navigate(`/dog/${breed}`);
  }

  return (
    <main>
      <p>Search Dog by Breed</p>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};
