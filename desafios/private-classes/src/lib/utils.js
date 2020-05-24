
module.exports = {
    age(timestamp) {
        const today = new Date()
        const birthDate = new Date(timestamp)

        let age = today.getFullYear() - birthDate.getFullYear()
        const month = today.getMonth() - birthDate.getMonth()

        if (month < 0 || month == 0 && today.getDate() <= birthDate.getDate()) {
            age = age -1
        }

        return age
    },
    graduation(value) {
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
    },
    date(timestamp) {
        const date = new Date(timestamp)

        const year = date.getUTCFullYear() 
        const month = `0${date.getUTCMonth() + 1}`.slice(-2)
        const day = `0${date.getUTCDate()}`.slice(-2)

        return {
            day,
            month,
            year,
            iso: `${year}-${month}-${day}`,
            birthDay: `${day}/${month}`,
            format: `${day}/${month}/${year}`
        }

    },
    grade(value) {
        switch (value) {
            case "5f":
                return "5º Ano do Ensino Fundamental"
            case "6f":
                return "6º Ano do Ensino Fundamental"
            case "7f":
                return "7º Ano do Ensino Fundamental"
            case "8f":
                return "8º Ano do Ensino Fundamental"
            case "9f":
                return "9º Ano do Ensino Fundamental"
            case "1m":
                return "1º Ano do Ensino Médio"
            case "2m":
                return "2º Ano do Ensino Médio"
            case "3m":
                return "3º Ano do Ensino Médio"

            default: "Não cadastrado"
                break;
        }
    }

}