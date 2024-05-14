console.clear();

function divider(input)
{
    const spacer = "=".repeat(5);
    console.log("\n" + spacer, input, spacer, "\n");
}

divider('Function Parameters');

// um daten und werte an eine funktion zu übergeben, können wir diese als parameter festlegen, und dann mit dem funktionsaufruf als argumente, die werte übergeben, die wir dort einsetzen wollen. Dabei entstehen lokale variablen, die den übergebenen wert beinhalten.

                         // parameter
const showMessage = function (text) {

    // wir nutzen den übergebenen parameter "text", und bekommen den als argument übergebenene wert:
    console.log(text.toUpperCase());
}

// beim funktionsaufruf fügen wir den gewollten wert als argument ein:
         // argument
showMessage('Ich bin eine nachricht');
showMessage('Ich bin noch eine nachricht');
showMessage('Ich bin eine nachricht aus dem weltall');

// in produktion würden wir eher variablen haben, die wir dann an die funktion übergeben:
const messageText = 'Dies ist eine nachricht';

showMessage(messageText);
showMessage(messageText + " Hallo Welt");

divider('Mehrere werte');

// wir können auch beliebig viele werte an eine funktion übergeben, wenn wir diese mit komma trennen:

                        //        user, message
const chatMessage = function (userInput, messageInput) {

    // auf die übergebenen werte können wir zugreifen und sie auch ändern:
    userInput = "=====> " + userInput;

    console.log(userInput, ':', messageInput);
}

let user = 'Max';
let message = 'Hallo, wie geht es dir?';

// gibt an: benutzer und nachricht:
chatMessage(user, message);

user = 'Danny';
message = 'Ach, mir geht es prima! Ich esse grad :D';

chatMessage(user, message);

chatMessage('Chrissi', 'Ich bin gerade fertig mit essen!');

user = 'Zedan';
message = 'Was gab es denn?';

chatMessage(user, message);

divider('Defaultwerte');

// mit sogenannten default values können wir werte festlegen, die für parameter genutzt werden, bei denen wir kein argument übergeben. Das funktioniert, bei mehreren parametern nur mit dem letzten.

const chatMessageDefault = function(userInput, messageInput = "Der user hat nichts geschrieben") {
    
    // theoretisch steht hier: messageInput = messageInput || "Der user hat nichts geschrieben";
    console.log(userInput, ':', messageInput);
}

user = 'Wael';

chatMessageDefault(user);
chatMessageDefault(user, "Ich bin da!");

message = 'Hallo, JavaScript ist cool!';

chatMessageDefault(user, message);

divider('rekursive funktion');

// eine funktion kann sich selber, auch innerhlab des eigenen code blockes aufrufen:
const countDown = function(number) {
    
    console.log(number);

    if(number === 0) {
        // die funktion verlassen und gegebenenfalles etwas ausgeben (hier nichts)
        return;
    }

    // wir rufen die funktion innerhalb von sich selber auf, und dekrementieren die nummer:
    countDown(number - 1);
}

countDown(15);

divider('reihenfolge von argumenten und parametern');

/// in der deklaration habe ich 4 parameter:
const testFunction = function (parameter1, parameter2, parameter3, parameter4 = 'default') {
    console.log(1, parameter1);
    console.log(2, parameter2);
    console.log(3, parameter3);
    console.log(4, parameter4);
}

// wenn wir ein argument aus dem aufruf entfernen, rutschen die anderen argumente auf:
testFunction("argument1", "argument3", "argument4");


