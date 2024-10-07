import './Footer.css';

// um den inhalt den wir außerhalb des komponentens als kinder in den komponenten übergeben haben, können wir die prop "children" benutzen.
export const Footer = ({ children, color, size }) => {
    return (
        // wenn wir styling in react anlegen, erstellen wir immer inline-styles und überschreiben vorhandene inhalte.
        <div className="Footer" style={{ background: color, padding: size + "rem" }}>
            { children }
        </div>
    )
}
