# Tierarzt

Wir betreiben eine Tierarztpraxis und möchten unsere Daten in einer neuen Datenbank verwalten. Dabei gibt es verschiedene Bereiche, die wir abbilden möchten:

Zunächst müssen wir unsere Patienten erfassen. Jeder Patient ist ein **Tier**, das zu einem Besitzer gehört. Für jedes Tier möchten wir den **Namen** speichern, der zwingend **erforderlich** ist und mindestens 2 Zeichen umfassen sollte. Außerdem benötigen wir den **Tierart** (z. B. „Hund“, „Katze“, „Vogel“) und die Rasse, **falls verfügbar**. Das **Geburtsdatum** des Tieres **sollte ebenfalls** angegeben werden, um das Alter zu berechnen. Schließlich möchten wir das **Gewicht** des Tieres erfassen, das immer als Zahl gespeichert wird und größer als 0 sein muss.  

Die **Besitzer** der Tiere müssen ebenfalls erfasst werden. Jeder Besitzer hat einen **Vor- und Nachnamen**, die beide zwingend **erforderlich** sind. Außerdem **muss** eine **Telefonnummer** angegeben werden, über die der Besitzer erreichbar ist. Zusätzlich **soll** jeder Besitzer eine **eindeutige E-Mail-Adresse** angeben können, die **optional** ist. _Ein Besitzer kann mehrere Tiere besitzen, daher möchten wir die Tiere mit dem jeweiligen Besitzer verknüpfen_.  

Ein weiterer wichtiger Bereich sind die Behandlungen. _Jede Behandlung gehört zu einem bestimmten Tier und wird von einem Tierarzt durchgeführt_. Für jede Behandlung möchten wir das **Datum und die Uhrzeit** festhalten, zu der sie stattgefunden hat. Außerdem benötigen wir eine **Beschreibung der durchgeführten Behandlung**, die zwingend **erforderlich** ist. Die Kosten der Behandlung sollen ebenfalls gespeichert werden, als Zahl, die größer als 0 sein muss. Zusätzlich wäre es **hilfreich**, den **Namen des Tierarztes** zu erfassen, der die Behandlung durchgeführt hat.

Wichtig ist uns, dass die Daten den genannten Regeln und Einschränkungen entsprechen und gleichzeitig flexibel abgerufen werden können. Können Sie ein geeignetes Datenbankschema für uns entwerfen?

---

## Notizen

- Modelle:
  - Tiere
    - Behandlungen (One-To-Many)
    - Name
    - Tierart
    - Geburtsdatum
    - Gewicht
  - Besitzer
    - Vorname
    - Nachname
    - Telefonnummer
    - Email
  - Ärzte
    - Name
    - Behandlung (One-To-Many)
  - Behandlung
    - Datum
    - Beschreibung
    - Kosten
    - Tiere (Many-To-One)
    - Tierarzt (Many-To-One)
