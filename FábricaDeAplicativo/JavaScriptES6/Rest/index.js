function convidados(...nome)
{
    console.log(`Sejam Bem Vindos Convidados`)
    console.log(nome)
}



convidados("matheus", "gabi", "julia", "juliete") 

function sorteador(...numeros)
{
    const numeroGerado = Math.floor(Math.random() * numeros.length)
    console.log(`numeros gerado: ${numeros[numeroGerado]}`)
}
sorteador(1, 2, 3, 4, 5, 6, 7, 8)