fetch('https://api.github.com/users.diego3g')
    .then(response => {
        response.text()
        .then(body =>{
            console.log(body)
        })
    })
    .catch(err =>{
        console.log("deu ruim chara")
    })
    .finally(() =>{
        console.log('deu')
    })