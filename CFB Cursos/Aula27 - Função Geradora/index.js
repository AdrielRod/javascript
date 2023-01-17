/*
function* cores(){
    yield 'Vermelho'
    yield 'Verde'
    yield 'Azul'
}
let itc = cores()
console.log(itc.next().value) //retorna vermelho
console.log(itc.next().value) //retorna verde
console.log(itc.next().value) //retorna azul
console.log(itc.next().value) //retorna undefined

*/

/* perguntas(){
    const nome = yield 'Qual seu nome?'
    const esporte = yield 'Qual seu esporte?'
    return 'Seu nome é: ' + nome + '. Seu esporte favorito é:' + esporte
}
/*
var itp = perguntas()
console.log(itp.next('').value)
console.log(itp.next('Bruno').value)
console.log(itp.next('Bola').value) */
/*
function* contator(){
    let i = 0
    while(true){
        yield +11
    }
}

const itc= contator()

console.log(itc.next().value) */
let idd=0

function* id(){

    while(true)
    {
        yield "O valor:"
        yield idd++
    }
}

const idUser = id()
while (idd <= 10)
{
    console.log(idUser.next().value)
}
