const modalOverlay = document.querySelector('.modal-overlay') ; // docmunet é como se fosse o global do meu html e o js entende que cada elemento do html é um objeto
const cards = document.querySelectorAll('.card') // Uso querySelectorAll quando tenho diversos elementos do mesmo tipo 
// seleciono um elemento do html mas preciso colocar ele dentro de uma constante aqui no js pra poder trabalhar de forma melhor
// no caso de precisar fazer um for conforme abaixo 


for (let card of cards) {
    card.addEventListener("click", function(){ // preciso informar como parametro o evento "click" e o que fazer quando esse evento ocorrer, a funçao!
        const videoId = card.getAttribute("id") /* Antes de criar eu defini ela no querySelector no iframe, decidi que seria dinamico pra pegar o id e pra fazer isso 
        tem que colocar um id para cada <div class="card" id="id do vídeo" assim, o for percorre todos os cards e pega o id do video de cada um e substitui
        no src do iframe no modalOverlay.querySelector("iframe").src */
        modalOverlay.classList.add('active') // essa é funçao principal dessa funçao, quando clicar eu vou adicionar a classe active na minha <div class= "modal-overlay"
        modalOverlay.querySelector("iframe").src = `https://youtube.com/embed/${videoId}` // poderia ser document.classList.add ... mas eu já conehço o modal e o script nao precisa percorrer o html inteiro procurando o elemento que eu quero
    })
}

if (document.querySelector(".close-modal") != null) {
    document.querySelector(".close-modal").addEventListener("click", function() {
        modalOverlay.classList.remove("active") // preciso remover a funçao do evento anterior para voltar ao normal a página. Se nao fizer isso a <div class= "modal-overlay"> vai continuar com a class = "active" e manter as propriedades definidas no css, opacidade 1 no caso 
        modalOverlay.querySelector("iframe").src = "" // se nao fizer isso o veio vai continuar rodando mesmo depoios de fechar a janela
    })
}


/* CONTENTPAGE*/
const modalOverlayContentPage = document.querySelector('.contentPage-modal-overlay');
const cardsContentPage = document.querySelectorAll('.card-contentPage');


for (let cardContentPage of cardsContentPage) {
    cardContentPage.addEventListener("click", function(){
        modalOverlayContentPage.classList.add('active')
        
        const courseId = cardContentPage.getAttribute("id")
        modalOverlayContentPage.querySelector("iframe").src = `https://rocketseat.com.br/${courseId}`

    })
    
}

modalOverlayContentPage.querySelector('.close-modal-contentPage').addEventListener("click", function(){
    modalOverlayContentPage.classList.remove('active')
    modalContentPage.classList.remove("maximized")
    modalOverlayContentPage.querySelector("iframe").src = "" // faz isso para que quando feche nao fique rodando alguma mídia mesmo depois de fechar
    
})

const modalContentPage = document.querySelector(".contentPage-modal")
const maximizeModalContentPage = document.querySelector(".maximize-modal-contentPage")


maximizeModalContentPage.addEventListener("click", function(){
    if (modalContentPage.classList.contains("maximized")) {
        modalContentPage.classList.remove("maximized")
    } else {
        modalContentPage.classList.add("maximized")
    } 
})


//https://skylab.rocketseat.com.br/static/0828532024cb46921a6b5e941f8d788d.svg