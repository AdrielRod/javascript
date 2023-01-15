let numeros = [5, 3, 2, 5]
let total = numeros.reduce((acumulador, numero, indice, original) =>{
    console.log(`${acumulador} - Total até o momento`)
    console.log(`${numero} - Valor total`)
    console.log(`${indice} - Indice atual`)
    console.log(`${original} - array original`)
    console.log("============================")
    return acumulador += numero
})
console.log(total)