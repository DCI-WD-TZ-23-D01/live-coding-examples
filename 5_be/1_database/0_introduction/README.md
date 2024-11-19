# Einführung

> MongoDB ist eine dokumentorientierte Datenbank

## Terminologie

### MongoDB Server

- Ein Server, worauf mehrere Datenbanken gespeichert sind.
- MongoDB Server wird auch "Cluster" genannt.
- API Server (Schnittstelle), um mit verschiedenen Datenbanken zu kommunizieren.

### MongoDB Datenbank

- Die Datenbank besteht aus mehreren Collections. Tendenziell wird eine Datenbank für eine Anwendung erstellt.
- Für jede Datenbank können eigene Funktionalitäten definiert.

### Collection

- Eine Sammlung von Dokumenten, die in einer Datenbank gespeichert ist.
- Eine Collection ist ähnlich zu einem "Array", welches ein oder mehrere Dokumente beinhaltet.

### Dokument

- Ein Eintrag in der Collection. Die Struktur ist ähnlich zu einem JSON.

## Anwendungsfälle

Pro:

- schnelle Prototypen
  - Datenstrukturen lassen sich schnell anpassen
- flexible Softwareentwicklung
  - flexible Datenstrukturen
- Heavy Write Operation

Cons:

- keine komplexe Anfragen

## Client

Möglichkeiten, wie man mit MongoDB interagiert

### mongosh

- Shell (CLI), um mit MongoDB zu arbeiten
- NodeJS Umgebung mit MongoDB integriert

#### API

- `use todos`: Datenbank wechseln/erstellen
- `db`: MongoDB Variable, API zu MongoDB

### MongoDB Compass

- GUI (Graphical User Interface)

## Criteria (Kritieren)

Das Suchen, Löschen oder Aktualisieren von Daten wird über ein Kriterium gesteuert.
Ein Kriterium besteht aus einer oder mehreren Bedingung/en, die ein Dokument erfüllen muss.

```js
db.cats.deleteOne({ _id: ObjectId("673c62119695a432e840c98d") })

db.cats.findOne({ _id: ObjectId("673c62119695a432e840c98d") })
```

Im obigen Beispiel wird ein Dokument gesucht, welches die `_id: ObjectId("673c62119695a432e840c98d")` hat und gelöscht.
Das erste Dokument, was gefunden wird, wird gelöscht.

> Im optimal Fall soll ein Dokument über ein eindeutiges Feld gelöscht werden.

```js
db.cats.deleteMany({ name: "Bob"  })

db.cats.find({ name: "Bob"  })
```

In diesem Beispiel, werden ALLE Dokumente gelöscht, wo das Kriterium `name: "Bob"` erfüllt wird.

```js
db.cats.deleteMany({ age: 3, name: "Bob" })

db.cats.find({ age: 3, name: "Bob" })
```

In diesem Beispiel wurde das Kriterium auf zwei Bedingungen erweitert.

### Aktualisieren

Zusätzlich zu dem Kriterium, wird ein neues Objekt mitgegeben, welches die alten Felder in dem Objekt überschreibt.

```js
db.cats.updateOne({ _id: ObjectId("673c62119695a432e840c98d") }, { $set: { age: 5 } })
```

> WICHTIG: Wenn die Bedingung eine `_id` ist, dann muss ein `ObjectId` mitgegeben werden. Ein String kann hier nicht verwendet werden.
