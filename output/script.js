import { Player } from "./class.js";
import { response } from "./enums.js";
import { add } from "./generic.js";
const names = "MD Rakibul Islam Rakib";
const age = 27;
const id = 1234;
// console.log(name);
const myFunc = (names, age) => {
    console.log(`My name is ${names}
        My Age: ${age}
    `);
};
myFunc(names, age);
const userDetails = (id, user) => {
    console.log(`User Id is ${id} and User Name is ${user.name} also age ${user.age}`);
};
const user = { name: names, age };
userDetails(id, user);
const userInfo = (user) => {
    console.log(`Hello ${user.age > 50 ? "Sir" : "Mr"} ${user.name}`);
};
userInfo(user);
let calculation;
calculation = (a, b, c) => {
    if (c === "add") {
        return a + b;
    }
    else {
        return a - b;
    }
};
console.log(calculation(6, 5, "min"));
const rakib = new Player("Rakib", 27, "BD");
const annisa = new Player("AN Nisa", 20, "BD");
const players = [];
players.push(rakib);
players.push(annisa);
console.log(players);
let users = add({
    name: "Rakib",
    age: 27,
    country: "BD",
});
console.log(users);
console.log(response);
