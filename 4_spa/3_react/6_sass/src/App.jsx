import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

// da wir die dateie App.css in App.scss umbenannt haben, müssen wir den import auch noch anpassen.
import './App.scss';
import { Page } from './Page';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>
        um sass/scss innerhalb unseres projektes zu nutzen, müssen wir sass installieren:
      </p>
      <p>
        "npm install -D sass" oder "yarn add -D sass"
      </p>
      <p>
        danach ist unser projekt in der lage css und scss dateien zu nutzen, wir können also entweder unsere .css dateien in .scss dateien umbenennen, unsere alten .css dateien weiter benutzen, oder neue .scss dateien erstellen.
      </p>
      <p><b>NICHT VERGESSEN: falls wir .css dateien in unsere komponenten importiert haben, und diese in .scss umbenannt haben, müssen wir den import auch auf .scss ändern.</b></p>

      <Page/>
    </>
  )
}

export default App
