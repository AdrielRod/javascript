//Objetos
//Estruturas de dados que podemos armazenar chave e valor.

const user = {
    name: 'Diego',
    idade: 27,
    address: 
    {
        street: 'Rua teste',
        number: 176.
    },
}
//console.log('name' in user)

//Desestruturação
//Remove uma parte do objeto para uma variavel a parte

const {address}  = user
//ou
const addRess = user.address

console.log(address)

//Pode ser usada em funções
function mostraidade (user){
    return user.idade
}
console.log(mostraidade(user))