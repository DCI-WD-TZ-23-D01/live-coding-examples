console.clear();

/**
 * IF/ELSE statement
 * 
 * Mit einem if/else statement können wir bestimmen, das etwas passiert, wenn ein bestimmter fall eintritt, oder etwas anderes passiert, wenn dieser fall nicht eintritt.
 */

console.log('='.repeat(5), "IF/ELSE", '='.repeat(5));

const today = 'Dienstag';

// wenn wir an unseren if block ein else anfügen, und einen weiteren code-block öffnen, können wir dort angeben, was passieren soll, wenn der vergleich aus dem IF statement nicht zutrifft.

// if(today === 'Montag' || today === 'Dienstag' || today === "Mittwoch") {
//     console.log('ICH BRAUCHE MEHR KAFFEE!');
// } else {
//     console.log('PARTY!!!!!!!!');
// }

// Kürzer, da weniger verglichen werden muss, wäre es, den vergleich umzudrehen:
if(today === 'Samstag' || today === 'Sonntag') {
    console.log('PARTY!!!!!');
} else {
    console.log('Ich brauche mehr kaffee!');
}

// wenn die frage aus dem if statement nicht zutrifft, wird der code block aus dem if statment ignoriert, und dafür der code block nach dem else ausgeführt. Das else wird also nur ausgeführt, wenn das if statement "false" zurückgibt.

console.log('='.repeat(5), "IF/ELSE IF", '='.repeat(5));

/*
    mit einem if/else if können wir bestimmen, das sowohl bei einem zutreffenden vergliech, wie auch bei weiteren vergleichen etwas ausgeführt wird.
*/

if(today === "Montag")
{
    console.log('ICH BRAUCHE MEHR KAFFEE!');
}
else if(today === "Dienstag")
{
    console.log('mein kaffee ist alle...');
}
else if(today === "Mittwoch")
{
    console.log('Heute bringt mir Christian neuen kaffee');
} 
else if(today === "Donnerstag" || today === "Freitag")
{
    console.log('Christian hat den kaffee ohne mich ausgetrunken');
} 
else
{
    console.log('Wir haben wochendende, die schüler sollten sich entspannen.');
}

// wenn wir für einen weiteren vergleich auch werte definieren wollen, machen wir dies, indem wir ein else if an das if statement anfügen, dort dann einen weiteren vergleich einsetzen und einen weiteren code block öffnen.
