const zahlenArray = [762, -83, -11212, 98, 4];

// const  wasReturntCallback = zahlenArray.map(element => element >= 0);
// console.log(wasReturntCallback)

const nurPositiv = zahlenArray.filter((element) => element >= 0);
console.log(nurPositiv);

/* 
arr.filter(callback);
Die callback-Funktion hat bis zu drei Parameter:
- element (optional; in der Praxis eigentlich immer angegeben)
- index (optional)
- array (optional)
*/

// Ich möchte ein Array erstellen, wo nur jede zweite Zahl aus dem alten Array reinkommt
// [-83, 98]
// Ich möchte also in diesem Beispiel nur die Elemente haben, deren Index ungerade ist
const jedeZweiteZahl = zahlenArray.filter((element, index) => index % 2 !== 0);
console.log(jedeZweiteZahl);

const products = [
  { name: "Laptop", price: 400, color: "blue" },
  { name: "Phone", price: 300, color: "black" },
  { name: "Headphones", price: 50, color: "red" },
  { name: "Tablet", price: 250, color: "silver" },
  { name: "Smartwatch", price: 150, color: "white" },
  { name: "Camera", price: 600, color: "black" },
  { name: "Speaker", price: 80, color: "gray" },
  { name: "Keyboard", price: 100, color: "black" },
  { name: "Monitor", price: 300, color: "silver" },
  { name: "Printer", price: 200, color: "white" },
];

// Ich möchte nur die schwarzen (black) Produkte haben
const onlyBlackProducts = products.filter(
  (product) => product.color === "black"
);
console.log(onlyBlackProducts);

// Aufgabe: Ich möchte nur die Produkte haben, die zwischen 100 und 200 € kosten (100 und 200 inklusiv) (Smartwatch, Keyboard, Printer)
const between100and200 = products.filter(
  (product) => product.price >= 100 && product.price <= 200
);
console.clear();
console.log(between100and200);
const onlyName = between100and200.map((product) => product.name);
console.log(onlyName);

// Dadurch dass filter (und map) ein Array zurückgibt, kann man die Methode hintereinander schreiben
const hintereinander = products
  .filter((product) => product.price >= 100 && product.price <= 200)
  .map((product) => product.name);
// .push('a') // push returnt die Länge des neuen Arrays
// .map(() => {}); // <- deswegen geht das nicht
console.log(hintereinander);
