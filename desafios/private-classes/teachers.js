const fs = require('fs')
const data = require('./data.json')

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