# JSDoc

https://jsdoc.app

## Was ist JSDoc?

JSDoc ist ein Dokumentationsgenerator für JavaScript. Mit JSDoc können wir kommentare in code verwenden, um die funktionsweise und struktur des codes zu beschreiben. DIese kommentare sorgen nicht nur für eine angenehme struktur innerhalb unseres codes, sondern können anschließend auch von JSDoc analysiert werden, um eine HTML-Dokumentation zu erstellen, die wir verwenden können, um anderen entwicklern zu helfen unseren code besser zu verstehen und nutzen zu können.

## Funktionen von JSDoc

- **Automatische Dokumentationserstellung**: JSDoc generiert automatisch HTML-Dokumentationen aus speziell formatierten kommentaren im JavaScript-code.
- **Unterstützung von Typen**: man kann typen für parameter und rückgabewerte angeben. was besonders hilfreich ist, um den code verständlicher zu machen.
- **Klassen und Methodenbeschreibungen**: Detaillierte beschreibung von klassen, methoden und deren parametern und rückgabewerten
- **Tag-System**: Eine vielzahl von tags wie @params, @returns, @example und @class, um unterschiedliche aspekte des codes zu dokumentieren.

## JSDoc installieren

Wir haben uns zwar schon ein paar mal mit JSDoc beschäftigt, mussten es zum lesen der tags aber nicht installieren. deshalb folgt hier noch einmal eine anleitung wie man JSDoc per NPM installiert.

Um JSDoc global zu installieren, schreiben wir den befehl `npm install -g jsdoc`, Das -g steht hier, wie immer für "global", was bedeutet, das wir JSDoc direkt auf unserem system installieren. Wollen wir JSDoc nur innerhalb unseres projektes nutzen, lassen wir das "-g" weg.

## JSDoc benutzen

Zum testen und benutzen von JSDoc benötigen wir dokumentierten JavaScript code. Zu diesem zwecke erstellen wir als nächstes eine JS datei, mit JSDoc kompatiblen kommentar tags.

wir erstellen einen ./src ordner, und dort drin eine index.js datei.

Nachdem wir code kommentiert haben, können wir jetzt mit dem befehl `jsdoc [ordner] -r` die dokumentation erstellen. -r steht hier für rekursiv, was bedeutet, das alle inhalte des zielordners überprüft werden.

nach dem ausführen sehen wir, das ein ordner namens "./out/" erstellt wurde, dieser beinhaltet einige HTML dateien, und eine index.html. wenn wir diese öffnen, sehen  wir unsere dokumentation

## Anpassen von JSDoc

#### Dokumentationslocation

wenn uns nicht gefällt, das die dokumentation im ./out ordner erstellt wird, können wir diesen ändern, dazu geben wir im cli den zielordner mit "-d" für "destination" an.

`jsdoc ./src/ -r -d ./docs`

### verwenden von templates

um das aussehen der JSDoc dokumentationen anzupassen, gibt es vorlagen. Diese kann man sich unter dem folgenden link anschauen und herunterladen:
https://cancerberosgx.github.io/jsdoc-templates-demo/demo/

angewandt werden können sie nach der installation durch die angabe von "-t" für "template" und den pfad zum template.

`jsdoc ./src/ -t /pfad/zum/template`
