export const NachOben = ({
    onDatenSchicken// unsere callback funktion als prop
}) => {
    return(
        <>
            <h2>Callback auf Buttonklick:</h2>
            <p>
                ich bin ein komponent, der daten an das elternelement liefern kann.
            </p>
            <button onClick={() => onDatenSchicken(5)}>Klick Mich!</button>
        </>
    )
}
