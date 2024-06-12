// Die convertArray Funktion von gestern
function convertArray(array, callback) {
  const convertedArray = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const result = callback(element);
    convertedArray.push(result);
  }
  return convertedArray;
}

const names = ["AnToN", "martin", "HADI", "oscar", "manuel"];

const capitalize = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase();

const capitalizedNames = convertArray(names, capitalize);
console.log(names);
console.log(capitalizedNames);

// mit array.map()
const capitalizedNames2 = names.map(capitalize);
console.log(capitalizedNames2);

const zahlenArray = [1, 2, 3, 4, 5];
// Ich möchte ein neues Array erstellen, drin sind alle Zahlen von zahlenArray verdoppelt
const verdoppelt = zahlenArray.map((number) => {
  return number * 2;
});
console.log(verdoppelt);

const zahlenArray2 = [1.65, -3.2, 42.1, 6.42, -12.7];
// Aufgabe: Mit der Arraymethode map ein neues Array daraus erstellen, wo die Zahlen gerundet werden (mit Math.round())
// Ausführlich
/*
[2, -3, 42, 6, -13]
const gerundetesArray = zahlenArray2.map(zahl => {
  return Math.round(zahl);
});
*/
// In einer Zeile
const gerundetesArray = zahlenArray2.map((zahl) => Math.round(zahl));
// Da man in der Arrow-Function nichts mehr macht, als das Element an Math.round zu übergeben, kann man Math.round auch direkt als Callback übergeben
// const gerundetesArray = zahlenArray2.map(Math.round);
console.log(zahlenArray2);
console.log(gerundetesArray);

const bookshelf = [
  { title: "The Silent Spring", author: "Rachel Carson", genre: "Science" },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Fiction",
  },
  { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction" },
  { title: "1984", author: "George Orwell", genre: "Fiction" },
  { title: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy" },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Fiction",
  },
  { title: "Pride and Prejudice", author: "Jane Austen", genre: "Fiction" },
  { title: "Faust", author: "Johann Wolfgang von Goethe", genre: "Drama" },
];

// Ich möchte nur die title von den Büchern haben
// ['The Silent Spring', 'The Catcher in the Rye',...]
const titles = bookshelf.map((bookObj) => bookObj.title);
console.clear();

console.log(titles);
// Aufgabe: Ein Array aus author-Strings erstellen mit map
const authors = bookshelf.map((bookObj) => bookObj.author);
console.log(authors);
