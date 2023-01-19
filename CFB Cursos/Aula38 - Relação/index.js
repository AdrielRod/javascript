const pai = document.getElementById('pai')
const filho = document.getElementById('filho')

console.log(pai.children)

console.log(pai.hasChildNodes)
//Verifica se a div pai tem filhos

if(pai.children.length > 0){
    console.log("Possui filhos")
}
else{
    console.log("Não possui")
}