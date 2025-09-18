"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// classes 
class Character {
    name;
    strenght;
    skill;
    constructor(name, strenght, skill) {
        this.name = name;
        this.strenght = strenght;
        this.skill = skill;
    }
    attack() {
        console.log(`Attack with ${this.strenght} points`);
    }
}
const c1 = new Character("venom", 50, 50);
console.log(c1.attack());
c1.attack;
//# sourceMappingURL=class.js.map