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

    useEffect(() => {
        // wenn wir solche checks wie den folgenden machen, machen wir das nur in einem useEffect, DAMIT der check nicht bei JEDER änderung durchgeführt wird, sondern NUR wenn sich der wert verändert, auf den wir prüfen.
        if(count > 25) {
            console.log("ICH WURDE AUSGELÖST");
        }
    }, [count]);

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