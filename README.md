# Web-Jack

Intro to Javascript networking and working with an API.

We'll be making a blackjack game with https://www.deckofcardsapi.com/

## 1. Let's start with the layout.

You'll start by building a page to host hour game.

![img.png](img.png)

You can use images of cards with the following logic to get the url :
**https://deckofcardsapi.com/static/img/KS.png** (King of Spades)
**https://deckofcardsapi.com/static/img/5C.png** (5 of Club)

## 2. Let's make actions out those buttons.

Make your buttons do something. You can add event listeners to click of buttons to add logs.

## 3. Let's work with the API.

1. Have a look at the documentation of the API : https://deckofcardsapi.com/
2. Download the following plugin to make your life easier : https://marketplace.visualstudio.com/items?itemName=humao.rest-client
3. Create a file called **api.http** and add the following code :

```http
GET https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1
Accept: application/json
```

You can then run the code by clicking on the **Send Request** button to see the result of the api call.

* Try other crafting other calls from the documentation.
* What happens if you change the url with other parameters ?
* What happens if you change the method to POST ?
* What happens if you change the url to a not existing url ?
* What happens if you change the url to a webpage like google.com ?

## 4. Let's make an API call from within your webpage.

In order to make an API call from within your webpage, you'll need to use the **fetch** function.

If you replace your console.log with the following code :

```javascript
fetch('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
```

* what happens ?
* what does `fetch` returns ?

**TO BE DISCUSSED** in class.

5. Let's use the API to draw cards.

Change/add to your fetch call in order to use the api and add the cards to your page.

6. Let's structure a little bit our code

Add the following class to your script :
```javascript
class Deck {
  constructor() {
    this.deck_id = null
    this.cards = []
  }

  fetchCards() {
    return fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=52')
          .then(res => res.json())
          .then(json => {
            this.cards = json.cards
            this.deck_id = json.deck_id
          })
  }

  logCards() {
    console.log(this.cards)
  }
}
```

* How to use this class from within your listener ?

7. Let's extract our class in a dedicated module

Copy the class in a file called `deck.js`

* How to loaded in your webpage ?
* How to import the class in the script page

**Discuss modules in class**

8. Let's make it a working game !


