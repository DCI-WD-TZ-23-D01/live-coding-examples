# React Router Dom: Grundkonzepte

`react-router-dom` ist eine Bibliothek, die es ermöglicht, Routing-Funktionalität in einer React-Anwendung hinzuzufügen. Das bedeutet, dass du verschiedene Komponenten anzeigen kannst, je nachdem, welche URL der Benutzer aufruft, ohne die Seite neu zu laden. In diesem Guide schauen wir uns die wichtigsten Konzepte und Komponenten von `react-router-dom` an, insbesondere `RouterProvider`, `Outlet` und das Aufsetzen von Routen mit `createBrowserRouter`.

## 1. Was ist Routing?

Routing ist der Prozess, durch den unterschiedliche Inhalte oder Komponenten basierend auf der URL einer Anwendung angezeigt werden. In einer klassischen Website würde das Laden einer neuen URL einen vollständigen Seiten-Neuladevorgang auslösen. Mit React Router können wir jedoch zwischen verschiedenen "Seiten" wechseln, ohne die Anwendung komplett neu zu laden. Dies ermöglicht ein schnelleres und flüssigeres Nutzererlebnis.

## 2. Grundlegende Konzepte von `react-router-dom`

### 2.1 `RouterProvider`

Der `RouterProvider` ist eine der zentralen Komponenten von `react-router-dom`. Er stellt der gesamten Anwendung den Router zur Verfügung, der die verschiedenen Routen definiert und verwaltet. Der `RouterProvider` umhüllt deine Anwendung und sorgt dafür, dass Routing-Funktionalitäten in allen untergeordneten Komponenten verfügbar sind.

#### Beispiel

```jsx
import React from "react";
import ReactDOM from "react-dom";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Home</h1>,
  },
  {
    path: "about",
    element: <h1>About Us</h1>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

ReactDOM.render(<App />, document.getElementById("root"));
```

In diesem Beispiel erstellen wir einen `Router` mit zwei Routen: eine für die Startseite (`"/"`) und eine für die Seite `"/about"`. Der `RouterProvider` kümmert sich um die Verwaltung der Routen.

### 2.2 `createBrowserRouter`

`createBrowserRouter` ist eine Funktion, die einen Router erstellt, der das HTML5-Geschichtennavigations-API (`pushState`, `replaceState` und `popstate`-Event) verwendet. Dies ist die Standardmethode für moderne Webanwendungen, um Navigation ohne vollständiges Neuladen der Seite zu ermöglichen.

#### Beispiel

```jsx
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
]);
```

In diesem Beispiel erstellen wir einen Router, der drei Routen verwaltet: `"/"`, `"/about"` und `"/contact"`. Jede dieser Routen ist mit einer eigenen Komponente verknüpft, die angezeigt wird, wenn die Route aufgerufen wird.

### 2.3 `Outlet`

Die `Outlet`-Komponente wird verwendet, um eine geschachtelte Routing-Struktur zu erstellen. Wenn eine Route untergeordneten Routen hat, wird `Outlet` verwendet, um die untergeordnete Route an der richtigen Stelle in der UI einzubetten.

#### Beispiel

```jsx
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </nav>
      {/* Hier wird die untergeordnete Route gerendert */}
      <Outlet />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <h1>Home Page</h1>,
      },
      {
        path: "about",
        element: <h1>About Page</h1>,
      },
    ],
  },
]);
```

Hier wird die `Outlet`-Komponente verwendet, um anzugeben, wo die untergeordneten Routen in der UI angezeigt werden sollen. Der `Layout`-Komponente ist für das Hauptlayout verantwortlich (z. B. Navigation), und die untergeordneten Routen werden im `Outlet` gerendert.

## 3. Ein komplettes Beispiel

Hier ist ein vollständiges Beispiel für eine Anwendung, die `RouterProvider`, `Outlet` und `createBrowserRouter` verwendet:

```jsx
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider, Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

function Home() {
  return <h1>Welcome to the Home Page!</h1>;
}

function About() {
  return <h1>About Us</h1>;
}

function Contact() {
  return <h1>Contact Us</h1>;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

ReactDOM.render(<App />, document.getElementById("root"));
```

### Erklärung

1. **`Layout`-Komponente**: Diese Komponente enthält die Hauptnavigation und verwendet `Outlet`, um die jeweiligen Inhalte der Route zu rendern.
2. **`Link`-Komponente**: `Link` wird verwendet, um auf andere Seiten zu navigieren, ohne die Seite vollständig neu zu laden.
3. **Routen**: Es gibt drei Seiten: `"Home"`, `"About"` und `"Contact"`, die in der `children`-Konfiguration des Routers definiert sind.

## Fazit

Die wichtigsten Komponenten, die du in `react-router-dom` kennen solltest, sind:

- **`RouterProvider`**: Umgibt die Anwendung und stellt den Router bereit.
- **`createBrowserRouter`**: Erstellt den Router, der die Routen verwaltet.
- **`Outlet`**: Dient zum Rendern von untergeordneten Routen in einer geschachtelten Struktur.

Mit diesen Konzepten kannst du in einer React-Anwendung eine mehrseitige Struktur aufbauen, ohne dass die Seite bei jedem Navigationswechsel neu geladen wird.
