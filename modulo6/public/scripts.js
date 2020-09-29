const Mask = {
  apply(input, func) {
    setTimeout(function() {
      input.value = Mask[func](input.value)
    }, 1)
  },
  formatBRL(value) {
    value = value.replace(/\D/g, "") // pega tudo o que não é Dígito e troca por vazio
    
    return value = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value/100)
  }
}

/*
const input = document.querySelector('input[name="price"]')
input.addEventListener("keydown", function(e) {

  setTimeout(function() {
    let { value } = e.target
  
    value = value.replace(/\D/g, "")
  
    value = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value/100)
  }, 1)

})
*/