"use strict";
// tipos primitivos
Object.defineProperty(exports, "__esModule", { value: true });
let ligado = false;
let idade = 25;
let nome = "André";
let altura = 1.75;
// tipos especiais
let nulo = null;
let indefinido = undefined;
// tipos abrangentes
let qualquerValor = "qualquer coisa" + 1 + false;
let vazio;
// objeto - sem previsibilidade
let produto = {
    name: "celular",
    marca: "samsung",
    modelo: "s23"
};
let celular = produto = {
    nome: "S23",
    preco: 2999.99,
    marca: "Samsung",
    modelo: "S23"
};
// arrays
let dados = ["andre", "felipe", "paulo"];
let dados2 = ["andre", "felipe", "paulo"];
// arrays multi types
let infos = ["andre", false, true, 23, "capeta", 10, 30, 35];
// tuplas - arrays multi type em ordem conforme os tipos
let boleto = ["agua", 13, 50];
// métodos para arrays
dados.pop();
dados2.filter;
// datas
let aniversario = new Date("2025-09-15 05:00");
console.log(aniversario.toString());
//# sourceMappingURL=typeVariables.js.map