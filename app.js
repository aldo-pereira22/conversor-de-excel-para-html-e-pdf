var Reader = require('./Reader')
var Writer = require('./Writer')
var Processor = require('./Processor')
var HtmlParser = require('./HtmlParser')
var Table = require('./Table')
var PDFWriter = require('./PDFWriter')

var leitor = new Reader()
var escritor = new Writer()


async function main() {
    var dados = await leitor.Read("./user.csv")
        // console.log(dados)
    var dadosProcessados = Processor.Process(dados)

    var usuarios = new Table(dadosProcessados)

    usuarios.rows.push("João da Silva", "Direito", "DIREITO", "3")

    // console.log(usuarios.rowCount)
    // console.log(usuarios.columnCount)

    var html = await HtmlParser.Parse(usuarios)

    // console.log(html)
    escritor.Write(Date.now() + ".html", html)
    PDFWriter.WritePdf(Date.now() + ".pdf", html)
}

main()