# Update

1.Möglichkeit:

```js
const organizer = new Organizer({
name: faker.company.name(), // Zufälliger Name wird generiert
email: faker.internet.email(), // Zufällige Email wird generiert
});
organizer.events = events; // Updaten den Organizer mit weiteren Events
await organizer.save(); // Speichern den Organizer
```

Zuvor wird über die `save` Methode, Änderung im `organizer` gespeichert.

2.Möglichkeit

```js
const id = req.params.id // Id wurde hier z.B. über ein Parameter erhalten
const organizer = await Organizer.findByIdAndUpdate(id, {
    events
}, {
    new: true,
    runValidators: true
})
```

- `findByIdAndUpdate` sucht nach einem Dokument, und fügt die NEUEN Attribute zum Dokument hinzu.
- Weitere Optionen lassen über ein Objekt konfigurieren.
  - `new`: Wenn `new: true`, dann wird das neu aktualisierte Dokument zurückgegeben, ansonsten das alte Dokument, VOR der Aktualisierung
  - `runValidators`: Standardmäßig wird bei der Aktualisierung keine Validation des Dokuments ausgeführt, dies muss explizit mit `runValidators` gesetzt werden
