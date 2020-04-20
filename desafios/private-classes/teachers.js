const fs = require('fs')
const data = require('./data.json')
const Intl = require('intl')
const { age, graduation } = require('./utils')


exports.show = function(req, res) {
    const { id } = req.params

    const foundTeachers = data.teachers.find(function(teacher){
        return teacher.id == id
    })

    if (!foundTeachers) return res.send("Professor não encontrado!")

    const teachers = {
        ...foundTeachers,
        age: age(foundTeachers.birth),
        education: graduation(foundTeachers.education),
        services: foundTeachers.services.split(","),
        created_at: new Intl.DateTimeFormat('pt-BR').format(foundTeachers.created_at),
    }


    return res.render('teachers/show', { teachers })
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
    console.log(created_at)
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

