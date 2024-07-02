# Typescript

Typescript ist eine statisch typisierte derivation von JavaScript, die von microsoft entwickelt wurde um JavaScript an c# anzugleichen. Es erweitert JavaScript durch zusätzliche funktionen wie statische typenüberprüfung und moderne sprachfeatures, die in aktuellen JavaScript-versionen noch nicht verfügbar sind. Was bedeutet, das wir unseren code sicherer und weniger fehleranfällig gestalten können, was besonders in großen projekten von vorteil ist.

## Vorteile von Typescript in Node.js

- Statische typenüberprüfung: Durch die definition von typen können viele fehler schon zur entwicklungszeit erkannt werden.
- Intellisense und Code-Completion: Verbesserte entwicklererfahrung durch bessere vorschläge und codevervollständigungen in den meisten modernen IDE's.
- Moderne JavaScript funktionen: Zugriff auf aktuelle und kommende javascript features, die möglicherweise noch nicht von allen Javascript engines (node, bun, ...) unterstützt werden.
- Verbesserte lesbarkeit und wartbarkeit: Durch klar definierte typen und interfaces wird der code strukturiertet und leichter zu verstehen.

## installieren von typescript

da nodejs nicht in der lage ist, typescript zu verarbeiten, muss typescript erst vom computer in javascript umgewandelt (kompiliert) werden. Dabei werden datentypen, interfaces und andere inhalte wieder entfernt, so das am ende normales javascript herauskommt. Hier wird deutlich, das typescript nur für UNS entwickler sinnvoll ist, da viel von dem, was wir in typescript machen, tatsächlich niemals von nodejs ausgelesen wird.

- als erstes installieren wir typescript global mit `npm install -g typescript`, innerhalb von projekten lassen wir das "-g" weg.
- dann initialisieren wir ein neues nodejs projekt mit `npm init -y`, um eine package.json zu erstellen
- zu guter letzt erstellen wir eine typescript konfigurationsdatei, indem wir "tsc", den typescript compiler nutzen, der automatisch von typescript mit installiert wurde. die konfigurationsdatei erstellen wir mit dem befehl `tsc --init`.

in unserem projektordner sollten wir jetzt also die dateien `package.json`, unsere nodejs package datei, und `tsconfig.json`, typescripts konfigurationsdatei sehen.

## tsconfig.json

Schauen wir uns diese konfigurationsdatei einmal an. 

Wie bei vielen modulen typisch enthält die konfigurationsdatei ALLE möglichen einstellungen, und deren default werte, von denen aber die meisten auskommentiert sind - so ist es, falls nötig, sehr einfach, bestimmte optionen zu aktivieren, oder anzupassen, ohne eine dokumentation zu öffnen.

standardmäßig aktiviert sind nur folgende optionen:
- "target" - die version von javascript, in der der code geschrieben werden soll.
- "module" - die modulart, in der javascript kompiliert werden soll, commonJS bedeutet hier ganz normales javascript
- "esModuleInterop" - erhört die kompatiblität von javascript funktionalitäten
- "forceConsistentCasingInFileNames" - stellt sicher, das die dateinamen immer richtig sind und nicht ausversehn klein oder groß geschrieben werden und sich dadurch vermischen.
- "strict" - aktiviert strikte typenchecks, so das sie nicht vergessen werden können.
- "skipLibCheck" - überspringt die überprüfung nach zusätzlichen selbst erstellten datentypen.

wir lassen das meiste der konfigurationsdatei so wie es ist, und machen nur kleine anpassungen.

wir suchen nach outDir, was sich aktuell in zeile `58` befinden sollte - `outDir` definiert den ordner, in dem unser kompiliertes javascript landet. standartmäßig ist dies der ordner in dem sich auch die typescript dateien befinden, allerdings nutzen entwickler lieber ordner wie "./build" für "gebuildete projekte" oder "./dist" für "distribution" also fertiges produkt. Wir ändern die outDir auf `./dist`.

Außerdem wollen wir unsere eigenen code kommentare vom live coding noch automatisch entfernen lassen, und unkommentieren zu diesem zwecke zeile `59`, `removeComments`.

## erstellen von dateien

Im gegensatz zu javascript nutzen wir bei typescript nicht die endung .js, sondern die endung .ts. Wir erstellen also, um mit unserem projekt zu beginnen, einen src odner, und eine datei namens index.ts.

## kompilieren von dateien

mit dem typescript compiler, kurz "tsc" können wir unsere typescript dateien rekursiv kompilieren, indem wir ins terminal, innerhalb des nodejs projektes im root einfach `tsc` schreiben. 

dies erstellt dann in dem von uns angegebenen "outDir" ordner eine index.js datei, die aus der typescript datei kompiliert wurde.

wenn wir die datei öffnen, sehen wir das außer "use strict" dort nichts drin ist, da wir noch keinen inhalt in unsere typescript datei geschrieben haben.

um das ganze zu vereinfachen, gibt es bei tsc, wie auch bei node/nodemon oder dem html liveserver einen hmr-watcher, der dafür sorgt, das unser code während der entwicklung ständig geupdatet und neu kompiliert wird. Den watcher starten wir mit dem befehl `tsc --watch`.

## typescript code schreiben

jetzt können wir unsere typescript datei schreiben und das kompilierte javascript betrachten.
