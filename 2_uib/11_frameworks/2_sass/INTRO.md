# Sass

Sass, kurz für "Syntactically Awesome Stylesheets", wurde von Hampton Catlin im Jahr 2006 entwickelt. Ursprünglich als modul für die programmiersprache Ruby geschrieben, bot Sass eine Möglichkeit, CSS mit einer vereinfachten Syntax und leistungsstarken Funktionen zu erweitern. Später wurde Sass von Natalie Weizenbaum weiterentwickelt und erhielt 2010 eine große Aktualisierung in Form von "Sass 3", das die SCSS-Syntax einführte, die der traditionellen CSS-Syntax ähnlicher ist und leichter von Entwicklern zu erlernen ist.

Die Grundidee hinter Sass ist es, die Effizienz und Lesbarkeit von CSS zu verbessern, indem es Funktionen wie Variablen, Verschachtelung von Selektoren, Mixins und mehr bietet.

Viele funktionen von sass wurden seit den späten 2010er jahren in die offizielle CSS 3 spezifikation eingebunden, allerdings bietet sass allgemein eine höhere benutzerfreundlichkeit bei der erstellung und benutzung dieser features, weswegen es vor allem im bereich der web-entwicklung gerne genutzt wird.

Sass beinhaltet zwei verschiedene syntax-dialekte, wir befassen uns mit "SCSS", da dieser mehr an css erinnert, während der andere "SASS" sich durch das weglassen von klammern und semikolons doch sehr stark von der von uns gelernten syntax unterscheidet.

mehr informationen zu sass finden wir auf https://sass-lang.com

## Einige features von SASS im vergleich:

### Variablen

Durch die Definition von Variablen können wir wiederkehrende Werte wie Farben oder Schriftarten zentral speichern und diese dann im gesamten Stylesheet verwenden. Dies erleichtert die Wartung unseres Codes und verbessert die Lesbarkeit.

```css
:root {
    --main-color: #ff0000;
}

.element {
    color: var(--main-color);
}
```

```scss
$main-color: #ff0000;

.element {
    color: $main-color;
}
```

### Verschachtelung

Eine weitere nützliche Funktion ist die Verschachtelung von CSS-Selektoren. Durch die Verschachtelung können wir die Hierarchie der HTML-Struktur in unserem CSS-Code klarer darstellen, was zu einer verbesserten Organisierung und Lesbarkeit führt.

```css
.container {
    width: 100%;
}
.container h1 {
    font-size: 24px;
}
.container.content p {
    font-size: 1rem;
}
```

```scss
.container {
    width: 100%;

    h1 {
        font-size: 24px;
    }

    &.content {
        p {
            font-size: 16px;
        }
    }
}
```

### Mixins

Mixins sind wiederkehrende Gruppen von CSS-Deklarationen die wir einmalig definieren und sie dann an verschiedenen Stellen im Code wiederverwenden können. Dadurch können wir die Wiederverwendbarkeit erhöhen und redundante Codeabschnitte vermeiden.

```css
.box-1, .box-2 {
    width: 100px;
    height: 100px;
    border-radius: 1rem;
}

.box-1 {
    background: tomato;
}
.box-2 {
    background: orange;
}
```

```scss
@mixin Box($color) {
    width: 100px;
    height: 100px;
    background-color: $color;
    border-radius: 1rem;
}

.box-1 {
    @include Box(tomato);
    // width: 100px;
    // height: 100px;
    // background-color: tomato;
    // border-radius: 1rem;
}

.box-2 {
    @include Box(orange);
    // width: 100px;
    // height: 100px;
    // background-color: orange;
    // border-radius: 1rem;
}
```

## SASS einrichten

Um sass nutzen zu können, muss sass/scss, vor der benutzung im browser in css umgewandelt werden, da es vom browser selbst nicht ausgewertet werden kann. Um dies zu erreichen nutzen wir ein konvertierungsprogramm - dieses kann sowohl auf befehl scss dateien in css dateien umwandeln, wie auch im sogenannten "watch-mode" die datei bei jeder änderung umwandeln, was uns die entwicklung erleichtert.

um sass zu installieren, geben wir ins terminal `npm install -g sass` oder `sudo npm install -g sass` ein.

mit NPM, einem paketmanager für NodeJS module, werden wir uns in zukunft noch oft beschäftigen. An dieser stelle nutzen wir es, um sass mit dem "-g" befehl "global" - sozusagen von überall erreichbar - auf dem system zu installieren.

wenn das geklappt hat, können wir sass testen.

## Sass testen

um sass zu testen benötigen wir nicht unbedingt eine sichtbare html datei, da wir erst einmal nur die umwandlung von scss in css anschauen wollen.

Dazu erstellen wir einen ordner und fügen eine scss datei ein. Danach gehen wir mit dem terminal in den ordner und schreiben:

`sass style.scss style.css --watch`

womit wir sass starten, sagen welche datei wir umwandeln wollen, wie die umgewandelte datei heißen soll, und dass das programm im watch-mode starten soll.

wir sehen das automatisch eine style.css datei, und eine style.css.map datei erstellt wurde. die style.css ist unsere umgewandelte css datei, die style.css.map ist eine art blaupause für das system um die datei zu verstehen, wir können diese datei ignorieren.

schreiben wir jetzt ein wenig code in die sass datei, sehen wir sofort die änderung in css.

hierbei ist wichtig zu beachten, das die css datei bei jeder änderung neu geschrieben wird, wir nutzen also nur unsere scss datei, und schrieben niemals selber code in die css datei. tatsächlich ist mir schon passiert das vscode komplett einfriert wenn man in die css datei während des speicherns der scss datei ändert.

## SASS nutzen

für unser projekt erstellen wir einen order, und fügen eine datei namens index.html und eine datei namens style.scss hinzu. Wir wechseln mit dem terminal in den ordner und starten das konvertierungsprogramm.
