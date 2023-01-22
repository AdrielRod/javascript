//CallBack Function

function sayMyName(name){
    console.log("antes de executar a função")
    name()
    console.log("depos de executar a função")
}

sayMyName(
    ()=>{
        console.log("Estou em callback")
})