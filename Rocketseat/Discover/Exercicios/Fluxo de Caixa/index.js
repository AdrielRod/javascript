/*
Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: [] 
    * despesas: []
Agora, crie uma função que irá calcular o total de receitas e 
despesas e irá mostrar uma mensagem se a família está com 
saldo positivo ou negativo, seguido do valor do saldo.
*/
var receitas = [10, 20, 30, 40, 50]
var despesas = [5, 12, 20, 60, 52]

function calcularSaldo(receita, despesa){
    let totalGanhos = receita.reduce((acc, numero) =>{

        return acc+=numero
    })
    let totalGastos = despesa.reduce((acc, numero) =>{

        return acc+=numero
    })

    var resultado = totalGanhos - totalGastos
    console.log(`Você obteve ${totalGanhos} e gastou ${totalGastos}.`)
    console.log(` ${totalGanhos} - ${totalGastos} = ${resultado}`)

    if(totalGanhos > totalGastos){
        console.log("Seu saldo é positivo")
    }else{
        console.log("Seu saldo é negativo")
    }
}
calcularSaldo(receitas, despesas)