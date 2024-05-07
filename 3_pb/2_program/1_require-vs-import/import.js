// eine weitere möglichkeit, module zu importieren ist 'import', das seit ES6 (Ecma-script 6, 2015) teil von JavaScript ist. Import wird gerne in produktion verwendet, da es eine sauberere schreibweise als require vorgibt. Da imports, im gegensatz zu require IMMER am anfang einer javascript datei angegeben werden müssen, sorgt es dadurch auch für eine sauberere schreibweise des codes. Typescript, React und andere javascript technologien, setzen den gebrauch von import vorraus.

/* NODEJS PROJEKT ERSTELLEN */

// um import nutzen zu können, müssen wir eine package.json erstellen, da wir im zusammenhang mit modules, mit erweiterten nodejs projekten arbeiten.

// wir geben also, falls es keine package.json in unserem projekt gibt, im root ordner unseres projektes 'npm init -y' ins terminal ein, um eine package.json datei zu generieren.

// jetzt müssen wir in unserer package.json die zeile "type": "module", einfügen (das komma am ende nicht vergessen), das dafür sorgt, das nodejs weiß, das wir module verwenden wollen. erst dann können wir import nutzen und unsere datei öffnen.

/* IMPORT VON MODULEN */

// die schreibweise von import ist etwas anders als bei require, und gleicht der, die wir shon bei sass gesehen haben: wir schreiben import, dann den variablennamen, from (um zu sagen woher das modul kommt), und den namen des moduls.

// als beispiel importieren wir wieder das von nodejs bereitgestellte modul 'os':
import { platform, arch, cpus, freemem } from 'os';
// direkter import der ganzen bibliothek: import os from 'os';

// hier können wir jetzt auf die selbe art und weise wie bei require unser modul benutzen:

console.log('Plattform', platform()); // wenn wir die ganze bibliothek importieren würden, wäre dies os.platform();
console.log('CPU Architektur', arch());
console.log('CPU', cpus());
console.log('Freier Speicher', freemem());

// import ermöglicht uns auch, die einzelnen methoden innerhalb eines moduls direkt zu importieren, dafür nutzen wir geschwungende klammern und setzen die funktionsnamen ein. Dies sähe dann so aus:

// import { platform } from 'os';

// jetzt würde man die funktion os.platform(); nur noch als platform(); aufrufen.

// jetzt müssen wir nur noch das 'os.' aus unserem code löschen, und haben einen saubereren code, mit direkten inports und aufrufen, und sparen auch performance, da wir nicht das komplette modul importieren, sondern nur die methoden, die wir benötigen.
