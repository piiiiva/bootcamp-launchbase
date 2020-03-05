const modalOverlay = document.querySelector('.modal-overlay') ; // docmunet é como se fosse o global do meu html e o js entende que cada elemento do html é um objeto
const cards = document.querySelectorAll('.card') // Uso querySelectorAll quando tenho diversos elementos do mesmo tipo 

for (let card of cards) {
    card.addEventListener("click", function(){
        modalOverlay.classList.add('active')
    })
}