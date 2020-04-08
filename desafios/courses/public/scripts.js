const courseCards = document.querySelectorAll('.card-contentPage')

for (let card of courseCards) {
    card.addEventListener("click", function() {
        const courseId = card.getAttribute("id")  //card.getAttribute("id")

        
        window.location.href = `/courses/${courseId}`
      
    })
}   
