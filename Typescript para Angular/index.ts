type heroi = {
    name: string;
    vulgo: string;
}

function printaObjeto (pessoa:heroi) {
    console.log(pessoa);
}

printaObjeto ({
    name: "bruce",
    vulgo: "batman"
});

console.log ("ola mundo")