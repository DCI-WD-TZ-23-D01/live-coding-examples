# Datenmodellierung - Aufgaben

## Attribute

- `required`
- `unique`
- `default`

## Validatoren

- `minLength`/`maxLength`

## Enum

- festgelegte Konstante
- stärkere Einschränkung im Gegensatz zu `String`

## 1. Bücher-API modellieren

- `author`
  - `required`
  - `String`
  - `minLength` > 1
- `title`
  - `required`
  - `String`
  - `minLength` > 1
- `isbn`
  - `required`
  - `unique`
  - `String`
  - `minLength` >= 10
  - `maxLength` <= 13
- `genres`
  - `[String]`
- `languages`
  - `[String]`
- `rewards`
  - `[String]`
- `cover` (Bild-URL)
  - `String`
  - `default` (Platzhalter)
- `metadata`
  - `Subdocument`
    - `bookTypes`
      - `["e-book", "hard-cover", "soft-cover", "pocket"]`
    - `price`
      - `Number`
