import {NachOben} from "./NachOben";
import { NachObenBeiAenderung } from "./NachObenBeiAenderung";
import "./App.css";

function App() {

  return <>
   {/* innerhalb des callbacks, ist der "wert" das, was wir von innen übergeben haben: */}
    <NachOben onDatenSchicken={(wert) => console.log("ccallback in App.jsx", wert)}/>

      {/* jedes mal wenn in dem komponenten "count" verändert wird, wird onDatenSchicken ausgeführt. */}
    <NachObenBeiAenderung startWert={20} onDatenSchicken={(wert) => console.log("Callback in App.jsx", wert)}/>
  </>;
}

export default App;
