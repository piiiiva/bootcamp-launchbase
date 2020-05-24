const Intl = require('intl')
const { age, graduation, date } = require('../../lib/utils')
const Teacher = require('../models/Teacher')

module.exports = {
    index(req, res) {
        // const listedTeachers

        // for (const teacher of listedTeachers) {
        //     const services = teacher.services.toString().split(",")
        //     teacher.services = services
        // }
     
        return res.render('teachers/index')
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


    // let { avatar_url, name, birth, education, classType, services } = req.body

    // birth = Date.parse(req.body.birth)
    // const created_at = Date.now()
    

    // data.teachers.push({
    //     id,
    //     avatar_url,
    //     name,
    //     birth,
    //     education,
    //     classType,
    //     services,
    //     created_at
    // })
        
    },
    show(req, res) {
        // const { id } = req.params

        // const foundTeachers = data.teachers.find(function(teacher){
        //     return teacher.id == id
        // })
    
        // if (!foundTeachers) return res.send("Professor não encontrado!")
    
        // const teacher = {
        //     ...foundTeachers,
        //     age: age(foundTeachers.birth),
        //     education: graduation(foundTeachers.education),
        //     services: foundTeachers.services.toString().split(","),
        //     created_at: new Intl.DateTimeFormat('pt-BR').format(foundTeachers.created_at),
        // }
    
    
        // return res.render('teachers/show', { teacher })
        return
    },
    edit(req, res) {
        // const { id } = req.params

        // const foundTeachers = data.teachers.find(function(teacher){
        //     return teacher.id == id
        // })
    
        // if (!foundTeachers) return res.send('Professor não encontrado')
    
        // const teacher = {
        //     ...foundTeachers,
        //     birth: date(foundTeachers.birth).iso
        // }
    
    
        // return res.render('teachers/edit', { teacher })
        return
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
