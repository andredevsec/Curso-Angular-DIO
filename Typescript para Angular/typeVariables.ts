// tipos primitivos

let ligado: boolean = false

let idade: number = 25

let nome: string = "André"

let altura: number = 1.75

// tipos especiais

let nulo: null = null

let indefinido: undefined = undefined

// tipos abrangentes

let qualquerValor: any = "qualquer coisa" + 1 + false

let vazio: void 

// objeto - sem previsibilidade

let produto: object = {
    name: "celular",
    marca: "samsung",
    modelo: "s23"
}

// objeto totalmente tipado

type produto = {
    nome: string,
    preco: number,
    marca: string,
    modelo: string
}

let celular = produto = {
    nome: "S23",
    preco: 2999.99,
    marca: "Samsung",
    modelo: "S23"
}

// arrays

let dados: string[] = ["andre", "felipe", "paulo"]

let dados2: Array<string> = ["andre", "felipe", "paulo"]


// arrays multi types

let infos: (string | number | boolean)[] = ["andre", false, true, 23, "capeta", 10, 30, 35]

// tuplas - arrays multi type em ordem conforme os tipos

let boleto: [string, number, number] = ["agua", 13, 50]

// métodos para arrays

dados.pop()
dados2.filter

// datas

let aniversario: Date = new Date ("2025-09-15 05:00")
console.log (aniversario.toString())