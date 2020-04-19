const fs = require('fs')
const data = require('./data.json')
const { age, date } = require('./utils')


//show
exports.show = function(req, res) {
    const { id } = req.params

    const foundInstructor = data.instructors.find(function(instructor){
        return instructor.id == id
    })

    if (!foundInstructor) return res.send('Instructor not found')

    const instructor = {
        ...foundInstructor,
        age: age(foundInstructor.birth),
        services: foundInstructor.services.split(","),
        created_at: new Intl.DateTimeFormat('pt-BR').format(foundInstructor.created_at),
        
    }
    
    return res.render('instructors/show', { instructor })
}

// create
exports.post = function(req, res) {
    //["avatar_url","name","birth","gender","services"]
    const keys = Object.keys(req.body)
    
    for (key of keys) {
        // req.body.key == ""
        if (req.body[key] == "") // esse key representa cada "chave" do req.body
            return res.send('Please, fill all fields')
    
    }
    let {avatar_url, birth, name, services, gender} = req.body

    birth = Date.parse(req.body.birth)
    const created_at = Date.now()
    const id = Number(data.instructors.length + 1) // envolver no construtor Number para garantir que será um número sempre


    //[{...}]
    data.instructors.push({
        id,
        avatar_url,
        name,
        birth,
        gender,
        services,
        created_at,

    })

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if (err) return res.send("write file error!!!")
    
        return res.redirect('instructors')
    })
 
}

// edit
exports.edit = function(req,res){
    const { id } = req.params

    const foundInstructor = data.instructors.find(function(instructor){
        return instructor.id == id
    })

    if (!foundInstructor) return res.send('Instructor not found')

    const instructor = {
        ...foundInstructor,
        birth: date(foundInstructor.birth)
    }

    return res.render('instructors/edit', { instructor })
}