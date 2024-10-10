# Dynamische Routen

## Was sind dynamischen Routen?

Routen mit einem Platzhalter im Pfad, um einen Parameter zu erstellen.

## Wofür braucht man eigentlich dynamische Routen?

- Wenn der Inhalt von einer Variable abhängig ist. 
- Parameter in der URL werden vom Browser gespeichert.

## Wie werden dynamische Routen erstellt?

```jsx
{
    path: "/dog/:breed",
    element: <Dog/>
}
```

Der Parameter wird in der Route gekennzeichnet mit einem ":" am Anfang. Dadurch erkennt `react-router`, dass es sich um einen Parameter handelt. In diesem Beispiel würde `:breed` ersetzt werden, mit dem Wert in der URL.

## Wie wird jetzt auf die Route zugegriffen?

`/dog/husky` => `breed = "husky"`

In der React-Komponente gibt es zwei Möglichkeiten, wie auf den Parameter zugegriffen werden kann.

### params Objekt

> VERALTET

```jsx
const Dog = ({ params }) => {
    const breed = params.breed
    return <p>Dog breed: {breed}</p>
}
```

React Router fügt der Seite ein `params` Props hinzu, mit der wir die Möglichkeit haben auf den Parameter zuzugreifen.

### useParams Hook

`useParams` gibt uns ein Objekt zurück in der die verschiedenen Parameter gespeichert sind, die zuvor definiert wurden.

> Es können auch mehrere Parameter definiert werden

```jsx
import { useParams } from "react-router-dom"

const Dog = () => {
    const params = useParams()
    const { breed } = useParams() // hier mit object destruction
    return <p>Dog: {params.breed}</p>
}
```

## Anwendungsfälle

- Die Applikation hat eine User Seite. Mit dem Parameter können wir bestimmen, welcher User gemeint ist.
- Ermöglicht eine Kommunikation zwischen unterschiedlichen Seiten.

## Achtung

Parameter können Wildcard Routen blocken! Denn `react-rouer` erkennt nicht "fehlerhafte" Parameter. Ungültige Parameter werden in der Seite gespeichert und landen nicht im Wildcard.

## Beispiel: Dog App

Die Dog App sucht nach Bildern von Hunden abhängig von der Rasse, die von Nutzer eingegeben wird.
Die Applikation besteht aus zwei Seiten:

- Home: Hier kann der Nutzer nach einer Rasse suchen
- Dog: Hier wird nach einem Bild gesucht und dargestellt

### Home Page (Home.jsx)

- Verwendet eine Kombination aus `input` und `useState`, um die Eingabe zu speichern
- Nutzt `navigate`, um beim `submit`, die Dog Page, mit einem Parameter vom Eingabefeld, aufzurufen.

```js
    navigate(`/dog/${breed}`)
```

### Dog Page (Dog.jsx)

- Verwendet die API: `https://dog.ceo/api/breed/hound/images/random`, um nach einer Rasse zu suchen
- Dog Page erhält über den Parameter `breed`, den Wert nach welcher Rasse gesucht werden soll.
