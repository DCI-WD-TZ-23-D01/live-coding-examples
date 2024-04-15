// https://josephcardillo.medium.com/the-difference-between-var-let-and-const-in-javascript-part-2-60fa568d0a0

// var
    var testValue1 = 5;

    // eine var kann redeklariert werden:
    var testValue1 = 1;

    // eine var kann geupdated werden:
    testValue1 = 10;

    console.log(testValue1);

// let
    let testValue2 = 5;

    // ein let kann geupdated werden
    testValue2 = 10;

    // ein let kann NICHT redeklariert / neu angelegt werden
    let testValue2 = 20; // fehler

// const
    const testValue3 = 5;

    // eine const kann NICHT geupdated werden
    testValue3 = 10;

    // eine const kann nicht redeklariert werden
    const testValue3 = 20;

// Wenn wir code schreiben, nutzen wir IMMER erst CONST, es sein denn, wir wissen, das ein wert überschrieben werden würde, dann nutzen wir LET, VAR nutzen wir garnicht mehr.
