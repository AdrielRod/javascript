//Promises, são promessas de que algo vai acontecer ou vai dar erro.
//Nem tudo é assincrano. Nem tudo na programação executa exatamente no momento que mandamos executar, tem coisas que demora pra retornar e nao podemos evitar que todo o codigo continue executando até que a resposta chegue

// .then alguma coisa deu tudo certo 
// .catch alguma coisa deu tudo errado
// .finally algo que vai ser executado independente se for certo ou errado, mas sempre no final da execução


const somaDoisNumeros = (a,b) => { 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(a + b)
        }, 2000)
    })
}

somaDoisNumeros(2,2)
    .then(some => {
        console.log(some)
    })
    .catch(err =>{
        console.log(err)
    })
    .finally(final =>{
        console.log("Sua operação foi feita")
    })