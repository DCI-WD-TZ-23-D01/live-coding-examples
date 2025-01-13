# Verschlüsselung vs Hashing

## Verschlüsselung

- HTTPS (Hypertext Transfer Protocol Secure)
  - Webseite hat ein Zertifikat
  - Mit diesem Zertifakt werden Webseiten verschlüsselt

> Verschlüsselung ist umkehrbar

Beispiel für eine sehr einfache Verschlüsselung:

I => iso
e => eri
u => uso
o => ozo
a => apo

"Ich heisse Sono" => "Isoch heriisosse Sozonozo"
"Isoch heriisosse Sozonozo" => "Ich heisse Sono"

**Cäsar-Verschlüsselung**:

- Verschieben jeden Buchstaben um 5 Positionen

"Bahnhof" => "Gemsmtk"

### Verschlüsseln mit JavaScript

- verwenden des `crypto` Moduls

> Verschlüsselung ist eher komplexes Gebiet

### Symmetrische Verschlüssung

> Es wird der gleiche Schlüssel für die Verschlüsselung verwendet

Was muss gleich sein:

- Schlüssel
- Algorithmus
- Initiale Vektor

## Hashing

> Hashing ist nicht umkehrbar

"Bahnhof" => "0ccc8fa79afa07c4d6419b7130fae813241630ce9573c83c9d40c851776c5dfd"

- Ein Hashing-Algorithmus erstellt einen String, den man nicht zum Original zurückführen kann.
- Für jede Eingabe gibt IMMER die gleiche Ausgabe bei einem Hash-Algorithmus
- MINIMALE Änderungen an der Eingabe sorgen für einen GROßEN Unterschied bei der Ausgabe

**Anwendung: Hashen von Passwörtern**

- Denn Passwörter sollten nicht im Originalzustand auf der Datenbank gespeichert werden.
- Das Hashing verschleiert die Daten.
- Für sensible Daten, die anschließend nicht bearbeitet werden

**Vorteile**:

- Erhöhung der Privatsphäre
- Erhöht die Sicherheit, falls die Daten gestohlen werden

**Typischer Datenfluss (Registierung)**:

1. User registriert sich
2. Backend speichert die Nutzerdaten und speichert den gehashten Wert des Passworts.

   ```js
   {
        "username": "max.mustermann",
        "password": "mustermann12345"
   }
   // In der Datenbank wird folgendes gespeichert:
   {
        "username": "max.mustermann",
        "password": "7afdf432cbe9dfec8f17a321a228653a28703115561813c07005c2d655271a00"
   }
   ```

**Typischer Datenfluss (Login)**:

1. User möchten sich einloggen und verschickt Nutzername und Passwort
2. Backend hasht das übergebene Passwort und verglicht mit dem Eintrag in der Datenbank

### Problem: Wörtertbuchangriff

- Hacker benutzt typische Passwörter und versucht sich einzuloggen.
  - Viele Menschen verwenden einfache Passwörter

**bcrypt.js**:

`npm i bcryptjs`

- Ein etwas performantere Bibliothek zum Verschlüsseln oder Hashen von Daten
