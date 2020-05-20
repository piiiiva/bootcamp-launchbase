// 1573568256893

function age(timestamp) {
    const today = new Date() // criando um novo objeto de data
    const birthDate = new Date(timestamp)

    // Verifica o ano
    let age = today.getFullYear() - birthDate.getFullYear()

    // Verifica se o mês atual é positivo, zero ou negativo
    const month = today.getMonth() - birthDate.getMonth()

    // - 1 se for < e verifica o dia se o mês for igual, se o dia for menor - 1
    if (month < 0 || month == 0 && today.getDate() < birthDate.getDate()) {
        age = age - 1
    }

    return age
}



// 2020 - 1989 = 31
// 04 - 11 = -7
// 11 - 11 = 0
// 12 - 11 = 1
