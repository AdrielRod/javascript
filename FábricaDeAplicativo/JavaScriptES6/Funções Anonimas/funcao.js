/*

() => {}

1. os parentes é onde a função recebe argumentos
2. a seta é responsavel pelo nome "arrow"
3. As chaves representam o corpo da função

*/

function somar (a, b){
    let total = a+b
    return console.log(total)
}

somar(10,30)

let subtrair = (v1, v2) =>{

    let total = v1-v2
    return console.log(total)
}

subtrair(10, 5)

let numeros = [1, 2, 3, 4, 5]
numeros.map((item) =>{
    console.log(item)
})