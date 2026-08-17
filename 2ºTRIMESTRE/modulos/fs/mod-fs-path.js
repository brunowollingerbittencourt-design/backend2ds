const fs = require('fs')
const path = require('path')
const chalk = require('chalk').default // padrão

try {
    //              módulo-fs      diretório    arquivo    codificação
    const arquivo = fs.readFileSync(path.join(__dirname, 'festa.md'), 'utf-8')
    console.log(chalk.green('Arquivo carregado com sucesso!'))
    console.log(chalk.bgGreen(arquivo))
} catch (erro) {
    console.log(chalk.bgYellowBright('👀 Atenção!'))
    console.error(chalk.red('💢 Deu ruim:'))
    console.error(chalk.bgRed(erro.message))
}