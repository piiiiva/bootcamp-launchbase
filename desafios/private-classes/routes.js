const express = require('express')
const routes = express.Router()
const teachers = require("./controllers/teachers")
const students = require("./controllers/students")

routes.get('/', function(req, res){
    return res.redirect('teachers')
})
routes.get('/teachers', teachers.index)
routes.get('/teachers/new', teachers.create)
routes.post('/teachers', teachers.post) 
routes.get('/teachers/:id', teachers.show)
routes.get('/teachers/:id/edit', teachers.edit)
routes.put('/teachers/:id', teachers.update)
routes.delete('/teachers', teachers.delete)

routes.get('/students', students.index)
routes.get('/students/new', students.create)
routes.post('/students', students.post) 
routes.get('/students/:id', students.show)
routes.get('/students/:id/edit', students.edit)
routes.put('/students/:id', students.update)
routes.delete('/students', students.delete)




module.exports = routes