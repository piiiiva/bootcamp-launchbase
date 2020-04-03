const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const dataVideos = require('./dataVideos')

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure('views', {
    express: server,
    autoescape: false,
    watch: true,

    
})

server.listen(5000, function () {
    console.log("Piva server is running")
})

server.get("/portfolio", function(req, res){
    return res.render("portfolio", { dataVideos })
})

server.get("/", function(req, res){
    const about = {
        avatar: "profilepiva.jpeg",
        name: "Rodrigo Piva",
        role: "Jr Web Developer",
        description: 'In love with web developer world! A <a href="https://skylab.rocketseat.com.br/dashboard" target="blank">Rocketseat</a> student, full-stack developer, focused on learn and help you to find a way!',
        socialMedias: [
            {name: "Github", url: "https://github.com/piiiiva"},
            {name: "Linkedin", url: "https://www.linkedin.com/in/rodrigo-piva-10772827/"},
            {name: "Twitter", url: "https://twitter.com/piiiiva"},
            {name: "Instagram", url: "https://www.instagram.com/piiiiva/"},

        ]
    }

    return res.render("about", { about })
})


server.use(function(req, res) {
    res.status(404).render("not-found");
  });