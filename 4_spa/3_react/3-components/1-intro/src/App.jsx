// Wir importieren die CSS datei, die zu dem komponenten gehört. Das erkennen wir daran, das sie GENAUSO heißt, wie der komponent.
import './App.css';

// wir importieren unseren Header komponenten indem wir die datei importieren, und daraus die funktion holen:
import { 
  Header, 
  Footer, 
  Page 
} from './components';

import Pingu from './assets/pingu.jpeg';

// Der komponent wird als funktion angelegt, und in PascalCase geschrieben.
function App() {

  return (
    <>

    <img src={Pingu} alt="" />

    {/* Wir nutzen den komponenten, indem wir ihn mit html-mäßigen pfeilen einfügen */}
      <Header/>

      <Page/>

      <Footer/>
    </>
  )
}

export default App
