import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>
      Es ist manchmal sehr aufwändig, jedes mal komponenten von hand vorzubereiten und sich zu merken wie der komponent heißt, oder wie das konstrukt davon ist, um das zu vereinfachen gibt es das VSCode plugin: "ES7+ React/Redux/React-Native snippets"
      </p>

      <p>
        Es ermöglicht uns, mit simplen emmet ähnlichen befehlen komponenten zu erstellen.
      </p>
    </>
  )
}

export default App
