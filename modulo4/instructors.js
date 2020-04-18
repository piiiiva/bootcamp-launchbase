// create
exports.post = function(req, res) {
    //["avatar_url","name","birth","gender","services"]
    const keys = Object.keys(req.body)
    
    for (key of keys) {
        // req.body.key == ""
        if (req.body[key] == "") // esse key representa cada "chave" do req.body
            return res.send('Please, fill all fields')
    
    }

    return res.send(req.body)
    
}

// update

// delete