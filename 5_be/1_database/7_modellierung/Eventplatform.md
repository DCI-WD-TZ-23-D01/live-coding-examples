# Event-Platform

Wir betreiben eine Plattform zur Organisation von Veranstaltungen und benötigen eine neue Datenbank, um unsere Daten effizient zu verwalten. Unsere Anforderungen sind wie folgt:  

Wir möchten zunächst unsere **Events** abbilden. Jedes Event hat einen Titel, der mindestens 5 Zeichen lang sein muss, und eine **Beschreibung, die optional** ist. Jedes Event hat auch ein Datum und eine Uhrzeit, zu der es stattfindet, die zwingend erforderlich sind. Außerdem müssen wir speichern, an welchem **Ort das Event stattfindet, einschließlich einer Adresse und eines optionalen Zusatzes wie Raum- oder Etagenangaben.** Ein Event hat eine **maximale Teilnehmerzahl**, die angegeben werden muss und **mindestens 1 betragen sollte**. Es wäre hilfreich, wenn wir automatisch festhalten könnten, wann das **Event zuletzt aktualisiert wurde**.

Neben den Events möchten wir unsere **Veranstalter** erfassen. Jeder Veranstalter sollte einen **Namen** haben, der mindestens 3 Zeichen lang ist, und eine **gültige E-Mail-Adresse angeben**, die **eindeutig sein muss**. _Jeder Veranstalter kann mehrere Events organisieren, daher sollten die Daten der Events mit dem Veranstalter verknüpft sein._ Zusätzlich möchten wir die **Telefonnummer** des Veranstalters speichern, wobei diese optional ist.  

**Teilnehmer**, die sich für Events anmelden, müssen ebenfalls erfasst werden. Wir benötigen für jeden Teilnehmer den **Vor- und Nachnamen**, wobei beide **zwingend erforderlich** sind. Außerdem **muss eine E-Mail-Adresse** angegeben werden, die **eindeutig** ist und im **korrekten Format vorliegt.** _Teilnehmer können sich für mehrere Events anmelden_, daher sollten wir diese Verknüpfung auch in der Datenbank abbilden. Zusätzlich möchten wir festhalten, **wann ein Teilnehmer sich für ein Event angemeldet hat**.  

Wichtig ist uns, dass die grundlegenden Regeln und Einschränkungen für die Daten eingehalten werden. Gleichzeitig möchten wir die Informationen flexibel abrufen können. Können Sie uns dabei helfen, ein passendes Datenbankschema zu entwickeln?
