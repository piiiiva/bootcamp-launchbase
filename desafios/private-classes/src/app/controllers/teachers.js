const { age, graduation, date } = require('../../lib/utils')
const Teacher = require('../models/Teacher')

module.exports = {
    index(req, res) {
        Teacher.all(function(teachers) {

        for (const teacher of teachers) {
            const subject_taught = teacher.subject_taught.toString().split(",")
            teacher.subject_taught = subject_taught
        }

            return res.render('teachers/index', { teachers })   
        })
    },
    create(req, res) {
        return res.render('teachers/create')
    },
    post(req, res) {
        const keys = Object.keys(req.body)

        for (key of keys) {
            if (req.body[key] == "")
                return res.send('Por favor, preencha todos os campos')
        }

        Teacher.create(req.body, function(teacher) {
            return res.redirect(`teachers/${teacher.id}`)
        })  
    },
    show(req, res) {
        Teacher.find(req.params.id, function(teacher){
            if (!teacher) return res.send("Professor não encontrado!") 

            teacher.age = age(teacher.birth_date)
            teacher.education_level = graduation(teacher.education_level)
            teacher.subject_taught = teacher.subject_taught.split(",")
            teacher.created_at = date(teacher.created_at).format
        
            return res.render('teachers/show', { teacher })
        })
    },
    edit(req, res) {
        Teacher.find(req.params.id, function(teacher){
            if (!teacher) return res.send("Professor não encontrado!") 

            teacher.birth_date = date(teacher.birth_date).iso
           
        
            return res.render('teachers/edit', { teacher })
        })
    
        // const teacher = {
        //     ...foundTeachers,
        //     birth: date(foundTeachers.birth).iso
        // }
    
    
        // return res.render('teachers/edit', { teacher })
    },
    update(req, res) {
        // const id = req.params.id
        // let index = 0
    
        // console.log(id)
        // const foundTeachers = data.teachers.find(function(teacher, foundIndex){
        //     if (id == teacher.id) {
        //         index = foundIndex
        //         return true
        //     }
        // })
    
        // if (!foundTeachers) return res.send("Professor não encontrado")
    
        // const teachers = {
        //     ...foundTeachers,
        //     ...req.body,
        //     birth: Date.parse(req.body.birth),
        //     id: Number(req.params.id)
        // }
    
        // data.teachers[index] = teachers
        
        // fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        //     if (err) return res.send('Professor não encontrado!')
    
        //     return res.redirect(`/teachers/${id}`)
        // })
        return
    },
    delete(req, res) {
        // const { id } = req.body

        // const filteredTeachers = data.teachers.filter(function(teacher){
        //     return teacher.id != id
        // })
    
        // data.teachers = filteredTeachers
    
        // fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
        //     if (err) return res.sed("Write file error!")
        // } )
    
        // return res.redirect('teachers')
        return
    },
}
