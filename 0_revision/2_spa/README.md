# SPA (React) Notizen

- Komponenten erstellen
  - Props (children)
- Hooks
  - Rules of Hooks
  - `useState`: Fügt einen Zustand einer React-Komponente hinzu
  - `useEffect`: Lifecycles einer Komponente
      1. Mounting Phase/Initialisierung
      2. Update Phase/Aktualisierung
      3. Unmounting Phase
    - `useEffect` ist in der Lage, in jeder Phase einer Komponente zu reagieren
  - `useContext`

## API

Man kann im `useEffect` einen API Call ausführen, doch das kann zu unkontrolliertem oder komplexen Strukturen führen.

Versuche, die API Interaktion kontrolliert zu lassen. Zum Beispiel per Event (Click, etc.)

> Es ist besser, den `useEffect` so gut es geht, zu vermeiden
