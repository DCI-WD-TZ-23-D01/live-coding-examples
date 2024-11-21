# MongoDB

- Eine dokumentorientierte Datenbank
- NoSQL: flexible Datenstrukturen
  - Weil MongoDB mit Dokumenten arbeitet, ist es eine NoSQL Datenbank

```js
[{ a:1 }, { a: 2 }, { a:3 }, { b:3, c:5 } ] // Struktierte Daten

[{a: 1}, "Hello", 123, true, undefined] // Unstrukturierte Daten
```

## Terminologien

> Diese Begriffe immer im Kontext von MongoDB betrachten

1. Dokument: JSON-ähnliches Objekt (BSON)
2. Collection: Sammlung von Dokumenten, ähnlich zu einem Array von Objekten
3. Datenbank: Ein oder mehreren Collections
4. MongoDB Server (Cluster): Ein oder mehreren Datenbanken
5. ObjectId: Eindeutige Identifikation von einem Dokument in einer Collection
   1. Wird von MongoDB automatisch erstellt
   2. Praktisch für spezifische Updates/Löschungen
6. Criteria: Objekt, dessen Struktur von den anderen Dokumenten erfüllt werden muss

## Shell Kommandos

- `show dbs`: Zeigt alle Datenbanken an, die auf dem Server sind
- `show collections`: Zeigt alle Collections an, die in der Datenbank sind
- `use test`: Datenbank wechseln/erstellen
  - Eine Datenbank wird dann erstellt, wenn die erste Collection erstellt wurde
- `db.<collections>.find()`: Zeigt alle Dokumente in einer Collection an
  - Es KANN eine Criteria (Bedingung) angegeben werden, welches Dokument aktualisiert werden muss
- `db.<collections>.insertOne()`: Füge ein neues Dokument in die Collection ein
- `db.<collections>.updateOne()`: Aktualisiert ein Dokument
  - Es MUSS eine Criteria (Bedingung) angegeben werden, welches Dokument aktualisiert wird
- `db.<collections>.deleteOne()`: Löscht ein Dokument
  - Es MUSS eine Criteria (Bedingung) angegeben werden, welches Dokument aktualisiert wird
