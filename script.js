import { Deck, url } from "./deck.js"
import deckStr from "./deck.js"

let buttons = document.querySelectorAll('.btn')
let hitButton = document.querySelector('#hit-cards')
let playerCards = document.querySelector('#player-cards')

let deck = new Deck()

console.log("url du module", url)
console.log("variable Deck", deckStr)

hitButton.addEventListener('click', async e => {
  e.preventDefault()


  let cards = await deck.fetchCards()


  cards.forEach(card => {
    let cardContainer = document.createElement("div")
    cardContainer.classList.add("card")

    let label = document.createElement("p")
    label.innerText = card.value + " of " + card.suit

    let cardImage = document.createElement("img")
    cardImage.src = card.image

    cardContainer.appendChild(label)
    cardContainer.appendChild(cardImage)

    playerCards.appendChild(cardContainer)
  })


  console.log(dataCards)
})