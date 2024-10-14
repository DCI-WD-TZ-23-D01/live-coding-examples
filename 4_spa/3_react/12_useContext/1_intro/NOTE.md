# State Management

Mit einer wachsenden Applikation wird die Verwaltung der Daten komplexer.
Zum Beispiel ein Webshop. Der Webshop speichert den Inhalt unseren Warenkorbes. Wenn die Seite gewechselt wird, dann wird der Zustand des Warenkorbes beibehalten.

> Wie teilen wir am optimalsten den Zustand?

## Problem: Prop-Drilling nur für einfache Zwecke gedacht

Das Problem von Prop-Drilling sind die Nachteile, die bei einer wachsenden Applikation entstehen:

- z.B. die Verwendung des Props wird unübersichtlich
- Nicht skalierbar, denn Daten die zur "Spitze"/"Ende" übergeben werden müssen, durchwandern jede einzelne Komponente dazwischen

**Lösung: Das direkte Einfügen der Daten in die Komponente**

## Lösung: useContext

- Fundamentaler Hook für das Programmieren von komplexen Applikationen
- Ermöglicht das direkte Einfügen von Daten in Komponten
- Verwendung um Daten zu teilen, die von vielen Komponenten benutzt werden

useContext wird verwendet, um einen Context zu erstellen. Der Context ist ein Bereich definiert für bestimmte Komponente, die darauf Zugriff haben.

### Wie verwenden wir den useContext?

1. Mit `createContext` wird ein Context erstellt. Der Context ist ein Objekt. Das Objekt beinhaltet einen `Provider` und `Consumer` Attribut. Beides sind JSX-Komponenten.

```js
export const DarkmodeContext = createContext()
```

2. Der Kontext wird bereitgestellt mit der `Provider`-Komponente.
`value`-Prop definiert die Daten, die von den Child-Komponenten zugegriffen werden können.

```jsx
import { DarkmodeContext } from "./contexts/darkmodeContext.js"

export const App = () => {

    const [isDarkmode, setDarkmode] = useState(false)

    return (
        <DarkmodeContext.Provider value={{ isDarkmode, setDarkmode }}>
             {/**
                children
            */}
        </DarkmodeContext.Provider>
    )
}
```

> In der Softwareentwicklung existiert das Konzept von Consumer/Provider.
> Komponente stellen Daten bereit, das sind die Provider.
> Andere Komponenten verarbeiten die Daten, das sind die Consumer

1. Das Zugreifen des Kontextes mit `useContext`

```jsx
import { useContext } from "react"
import { DarkmodeContext } from "./contexts/darkmodeContext.js"
/**
 *  DarkmodeButton ist IM Kontext
 */
export const DarkmodeButton = () => {
    const { setDarkmode } = useContext(DarkmodeContext)

    const handleClick = () => {
        setDarkmode(prev => !prev) // Toggle Pattern
    }

    return <button onClick={handleClick}>Toggle Darkmode</button>
}
```


## Beispiel: User Context

Szenario: Eine Liste von Usern ist gegeben. Wir möchten einen User selektieren und speichern, so dass andere Komponenten die Daten des Users verwenden können.

Zum Beispiel: Wenn ein User eingeloggt wird, dann wird der User im Kontext gespeichert, damit andere Komponenten auf die Daten des Users zugreifen können.

## Fazit

Wir brauchen `useContext`:

- Um komplexes Prop-Drilling zu vermeiden
- Einen **globalen** Zustand für die Applikation speichern

Wir verwenden den `useContext`:

1. `createContext`
2. `<Context.Provider />` + `useState`
3. `useContext(Context)`
