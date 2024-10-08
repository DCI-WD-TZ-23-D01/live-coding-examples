# 08.10.2024 - React Router

## Idee

Webseite für Hunde

## Vorbereitung

- React Projekt anlegen: `npm create vite@latest`
- in den angelegten Ordner gehen (heißt wie Projekt-Name)
- `npm install`
- React Router installieren: `npm install react-router-dom` (Version 6, nicht 5!)

## Dokumentation

- `createBrowserRouter` ist moderner als `BrowserRouter`
- https://reactrouter.com/en/main/routers/create-browser-router

## Organisation (Ordner und Dateien)

- router.jsx im `/utils` Unterordner anlegen, dort kommen die Routen rein (export nicht vergessen!)
- Komponenten im `/pages` Unterordner
- `App.jsx` aufräumen (alles löschen, was wir nicht brauchen)
- in `App.jsx` `routes`-Array importieren und benutzen
- Unterrouten in Unterordner, damit die Ordnerstruktur möglichst gut die Seitenstruktur abbildet

## Wichtige Hinweise

- Pfad von children-Routen (Unterseiten) **ohne "/"** ! -> Weder in path, noch in Link

## Routen

- Hauptpfad: "/" -> Komponente: **Home** (Startseite)
- Pfad: "/dog" -> Komponente: **Dog**
  - Unterpfad: "info" -> Unter-Komponente: **DogInfo**

## Outlet

- eine Komponente ist wie ein Container, in der die Unterseiten angezeigt werden
- d.h. immer Inhalt von Container (z.B. hier Dog) + Inhalt Unterseite (an der Position von `<Outlet>` im Container steht)

## NavLink Eigenschaften

- `<Link>` wird nur zu einem einfachen Link (a - Anker Tag)
- `<NavLink>` hat mehr Eigenschaften (z.B. welche Seite aktiv ist)
- integriert: **props.isActive** Eigenschaft (eine von vielen)

## Übungen

- Unterschied zwischen `createBrowserRouter` und `BrowserRouter` anschauen
- das bestehende Projekt selbst erweitern
- das ganze Projekt komplett nochmal neu programmieren