function sayMyname(name = ''){
    if (name === ''){
        throw "Nome é obrigatorio"

    }
    console.log("depois do erro")
}
try{
    sayMyname('ola')
}catch(err){
    console.log(e)
}
    console.log("depois do erro.")