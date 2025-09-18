"use strict";
// interfaces (type x interface)
Object.defineProperty(exports, "__esModule", { value: true });
let celular = {
    nome: "S23",
    preco: 2999.99
};
let funcionario = {
    nome: "André",
    idade: 26,
    sayHello() {
        return "hello";
    }
};
let agua = {
    id: 1,
    material: "plastico",
    volume: 1
};
class Pessoa {
    nome;
    idade;
    sayHello() {
        return `hello i'm ${this.nome}`;
    }
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}
const p = new Pessoa("André", 26);
console.log(p.sayHello());
//# sourceMappingURL=interfaces.js.map