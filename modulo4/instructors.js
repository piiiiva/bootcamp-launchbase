const fs = require('fs')
const data = require('./data.json')

// create
exports.post = function(req, res) {
    //["avatar_url","name","birth","gender","services"]
    const keys = Object.keys(req.body)
    
    for (key of keys) {
        // req.body.key == ""
        if (req.body[key] == "") // esse key representa cada "chave" do req.body
            return res.send('Please, fill all fields')
    
    }

    data.instructors.push(req.body)

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if (err) return res.send("write file error!!!")
    
        return res.redirect('instructors')
    })
    // return res.send(req.body)
    
}


// update

// delete