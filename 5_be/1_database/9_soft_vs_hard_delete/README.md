# Hard Delete vs Soft Delete

Problem:
MongoDB löscht unwiderruflich unsere Daten, wenn sie gelöscht werden sollen.

> MongoDB hat keinen "Papierkorb"

- **Hard Delete**: Daten werden unwiderruflich gelöscht

- **Soft Delete**: Daten existieren noch, doch sie befinden sich in einem "Löschzustand"
  - Meistens werden die Daten automatisch nach einem gewissen Zeitraum unwiderruflich gelöscht

## Implementierung von einem Soft Delete

Dokumente erhalten ein zusätzliches Feld:

1. `isDeleted`: `boolean`
    - Kann verwendet werden, um die Dokumente nicht mehr für den Nutzer anzuzeigen
    - einfacher Aufwand in der Umsetzung

2. `deletedAt`: `Date`
   - Ein Zeitstempel
   - höheren Aufwand in der Umsetzung
     - Mehr Logik muss hinzugefügt
   - Kann mit einem Aufräumjob beseitigt werden
