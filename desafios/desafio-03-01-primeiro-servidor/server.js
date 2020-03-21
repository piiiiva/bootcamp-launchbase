const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.use(express.static('public'))

server.set("view engine", "html")

nunjucks.configure('views', {
    express: server
})

server.listen(5000, function () {
    console.log("Piva server is running")
})

server.get("/", function(get, res){
    return res.render("about")
})

server.get("/courses", function(get, res){
    return res.render("courses")
})

server.use(function(req, res) {
    res.status(404).render("not-found");
  });