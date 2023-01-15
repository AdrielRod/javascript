//Busca alguma coisa, sendo com condição ou n dentro de uma lista

let listagem = [5, 3, "jose", 2, "matheus"]
let busca = listagem.find((item) =>{

    if(item === "jose"){
        console.log("achamos")
        return item === "jose"
    }
})
