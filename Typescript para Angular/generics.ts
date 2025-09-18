// generics, use o T e nao any

function concatArray <T>(...itens: T[]): T[] {
    return new Array().concat(...itens)
}

// para demilitar apenas a um tipo o array
const numArray = concatArray <number[]> ([1,5], [4])
const stringArray = concatArray <string[]> (["Andre", "PA"], ["invoker"])

console.log(numArray)
console.log(stringArray)