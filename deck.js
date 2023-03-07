export const url = 'https://deckofcardsapi.com/api/deck/tew/draw/?count=2'

class Deck {
    constructor() {
      this.deck_id = null
      this.cards = []
    }
  
    async fetchCards() {
      return fetch(url)
            .then(res => res.json())
            .then(json => {
              this.cards = json.cards
              this.deck_id = json.deck_id

              return this.cards
            })
    }
  
    logCards() {
      console.log(this.cards)
    }
 }



 export default Deck

