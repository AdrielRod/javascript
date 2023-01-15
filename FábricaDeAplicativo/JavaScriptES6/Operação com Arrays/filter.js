// filter

let palavras = ["matheus", "ana", "jose", "carlos", "gustavo"]
let filtrado = palavras.filter((item) =>{
    return item.length >= 5

})

//onsole.log(filtrado)

let palavras2 = ["matheus", "ana", "Jose", "Jose","carlos", "gustavo"]
let filtrado2 = palavras.filter((item) =>{
    return item === "jose"
})
console.log(filtrado2)