// Cálculo de IMC

const nome = 'Rodrigo'
const peso = 106
const altura = 1.90

const imc = peso / (altura * altura)
console.log(imc)

if (imc >= 30) {
    console.log(`${nome}, você está acima do peso!`)    
} else {
    console.log(`${nome}, você não está acima do peso`)
    
}

