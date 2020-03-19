const express = require('express') //1
const server = express() //2

//4 
// "/" é a minha rota principal
server.get("/", function(req, res){ // assim que der certo o .get, executa a funçao req, que é a requisiçao ( o servidor ouvindo o usuario enviar algo) e res, responde algo. O servidor sempre ouve e responde algo req e res
    return res.send("Hi! How is going?")
})

server.listen(5000, function() { //3
    console.log("Server is running")
})
