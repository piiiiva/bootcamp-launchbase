const fs = require('fs')
const data = require('../data.json')
const Intl = require('intl')
const { date, grade } = require('../utils')


exports.index = function(req, res){
   
    const listedStudents = [...data.students]

    const newStudents = listedStudents.map((student) => ({
        ...student, education: grade(student.education)
    }))
   
   console.log(newStudents)

   return res.render('students/index', {students: newStudents})
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

    birth = Date.parse(req.body.birth)

    let id = 1
    const lastStudent = data.students[data.students.length - 1]

    if (lastStudent) {
        id = lastStudent.id + 1
    }
    
    data.students.push({
        id,
        ...req.body,
        birth
    })

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if (err) return res.send("Erro de escrita!!!")

        return res.redirect(`students/${id}`)
        
    })

}

exports.show = function(req, res) {
    const { id } = req.params

    const foundStudents = data.students.find(function(student){
        return student.id == id
    })

    if (!foundStudents) return res.send("Aluno não encontrado!")

    const student = {
        ...foundStudents,
        birth: date(foundStudents.birth).birthDay,
        education: grade(foundStudents.education),
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
        birth: date(foundStudents.birth).iso
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