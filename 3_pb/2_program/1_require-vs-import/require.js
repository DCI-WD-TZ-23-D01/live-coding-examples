// um dateien oder bibliotheken in javascript zu importieren, gibt es 2 möglichkeiten, require und import.

// require ist das javascript native feature von Node.JS, das es ermöglicht, module (wiederverwendbarer code) in unsere javascript anwendungen zu importieren. Es wird häufig verwendet, um externe bibliotheken oder selbst erstelle module in ein projekt einzubinden, und bietet den vorteil, das wir überall im code ein require ausführen können, um code einzubinden.

// um etwas zu importieren, erstellen wir eine const, und setzen dahinter, was wir einbinden wollen. In konvention, heißt die variable meist, wie das eingefügte modul.

// als beispiel importieren wir das von Node.JS bereitgestellte modul 'os', mit dem wir auf betreibssysteminformationen zugreifen können.
const os = require('os');

// jetzt, nachdem wir das modul eingebunden haben, können wir auf die verschiedenen methoden des modules os zugreifen:
console.log('Plattform:', os.platform());
console.log('CPU Architektur', os.arch());
console.log('CPU', os.cpus());
console.log('Freier speicher', os.freemem());
