const { age, date } = require('../../lib/utils')

module.exports = {
    index(req, res){
        return res.render('instructors/index')
    },
    create(req, res){
        return res.render('instructors/create')
    },
    post(req, res){
            //["avatar_url","name","birth","gender","services"]
        const keys = Object.keys(req.body)
        
        for (key of keys) {
            // req.body.key == ""
            if (req.body[key] == "") {// esse key representa cada "chave" do req.body
                return res.send('Please, fill all fields')
            }
        }

        let {avatar_url, birth, name, services, gender} = req.body
        
        return 
    },
    show(req, res){
        return
    },
    edit(req, res){
        return
    },
    put(req, res){
        //["avatar_url","name","birth","gender","services"]
        const keys = Object.keys(req.body)

        for (key of keys) {
            // req.body.key == ""
            if (req.body[key] == "") {// esse key representa cada "chave" do req.body
                return res.send('Please, fill all fields')
            }
        }

        let {avatar_url, birth, name, services, gender} = req.body

        return
    },
    delete(req, res){
        return
    },
}
