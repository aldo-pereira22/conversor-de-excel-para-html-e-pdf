var Reader = require('./Reader')
var Processor = require('./Processor')
var HtmlParser = require('./HtmlParser')
var Table = require('./Table')

var leitor = new Reader()


async function main() {
    var dados = await leitor.Read("./user.csv")
        // console.log(dados)
    var dadosProcessados = Processor.Process(dados)

    var usuarios = new Table(dadosProcessados)

    usuarios.rows.push("João da Silva", "Direito", "DIREITO", "3")

    console.log(usuarios.rowCount)
    console.log(usuarios.columnCount)

    var html = await HtmlParser.Parse(usuarios)

    console.log(html)
}

main()