// 25.07.2024: for...in/of Schleifen

// const array=[12,105,83];

// for (let i=0; i<array.length; i++) {
//   // hier passier irgendwas
//   // jedes Element: array[i]
// }

// array.forEach((element)=>{
// hier passiert irgendwas
// jedes Element: element
// })

// FOR IN/OF MIT ARRAYS

// for IN, OF - I kommt vor O, In zeigt Index/Key an (das "erste" in Arrays/Objekten), Of Values (das "zweite" in Arrays)

const namen = ['Kathleen', 'Petra', 'Frank'];

for (let index in namen) {
  console.log(index);
}

for (let name of namen) {
  console.log(name);
}

// FOR IN/OF MIT OBJEKTEN

const obstKorb = {
  apfel: 5,
  birne: 3,
  banane: 1,
};

for (let key in obstKorb) {
  console.log(key);
}

// for (let value of obstKorb)
// Das geht nicht, weil ein Objekt nicht "durchzählbar" (iterabel/iterable) ist

console.log('---------- Alternativen ----------');

// Alternative...

for (let key of Object.keys(obstKorb)) {
  console.log(key);
  // console.log(obstKorb[key]);
}

for (let value of Object.values(obstKorb)) {
  console.log(value);
}

for (let entry of Object.entries(obstKorb)) {
  [key, value] = entry;
  console.log('key: ', key, ' / value:', value);
}
