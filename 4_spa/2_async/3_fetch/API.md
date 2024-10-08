Was sind API's?

Bevor wir uns wieder mit fetch beschäftigen, reden wir erst einmal über API's, da die hauptaufgabe von fetch ist, daten aus apis zu lesen.

Api steht für "Application programming interface", in deutsch auch als "Anwendungsschnittstelle" oder kurz "Schnittstelle" bekannt, stellt die verbindung von daten zwischen verschiedenen programmen da. In der web entwicklung werden APIS benutzt um daten von externen oder internen quellen zu bekommen.

Meist werden diese daten in JSON an den endpunkt, also den pfad der api zurückgegeben, das wir mit JavaScript und anderen programmiersprachen auslesen können, woher die daten kommen, ist uns überlassen welche sprache wir nutzen.

Es gibt verschiedene Arten von API's:
- Offene API's: auch bekannt als public API, sind API schnittstellen dessen daten jedem ohne einschränkung zur verfügung stehen
- Intere API's: auch bekannt als private-apis, private-apis sind schnittstellen, die intern benutzt werden, und meist innerhalb eines unternehmens verwendet werden, um daten zwischen teams und produkten zu teilen.
- Partner API's: können nur mit speziellen rechten oder lizenzen benutzt werden und sind auch nicht öffentlich verfügbar
- Gemischte API's: Diese art schnittstelle vermischt verschiedene daten und service API's und führt diese zusammen.

API's kann man mit verschiedenenen aufrufmethoden verwenden, die wir schon in formularen, in html kennengelernt haben:
- POST: fügt einem server neue daten hinzu.
- GET: Fragt existieren daten von einem server ab.
- PUT: ändert existierende informationen ab.
- DELETE: Löscht vorhandene informationen.

Diese methodenreihenfolge nennt sich "CRUD", dies steht für:
- "C" für "create", die "POST" methode - um neue daten zu erstellen
- "R" für "read", die "GET" methode - um daten zu lesen
- "U" für "update", die "PUT" methode - um daten zu verändern
- "D" für "delete", die "DELETE" methode - um daten zu löschen

Oft sind api routen so geordnet das sie eine liste aller inhalte ausgeben, und eine weitere ebene haben um einzelne inhalte auszugeben:
Eine liste mit produkten:   GET https://api.predic8.de/shop/products/
Ein produkt:                GET https://api.predic8.de/shop/products/62

moderne apis und microservice systeme haben dadurch immer 5 grundfunktionen pro datenobjektgruppe (zb, "user" oder "kategorie"):
- "erstelle einen neuen datenbankeintrag"
- "lade einen spezifischen datenbankeintrag"
- "lade alle datenbankeinträge"
- "verändere einen spezifischen datenbankeintrag"
- "lösche einen spezifischen datenbankeintrag"

Oft muss man apis mit hilfe von schlüsseln oder anderen login-daten validieren, um sie benutzen zu dürfen, wir schauen uns ein paar beispiele ohne authentifizieren an: https://mixedanalytics.com/blog/list-actually-free-open-no-auth-needed-apis/

Hier noch eine liste mit einigen API's, gesichert wie auch ungesichert: https://github.com/public-apis/public-apis
