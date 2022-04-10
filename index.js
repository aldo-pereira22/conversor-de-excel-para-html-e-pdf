const fs = require('fs')

fs.readFile("./aldo.pereira", { encoding: 'utf-8' }, (erro, data) => {
    if (erro) {
        console.log("Erro na leitura")
    } else {
        console.log(data)
    }
})