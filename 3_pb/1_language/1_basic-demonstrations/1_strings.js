// Quotes

// Single quotes: '
// Ein typischer string mit single quotes (hochkomma)
'This is a string';

// Double quotes: "
// Ein typischer string mit double quotes (gänsefüßchen)
"This is a string";

// Eine single quote innerhalb eines double quote strings:
"It's a string";

// Ein single quote innerhalb eines single quotes:
'It\'s a string';
// um ein hochkomma oder gänsefüßchen in einen string zu schreiben, der eben diese symbole als vor und nachstelle hat, müssen wir das symbol mit einem rückwärtsschrägstrich ( \ = altgr + ß) "escapen", dem code also mitteilen, das es sich um ein symbol handelt.

// Ein double quote innerhalb eines single quotes:
'This is an "awesome" string';

// ein double quote innerhalb eines double qoutes string:
"This is an \"awesome\" string";

// Concaternation
    // mehre strings zusammenfügen, um einen satz zu erstellen.
    console.log('Hallo' + ' ' + 'Welt');

    console.log('Wie geht es dir,' + ' ' + 'Dennis?' + ' ' + 'Hast du' + ' ' + 'gut geschlafen?');

    console.log('testzahl:', 5);
