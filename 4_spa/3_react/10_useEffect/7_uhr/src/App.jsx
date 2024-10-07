import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react';

function App() {
  const [time, setTime] = useState(new Date());

  const [seconds, setSeconds] = useState(time.getSeconds());
  const [minutes, setMinutes] = useState(time.getMinutes());

  useEffect(() => {
    // wir sagen dem code er soll, wenn der komponent geladen wurde, einen interval erstellen, der jede sekunde 1 mal ausgeführt wird. Wir wollen diesen interval nur EINMAL erstellen, und nicht für jeden durchlauf neu.
    const interval = setInterval(() => {
      setTime(new Date());
      setSeconds(new Date().getSeconds());
      setMinutes(new Date().getMinutes());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // da wir in unserem useEffect nicht angegeben haben, wann er passieren soll, wird er jetzt jede sekunde 1 mal ausgeführt.
  // useEffect(() => {
  //   console.log(seconds);
  //   console.log(minutes);
  // });

  useEffect(() => {
    console.log("So viele minuten sind es:", minutes);

    if(minutes === 17) {
      console.log("es ist 17 nach");
    } else {
      console.log("es ist nicht 17 nach");
    }
  }, [minutes]);

  useEffect(() => {
    console.log("So viele sekunden sind es:", seconds);
  }, [seconds])

  return (
    <>
      {JSON.stringify(time)}
    </>
  )
}

export default App
