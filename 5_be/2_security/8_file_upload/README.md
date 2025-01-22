# Datei-Uploads

Verschiedenen Aspekte, wenn eine Datei hochgeladen wird:

- Sicherheitsbedenken
- Speicherung
- Umsetzung

## Sicherheitsbedenken

- Dateien sind potenzielle Angriffvektoren
  - Können Viren
  - Fotos können Daten beinhalten
- Datei können zu groß und unnötig Speicherplatz verbrauchen
- Übertragen, Verarbeiten und Speichern von Dateien kostet Geld und Ressourcen

### Validieren

- Größe des Uploads
- Bilder automatisch verarbeitet werden
  - geprüft auf Viren
  - automatisch verkleinert/vergrößert

#### Viren-Scan

- [clamscan](https://www.npmjs.com/package/clamscan)

#### Bildbearbeitung

- [sharp](https://www.npmjs.com/package/sharp)
- [jimp](https://www.npmjs.com/package/jimp)

## Speicherung

- Server
  - Was passiert, wenn zwei User eine Datei hochladen, die den gleichen Namen hat? => File-Collisions
    - Lösung: UUID (7ede71d6-8d78-44f3-9b5a-9521945e2402.png)
    - Datenbank speichert die Verbindung vom Originalnamen zur UUID
  - Problem: CRUD-Operatoren müssen selbst programmiert werden
  - Aufwand: Hoch
  - Lernerfahrung: Hoch
- Datenbank
  - Ähnlich zum Server-Ansatz
  - Weiteres Problem: Datenbankspeicher ist teuer als normaler Datenspeicher
    - Die Performanz der Datenbank beeinträchtigt wird
- Dritt-Anbieter
  - [AWS S3](https://aws.amazon.com/s3/) (Simple Storage Service): Robuster Service
  - [Cloudinary](https://cloudinary.com/)

> Oftmals ist die beste Lösung ein Dritt-Anbieter

## Umsetzung

Heute sehen wir ein kleines Demo wie mit [multer](https://www.npmjs.com/package/multer) Dateien hochgeladen werden können.

- Bilder werden auf der Festplatte gespeichert
- MongoDB um die Metadaten zu speichern

### Bemerkungen

- Registrierung über Postman


### Upload - Workflow

1. Hochladen des Bildes über dem Frontend:

```html
<input name="profilePicture" type="file" accept=".png,.jpg" />
```

Das `name` Feld im `input` ist der Name, den wir in der Schnittstelle definiert haben. Die FormData speichert die Datei unter dem `name` und wird mit diesem vom `multer` erkannt.

```js
usersRouter.post("/:id/upload",upload.single("profilePicture"),...)
```

2. Versenden der Datei

Wichtig: Wir nutzen die Id des Users, um diesem die Datei zuzuweisen.

```js
 const handleUpload = (e) => {
    e.preventDefault();
    // Erstelle eine neue FormData
    const formData = new FormData(e.target);

    // formData beinhaltet die Datei
    fetch(`http://localhost:3000/users/${user._id}/upload`, {
      method: "POST",
      body: formData,
    }).then((res) => {
      if (res.ok) {
        alert("Upload successful!");
      } else {
        alert("Upload failed!");
      }
    });
  };
```

3. Empfangen der Datei

```js
usersRouter.post( "/:id/upload", upload.single("profilePicture"),
  async (req, res, next) => {
    const id = req.params.id; // userId
    console.log(req.file);
    await User.findByIdAndUpdate(id, {
      profilePicture: req.file.filename, // von multer bearbeitet
    });
    return res.sendStatus(200);
  }
);
```

### Download - Workflow

1. Initialisierung aus dem Fronend

Context: Nachdem ein User sich eingeloggt hat, versuchen wir das Profilbild zu laden

```js
fetch(`http://localhost:3000/users/${user._id}/profile`)
```

2. Versenden des Bildes

Es wird nach einem User gesucht, welches ein Bild besitzt.

```js
usersRouter.get("/:id/profile", async (req, res) => {
  const id = req.params.id; // userId
  const user = await User.findById(id); // User wird gesucht
  const filename = user.profilePicture; // Bild wird entnommen
  if (!filename) {
    // wenn kein Bild vorhanden, haben nichts gefunden
    return res.sendStatus(404); 
  }

  // Konstruiere den Pfad zur Datei
  const path = "/uploads/" + filename;
  const absolutePath = process.cwd() + path;
  // Beispielpfad: /Users/sdwillbrand/Documents/GitHub/DigitalCareerInstitute/wd23_tz_d01/live-coding-examples/5_be/2_security/8_file_upload/backend/uploads/4cc2d653-6ac2-45ea-afda-8060f125d568.jpg

  // Alternativ lassen sich die drei Zeilen Code in einer zusammenfassen
  // return res.sendFile(process.cwd() + "/uploads/" + filename)

  // Schicke die Datei per Pfad
  // sendFile akzeptiert nur absolute Pfade, der gesamte Pfad, also vom root bis zur Bilddatei, den gesamten Pfad
  // process.cwd() gibt den absoluten Pfad bis zum Projektordner zurück
  return res.sendFile(absolutePath);
});
```

3. Referenzierung der Datei

Das Frontend erhält einen beliebigen Datenobjekt.
`URL.createObjectURL(blob)` erstellt eine Referenz zu dem Object.
Eigentlich steht URL für "Uniform Resource Locator". Ohne die URL kann `<img />` das Bild nicht finden.

```js
fetch(`http://localhost:3000/users/${user._id}/profile`)
  .then((res) => res.blob()) // extrahieren des blobs ist ein Promise
  .then((blob) => {
    const url = URL.createObjectURL(blob);
    // blob:http://localhost:5173/2bf74d84-de94-4871-9e56-cd88f08a8cfb
    setProfile(url); 
  });
```

4. Einbetten der Datei

Ein `img`-Tag kann kein Blob rendern, es benötigt die Quelle des Bildes um es darstellen zu können.

```jsx
<img src={profile} style={{ width: 200 }} />
```

#### Alternative Ansätze

- Static Hosting: Bilder in express statisch verschicken
- Base64: Bilder kann man direkt als Text in base64 Format verschicken
- Direct Download Links: Direkten Download mit dem `<a>`-Tag
