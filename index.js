const fs = require('fs')

modificarUsuario("teste", "teste", "teste")

function modificarUsuario(nome, curso, categoria) {

    fs.readFile('./usuario.json', { encoding: 'utf-8' }, (erro, dados) => {
        if (erro) {
            console.log("Um erro aconteceu")
        } else {
            // console.log(dados)
            var conteudo = JSON.parse(dados)
            console.log(conteudo)
            conteudo.nome = nome
            conteudo.curso = curso
            conteudo.categoria = categoria
            console.log(conteudo)

            fs.writeFile('./usuario.json', JSON.stringify(conteudo), (err) => {
                if (err) {

                    console.log("Um erro aconteceu")
                }
            })
        }
    })
}