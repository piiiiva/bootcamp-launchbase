const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.use(express.static('public'))
server.set('view engine', "njk")

nunjucks.configure('views', {
    express: server
})


server.listen(5000, () => {
    console.log('Piva server is running')
})

server.get('/', function(req, res) {
    return res.render("index")
})

server.get('/launchbase', (request, response) => {
    return response.render('launchBase')
})