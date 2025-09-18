// funções

function addNumber(x: number,y: number): number {
    return x+y
}

function addToHello(name: string): string {
    return "Hello " + name
}

let soma: number = addNumber (4,7)

console.log(soma)

console.log(addToHello("André"))


// função com operador

function phone (phone: number | string): number | string {
    return phone;
}

console.log(phone("989898"))
console.log(phone(9898898))

// função assincrona (espera por alguma coisa) sempre é uma promise

async function getDatabase (id: number): Promise<string | number> {
    return "felipe"
}



