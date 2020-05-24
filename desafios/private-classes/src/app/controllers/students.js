const Intl = require('intl')
const { date, grade } = require('../../lib/utils')
const Student = require('../models/Student')

module.exports = {
    index(req, res) {
        Student.all(function(students) {

            const studentsWithGrade = students.map((student) => ({
                ...student, education: grade(student.education)
            }))

            return res.render('students/index', { students: studentsWithGrade })
        })
    //     const listedStudents = [...data.students]

       
    //    console.log(newStudents)
    
    },
    create(req, res) {
        return res.render('students/create')
    },
    post(req, res) {
        const keys = Object.keys(req.body)

        for (key of keys) {
            if (req.body[key] == "")
                return res.send('Por favor, preencha todos os campos')
        }
    
        Student.create(req.body, function(student) {
            return res.redirect(`students/${student.id}`)
        })
              
    },
    show(req, res) {
        // const { id } = req.params

        // const foundStudents = data.students.find(function(student){
        //     return student.id == id
        // })
    
        // if (!foundStudents) return res.send("Aluno não encontrado!")
    
        // const student = {
        //     ...foundStudents,
        //     birth: date(foundStudents.birth).birthDay,
        //     education: grade(foundStudents.education),
        // }
    
    
        // return res.render('students/show', { student }) 
    },
    edit(req, res) {
        // const { id } = req.params

        // const foundStudents = data.students.find(function(student){
        //     return student.id == id
        // })
    
        // if (!foundStudents) return res.send('Professor não encontrado')
    
        // const student = {
        //     ...foundStudents,
        //     birth: date(foundStudents.birth).iso
        // }
    
    
        // return res.render('students/edit', { student }) 
    },
    update(req, res) {
    //     const id = req.params.id
    //     let index = 0
    
    //     console.log(id)
    //     const foundStudents = data.students.find(function(student, foundIndex){
    //         if (id == student.id) {
    //             index = foundIndex
    //             return true
    //         }
    //     })
    
    //     if (!foundStudents) return res.send("Professor não encontrado")
    
    //     const students = {
    //         ...foundStudents,
    //         ...req.body,
    //         birth: Date.parse(req.body.birth),
    //         id: Number(req.params.id)
    //     }
    
    //     data.students[index] = students
        
    //     fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
    //         if (err) return res.send('Professor não encontrado!')
    
    //         return res.redirect(`/students/${id}`)
    //     })  
    },
    delete(req, res) {
        // const { id } = req.body

        // const filteredStudents = data.students.filter(function(student){
        //     return student.id != id
        // })
    
        // data.students = filteredStudents
    
        // fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
        //     if (err) return res.sed("Write file error!")
        // } )
    
        // return res.redirect('students')
    }
}
