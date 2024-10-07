import { useState } from 'react'
import { TestKomponent } from './TestKomponent'
import { Header } from './Header'
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* durch den rest operator "...props" können wir jegliche argumente an den komponenten übergeben, die nicht benannt im komponent angegeben wurden, meist nutzen wir das, um "styles" an einen vordefinierten komponenten zu übergeben. */}
      <TestKomponent 
        text="Hallo Welt!" 
        style={{ 
          background: "lime", 
          fontSize: "2rem",
          padding: "1rem",
        }}
        onClick={() => console.log("Hallo")}
      />

      {/* unseren zusätzlichen klassennnamen übergeben wir in das argument "className" */}
      <Header/>
      <Header/>
      <Header className="subHeader" />
      <Header/>
    </>
  )
}

export default App
