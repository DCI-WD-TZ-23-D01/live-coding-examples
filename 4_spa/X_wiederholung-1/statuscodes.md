# HTTP Statuscodes

## 1xx: Informational

- **100** Continue: Der Client kann die Anfrage fortsetzen.
- **101** Switching Protocols: Der Server wechselt zu einem anderen Protokoll, das vom Client angefordert wurde.
- **102** Processing: Verarbeitet die Anfrage, aber die Antwort ist noch nicht verfügbar (WebDAV).
- **103** Early Hints: Frühe Hinweise, die dem Client helfen, Ressourcen vorzubereiten, bevor die endgültige Antwort gesendet wird.

## 2xx: Success

- **200** OK: Die Anfrage war erfolgreich.
- **201** Created: Die Anfrage war erfolgreich und eine neue Ressource wurde erstellt.
- **202** Accepted: Die Anfrage wurde akzeptiert, aber die Verarbeitung ist noch nicht abgeschlossen.
- **203** Non-Authoritative Information: Die Anfrage war erfolgreich, aber die zurückgegebenen Metadaten stammen von einer anderen Quelle.
- **204** No Content: Die Anfrage war erfolgreich, aber es gibt keine Rückgabedaten.
- **205** Reset Content: Der Client soll das Formular, das die Anfrage übermittelt hat, zurücksetzen.
- **206** Partial Content: Der Server liefert einen Teil des Inhalts, wie vom Client angefordert (häufig bei Datei-Downloads).
- **207** Multi-Status: Eine WebDAV-Erweiterung, die mehrere Statuscodes für mehrere Vorgänge zurückgibt.
- **208** Already Reported: Die Mitglieder einer WebDAV-Bindung wurden bereits in einer früheren Antwort aufgezählt.
- **226** IM Used: Der Server hat die GET-Anfrage ausgeführt und das Ergebnis wird verwendet.

## 3xx: Redirection

- **300** Multiple Choices: Die Anfrage hat mehrere mögliche Antworten.
- **301** Moved Permanently: Die angeforderte Ressource wurde dauerhaft verschoben.
- **302** Found: Die angeforderte Ressource wurde temporär verschoben.
- **303** See Other: Die Antwort auf die Anfrage befindet sich an einer anderen URI.
- **304** Not Modified: Die angeforderte Ressource wurde nicht geändert seit der letzten Anfrage.
- **305** Use Proxy: Die angeforderte Ressource muss über einen Proxy aufgerufen werden (wird nicht mehr verwendet).
- **306** Switch Proxy: Dieser Statuscode wird nicht mehr verwendet.
- **307** Temporary Redirect: Die angeforderte Ressource wurde temporär verschoben, aber die Methode sollte bei weiteren Anfragen verwendet werden.
- **308** Permanent Redirect: Die angeforderte Ressource wurde dauerhaft verschoben und zukünftige Anfragen sollten die neue URI verwenden.

## 4xx: Client Error

- **400** Bad Request: Die Anfrage ist fehlerhaft oder kann nicht verarbeitet werden.
- **401** Unauthorized: Authentifizierung ist erforderlich und fehlgeschlagen oder noch nicht bereitgestellt.
- **402** Payment Required: Für zukünftige Zwecke reserviert. Wird selten verwendet.
- **403** Forbidden: Der Server versteht die Anfrage, lehnt sie aber ab.
- **404** Not Found: Die angeforderte Ressource wurde nicht gefunden.
- **405** Method Not Allowed: Die verwendete HTTP-Methode ist für die angeforderte Ressource nicht erlaubt.
- **406** Not Acceptable: Die angeforderte Ressource kann nicht im gewünschten Format geliefert werden.
- **407** Proxy Authentication Required: Der Client muss sich beim Proxy authentifizieren.
- **408** Request Timeout: Der Server hat zu lange auf die Anfrage gewartet.
- **409** Conflict: Die Anfrage konnte aufgrund eines Konflikts mit dem aktuellen Status der Ressource nicht durchgeführt werden.
- **410** Gone: Die angeforderte Ressource ist nicht mehr verfügbar und wird auch in Zukunft nicht mehr verfügbar sein.
- **411** Length Required: Die Anfrage erfordert eine Content-Length-Angabe.
- **412** Precondition Failed: Eine der Vorbedingungen, die in den Headern der Anfrage angegeben sind, wurde nicht erfüllt.
- **413** Payload Too Large: Die Anfrage ist zu groß für den Server.
- **414** URI Too Long: Die URI ist zu lang für den Server.
- **415** Unsupported Media Type: Der Medientyp der Anfrage wird vom Server nicht unterstützt.
- **416** Range Not Satisfiable: Der angeforderte Bereich kann nicht bereitgestellt werden.
- **417** Expectation Failed: Der Server kann die Erwartung, die in der Anfrage angegeben ist, nicht erfüllen.
- **418** I'm a teapot: Ein Scherz-Statuscode, ursprünglich im Zusammenhang mit dem "Hyper Text Coffee Pot Control Protocol" (HTCPCP/1.0).
- **421** Misdirected Request: Die Anfrage wurde an einen Server gesendet, der nicht in der Lage ist, eine Antwort zu geben.
- **422** Unprocessable Entity: Die Anfrage war gut formatiert, aber konnte aufgrund von semantischen Fehlern nicht verarbeitet werden (WebDAV).
- **423** Locked: Die angeforderte Ressource ist gesperrt (WebDAV).
- **424** Failed Dependency: Die Anfrage scheiterte, weil sie von einer anderen Anfrage abhängig war, die ebenfalls scheiterte (WebDAV).
- **425** Too Early: Der Server möchte die Verarbeitung der Anfrage vermeiden, weil es zu früh ist.
- **426** Upgrade Required: Der Client sollte auf ein anderes Protokoll upgraden.
- **428** Precondition Required: Der Server verlangt, dass die Anfrage bestimmte Bedingungen erfüllt.
- **429** Too Many Requests: Der Client hat zu viele Anfragen in einem bestimmten Zeitraum gesendet.
- **431** Request Header Fields Too Large: Die Header der Anfrage sind zu groß.
- **451** Unavailable For Legal Reasons: Die angeforderte Ressource ist aus rechtlichen Gründen nicht verfügbar.

## 5xx: Server Error

- **500** Internal Server Error: Der Server hat einen Fehler festgestellt und kann die Anfrage nicht ausführen.
- **501** Not Implemented: Der Server unterstützt die Funktionalität, die zur Ausführung der Anfrage erforderlich ist, nicht.
- **502** Bad Gateway: Der Server erhielt eine ungültige Antwort vom nachgelagerten Server.
- **503** Service Unavailable: Der Server ist momentan nicht verfügbar (überlastet oder in Wartung).
- **504** Gateway Timeout: Der Server hat nicht rechtzeitig eine Antwort vom nachgelagerten Server erhalten.
- **505** HTTP Version Not Supported: Der Server unterstützt die HTTP-Version, die in der Anfrage verwendet wurde, nicht.
- **506** Variant Also Negotiates: Der Server hat einen internen Konfigurationsfehler entdeckt.
- **507** Insufficient Storage: Der Server kann die Anfrage nicht verarbeiten, weil nicht genügend Speicher verfügbar ist (WebDAV).
- **508** Loop Detected: Der Server hat eine Endlosschleife entdeckt (WebDAV).
- **510** Not Extended: Weitere Erweiterungen für die Anfrage sind erforderlich.
- **511** Network Authentication Required: Der Client muss sich authentifizieren, um Netzwerkzugriff zu erhalten.
