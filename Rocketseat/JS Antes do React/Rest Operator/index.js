//Objetos
//Estruturas de dados que podemos armazenar chave e valor.
/*
const user = {
    name: 'Diego',
    idade: 27,
    address: 
    {
        street: 'Rua teste',
        number: 176.
    },
}
/*
//console.log('name' in user)

//Desestruturação
//Remove uma parte do objeto para uma variavel a parte

const {address}  = user
//ou
const addRess = user.address

//console.log(address)

//Pode ser usada em funções
function mostraidade (user){
    return user.idade
}
//console.log(mostraidade(user))

//Rest operator

const { name, ...rest } = user
//console.log(name, rest)

/*
const array = [1,2,3,4,5,6,7,8,9,10]
const [first, second, ...restt] = array

console.log(first, second, restt)

*/

//Short Syntax
/*

const user = {
    nome: nome,
    age: age,
}
//Podemos preferir usar uma versão curta, ao adicionarmos apenas uma virgula, o proprio javascript assimila que a key é igual ao valor




const user = {
    nome, 
    age,
}
*/

//Optional Chainning

const user = {
    name: 'Diego',
    idade: 27,
    address: 
    {
        street: 'Rua teste',
        number: 176,
        zip:{
            code: 2132141,
            cd: "Rio"
        }
    },
}

//Se precisassemos acessar alguma informação do nosso objeto através de um operador ternario, poderiamos tranquilamente. Mas e se o que quisessemos obter não existisse? Provavelmente iria dar erro. O código abaixo verifica se existe um endereço no user, e se existir, ele verifica se exister um zip dentro do adress e dentro do user. Se exister, ele verifica se existe um code dentro do zip, dentro do adress e dentro do user, Caso não possua, ele volta com a condição não ternarias, mas o código ficaria muito grande.
console.log(user.address 
    ? user.address.zip 
        ? user.address.zip.code 
        : "Não informado"
    : "Não informado"
)

//Nesta condição abaixo, fazemos igual ao caminho de uma pasta, o user sempre vai existir, então passa a diante. Se o adress existir, ele verifica se o zip existe, e se o zip existe ele acessa o code, caso não, ele mostra o erro
console.log(user.address?.zip?.code ?? "Impossivel achar")