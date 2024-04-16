/**
 * Strings
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
 */

// Strings escapen
    // mit \n können wir einen zeilenumbruch in unseren string einfügen (newline):
    console.log('text1\ntext2');

    // mit \t können wir einen tabulator einfügen (tab)
    console.log('Dies i\tst ein getabter\tstring');

    // mit \" oder \' können wir innerhalb von strings unsere anführungszeichen benutzen.
    console.log("Dies ist ein Text mit doppelten \" im string");

    console.log('Dies ist ein Text mit einfachen \' im string');

console.log("===============================================================================");

// String Funktionen/Methoden und Properties

    // ein property ist ein wert, der von den daten, die davon angesprochen wurden, zurückgegeben wird.

    console.log(".length;")
    // .length; diese property gibt uns die anzahl der zeichen im string zurück.
    const exampleString = 'Dies ist ein string';
    const lengthExample = exampleString.length;

    console.log('Anzahl der Zeichen im string:', lengthExample);

    /*
        00 = D
        01 = i
        02 = e
        03 = s
        04 = 
        05 = i
        06 = s
        07 = t
        08 = 
        09 = e
        10 = i
        11 = n
        12 = 
        13 = S
        14 = t
        15 = r
        16 = i
        17 = n
        18 = g
    */

    console.log('.charAt();');
    // .charAt(); zeigt uns das zeichen innerhalb des strings, das sich an der gesuchten position befindet. gezählt von 0.
    const charAtExample1 = exampleString.charAt(11);
    console.log(charAtExample1);

    // eine andere methode um ein symbol an position X zu bekommen:
    const charAtExample2 = exampleString[2];
    console.log(charAtExample2);

    console.log('.toLowerCase();');
    // mit der methode .toLowerCase(); können wir einen kompletten string in kleinbuchstaben umwandeln

    const lowerCaseExample = 'Dies ist ein STRING'.toLowerCase();
    console.log('Klein geschrieben:', lowerCaseExample);

    console.log('.toUpperCase();');
    // mit der methode .toUpperCase(); können wir die symbole innerhalb einen strings in großbuchstaben umwandeln.
    const upperCaseExample = 'Dies ist ein string'.toUpperCase();
    console.log('Groß geschrieben:', upperCaseExample);

    console.log('.includes()');
    // mit der methode .includes(); können wir prüfen, ob ein zeichen, oder eine zeichenkette innerhalb eines strings existieren.
    const includesExample = 'Dies ist ein String'.toLowerCase().includes('string');
    
    /**
     * Das obere "method-chaining" müssen wir uns so vorstellen:
     * const stringExample = 'Dies ist ein String'; // Dies ist ein String
     * const lowerCaseExample = stringExample.toLowerCase(); // dies ist ein string
     * const includesExample = lowerCaseExample.includes('string'); // true (weil das wort string in kleingeschrieben, nach der veränderung von .toLowerCase(); im string vorhanden ist.)
     */

    console.log('Beinhaltet "string":', includesExample);

    console.log('.replace()');
    // mit der methode .replace(); können wir zeichen oder zeichenketten innerhalb eines strings ersetzen.
    // der erste wert der übergeben wird, ist der gesuchte wert, der zweite wert ist der ersatz dafür.
    const replaceExample = 'Dies ist ein String'.replace('String', 'Käsekuchen');
    console.log('Ersetzer String:', replaceExample);

    // mit .replace(); ersetzen wir immer das erste vorkommnis eines gesuchten strings, wir können aber auch dafür sorgen, das alle vorkommnisse innerhlab des strings ersetzt werden. (Regex)
    const replaceExampleGlobal = 'Dies ist ein String mit einem String in einem String für einen String'.replace(/String/g, 'Käsekuchen');
    console.log(replaceExampleGlobal);

    console.log('.trim();');
    // mit .trim(); können wir sogenannten "whitespace", also leerzeichen aus einem string am anfang und am ende löschen.
    const trimExample = '       Test Bla     ';
    console.log('|' + trimExample + '|');
    console.log('|' + trimExample.trim() + '|');

    console.log('.substring();');
    // mit der methode .substring(); können wir teile des strings ausschneiden, die erste stelle sagt von WO und zweite, optionale stelle sagt, bis wohin.
    const substringExample = 'Ich bin ein Text';

    console.log('Von der 0-5 stelle:', substringExample.substring(0, 5));
    console.log('Ab der 5. stell abschneiden:', substringExample.substring(5));

    console.log(substringExample.substring(0, 8) + 'k' + substringExample.substring(8));
