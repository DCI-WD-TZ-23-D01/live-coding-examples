# Autorisierung

> Authentifizierung: Wer bist du?
> Autorisierung: Was darfst du tun?

## Rollen

Verschiedene Rollen besitzen verschiedene Berechtigungen, wie diese Nutzer mit der Applikation umgehen können. Für manche Anwendung sind Rollen zu allgemein.

Ein Beispiel:

- `ADMIN`: Diese Rolle darf alles: Lesen, Bearbeiten und Löschen
- `EDITOR`: Diese Rolle darf nur lesen und schreiben
- `VIEWER`: Diese Rolle darf nur lesen

## Berechtigungen

Es werden verschiedene Berechtigungen definiert und diese werden Nutzern zu geteilt. Berechtigungen sind granularer definiert als Rollen.

- `DELETE_USER`: Man darf Nutzer löschen
- `VIEW_STATUS`: Man darf Status betrachten

## Implementierung

Wir möchten gewisse Endpunkte in unserer API absichern. Dazu werden Middleware Funktionen erstellt, die die Zugriffe verwalten.

- Express erwartet eine Middleware-Funktion als Wert
  - Funktionen in JS sind auch Objekt

```js
function add(a,b) {
    return a + b
}

const f = add // valider Code
f(1,1) === add(1,1) // Funktionen sind besondere Objekte
const result = add(1,1) // valider Code
```
