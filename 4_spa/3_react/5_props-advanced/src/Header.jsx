// wir wollen die möglichkeit geben, dem komponenten von außen eine weitere zusatzklasse zu geben, dazu übergeben wir className.
export const Header = ({ 
    className = "" // wir müssen className einen leeren default wert geben, damit dort im html später nicht "undefined" steht.
}) => {
    console.log(className);
    return (
        // um dem Komponenten einen zusätzlichen klassennamen zu geben, übergeben wir ihn in template literals and das className attribut des obersten elementes im komponenten.
        <div className={`Header ${className}`}>
            Hallo ich bin der header!
        </div>
    )
}
