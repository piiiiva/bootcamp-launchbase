const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

const courses = require('./data-courses')
const infoCourses = require('./data-infoCourses')

server.use(express.static('public'))
server.set('view engine', "njk")

nunjucks.configure('views', {
    express: server,
    autoescape: false,
    noCache: true,
})


server.listen(5000, () => {
    console.log('Piva server is running')
})

server.get('/', function(req, res) {
    return res.render("index", { courses })
})

server.get('/courses', (req, res) => {

    res.render('courses')
})

server.get('/courses/:id', function(req, res) {
    const id = req.params.id
    console.log(req.params.id)

    const course = infoCourses.find(function(course){
        return course.id == id
    })

    if (!course) {
        return res.send('Not Found')
    }
    return res.render('courses', { course })

})