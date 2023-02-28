
let deckApiUrl = 'https://deckofcardsapi.com/api/deck'
let drawButton = document.querySelector('#draw-cards');
let playerCards = document.querySelector('#player-cards');


drawButton.addEventListener('click', function(e) {
  e.preventDefault()

  fetch(deckApiUrl + "/new/draw/?count=2")
    .then(response => response.json())
    .then(data => data.cards)
    .then(cards => {
      console.log(cards)
      cards.forEach(card => {
        let container = document.createElement("div")
        container.classList.add("card")
        container.append(document.createTextNode(card.value + " of " + card.suit))

        let imageEl = document.createElement("img")
        imageEl.src = card.image
        container.append(imageEl)

        playerCards.append(container)
      })
    })
})

document.addEventListener('DOMContentLoaded', function() {

})
