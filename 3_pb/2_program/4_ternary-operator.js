console.clear();
console.log('='.repeat(5), 'TERNARY OPERATOR', '='.repeat(5));

// mit einem ternary operator können wir if/else abfragen abkürzen, und zum beispiel die gefragte ausgabe direkt in einer variable speichern, der ternary operator wird vor allem in react exessiv benutzt.

console.log('='.repeat(5), '1. IF/ELSE', '='.repeat(5));

// zur visualisierung schreiben wir ein typisches if statement.
const isTestBool = true;

if(isTestBool === true) {
    console.log('Boolean sagt ja');
} else {
    console.log('Boolean sagt nein');
}

// unser vorheriges if-statement als ternary operator
const ternaryCheck = isTestBool === true ? 'Boolean sagt ja' : 'Boolean sagt nein';
console.log(ternaryCheck);

/*
const ternaryCheck =                = unsere variable
isTestBool === true                 = unser vergleichs-boolean 
?                                   = if
'Boolean sagt ja'                   = der code block für if
:                                   = else
'Boolean sagt nein'                 = der code block für else
*/ 

/*
So sähe ein ternary operator in react aus:

<div style={`
    background: ${
        isLoggedIn ?
            "#00FF00"
        :
            "#FF0000"
    }
`}>
    Hallo Welt
</div>
*/


console.log('='.repeat(5), '1. IF/ELSE IF', '='.repeat(5));

const speed = 33;

const speedCheck = 
speed >= 120 ? 'Zu schnell!' // IF: speed größer als / gleich 120
:
speed <= 30 ? 'Zu langsam' // ELSE IF: speed kleiner / gleich 30
:
'Geschwindigkeit ok'; // ELSE.

console.log(speedCheck);

/* 
equivalent zu:
if(speed >= 129) {
     
} else if (speed <= 30) {

} else {

}
*/

//                 if{                            } else if{                        } else {                    }
// const speedCheck = speed >= 120 ? 'zu schnell' :         speed >= 80 ? 'schnell' :       'Geschwindigkeit ok';

// Die doppelpunkte sagen uns das ein else geöffnet wird, wenn wir in das "else" einen weiteren vergleich schreiben, erschaffen wir damit ein "else if"

// boolean vergleich ? ausgabe bei true : ausgabe bei false

// boolean vergleich ? ausgabe bei true : boolean vergleich ? ausgabe bei true : ausgabe bei false;

console.log('='.repeat(5), '3. IF ohne else', '='.repeat(5));

// Das && innerhalb eines vergleiches sagt aus, dass das folgende statement nur ausgeführt wird, wenn die abfrage zutrifft.
speedCheck2 = speed === 33 && 'Du fährst 33KM/h';

console.log(speedCheck2);

/*
Equivalent zu:
if(speed === 33) {
    console.log('Du fährst 33KM/h');
}
*/

/*
    beispiel in react:
    <div>
    {
        errorMessage === true && <p>FEHLERRRRRRR!!!</p>
    }
    </div>
*/
