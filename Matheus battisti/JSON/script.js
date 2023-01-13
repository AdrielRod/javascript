const objs = [
    {
        "nome": "Matheus",
        "idade": 18,
        "esta_trabalhando": true,
        "detalhes_profissão":{
            "profissão": "Dev",
            "Empresa": "Empresa X"
        },
        "hobbies": ["teste", 1, true, false, {"nome": "teste"}]
    },
    {
        "nome": "Joao",
        "idade": 25,
        "esta_trabalhando": false,
        "detalhes_profissão":{
            "profissão": "Dev",
            "Empresa": "Empresa X"
        },
        "hobbies": ["teste", 1, true, false, {"nome": "teste"}]
    },
]

//Converter objeto para json

const jsonData = JSON.stringify(objs)
console.log(jsonData)

//COnverter json para objetos

const objData = JSON.parse(jsonData)
console.log(objData)

objData.map((pessoa) =>{
    console.log(pessoa.nome)
})