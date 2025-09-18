// classes 

/* 
    modificadores de acesso, aplicados em metodos e vairaveis
    private = so acessa dentro da classe
    public = acessa de qualquer lugar, comportamento defaul
    protector = somente dentro da classe e subclasses herdadas

*/

class Character {
    name: string
    strenght: number
    skill: number
    private level: number
    public itens: string
    protected buff: string

    constructor(name: string, strenght: number, skill: number, level: number, itens: string, buff: string) {
        this.name = name
        this.strenght = strenght
        this.skill = skill
        this.level = level
        this.itens = itens
        this.buff = buff
    }

    attack (): void {
        console.log (`Attack with ${this.strenght} points`)
    }
}

class Magician extends Character {

    magicPoints: number

    constructor(name: string, strenght: number, skill: number, level: number, itens: string, buff: string, magicPoints: number) {
        super (name, strenght, skill, level, itens, buff)

        this.magicPoints = magicPoints
    }
}

const c1 = new Character("Phantom Assasins", 50, 50, 50, "power threds, battlefury", "+60 clave")
console.log(c1.attack())
c1.attack()

const c2 = new Magician ("Invoker", 50, 50, 50, "aghanims, refresher orb", "ultimate amplification", 50)
