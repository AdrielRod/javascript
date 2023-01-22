/*
Crie um algoritmo que transforme as notas do sistema
numérico para sistema de notas em caracteres tipo A B C

* de 90 para cima -   A
* entre 80 - 89   -   B
* entre 70 - 79   -   C
* entre 60 - 69   -   D
* menor que 60    -   F
*/

function notas(nota){
    var tipo = ''
    if(nota < 0){
        tipo = "Nota Invalida"
    }else if(nota > 100){
        tipo = "Nota Invalida"
    }else if(nota < 60){
        tipo = "F"
    }else if(nota >= 60 && nota <= 69){
        tipo = "D"
    }else if(nota >= 70 && nota <= 79){
        tipo = "C"
    }else if(nota >= 80 && nota <= 89){
        tipo = "B"
    }else if(nota >= 90){
        tipo = "A"
    }
    console.log(`A sua nota foi de nivel: ${tipo}.`)
}
notas(110)