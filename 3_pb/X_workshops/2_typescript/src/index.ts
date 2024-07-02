// da typescript nur ein wrapper um javascript herum ist, und im gewissen sinne nichts anderes als javascript mit zusätzlichen kommandos ist, können wir viel javascript code auch so schreiben, wie wir es kennen. beispielsweise console.log();

console.log("Hallo Welt");

// was typescript wirklich anders handhabt als javascript, sind, wie mehrfach erwähnt, die datentypen. um eine variable anzulegen, müssen wir dem code mitteilen, welchen datentyp eine variable hat.

// javascript:
const jsVariable = 3;

// typescript
const tsVariable : number = 3;

// wie wir im kompilierten javascript sehen, werden beide variablen übernommen, und es fehlt bei beiden der datentyp.

// grundsätzlich wird typescript ohne weitere einstellungen, wie linter oder build compilern nicht meckern, wenn wir datentypen auslassen, wir müssen also uns selbst dazu zwingen sie einzusetzen.

// was typescript allerdings bemerkt ist, wenn wir den falschen datentyp nutzen:
const tsFalscheVariable : string = 25;

// beim speichern kriegen wir einen fehler ausgegeben, der uns mitteilt, das "number" nicht auf den typ "string" angewandt werden kann, genau DAS ist die essenz von typescript.


