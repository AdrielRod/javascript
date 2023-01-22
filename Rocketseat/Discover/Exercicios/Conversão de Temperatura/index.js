/*
Crie uma função que receba uma string em celsius ou fahrenheit
e faça a transformação de uma unidade para outra 
    C = (F - 32) * 5/9 
    F = C * 9/5 + 32
*/

function convertendo(c, f){
    var valorC = (f-32) * (5/9)
    var valorF = (c * 9) / 5 + 32
    console.log(`De Celcius para Fahren: ${valorC}`)
    console.log(`De Fahren para Celcius: ${valorF}`)
}
convertendo(39, 102)