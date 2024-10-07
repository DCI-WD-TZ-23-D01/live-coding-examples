const names = ["zahra", "nell"];

// Mittels der map Funktion, den ersten Buchstaben zu einem Großbuchstaben tranformieren
const namesNew = names.map((name) => {
  let firstLetter = name.slice(0, 1).toUpperCase();
  let restWord = name.slice(1);
  //   console.log(firstLetter + restWord);
  return firstLetter + restWord;
});
console.log(namesNew);
