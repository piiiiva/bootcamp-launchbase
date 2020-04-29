const fs = require('fs')
const data = require('../data.json')
const Intl = require('intl')
const { age, graduation, date } = require('../utils')


exports.index = function(req, res){
   
   const listedStudents = data.students

for (const student of listedStudents) {
    const services = student.services.toString().split(",")
    student.services = services
}
   

   return res.render('students/index', {students: listedStudents})
}

exports.create = function(req, res){
    return res.render('students/create')
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

    const id = Number(data.students.length + 1)
    

    data.students.push({
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

        return res.redirect('students')
        
    })

}

exports.show = function(req, res) {
    const { id } = req.params

    const foundStudents = data.students.find(function(student){
        return student.id == id
    })

    if (!foundStudents) return res.send("Professor não encontrado!")

    const student = {
        ...foundStudents,
        age: age(foundStudents.birth),
        education: graduation(foundStudents.education),
        services: foundStudents.services.toString().split(","),
        created_at: new Intl.DateTimeFormat('pt-BR').format(foundStudents.created_at),
    }


    return res.render('students/show', { student })
}

exports.edit = function(req,res){

    const { id } = req.params

    const foundStudents = data.students.find(function(student){
        return student.id == id
    })

    if (!foundStudents) return res.send('Professor não encontrado')

    const student = {
        ...foundStudents,
        birth: date(foundStudents.birth)
    }


    return res.render('students/edit', { student })
}

exports.update = function(req, res) {

    const id = req.params.id
    let index = 0

    console.log(id)
    const foundStudents = data.students.find(function(student, foundIndex){
        if (id == student.id) {
            index = foundIndex
            return true
        }
    })

    if (!foundStudents) return res.send("Professor não encontrado")

    const students = {
        ...foundStudents,
        ...req.body,
        birth: Date.parse(req.body.birth),
        id: Number(req.params.id)
    }

    data.students[index] = students
    
    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if (err) return res.send('Professor não encontrado!')

        return res.redirect(`/students/${id}`)
    })

}

exports.delete = function (req, res) {
    const { id } = req.body

    const filteredStudents = data.students.filter(function(student){
        return student.id != id
    })

    data.students = filteredStudents

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
        if (err) return res.sed("Write file error!")
    } )

    return res.redirect('students')

}