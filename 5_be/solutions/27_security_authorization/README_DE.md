# Fehlende Autorisierung

Diese TODO-Anwendung ist fast fertig! Die Authentifizierung der Benutzer wurde implementiert, aber es fehlen einige Teile des Mechanismus zur Autorisierung.

## Aufgaben

Untersuche den vorhandenen Code, richte die Anwendung ein und teste, ob sie funktioniert. Das [Frontend](./index.html) kann mit Live Server ausgeführt werden.

> 🐘 Verwende die Datei `.env.example`, um deine `.env`-Datei einzurichten, und verbinde deine Anwendung mit einer Datenbank!

## Aufgabe 1

Füge dem `User`-Modell ein `role`-Feld hinzu;

- Es sollte 2 Rollen geben: `user` und `admin`

> Hinweis: Hier könntest du ein `enum` verwenden!

## Aufgabe 2

Wenn du die Anwendung zum ersten Mal ausführst, sollte sie einige Daten in der Datenbank generieren.

Untersuche die `Users`-Sammlung;

- Gib dem Benutzer "Tom" die Rolle `admin`
- Gib dem Benutzer "Jerry" die Rolle `user`

## Aufgabe 3

Aktualisiere die Logik der **Backend**-Anwendung;

- Erlaube nur Benutzern mit der **Rolle** `admin`, Datensätze aus der `TodoItem`-Sammlung zu löschen

> 🐴 **Füge die Benutzerrolle nicht zum JWT hinzu!**
>
> Die Logik für die Handhabung von Rollen sollte im Backend sein, und nicht im Frontend.

- Warum wäre es eine schlechte Idee, diese Logik im Frontend zu haben?
