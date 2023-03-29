export class Player {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    play() {
        console.log(`${this.name} from country ${this.country} is playing`);
    }
}
// const rakibC = new PlayerC("Rakib", 27, "BD");
// const annisaC = new PlayerC("AN Nisa", 20, "BD");
// rakibC.name = "Rakib";
// rakibC.age = 28;
// rakibC.country = "BD";
// const playersC: PlayerC[] = [];
// console.log(rakib);
