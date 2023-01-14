//Spread Operator
/*
let primeiros = [1, 2, 3]
let numeros = ["aaa",...primeiros,"a", 4, 5, 10]
console.log(numeros) */

let pessoas = {
    nome: "Matheus",
    idade: 45,
    cargo: "RH"
}
let novaPessoa = {
    ...pessoas,
    status: "ATIVO",
    cidade: "Ceara"
}
//console.log(novaPessoa)

function novoUsuario(info){
    let data = {
        ...info,
        status: "ATIVO",
        inicio: "20/03/2002",
        codigo: "12342"
    }
    console.log(data)
}
novoUsuario({
    nome: "Jose",
    sobrenome: "Silva",
    cargo: "Dev"
}

)