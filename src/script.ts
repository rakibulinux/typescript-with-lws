import { Player } from "./class.js";
import { response } from "./enums.js";
import { add } from "./generic.js";

const names = "MD Rakibul Islam Rakib";
const age = 27;
const id = 1234;
// console.log(name);

const myFunc = (names: string, age: number) => {
  console.log(`My name is ${names}
        My Age: ${age}
    `);
};

myFunc(names, age);

type stringOrNum = string | number;
type userType = { name: string; age: number };

const userDetails = (id: stringOrNum, user: userType) => {
  console.log(
    `User Id is ${id} and User Name is ${user.name} also age ${user.age}`
  );
};

const user: userType = { name: names, age };

userDetails(id, user);

const userInfo = (user: userType) => {
  console.log(`Hello ${user.age > 50 ? "Sir" : "Mr"} ${user.name}`);
};

userInfo(user);

let calculation: (x: number, y: number, z: string) => number;

calculation = (a: number, b: number, c: string) => {
  if (c === "add") {
    return a + b;
  } else {
    return a - b;
  }
};

console.log(calculation(6, 5, "min"));

const rakib = new Player("Rakib", 27, "BD");
const annisa = new Player("AN Nisa", 20, "BD");

const players: Player[] = [];

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
