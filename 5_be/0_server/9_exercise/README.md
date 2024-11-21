# Exercises

## Verwendung von Umgebungsvariablen

1. `--env-file` Flag von NodeJS
    `node --env-file=.env server.js`
2. `dotenv`

    ```js
    import dotenv from "dotenv"
    dotenv.config()
    ```

3. `PORT=3000 node server.js`
