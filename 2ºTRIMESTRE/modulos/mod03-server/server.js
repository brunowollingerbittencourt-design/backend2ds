const http = require('node:http')
const path = require('node:path')
const fs = require('node:fs')
const porta = 7777
// Carrega o caminho dos arquivos
const home = path.join(__dirname, 'Pages/index.html')
const sobre = path.join(__dirname, 'Pages/sobre.html')
const error = path.join(__dirname, 'Pages/error.html')

const server = http.createServer((req, res) => {
   // qual informação eu tenho?
   const urlTratada = new URL(req.url, `http://${req.headers.host}`) //limpa a url e transforma em objeto
   const recurso =  urlTratada.pathname //em qual rotas estamos?

   if(recurso === '/') { //Página inicial
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    return res.end(fs.readFileSync(home, 'utf-8'));
   }
   if(recurso === '/sobre') {
    res.statusCode = 200; //Sobre nós
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    return res.end(fs.readFileSync(sobre, 'utf-8'));
   }
   else {  
    res.statusCode = 404; //404
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    return res.end(fs.readFileSync(error, 'utf-8'));
   }

});

server.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`)
})