# REST

Server stellen eine zentrale Quelle der Datenverarbeitung dar.

> API = Application Programming Interface
> Schnittstelle zwischen verschiedenen Programmen

## CRUD Methoden

- Create (Erstellen)
- Read (Auslesen)
- Update (Aktualisieren)
- Delete (Löschen)

Die einzelenen Methoden können auch als HTTP-Methoden dargestellt werden.

- POST      => Create, Daten/Ressourcen werden NEU erstellt
- GET       => Read, Daten werden gelesen
- PUT/PATCH => Update, Daten werden aktualisiert
- DELETE    => Delete, Daten werden gelöscht

Die Erwähnung der Methode ist essentiell, damit eine klare Kommunikation nach außen stattfindet.

### PUT-Methode

Diese Methoden werden einer Kombination von dynamischen Pfaden und einen Body gebaut.

## Dynamische Routen

Ähnlich wie bei `react-router-dom` können wir dynamische Routen mit einem Platzhalter definieren.
Dies ermöglicht uns Routen zu erstellen, die auf verschiedene Werte reagiert.
Beispiel:
`(PUT) /product/:id` ist eine Schnittstelle, wo ein Produkt abhängig von der Id aktualisiert wird.

## Representatioal State Transfer (REST)

Unser Server stellt einen Zustand dar, der abhängig von der Datenbank ist.