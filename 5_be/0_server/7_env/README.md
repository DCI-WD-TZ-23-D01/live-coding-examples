# Umgebungsvariablen

...sind Variablen, womit eine Applikation von aussen konfiguriert werden kann.

- Meistens werden Umgebungsvariablen auch in einer `.env` definiert.
- Diese Datei wird und soll geschützt werden und wird meistens in der `.gitignore` ignoriert.
- In der `.env` werden sensible Informationen geschrieben
  - Datenbankzugriffe
  - API Keys
  - JWT Token
  - etc.
- Vereinfacht die Entwicklung einer Applikation, da wir eine zentrale Quelle der Konfiguration haben

## Wie definiere ich Variablen in der `.env` ?

```.env
PORT=3000
```

## Wie können wir die `.env` verwenden?

1. Befehl: `node --env-file=.env <file>.js`

    ```js
    import express from "express";

    const app = express();

    app.get("*", (req, res) => res.send("Servus"));

    const PORT = process.env.PORT || 8080;

    app.listen(PORT, () =>
    console.log(`Server läuft auf http://localhost:${PORT}`)
    );
    ```

2. Package: `dotenv`

    ```js
    import express from "express";
    import dotenv from "dotenv";
    dotenv.config(); // Hier sucht dotenv nach der .env

    const app = express();

    app.get("*", (req, res) => res.send("Servus"));

    const PORT = process.env.PORT || 8080;

    app.listen(PORT, () =>
    console.log(`Server läuft auf http://localhost:${PORT}`)
    );

    ```

Danach ist die Variable in `process.env` verfügbar!
