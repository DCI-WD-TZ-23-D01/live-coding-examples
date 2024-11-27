# Mocking

## Unterschiede zwischen Dokument und JSON

- Dokument (BSON) kann `Date` Objekte beinhalten
  - In JSON ist das nicht möglich, wäre entweder ein `string` oder `number`

**Mock Daten** = Testdaten für die Modelle

In JS kann man mit `@faker-js/faker` Fake Daten erstellen.

```bash
npm install @faker-js/faker --save-dev
```

## Query Operatoren

MongoDB bietet verschiedene Operatoren an, um komplexere Kriterien zu bauen. Diese sind hilfreich für die Suche, das Updaten oder das Löschen von Dokumenten.

```js
const result = await SpeciesDiscovery.find({
      kind: "flamingo",
}).countDocuments();

// Lässt sich auch mit einem Query Operator schreiben
const result = await SpeciesDiscovery.find({
  kind: {
    $eq: "flamingo"
  },
}).countDocuments();
```

Query Operatoren werden in einem Objekt zu dem jeweiligen Attribut hinzugefügt `{ kind: {$eq: ...}}`

[Weitere Operatoren](https://www.mongodb.com/docs/manual/reference/operator/query/#query-selectors)
