export const add = (obj) => {
    const id = Math.floor(Math.random() * 100);
    return Object.assign({ id }, obj);
};
let users = add({
    name: "Rakib",
    age: 26,
});
console.log(users);
// let users = "AD"
// add(users)
