import { useContext } from "react";
import { DarkmodeContext } from "../contexts/darkmodeContext";
import "../styles/DarkmodeButton.css";

const DarkmodeButton = () => {
  // Diese Komponente ändert den Zustand für alle anderen Komponenten
  const { darkmode, setDarkmode } = useContext(DarkmodeContext);

  const handleToggle = () => {
    setDarkmode((prev) => !prev);
  };

  return (
    <button onClick={handleToggle} className={darkmode ? "button-dark" : ""}>
      {darkmode ? "is on" : "is off"}
    </button>
  );
};

export default DarkmodeButton;
