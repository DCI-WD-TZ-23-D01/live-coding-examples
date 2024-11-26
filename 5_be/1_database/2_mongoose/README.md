# MVC und ODM

## MVC

- **Model**: Struktur der Daten
  - Wie sieht die Datenstruktur aus?
- **Controller**: Businesslogik der Applikation
  - Wie wird mit den Daten gearbeitet
- **View**: Darstellung der Daten
  - Wie werden die Daten dargestellt?

> Fokus: Beziehung zwischen Backend und Datenbank

## ODM (Object Document Mapping)

Im Backend werden die Dokumente in der Datenbank zu Objekten "gemappt".
Die gemappten Objekte bieten zusätzlich Funktionalitäten an, die die Arbeit mit den Dokumenten vereinfacht.

Der naive Weg, wäre die Objekte in das Backend zu holen. Doch die Objekte sind "dumm".
Ein ODM tranformiert die Objekte in der Datenbank zu Klassen.
Diese Klassen haben Methoden, um die Arbeit mit den Objekten zu vereinfachen.
> ODM = Mongoose

## Mongoose

Mongoose ist ein Werkzeug, welches uns hilft die Arbeit mit den Dokumenten zu vereinfachen.
MongoDB bietet keine Validierung der Daten an. Dies kann langfristig für Probleme sorgen.

```js
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');

// Mongoose abstrahiert die Collection und fügt Funktionen für uns hinzu
db.cat.insertOne({ Name: "John"}) // Fehlt: Validierung

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' }); // Mongoose wirft dann einen Fehler
kitty.save().then(() => console.log('meow'));
```

> Modelle (Daten) der Applikation werden in einem `models` gespeichert.

## Schema

> Schema = Blaupause von einem Objekt

Das Schema in `mongoose` beschreibt die Struktur von unseren Daten. Zusätzlich kann man einige Bedingungen zur Struktur hinzufügen.
