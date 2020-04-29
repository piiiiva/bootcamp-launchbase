const fs = require('fs')
const data = require('../data.json')
const Intl = require('intl')
const { age, graduation, date } = require('../utils')


exports.index = function(req, res){
   
   const listedTeachers = data.teachers

   for (const teacher of listedTeachers) {
       const services = teacher.services.toString().split(",")
       teacher.services = services
   }

   return res.render('teachers/index', {teachers: listedTeachers})
}

exports.create = function(req, res){
    return res.render('teachers/create')
}

exports.post = function(req, res){
    const keys = Object.keys(req.body)

    for (key of keys) {
        if (req.body[key] == "")
            return res.send('Por favor, preencha todos os campos')
    }

    let { avatar_url, name, birth, education, classType, services } = req.body

    birth = Date.parse(req.body.birth)
    const created_at = Date.now()

    const id = Number(data.teachers.length + 1)
    

    data.teachers.push({
        id,
        avatar_url,
        name,
        birth,
        education,
        classType,
        services,
        created_at
    })

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if (err) return res.send("Erro de escrita!!!")

        return res.redirect('teachers')
        
    })

}

exports.show = function(req, res) {
    const { id } = req.params

    const foundTeachers = data.teachers.find(function(teacher){
        return teacher.id == id
    })

    if (!foundTeachers) return res.send("Professor não encontrado!")

    const teacher = {
        ...foundTeachers,
        age: age(foundTeachers.birth),
        education: graduation(foundTeachers.education),
        services: foundTeachers.services.toString().split(","),
        created_at: new Intl.DateTimeFormat('pt-BR').format(foundTeachers.created_at),
    }


    return res.render('teachers/show', { teacher })
}

exports.edit = function(req,res){

    const { id } = req.params

    const foundTeachers = data.teachers.find(function(teacher){
        return teacher.id == id
    })

    if (!foundTeachers) return res.send('Professor não encontrado')

    const teacher = {
        ...foundTeachers,
        birth: date(foundTeachers.birth)
    }


    return res.render('teachers/edit', { teacher })
}

exports.update = function(req, res) {

    const id = req.params.id
    let index = 0

    console.log(id)
    const foundTeachers = data.teachers.find(function(teacher, foundIndex){
        if (id == teacher.id) {
            index = foundIndex
            return true
        }
    })

    if (!foundTeachers) return res.send("Professor não encontrado")

    const teachers = {
        ...foundTeachers,
        ...req.body,
        birth: Date.parse(req.body.birth),
        id: Number(req.params.id)
    }

    data.teachers[index] = teachers
    
    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if (err) return res.send('Professor não encontrado!')

        return res.redirect(`/teachers/${id}`)
    })

}

exports.delete = function (req, res) {
    const { id } = req.body

    const filteredTeachers = data.teachers.filter(function(teacher){
        return teacher.id != id
    })

    data.teachers = filteredTeachers

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
        if (err) return res.sed("Write file error!")
    } )

    return res.redirect('teachers')

}