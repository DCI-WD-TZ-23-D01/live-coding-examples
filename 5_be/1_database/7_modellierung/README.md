# Modellierung

> UML = Unified Modeling Language
> Graphische Methodik, wie Diagramme erstellt werden sollen

## Klassendiagramm

Beschreibt die Beziehungen zwischen den Modellen.
Die Multiplizitäten beschreiben die Art der Beziehung.

![Klassendiagramm](.excalidraw.png)

## Referenzierung der Collection

1. Mit der Modellklasse (`class`)
2. Mit der Collection-Bezeichnung (`string`)

## Populate

- Wie können Referenzen von anderen Collection referenziert werden?

- Referenzen werden nicht automatisch befüllt. Denn diese müssen zuvor mit `populate` befüllt.
  - Involvierte Schemas müssen von mongoose registriert werden, bevor sie mit populate befüllt werden müssen
