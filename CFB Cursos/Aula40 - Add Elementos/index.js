const pai = document.getElementById('pai')
const filho = document.getElementById('filho')
const cursos = ["HTML", "CSS", "JS", "PHP", "SQL", "React Native"]

cursos.map((item, index)=>{
    const novoElemento = document.createElement('div')
    novoElemento.setAttribute('id', 'filho')
    novoElemento.setAttribute('class', 'f' + index)
    novoElemento.innerHTML = item

    const btnLixeira = document.createElement('img')
    btnLixeira.setAttribute('src', "lx.png")
    btnLixeira.setAttribute('class', "lixeira")
    novoElemento.appendChild(btnLixeira)

    pai.appendChild(novoElemento)
    
    btnLixeira.addEventListener("click",(evt)=>{
        novoElemento.remove(evt.target)
        btnLixeira.remove(evt.target)
    })
})
