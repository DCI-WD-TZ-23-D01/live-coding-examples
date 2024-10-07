// wir importieren den style für die komponente:
import './Header.css';

// Wir erstellen einen komponenten, indem wir eine sofort exportierende funktion erstellen, mit dem namen des Komponenten:
export const Header = () => {

    // in den return schreiben wir unser JSX:
    return(
        // wir weisen dem oberen element unserer komponente die klasse mit dem komponentennamen zu:
        <div className='Header'>

            <p>DUDEN</p>
        </div>
    )
};
