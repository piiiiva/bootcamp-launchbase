const formDelete = document.querySelector("#form-delete")

formDelete.addEventListener("submit", function(event){
    const confirmation = confirm("Deseja deletar o usuário")
    if (!confirmation) event.preventDefault()
})