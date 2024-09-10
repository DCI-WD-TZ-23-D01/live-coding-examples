// wir importieren die styling datei:
import './Header.css';

// wir können export hier direkt nutzen, um unseren komponten exportierfähig zu machen
export const Header = () => {

    // wir schreiben den return, um unser JSX nutzen zu können. Wenn wir einen komponenten erstellen, nutzen wir als oberstes element, ein element mit der klasse des KomponentenNamens.
    return(
        // die klasse hinterlegen wir in "className" 
        <div className='Header'>
            Hallo ich bin der header!

            <p>
                Hallo Welt!
            </p>
        </div>
    )
}
