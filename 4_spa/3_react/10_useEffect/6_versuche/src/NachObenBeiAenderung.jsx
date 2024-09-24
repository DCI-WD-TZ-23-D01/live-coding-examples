import { useEffect } from "react";
import { useState } from "react"

export const NachObenBeiAenderung = ({
    startWert,
    onDatenSchicken,
}) => {

    const [count, setCount] = useState(startWert);

    useEffect(() => {
        setTimeout(() => {
            setCount(10);
        }, 5000);
    }, []);

    useEffect(() => {
        // console.log(count);
        onDatenSchicken(count);
    }, [count]); // jedes mal wenn count sich verändert, wird das callback abgeschickt

    return (
        <>
            <h2>Callback auf änderung</h2>
            <p>
                Ich bin ein komponent der daten an das eltern element liefert, wenn sich dinge verändern.
            </p>
            <button onClick={() => setCount(count + 1)}>Klick Mich! { count }</button>
        </>
    )
}