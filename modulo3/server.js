const express = require('express') //1
const nunjucks = require('nunjucks') // nossa template engine o motor

const server = express() //2

// o express vai ficar observando essa pasta public pra servir os arquivos estáticos, onde ficara o css por exemplo
server.use(express.static('public')) // 7 tenho que criar uma pasta public que vai conter o css dentre outras coisas

server.set("view engine", "html") //5

nunjucks.configure("views", { //6
    express: server
})

//4 
// "/" é a minha rota principal
server.get("/", function (req, res){ // assim que der certo o .get, executa a funçao req, que é a requisiçao ( o servidor ouvindo o usuario enviar algo) e res, responde algo. O servidor sempre ouve e responde algo req e res
    return res.render("index") // vai renderizar o meu site
})

server.get("/portfolio", function (req, res) { //dentro da rota principal procura o /portfolio e o retorno vai ser renderizar a página
    return res.render("portfolio")
})

server.listen(5000, function() { //3
    console.log("Server is running")
})
