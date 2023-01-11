let num = [0 ,6, 8, ]

console.log(`Nosso vetor ${num}`)

//Para adicionar algo, devemos indicar o index.
num[3] = 5
console.log(`Nosso vetor adicionado ${num}`)

//Podemos também manipular a array, colocando um valor em explicito na última posição, basta usar.
num.push(2) //MÉTODO
console.log(`Nosso vetor adicionado ${num}`)

//Também podemos ver o comprimento
//atributo
console.log(`Tamanho da Array: ${num.length}`)

//Podemos ordenar a array
//MÉTODO
console.log(`Array ordenada: ${num.sort()}`)

console.log(`Onde está o valor 6 do array? Está em: ${num.indexOf(6)}`)

