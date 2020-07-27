const input = document.querySelector('input[name="price"]')
input.addEventListener("keydown", function(e) {
  
  setTimeout(function() {
    let { value } = e.target
  
    value = value.replace(/\D/g, "") // pega tudo o que não é Dígito e troca por vazio
    
    value = new Intl.NumberFormat('pt-BR', {
      style: 'currency', // 1.000,00 que é o do Brasil pt-BR
      currency: 'BRL' // R$
    }).format(value/100)

    e.target.value = value
  }, 1)
})
