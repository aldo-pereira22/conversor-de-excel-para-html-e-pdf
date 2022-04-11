const fs = require('fs')
const util = require('util')


// var novaFuncaoComPromise = util.promisify(funcaoVelhaComCallback)

class Reader {

    constructor() {
        this.reader = util.promisify(fs.readFile)
    }
    async Read(filepath) {

        try {
            return await this.reader(filepath, 'utf8')

        } catch (error) {
            return undefined
        }

    }
}

module.exports = Reader