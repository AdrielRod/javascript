function acao(){
    document.write(`Olá mundo <br>`)
}
function pararAcao(){
    clearInterval(timer)
    
}

var timer = setInterval(acao, 1000)

setTimeout(pararAcao, 3000)
