// Cáclulco de aposentadoria
/*
O tempo de contribuição mínimo para homens é de 35 anos e, para mulheres, 30 anos;
Utilizando a regra 85-95, a soma da idade com o tempo de contribuição do homem precisa ser de no mínimo 95 anos, enquanto a mulher precisa ter no mínimo 85 anos na soma;
Com base nas regras acima imprima na tela as mensagens:

SE a pessoa estiver aposentada: Silvana, você pode se aposentar!;
SE a pessoa NÃO estiver aposentada: Silvana, você ainda não pode se aposentar!;
*/

const contribuinte = 'Silvana'
const sexo = "F"
const idade = 55
const contribuicao = 30

/* if (sexo == "F") {
    if (contribuicao = 30 && idade + contribuicao >= 85) {
        console.log(`${contribuinte}, você pode se aposentar!`)
        
    } else {
        console.log(`${contribuinte}, você ainda nao pode se aposentar`)        
    }
    
} else {
    if (contribuicao = 35 && idade + contribuicao >= 95) {
        console.log(`${contribuinte}, você pode se aposentar!`)
        
    } else {
        console.log(`${contribuinte}, você ainda nao pode se aposentar`)  
    }
    
} */

const calculoContribuicao = idade + contribuicao

const mulherPodeAposentar = sexo == 'F' && contribuicao >= 30 && calculoContribuicao >= 85
const homemPodeAposentar = sexo == 'M' && contribuicao >= 35 && calculoContribuicao >= 95

 if (mulherPodeAposentar || homemPodeAposentar) {
    message = `${contribuinte}, você pode se aposentar!`

 } else {
    message = `${contribuinte}, você ainda nao pode se aposentar`
     
 }

 console.log(message)

