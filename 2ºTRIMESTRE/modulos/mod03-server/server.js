const http = require('node:http')
const porta = 8005

const server = http.createServer((req, res)=>{
     //qual informacao tenho?
     res.setHeader('Content-Type', 'text/plain')
     res.end('Bem vindo(a)! \nHomepage \\o/')
})
server.listen(porta, ()=>{
console.log(`Server rodando na porta $`)
})


