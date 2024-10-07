import './Header.css';

// um props an unseren komponenten zu übergeben, können wir in unserer parameterübergabe ein konfigurationsobjekt übergeben, in das wir die props hineinschreiben

export const Header = ({
    title = "Beispieltitel", // wir können unseren props default-werte zuweisen
    subTitle,
}) => {

    console.log(subTitle);

    return(
        <header className='Header'>
            {/* um unsere props zu verwenden, müssen wir sie nur in geschwungenen klammern aufrufen */}
            <h1>{ title }</h1>
            {
                // da wir eine prop haben, die leer sein könnte, können wir einen vergleich machen, so das wir das element, das diese inhalte ausgeben soll, nur anzeigen, wenn dort inhalt ist.

                // if(subtitle !== undefined) { ...zeige das element an... }
                subTitle !== undefined && <h2>{ subTitle }</h2>
            }
        </header>
    );
}
