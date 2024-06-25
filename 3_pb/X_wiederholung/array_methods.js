console.clear();

// in business to business (B2B) gibt es sogenannte Tenants, also kunden, wir nutzen ein tenantUser object für unsere wiederholung.

const tenantUsers = [
    { 
        id: 1,
        username: 'GandalfDerGrüne',
        usedStorage: 512,
        role: 'admin',
        age: 200,
    },
    {
        id: 2,
        username: 'DieSauVonRon',
        usedStorage: 256,
        role: 'admin',
        age: 999,
    },
    {
        id: 3,
        username: 'BilboBrautring',
        usedStorage: 32,
        role: 'user',
        age: 80,
    },
    {
        id: 4,
        username: 'FreudigerFrodo',
        usedStorage: 64,
        role: 'user',
        age: 25,
    }
];

console.log('\n.forEach();');
// .forEach(); wird verwendet um eine funktion für jedes element in einem array auszuführen, ohne ein neues array zu erzeugen.

// const showUserInfo = (user) => {
//     console.log(`User: ${user.username}, Used Storage: ${user.usedStorage} MB`);
// };

// tenantUsers.forEach(showUserInfo);

tenantUsers.forEach((user, i) => {
    console.log(`${i} - User: ${user.username}, Used Storage: ${user.usedStorage} MB`);
});

const newArray = [];

// das gleiche wie bei .map(); würden wir auch erreichen, wenn wir mit .forEach(); manuell pushen.
tenantUsers.forEach((user, i) => {
    newArray.push({...user});
});

console.log("newArray:", newArray);

console.log('\n.map();');
// .map(); wird verwendet um eine funktion für jedes element in einem array auszuführen, und ein neues array mit gegebenenfalles veränderten inhalten zurückzugeben.

const usernames = tenantUsers.map((user, i) => {
    return user.username;
});

console.log(usernames);

const usersWithStatus = tenantUsers.map((user, i) => {
    return {
        ...user, // wenn wir ein objekt mit den originalwerten füllen wollen, und etwas hinzufügen möchten, übergeben wir als erstes "...[objektname]".
        status: user.age > 50 ? 'Alt' : 'Jung',
        i,
    } 
});

console.log(usersWithStatus);

console.log('\n.filter();');
// .filter(); wird verwendet um eine funktionfür jedes element in einem array auszuführen und ein neues array zurückzugeben, das nur die inhalte beinhaltet, welche wir herausfiltern wollten.

const admins = tenantUsers.filter((user, i) => user.role === 'admin');

console.log("admins:", admins);

// wir können den filter auch umdrehen, was wir sehr oft machen, um herauszufiltern was wir nicht benötigen.
const users = tenantUsers.filter((user, i) => user.role !== 'admin');

console.log("nicht admins:", users);

const someUsers = tenantUsers.filter((user, i) => user.age > 200);

console.log("wir können auf alles mögliche filtern:", someUsers);

console.log('\n.reduce();');
// .reduce(); wird verwendet um eine funktion für jedes element in einem array auszuführen und einen zusammengerechneten wert aus den jeweiligen inhalten zurückzugeben.

const usedStorage = tenantUsers.reduce((total, user) => {
    return total + user.usedStorage;
}, 0); // durch das hinzufügen der 0 als zweiten parameter in der reduce methode, gehen wir sicher, dass das programm weiß, das es sich um eine zahl handelt, die berechnet werden soll.

console.log(usedStorage);

const userNamesString = tenantUsers.reduce((names, user, i) => {
    return i === 0 ? user.username : `${names}, ${user.username}`;
}, '');

console.log(userNamesString);
