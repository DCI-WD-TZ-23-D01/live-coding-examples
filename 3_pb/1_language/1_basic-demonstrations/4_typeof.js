// mit typeof(wert); können wir herausfinden, oder vergleichen, welchen typ ein wert hat.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof

// sollte eine nummer sein
console.log(typeof(50)); // number

// sollte ein string sein
console.log(typeof('Hallo')); // string

// sollte ein boolean sein
console.log(typeof(true)); // boolean

// sollte nicht definiert sein
console.log(typeof(test)); // undefined

// der jeweilige typ, wird als string zurückgegeben.

console.log('Ist 50 eine nummer?', typeof(50) === 'number');
