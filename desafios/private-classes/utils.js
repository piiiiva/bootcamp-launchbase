
module.exports = {
    age: function(timestamp) {
        const today = new Date()
        const birthDate = new Date(timestamp)

        let age = today.getFullYear() - birthDate.getFullYear()
        const month = today.getMonth() - birthDate.getMonth()

        if (month < 0 || month == 0 && today.getDate() <= birthDate.getDate()) {
            age = age -1
        }

        return age
    },
    graduation: function(value) {
        switch (value) {
            case "medio":
                return "Ensino Médio"
            case "tecnico":
                return "Curso Técnico"
            case "bacharelado":
                return "Graduação"
            case "especializacao":
                return "Especialização"
            case "mestrado":
                return "Mestrado"
            case "doutorado":
                return "Doutorado"
        
            default: "Não encontrado"
                break;
        }
    }

}