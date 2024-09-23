import { useEffect, useState } from "react";

// wir haben in den props des komponentens eine callback funktion erstellt die "onCountChange" heißt.
const Button = ({ currentCount, onCountChange }) => {

    const [count, setCount] = useState(currentCount);

    const increaseCounter = (amount) => {
        setCount((count) => count + amount);
    }

    useEffect(() => {
        // wir geben jedes mal, wenn count sich verändert ein callback mit dem aktuellen wert zurück.
        onCountChange(count);
    }, [count]); // wir sagen führe den useEffect aus, wenn "count" sich verändert

    return(
        <>
            IM KINDKOMPONENT: {count}
            <br />
            <button onClick={() => increaseCounter(1)}>count is {count}</button>
            {/* Wenn der button geklickt wird, wird der counter erhöht */}
        </>
    )
}

export default Button;
