# BE Exam

## Ziel der Aufgabe

In dieser Aufgabe sollen Sie zwei Mongoose-Modelle erstellen, eine Relation zwischen ihnen modellieren und über passende Endpunkte die Relation überprüfen.

---

## **Aufgabenstellung**

### **Szenario:**

Sie entwickeln eine API für eine Anwendung, die Städte (`Cities`) und Geschäfte (`Stores`) verwaltet.

Jede Stadt kann mehrere Geschäfte haben, und ein Geschäft kann in mehreren Städten verfügbar sein.

Welche Art von Relation handelt es sich? Antwort: Many-To-Many

### **Vorgaben:**

1. **Modelle erstellen und validieren:**
    Erstellen Sie zwei Mongoose-Modelle:
      - City:
          - Felder:
              - `name` (String): Der Name der Stadt.
                    Validierung: Muss mindestens 3 Zeichen lang sein, nur Buchstaben und Leerzeichen enthalten.
              - `population` (Number): Die Einwohnerzahl der Stadt.
                    Validierung: Muss eine positive Zahl sein.
      - Store:
          - Felder:
              - `name` (String): Der Name des Geschäfts.
                    Validierung: Muss mindestens 2 Zeichen lang sein.
              - `category` (String): Die Kategorie des Geschäfts (z. B. "Lebensmittel", "Kleidung").
                    Validierung: Muss eine der vordefinierten Kategorien sein (z. B. `["Lebensmittel", "Kleidung", "Elektronik", "Sport"]`).
    Man kann auch eine weitere Abhängigkeit verwenden, um die Daten besser zu validieren.

2. **Routen erstellen:**
    Erstellen Sie folgende Routen in der bestehenden Express-App:
    - **POST /stores**  
      - Beschreibung: Erstellt ein neues Geschäft.  
      - Eingabe: JSON-Body mit `name` und `category`.
    - **POST /cities**  
      - Beschreibung: Erstellt eine neue Stadt.  
      - Eingabe: JSON-Body mit `name` und `population`.
    - **POST /cities/:cityId/stores/:storeId**  
      - Beschreibung: Verknüpft ein Geschäft mit einer Stadt.
      - Überprüfe, ob die Ids einen Eintrag in der Datenbank beinhalten
    - **GET /cities/:cityId/stores**  
      - Beschreibung: Gibt alle Geschäfte zurück, die mit einer bestimmten Stadt verknüpft sind.

3. **Beispieldaten für die Modelle:**
   - Beispiel für ein `City`-Objekt:  

     ```json
     {
       "name": "Berlin",
       "population": 3448148
     }
     ```

   - Beispiel für ein `Store`-Objekt:  

     ```json
     {
       "name": "Tech World",
       "category": "Electronics"
     }
     ```

### **Vorgehensweise:**

1. **Models erstellen:**
   - Verwenden Sie Mongoose-Schemas, um die Relation zwischen `Cities` und `Stores` zu modellieren.
   - Überlegen Sie, ob Sie ein `Array` oder ein zusätzliches Verknüpfungsmodell benötigen.

2. **Testen der Relation:**
   - Stellen Sie sicher, dass:
     - Eine Stadt erfolgreich mit einem Geschäft verknüpft werden kann.
     - Alle Geschäfte einer Stadt korrekt ausgegeben werden.

---

### **Technische Details**

- **Voraussetzungen:**
  - Sie erhalten eine bereits eingerichtete Express-Anwendung mit allen notwendigen Abhängigkeiten (`express`, `mongoose`, `dotenv`, etc.).
  - Führen Sie vor Beginn der Aufgabe `npm install` aus, um die Abhängigkeiten zu installieren.

---

Viel Erfolg!
