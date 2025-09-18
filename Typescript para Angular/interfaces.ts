// interfaces (type x interface)

type produto = {
    nome: string | number
    preco: number
}

let celular: produto = {
    nome: "S23",
    preco: 2999.99
}

interface pessoa {
    nome: string | boolean
    idade: number
    sayHello(): string
}

let funcionario: pessoa = {
    nome: "André",
    idade: 26,
    sayHello(): string {
        return "hello"
    }
    
}

// usando read only

interface garrafa {
    readonly id: number
    material: string | boolean
    volume: number 
}

let agua: garrafa =  {
    id: 1,
    material: "plastico",
    volume: 1
}

class Pessoa implements pessoa {
    nome: string | boolean
    idade: number
    sayHello(): string {
        return `hello i'm ${this.nome}`
    }

    constructor(nome: string | boolean, idade: number) {
        this.nome = nome
        this.idade = idade
    }
}

const p = new Pessoa ("André", 26)
console.log(p.sayHello())

