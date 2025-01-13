# Zusammenfassung - Datenbank

## MongoDB

- NoSQL-Datenbank
  - Daten können unstrukturiert vorhanden
  - Biete eine hohe Flexibilität an
- Die Arbeit mit MongoDB ist ähnlich wie mit JavaScript
  - Konzeptuell: Sammlung (Collection) von Dokumenten (Documents) <-> Array von Objekten
- Eine Datenbank in MongoDB besteht aus ein oder mehreren Kollektion
- Eine Kollektion besteht aus keinem, einem oder meheren Dokumenten

### Dokument

- BSON-Objekt
  - Hat sehr viele Ähnlichkeiten zum JSON
  - JSON ist für Menschen gemacht
  - BSON ist für Computer gemacht
- `_id`
  - Wird automatisch von MongoDB erstellt
  - `ObjectID`: Strukturierte ID, die es ermöglicht verschiedene ID auf verschiedenen Datenbanken zu haben
  - 12-Byte:
    - 4-Byte: Zeitstempel
    - 5-Byte: Zufallswert vom Prozess erstellt, einzigartig für Server/Computer
    - 3-Byte: zufällig initialisierter Zähler der hochgezählt wird

### Criteria Query

- MongoDB verwendet ein Schema zum Filtern von Daten
  - Deklarativ

```js
const birthYear = new Date("2020-01-01")
db.animals.find({ birthYear: { $gt: birthYear } })
// => Alle Tiere gesucht, die "name": "Josh" im Dokument beinhalten
```

- Beschreiben, wie ein Objekt auszusehen hat, mit dem man arbeiten möchte
- `new Date` lässt sich auch in MongoDB Compass ausführen

> Queries werden in Such-, Akualisierung-, Löschoperatoren von MongoDB verwenden
