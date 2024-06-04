console.clear();

const divider = (input) =>
{
    const spacer = '='.repeat(5);
    console.log('\n' + spacer, input, spacer, '\n');
}

divider('Ändern von Objektinhalten');

// erstellen wir uns einen neuen user, um seine daten zu ändern:
const user = {
    firstName: 'Max',
    lastName: 'Mustermann',
}

console.log(user);

// werte innerhalb eines objektes können wir ganz einfach ändern, indem wir den schlüssel mit einem neuen wert belegen.
user.firstName = 'Markus';

console.log(user);

// auf die gleiche weise können wir auch neue werte und schlüssel (also properties) zu unserem objekt hinzufügen:
console.log(Object.keys(user));

user.age = 25;
user['secondName'] = 'Julius';

console.log(user);
console.log(Object.keys(user));

// da der schlüssel eines objekt properties als string in json gespeichert wird, kann dieser string auch woanders herkommen, zum beispiel aus einer variable.
const roleState = 'isAdmin';
user[roleState] = true;
// also `user['isAdmin'] = true`;

user['hallo%welt'] = true;

console.log(user);
console.log(Object.keys(user));

// inhalte von objekten können wir auch löschen, hierfür verwenden wir das keyword 'delete', dieses existiert spezifisch für objekte.

// wir nutzen das keyword delete und geben danach an, welche property wir löschen wollen.
delete user.age;

// wenn wir jetzt unser objekt in der konsole ausgeben, sehen wir, das 'user.age' nicht mehr da ist.
console.log(user);

divider('mutable vs immutable');

// in javascript sind primitive werte unveränderlich, sobald ein primitiver wert erstellt wurde, kann er nicht mehr geändert werden. Obwohl der variable, die ihn enthält möglicherweise ein anderer wert zugewiesen wird. Im gegensatz dazu sind Objekte und Arrays standardmäßig veränderbar - Ihre eigenschaften und elemente könnenen geändert werden, ohne das ihnen ein neuer wert zugewiesen wird.

// wenn wir ein objekt in eine variable legen, erstellen wir KEINE kopie, sonern arbeiten direkt mit dem objekt, dies nennt man 'mutable'.
const newUser = user;

console.log('newUser', newUser);
console.log('user', user);

// wenn wir jetzt änderungen in unserem neuen objekt machen, ändern wir damit also auch die inhalte des originalobjektes
newUser.firstName = 'Henry';

console.log('newUser', newUser); // sowohl hier...
console.log('user', user); // ...wie auch hier, wurde 'firstName' verändert.

// mit dem spread operator können wir inhalte unseres objektes in ein neues objekt schieben, und überschreiben so nicht unser original.

const reallyNewUser = { ...user }; // ergo: nimm die INHALTE von user und lege sie in ein neues objekt.

// erstelle neue {} für ein neues objekt und füge alle inhalte von 'user' ein: 
// firstName: 'Henry'
// lastName: 'Mustermann'
// ...
// ergibt: { firstName: 'Henry', lastName: 'Mustermann', ... }

console.log('reallyNewUser', reallyNewUser);

reallyNewUser.firstName = 'Christian';

console.log('-------');

console.log('user', user);
console.log('newUser', newUser);
console.log('reallyNewUser', reallyNewUser);

divider('Sonderzeichen in schlüsselnamen');

// wir können oroperty keys auch sonderzeichen geben, dafür legen wir sie als string an.

const testObject = {
    'firstName': 'Max',
    'ist fahrbereit': true,
    'hallo!': [ 'erster eintrag', 'zweiter eintrag' ],
    'isAdmin': true,
    'gemüse': "hallo", // äüö wird in deutsch zwar richtig anzeigt, aber sollte auch als string übergeben werden.
}

// wir sehen in der konsole, dass schlüssel, die keine sonderzeichen beinhalten in der konsole ohne hochkommas angezeigt werden.
console.log(testObject);

// wenn wir schlüssel haben, die sonderzeichen beinhalten ist es notwendig die [] pattern zum ansprechen der property zu nutzen:

// bei keinen sonderzeichen ist die art des aufrufes egal.
console.log(testObject.firstName); 
console.log(testObject["firstName"]);

// properties mit einem key, der sonderzeichen beinhaltet können NUR mit der [] pattern aufgerufen werden:

// vsCode ist intelligent genug, wenn wir testObject.hallo! schreiben, daraus ein testObject["hallo!"] zu machen.
console.log(testObject["hallo!"]); 
console.log(testObject["hallo!"][0]);

const allKeys = Object.keys(testObject);

console.log(allKeys);


