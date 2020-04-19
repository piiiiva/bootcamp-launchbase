module.exports = {
    age: function(timestamp) {
        const today = new Date() // criando um novo objeto de data
        const birthDate = new Date(timestamp)
    
        let age = today.getFullYear() - birthDate.getFullYear()
        const month = today.getMonth() - birthDate.getMonth()
    
        if (month < 0 ||
            month == 0 && 
            today.getDate() <= birthDate.getDate()) {
            age = age - 1
        }
        
        return age
    },
    date: function(timestamp) {
        const date = new Date(timestamp)

        const year = date.getUTCFullYear()
        const month = `0${date.getUTCMonth() + 1}`.slice(-2) // pega os dois últimos dígitos, se vier 012, vai pegar só 12
        const day = `0${date.getUTCDate()}`.slice(-2)

        return (`${year}-${month}-${day}`)
    }
}

