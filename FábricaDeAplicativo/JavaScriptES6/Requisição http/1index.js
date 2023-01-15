// https://sujeitoprogramador.com/rn-api/?api=posts

//Acesso o elemento onde vai ficar as listas
let listElement = document.querySelector('#app')

let posts = []

function nutriApp(){
    //Com o fetch, eu faço uma promise, que é uma promessa, que pode dar sucesso ou falha. Caso dê falha, nada acontece, mas caso dê certo, então a resposta da minha promise vai ficar dentro dos parametros e se chamará resposta. Como todo o conteudo está em json, precisamos converter para string, então fazemos com resposta.jso(). COnvertido, então passamos mais uma funcão anonima, onde a nossa array de post vai receber o conteudo da api.
    fetch('https://sujeitoprogramador.com/rn-api/?api=posts')
    .then((resposta) => resposta.json())
    .then((json) => {
        posts = json;

        //Faço todo o mapeamento com cada item e depois crio om as determinadas funções
        posts.map((item) =>{
            let liElement = document.createElement('li')
            let titleElement = document.createElement('strong')
            let imgElement = document.createElement('img')
            let descriptionElement = document.createElement('a')

            let titleText = document.createTextNode(item.titulo)
            titleElement.appendChild(titleText)
            liElement.appendChild(titleElement)

            imgElement.src = item.capa
            liElement.appendChild(imgElement)

            let descritionText = document.createTextNode(item.subtitulo)
            descriptionElement.appendChild(descritionText)
            liElement.appendChild(descriptionElement)

            listElement.appendChild(liElement)
        })
    })
    .catch(() =>{
        console.log("Deu erro")
    })
}
nutriApp()