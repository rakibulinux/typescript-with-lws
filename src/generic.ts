export const add = <T extends object>(obj: T) => {
  const id = Math.floor(Math.random() * 100);
  return { id, ...obj };
};

let users = add({
  name: "Rakib",
  age: 26,
});
console.log(users);
// let users = "AD"
// add(users)
