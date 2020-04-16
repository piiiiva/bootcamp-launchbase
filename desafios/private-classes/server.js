const express = require('express') //1
const nunjucks = require('nunjucks') // nossa template engine o motor
const routes = require('./routes')

const server = express() //2

// o express vai ficar observando essa pasta public pra servir os arquivos estáticos, onde ficara o css por exemplo
server.use(express.static('public')) // 7 tenho que criar uma pasta public que vai conter o css dentre outras coisas
server.use(routes)

server.set("view engine", "njk") //5 -- 8 trocar "html" por "njk" e renomeio todos os meus arquivos html por njk ... precisa instalar o templateNujucks e habilitar o emmet do javascrip no ctrl+shit+P settings.json .. se nao habilitar nao vai funcionar o div.class por exemplo

nunjucks.configure("views", { //6
    express: server,
    autoescape: false,
    noCache: true, // para desenvolvimento
    
})

server.listen(5000, function() { //3
    console.log("Server is running")
})
