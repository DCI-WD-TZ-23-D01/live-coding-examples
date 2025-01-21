# Cookies

Cookies im Browser sind kleine Datenstücke die in Headern gespeichert.

HTTP:
Version
URL
Methode
Header -> Cookie
Body

Typischerweise wird ein Cookie von Server geschickt und der Browser speichert diesen.

=> Cookie Header, ein spezieller Header, damit der Browser einen Cookie speichern soll

**Cookie Header**:

```bash
Set-Cookie: sessionId=123456; Expires=Wed, 31 Oct 2025; Secure; HttpOnly
```

Man kann beliebige Felder in einem Cookie definieren:

- z.B. `sessionId`

Cookie Felder:

- `Expires`: Wann der Cookie abläuft
- `Secure`: Cookie wird nur mit HTTPS Anfragen verschickt
- `HttpOnly`: Dieses Attribut macht den Cookie sehr sicher.
  - Wenn das Feld vorhanden ist, dann kann der Cookie per JS nicht mehr erreichbar

**Arbeiten mit Cookies**:

- `cookieParser` für `express`

## Browser

- Zugriff auf Cookies mit: `document.cookie`
  - Doch NUR Cookies die kein `httpOnly` Feld gesetzt haben
- Ansonsten speichert der Browser die Cookies

## Sicherheit

- Cookies in Verbindung mit dem `httpOnly` Flag sind ein sicherer Ort um sensible Daten zu speichern
  - Doch hier muss stets aufgepasst werden

## Anwendungen

- Session/Authentifizierung
- Tracken
- Einstellungen in einer Webseite zu speichern
  - Farbeinstellung
  - Zeitzone
  - Layout

## Tracking-Cookies

Cookies werden auch genutzt, um dein Verhalten zu verfolgen.
Zum Beispiel: Facebook setzt einen Cookie mit einer sessionId
Wenn du andere Webseiten besuchst, dann können diese "Tracker" in ihrem Webseiten speichern, die Facebook ein Signal schickt, mit der Session im Cookie gespeichert.

1. Facebook ----speichert sessionId -----> Browser
2. ZooPlus  ----aktiviert Tracker -------> Facebook Tracker
3. Facebook Tracker -----> sucht nach einen session Cookie -----> Browser
4. Facebook Tracker -----> versendet Information über das Verhalten -----> Facebook
