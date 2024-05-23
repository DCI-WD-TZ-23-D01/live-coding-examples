/**
 * Projekt Todo-Liste im terminal.
 * 
 * - Eine terminal applikation die benutzereingab en annimmt, und im bezug darauf  aufgaben erstellt (create), anzeigt (read), als erledigt markiert (update) oder löscht (delete).
 * - fürs verständnis wird das projekt nur rudimentär und speichert die todos in einer json datei, als string in einem array.
 */

// wir müssen uns gedanken machen was genau wir erreichen wollen, und was wir dazu benötigen.

// imports:
// modul für benutzereingaben
import readline from 'readline';
import { stdin as input, stdout as output } from 'process';

// modul für den zugriff auf das betriebssystem, zum schreiben oder lesen von dateien
import fs from 'fs';

// konfigurationen:
// wir wollen angeben, wie die datei heißt, in der wir die daten speichern
const filename = 'todos.json';

// um readline für die benutzereingaben zu nutzen, müssen wir ein interface erstellen, um die daten von readline auswerten zu können
const rl = readline.createInterface({
    input, // wir nutzen process.stdin als input 
    output, // wir nutzen process.stdout als output
});

// wir brauchen funktionen die die datei ansprechen können.
// wir wollen todo-einträge in der datei speichern, wir wollen todo-einträge in der datei bearbeiten, wir wollen todo-einträge aus der datei auslesen und wir wollen todo einträge löschen.
// da wir nur mit einer datei arbeiten, reichen 2 funktionen: 
// eine funktion zum speichern von änderungen in der datei (erstellen, verändern, löschen)
const saveTodos = (todos) => {

    // wir wandeln das array in einen string um, damit wir ihn in der datei speichern können.
    const todoArray = JSON.stringify(todos);

    // wir schreiben den string in die datei
    fs.writeFileSync(filename, todoArray);
}

// eine funktion zum lesen von daten
const loadTodos = () => {
    // wir prüfen, ob die datei existiert
    if(fs.existsSync(filename)) {

        // wenn sie existiert, lesen wir den inhalt der datei aus, und legen ihn auf eine variable
        const data = fs.readFileSync(filename);

        // wir wandeln die daten in javascript um
        const todos = JSON.parse(data);

        // und returnen das array
        return todos;
    } else {

        // falls die datei nicht gelesen werden kann, gib ein leeres array aus, um fehler zu verhindern
        return [];
    }
}

// wir laden alle todos ein, um auf sie zugreifen zu können
const todos = loadTodos();

// console.log("Alle todos:", todos);

// wir erstellen eine funktion, die ein menu ausgibt, das dem benutzer sagt, welche tasten er drücken kann, um bestimmte dinge in der applikation auszuführen
const showMenu = () => {
    console.log('\nTo-Do Liste\n');

    // wir brauchen befehle für:

    // nach CRUD manie geben wir die reihenfolge unserer kommandos in C (create) R (read) U (update) D (delete) an.
    // - (1) das hinzufügen von todos (create)
    // - (2) das anzeigen von todos (read)
    // - (3) das erledigt-markieren von todos (updade)
    // - (4) das entfernen von todos (delete)
    // - (5) das beenden der applikation
    console.log('[1] To-Do hinzufügen');
    console.log('[2] To-Dos anzeigen');
    console.log('[3] To-Do als erldigt markieren');
    console.log('[4] To-Do entfernen');
    console.log('[5] Beenden');
    console.log();
}

// wir erstellen eine funktion, die den user-input auswertet und basierend auf dessen input einen switch verwendet.
const handleInput = (input) => {

    console.clear();

    switch(input.trim()) {
        case '1':
            // console.log("1 wurde gedrückt");
            // wir fragen nach einem neuen todo, und übergeben den string an das array
            rl.question('Geben sie ein neues To-Do ein: ', (todo) => {
                todos.push(todo);

                // wir speichern das array in der datei
                saveTodos(todos);

                // wir geben aus, dass das todo hinzugefügt wurde
                console.log(`To-Do "${todo}" hinzugefügt.`);

                // wir schreiben wieder unsere ausgabe:
                showMenu();
                rl.question('Wählen sie eine Option: ', (input) => handleInput(input));
            })
            break;
        case '2':
            // console.log('2 wurde gedrückt');
            console.log('\nIhre To-Do Liste:');
            for (let i = 0; i < todos.length; i++) {
                console.log(`${i + 1}. ${todos[i]}`);
            }

            showMenu();
            rl.question('Wählen sie eine Option: ', (input) => handleInput(input));
            break;
        case '3':
            // console.log('3 wurde gedrückt');
            rl.question('Geben Sie die Nummer ein, die Sie erledigen wollen: ', (number) => {

                // wir wandeln die nummerneingabe (string) in eine nummer um und ziehen eine zahl ab.
                const index = parseInt(number) - 1;

                // nur wenn die zahl innerhalb der länge des array ist, bearbeite den eintrag
                if(index >= 0 && index < todos.length) {
                    // wenn ein eintrag erledigt wurde, füge am ende "(erledigt)" ein.
                    todos[index] += ' (erledigt)';

                    // wir speichern die todos wieder ab.
                    saveTodos(todos);

                    // wir geben aus, welchen eintrag wir bearbeitet haben
                    console.log(`To-Do "${todos[index]}" als erledigt markiert.`);
                    
                // wenn die nummer nicht innerhalb der länge des array ist, gib eine fehlermeldung aus
                } else {
                    console.log('Ungültige nummer');
                }
                showMenu();
                rl.question('Wählen Sie eine Option: ', (input) => handleInput(input));
            });
            break;
        case '4':
            // console.log('4 wurde gedrückt');
            rl.question('Geben Sie die nummer ein, die sie entfernen möchten: ', (number) => {
                const index = parseInt(number) - 1;

                if(index >= 0 && index < todos.length) {
                    const removed = todos.splice(index, 1);

                    saveTodos(todos);

                    console.log(`To-Do "${removed}" wurde entfernt.`);
                } else {
                    console.log('Ungültige nummer');
                }
                showMenu();
                rl.question('Wählen Sie eine Option: ', (input) => handleInput(input));
            });
            break;
        case '5':
            rl.close();
            break;
        default:
            // wenn der user NICHT die tasten 1 - 5 drückt, wird ein default ausgegeben, der sagt, das es sich um eine ungültige option handelt.
            console.log('Ungültige option. Bitte erneut auswählen');

            // nachdem die nachricht ausgegeben wurde, wird wieder das menu angezeigt, und nach usereingabe verlangt
            showMenu();
            rl.question('Wählen Sie eine Option: ', (input) => handleInput(input));

            break;
    }
}

// wir rufen das menu auf
showMenu();

// wir warten auf eingabe vom user
rl.question('Wählen Sie eine Option: ', (input) => handleInput(input));
