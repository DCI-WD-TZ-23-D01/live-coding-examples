import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react';

function App() {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setUsername(e.target.value);
  }

  useEffect(() => {

    console.log("überprüfe username")

    if(username && username.length < 3 || username.length > 8) {
      setError(true)
    } else {
      setError(false);
    }

  }, [username]);

  useEffect(() => {
    console.log("änderung");
  });

  return (
    <>
      <p>Username</p>
      <input 
        type="text" 
        value={username}
        style={{ outline: `2px solid ${ error ? 'red' : 'black'}`}}
        onChange={(e) => handleChange(e)}
      />
      <p>First name</p>
      <input 
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
       />
    </>
  )
}

export default App
