// Invertiere einen String
const name = "Claire";
const splitName = name.toLowerCase().split("");
const reversedName = splitName.reverse();
reversedName[0] = reversedName[0].toUpperCase();
const joinedName = reversedName.join("");
// joinedName[0] = joinedName.charAt(0).toUpperCase(); // Strings sind nur read-only
console.log(joinedName);
