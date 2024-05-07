console.clear();

// für nodejs gibt abgesehen von den nodejs internen modulen, mehrere millionen,von anderen programmierern erstelle module, die wir frei nutzen können, um die funktionalität von javascript zu erweitern. Eines dieser module ist "readline-sync".

// readline-sync ist ein nodejs modul, das es ermöglicht, benutzereingaben über die befehlszeile synchron, also eine nach dem anderen, zu lesen. Es bietet eine einfache möglichkeit, mit benutzern zu interagieren, indem es wartet, bis der benutzer eine eingabe macht, und dann diese eingabe auswertet.

// um readline-sync nutzen zu können, müssen wir es in unser projekt installieren. Wir generieren also wieder eine package.json mit dem befehl 'npm init -y'. und fügen unserer package.json die zeile "type": "module", ein (komma am ende und speichern nicht vergessen).

// jetzt installieren wir readline-sync mit dem befehl 'npm install readline-sync'. Danach können wir sehen, das der node_modules ordner erstellt wurde, in dem sich die installierten module und abhängigkeiten (dependencies) befinden. und das installierte modul in der package.json hinzugefügt wurde.

// wir importieren readline-sync:
import { question } from 'readline-sync';
// ohne direkten import: import readlineSync from 'readline-sync';

// jetzt, da wir readline-sync importiert haben, können wir es in vollem umfang nutzen.

// readline-sync nutzt questions (fragen), um auf den antwort basierend eine variable mit einem wert zu füllen, auf den wir danach innerhalb unseres codes zugreifen können. Wenn wir also zum beispiel die variable "alter" auf die frage "wie alt bist du?" setzen, wird, nach beantwortung der frage, die variable das alter des gefragten benutzers als string beinhalten.

// das oben genannte beispiel als code:
const alter = question('wie alt bist du? '); 
// ohne direkten import: const alter = readlineSync.question('Wie alt bist du ?');

// es macht sinn, ein leerzeichen oder eine neue zeile ans ende der frage zu setzen, da sonst die texteingabe direkt nach der frage kommt.

console.log(`Du bist ${alter} jahre alt!`);

// wie wir sehen, wird unser input direkt in die variable übertragen, was uns ermöglicht, mit den eingegebenen daten zu arbeiten.

// ein weiteres beispiel:
const name = question('Wie ist dein name? ');

console.log(`Hallo ${name}, schön das du da bist!`);

// wie wir sehen, wird unsere zweite frage erst gestellt, wenn die erste frage beantwortet wurde - das console.log(); hätte auch woanders stehen können, wir müssen also nicht immer eine frage stellen, dann eine antwort ausgeben, dann wieder eine frage stellen und wieder antworten - sondern können beliebig viele fragen stellen, bis wir mit den jeweiligen daten arbeiten.

const zahl1 = question('Was ist die erste zahl?');
const zahl2 = question('Was ist die zweite zahl?');
const zahl3 = question('Was ist die dritte zahl?');

const ergebnis = parseInt(zahl1) + parseInt(zahl2) * parseInt(zahl3);

console.log('Ich habe die erste zahl mit der zweiten addiert, und mal der dritten zahl genommen', ergebnis);

// um den code in wenig zu refactoren, erinnern wir uns an das vorherige thema, wo es darum ging, module zu importieren. Wir sehen da wir sehr oft 'readlineSync.question();' schreiben, und wissen das .question(); eine methode von 'readlineSync' ist. Außerdem ist .question(); das einzige, was wir aus readlineSync nutzen. wir ändern also unseren import auf:
// import { question } from 'readline-sync' und löschen 'readlineSync.' aus unseren aufrufen.
