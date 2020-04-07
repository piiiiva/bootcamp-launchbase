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
    console.log(req.originalUrl)
    res.render('courses')
})

server.get('/courses/:id', function(req, res) {
    const id = req.params.id
    console.log(req.originalUrl)

    const course = infoCourses.find(function(course){
        return course.id == id
    })

        if (!course) {
            return res.send('Not Found')
        }

 
    
    return res.render('courses', { course })
    // await infoCourses.forEach(course => {
    // if (id == course.id) {
    //         return response.render('courses', { course })
    //     }
    // });

    // return response.send( 'Não existe esse curso' )

    // var curso

    // infoCourses.forEach(curso => {
    //     if (id === curso.id) {

    //         this.curso = curso
    //     }
        
    // }); 

    // if (!curso) {
    //     return response.render('courses', curso)
    // } else {
    //     return response.send('nao deu')
    // }

})