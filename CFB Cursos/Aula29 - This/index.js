//This faz referencia ao proprio nome, se você não quer criar outra variavel que vai fazer referencia ao que está nos parametros, você pode usar o this.

function aluno(nome, nota){
    this.nome=nome
    this.nota=nota

    this.dados_anonimo = function(){
        setTimeout(function(){
            console.log(this.nome)
            console.log(this.nota)
        }, 2000)
    }
    this.dados_arrow = function(){
        setTimeout(() => {
            console.log(this.nome)
            console.log(this.nota)
        }, 2000)
    }
}

const al1 = new aluno("bruno", 100)
al1.dados_anonimo()
al1.dados_arrow()