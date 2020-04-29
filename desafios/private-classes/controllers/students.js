const fs = require('fs')
const data = require('../data.json')
const Intl = require('intl')
const { age, graduation, date } = require('../utils')


exports.index = function(req, res){
   
   const listedMembers = data.members

   for (const member of listedMembers) {
       const services = member.services.toString().split(",")
       member.services = services
   }

   return res.render('members/index', {members: listedMembers})
}

exports.create = function(req, res){
    return res.render('members/create')
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

    const id = Number(data.members.length + 1)
    

    data.members.push({
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

        return res.redirect('members')
        
    })

}

exports.show = function(req, res) {
    const { id } = req.params

    const foundMembers = data.members.find(function(member){
        return member.id == id
    })

    if (!foundMembers) return res.send("Professor não encontrado!")

    const member = {
        ...foundMembers,
        age: age(foundMembers.birth),
        education: graduation(foundMembers.education),
        services: foundMembers.services.toString().split(","),
        created_at: new Intl.DateTimeFormat('pt-BR').format(foundMembers.created_at),
    }


    return res.render('members/show', { member })
}

exports.edit = function(req,res){

    const { id } = req.params

    const foundMembers = data.members.find(function(member){
        return member.id == id
    })

    if (!foundMembers) return res.send('Professor não encontrado')

    const member = {
        ...foundMembers,
        birth: date(foundMembers.birth)
    }


    return res.render('members/edit', { member })
}

exports.update = function(req, res) {

    const id = req.params.id
    let index = 0

    console.log(id)
    const foundMembers = data.members.find(function(member, foundIndex){
        if (id == member.id) {
            index = foundIndex
            return true
        }
    })

    if (!foundMembers) return res.send("Professor não encontrado")

    const members = {
        ...foundMembers,
        ...req.body,
        birth: Date.parse(req.body.birth),
        id: Number(req.params.id)
    }

    data.members[index] = members
    
    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if (err) return res.send('Professor não encontrado!')

        return res.redirect(`/members/${id}`)
    })

}

exports.delete = function (req, res) {
    const { id } = req.body

    const filteredMembers = data.members.filter(function(member){
        return member.id != id
    })

    data.members = filteredMembers

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
        if (err) return res.sed("Write file error!")
    } )

    return res.redirect('members')

}