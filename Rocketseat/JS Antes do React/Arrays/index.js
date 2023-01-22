const array = [1,2,3,4,5]
/*
//For 
for (const i of array){
    console.log(i)
}

console.log("=================")
//ForEach. Não é bom para retornar itens novos, como retornar o item multiplicado por dois
array.forEach(item =>{
    console.log(item)
})
console.log("==============")
//Map. Quando precisamos transformar o array em um outro array.
const novoArray = array.map(item =>{
    if(item % 2 === 0){
        return item*10
    }
    return item
})
console.log(novoArray)

//Filter. Filtra uma array
const novoArray = array
.filter(item => item % 2 ===0)
.map(item => item *10 )

console.log(novoArray)


//Every. Retorna um boleano. Retorna caso todos os itens satisfazem a condição.

const todoNumeros = array.every(item => typeof item === 'string')


//some. Retorna boleano. Retorna se pelo menos um item satisfaz a condição.
const peloMenos = array.some(item => typeof item === 'number')
console.log(peloMenos)



//Find. Retorna um item do array, o primeiro que achar
const numero = array.find(item => item % 2 === 0)
console.log(numero)



//findIndex. Retorna o index do item do array que aceite as condições
const numero = array.findIndex(item => item % 2 === 0)
console.log(numero)

*/

//Reduce

const oqIssoFaz = array.reduce((acc, item) =>{
    console.log(`${acc} + ${item} === `)

    return acc + item
}, 0)
console.log(soma)
