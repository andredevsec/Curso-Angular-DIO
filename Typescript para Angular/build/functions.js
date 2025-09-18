"use strict";
// funções
Object.defineProperty(exports, "__esModule", { value: true });
function addNumber(x, y) {
    return x + y;
}
function addToHello(name) {
    return "Hello " + name;
}
let soma = addNumber(4, 7);
console.log(soma);
console.log(addToHello("André"));
// função com operador
function phone(phone) {
    return phone;
}
console.log(phone("989898"));
console.log(phone(9898898));
// função assincrona (espera por alguma coisa) sempre é uma promise
async function getDatabase(id) {
    return "felipe";
}
//# sourceMappingURL=functions.js.map