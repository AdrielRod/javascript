let num = [10, 20, 30, 50, 40]
for (const n in num) {
    console.log(num[n])
}

//Percorre toda a array, como se fosse o for normal.
//Para (item em array). Ou seja, para cada item dentro do array, ele vai fazer algo dentro do corpo
//Retorna a posição do elemento 
console.log("==========================")

for (const n of num) {
    console.log(n)
}

//Faz a mesma coisa, porém nesse caso não precisamos colocar a posição do array, pois ele vai dentro da coleção do elemento e pega os itens
//Retorna os elementos da posição