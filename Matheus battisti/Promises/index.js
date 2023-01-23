/*
const myPromise = new Promise((resolve, reject) =>{
    const nome = "Matheus"

    if(nome == "Matheus"){
        resolve("Usuario encontrado")
    }else{
        reject("O usuario matheus nao foi encontrado.")
    }
})
myPromise.then((data) =>{
    console.log(data)
})
myPromise.catch((data) =>{
    console.log(data)
})

const myPromise2 = new Promise((resolve, reject) =>{
    const nome = "Matheus"

    if(nome == "Matheus"){
        resolve("Usuario encontrado")
    }else{
        reject("O usuario matheus nao foi encontrado.")
    }
})
myPromise2
    .then((data) =>{
        return data.toLowerCase()
    })
    .then((stringModificada) => {
        console.log(stringModificada)
    })


    //Erros

const myPromise3 = new Promise((resolve, reject) =>{
    const nome = "Matheus"

    if(nome == "Joao"){
        resolve("Usuario encontrado")
    }else{
        reject("O usuario matheus nao foi encontrado.")
    }
})
myPromise3
    .then((data) =>{
        return data
    })
    .catch((err) =>{
        console.log("Aconteceu um erro", err)
    })

*/

    //Resolver varias promessas
const p1 = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve("P1 OK!")
    }, 3000)
})
const p2 = new Promise((resolve, reject) =>{
    resolve("P2 OK!")
})
const p3 = new Promise((resolve, reject) =>{
    resolve("P3 OK!")
})
const resolveAll = Promise.all([p1, p2, p3])
    .then((data) =>{
    console.log(data)
})
