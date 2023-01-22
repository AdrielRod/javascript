//Função construtora

function person(name){
    this.name = name
    this.walk = function(){
        return `${name} andou`
    }
}
const mayk = new person("mayk")
const joao = new person("joao")
console.log(joao.walk())