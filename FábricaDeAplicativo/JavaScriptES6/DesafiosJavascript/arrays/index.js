let lista = ["Computador", "Telefone", "Mouse", "Teclado"]
console.log(`Nossos Produtos: ${lista}`)
console.log(`Temos cerca de ${lista.length} produtos`)
lista.splice(2, 1)

let busca = lista.find((item) =>{
    return item === "Computador"
}
)
console.log(`Nossos Produtos: ${lista}`)
console.log(`Achamos o: ${busca}`)

lista.splice(1, 1)

console.log(`Nossos Produtos: ${lista}`)