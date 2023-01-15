// includes, startsWith, endsWith

let nomes = ["matheus", 'lucas', 'jose']

console.log(nomes.includes('lucas'))

if(nomes.includes('ju')){
    console.log('tá na lista')
}else{
    console.log('n ta na lista')
}
console.log('======================')

let nome = "matheus"

console.log(nome.startsWith('mat'))
console.log(nome.endsWith('mat'))