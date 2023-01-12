function verificar(event){
    event.preventDefault()
    res.innerHTML = ""
    var p = document.getElementById('ipeso')
    var a = document.getElementById('ialtura')
    var res = document.getElementById('res')

    var peso = Number((p).value)
    var altura = Number((a).value)

    var imc = peso / (altura * altura)
    res.innerHTML += `Seu peso: ${peso} sua altura: ${altura} <br>`
    res.innerHTML += `Sua IMC: ${imc}`
    if(imc < 17)
    {
        res.innerHTML += ("Muito abaixo do peso")
    }
    if(imc >= 17 && imc <= 18.49)
    {
        res.innerHTML = ("Abaixo do peso")
    }
    if(imc >= 18.5 && imc <= 24.99)
    {
        res.innerHTML = ("Neutro")
    }
    if(imc >= 25 && imc <= 29.99)
    {
        res.innerHTML = ("Acima do peso")
    }
}