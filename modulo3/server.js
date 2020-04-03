const express = require('express') //1
const nunjucks = require('nunjucks') // nossa template engine o motor

const server = express() //2
const videos = require('./data')

// o express vai ficar observando essa pasta public pra servir os arquivos estáticos, onde ficara o css por exemplo
server.use(express.static('public')) // 7 tenho que criar uma pasta public que vai conter o css dentre outras coisas

server.set("view engine", "njk") //5 -- 8 trocar "html" por "njk" e renomeio todos os meus arquivos html por njk ... precisa instalar o templateNujucks e habilitar o emmet do javascrip no ctrl+shit+P settings.json .. se nao habilitar nao vai funcionar o div.class por exemplo

nunjucks.configure("views", { //6
    express: server,
    autoescape: false,
    noCache: true, // para desenvolvimento
    
})

//4 
// "/" é a minha rota principal
server.get("/", function (req, res){ // assim que der certo o .get, executa a funçao req, que é a requisiçao ( o servidor ouvindo o usuario enviar algo) e res, responde algo. O servidor sempre ouve e responde algo req e res
    const about = {
        avatar: "profilepiva.jpeg",
        name: "Rodrigo Piva",
        role: "Jr Web Developer",
        description: 'In love with web developer world! A <a href="https://skylab.rocketseat.com.br/dashboard" target="blank">Rocketseat</a> student, full-stack developer, focused on learn and help you to find a way!',
        links: [
            {name: "Github", url: "https://github.com/piiiiva"},
            {name: "Linkedin", url: "https://www.linkedin.com/in/rodrigo-piva-10772827/"},
            {name: "Twitter", url: "https://twitter.com/piiiiva"},
            {name: "Instagram", url: "https://www.instagram.com/piiiiva/"},

        ]

    }
        
    return res.render("about", { about })
})


server.get("/portfolio", function (req, res) { //dentro da rota principal procura o /portfolio e o retorno vai ser renderizar a página
    return res.render("portfolio", { items: videos })
})

server.get("/video", (request, response) => {
    const id = request.query.id
    const video = videos.find(function(video) {
        return video.id == id
    })

    if (!video) {
        return response.send('Video not found!')
    }

    return response.render('video', { item: video })

    
})

server.listen(5000, function() { //3
    console.log("Server is running")
})
