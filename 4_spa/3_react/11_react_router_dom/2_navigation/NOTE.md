# React Router Dom: Wichtige Konzepte

In diesem Guide behandeln wir zwei wichtige Konzepte von `react-router-dom`:

1. **Routen in React Router Dom** – Verschiedene Routen-Typen wie statische Routen, Index-Routen und Wildcard-Routen.
2. **Navigation in React** – Unterschiedliche Möglichkeiten zur Navigation, einschließlich der Verwendung von `Link`, `useNavigate` und `Navigate`.

## 1. Routen in React Router Dom

### 1.1 Statische Routen

Statische Routen sind die grundlegendste Form von Routen. Jede Route ist mit einem bestimmten Pfad verbunden, und wenn dieser Pfad in der URL übereinstimmt, wird die zugehörige Komponente gerendert.

#### Beispiel:

```jsx
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);
```

In diesem Beispiel gibt es zwei statische Routen: `"/"` für die Startseite (`Home`-Komponente) und `"/about"` für die Seite Über uns (`About`-Komponente). Wenn der Benutzer auf `"/about"` navigiert, wird die `About`-Komponente gerendert.

### 1.2 Index Routen

Eine **Index Route** wird verwendet, um eine Standardkomponente zu rendern, wenn keine spezifischere untergeordnete Route übereinstimmt. Index-Routen sind in der Regel Teil einer geschachtelten Routenstruktur.

#### Beispiel:

```jsx
const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        index: true,
        element: <Overview />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
]);
```

In diesem Beispiel zeigt die `Dashboard`-Route die `Overview`-Komponente als Standardinhalt an, wenn der Benutzer zu `"/dashboard"` navigiert, ohne eine bestimmte Unterseite (wie `"/dashboard/settings"`) auszuwählen. Die `index: true`-Eigenschaft weist darauf hin, dass diese Route die Standardroute für den übergeordneten Pfad ist.

### 1.3 Wildcard Routen

Wildcard-Routen werden verwendet, um alle Pfade zu erfassen, die nicht mit einer definierten Route übereinstimmen. Sie sind nützlich für 404-Seiten oder um dynamische Segmente von URLs zu erfassen.

#### Beispiel:

```jsx
const router = createBrowserRouter([
  {
    path: "*",
    element: <NotFound />,
  },
]);
```

Hier wird die `NotFound`-Komponente gerendert, wenn keine der definierten Routen mit der aktuellen URL übereinstimmt. Das `path: "*"` ist der Wildcard-Pfad, der alle unpassenden Routen abfängt.

## 2. Navigation in React Router Dom

Es gibt mehrere Möglichkeiten, in einer React-Anwendung von einer Seite zur anderen zu navigieren. Im Folgenden werden die drei gängigsten Methoden vorgestellt.

### 2.1 `Link` Komponente

Die `Link`-Komponente ist die häufigste Methode, um Navigation in React-Anwendungen zu implementieren. Sie funktioniert ähnlich wie ein HTML-`<a>`-Tag, lädt die Seite jedoch nicht neu, sondern verwendet die Client-seitige Navigation.

#### Beispiel:

```jsx
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
```

In diesem Beispiel erstellt der `Link` eine client-seitige Navigation zu den entsprechenden Routen, ohne die Seite neu zu laden. Dies ermöglicht eine schnelle und reibungslose Benutzererfahrung.

### 2.2 `useNavigate` Hook

Der `useNavigate` Hook wird verwendet, um programmatisch zu navigieren. Das bedeutet, dass die Navigation als Reaktion auf eine Aktion (z. B. das Klicken auf eine Schaltfläche) oder einen bestimmten Zustand (z. B. nach erfolgreichem Absenden eines Formulars) ausgelöst werden kann.

#### Beispiel:

```jsx
import { useNavigate } from "react-router-dom";

function SubmitButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    // Programmatic Navigation to the home page
    navigate("/");
  };

  return <button onClick={handleClick}>Go Home</button>;
}
```

Hier wird `useNavigate` verwendet, um den Benutzer zur Startseite (`"/"`) zu navigieren, wenn die Schaltfläche geklickt wird. Dies ist nützlich, wenn du eine Navigation basierend auf Benutzerinteraktionen kontrollieren möchtest.

#### Anwendungfälle

- API-Calls
- Fehler in JavaScript

### 2.3 `Navigate` Komponente

Die `Navigate`-Komponente wird verwendet, um den Benutzer automatisch zu einer anderen Route weiterzuleiten. Sie ist besonders nützlich für Weiterleitungen oder wenn man basierend auf bestimmten Bedingungen automatisch navigieren möchte.

#### Beispiel:

```jsx
{
    path: "*",
    element: <Navigate to="/" />, // <Navigate /> navigiert automatisch zur nächsten Seite, wenn die Komponenten gerendert
}
```

In diesem Beispiel leitet `Navigate` den Benutzer zur Startseite (`"/"`) weiter, wenn eine ungültige Route angezeigt werden soll.

## Fazit

1. **Routen in React Router Dom:**
   - **Statische Routen** definieren direkte Pfade, die einer bestimmten Komponente entsprechen.
   - **Index Routen** dienen als Standardroute in geschachtelten Strukturen.
   - **Wildcard Routen** fangen nicht übereinstimmende Pfade ab und können für 404-Seiten verwendet werden.

2. **Navigationsmöglichkeiten:**
   - **`Link`** ermöglicht es Benutzern, auf verschiedene Seiten zu navigieren, ohne die Seite neu zu laden.
   - **`useNavigate`** bietet programmatische Navigation, die auf bestimmte Benutzerinteraktionen oder -bedingungen reagiert.
   - **`Navigate`** bietet die Möglichkeit, Benutzer automatisch weiterzuleiten.

Mit diesen Konzepten hast du eine solide Grundlage für die Navigation und das Routing in React-Anwendungen.
