# Mocking

## Unterschiede zwischen Dokument und JSON

- Dokument (BSON) kann `Date` Objekte beinhalten
  - In JSON ist das nicht möglich, wäre entweder ein `string` oder `number`


**Mock Daten** = Testdaten für die Modelle

In JS kann man mit `@faker-js/faker` Fake Daten erstellen.

```bash
npm install @faker-js/faker --save-dev
```
