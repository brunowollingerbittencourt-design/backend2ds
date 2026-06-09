const fs = require ('fs')
//            modulo-fs          diretorio  arquivo   codificacao
const arquivo = fs.readFileSync(__dirname+'./festa.md')
console.log(arquivo)