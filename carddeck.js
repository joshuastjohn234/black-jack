
// MAKE GLOBLE VAR TO GO INTO CLASSES AND FUNTION
// APPEND DECK SHUFFLE URL TO DECK DIV
const DECK_URL = `https://deckofcardsapi.com/api/deck/new/`;
// MAKE A FUNCTION TO MERGE SUITS AND VAULE TOGETHER
const SUITS = ['A','S', 'D', 'H' ,' C'] ;
const Vaule =[ 'A','1','2','3','4','5','6','7','8','9','10','J','Q','K'];
class Deck {
    constructor(cards) {
        this.cards = cards
    }
}
// use api to shuffle the deck
let deck

shuffle () {
    


class Cards {
    constructor(suits,value) {
        this.suits = suits;
        this.value = this.value;
    }
}
// MAKE A FUNCTION TO MERGE SUITS AND VAULE TOGETHER
function newDeck() {
 return SUITS.flatmap(suits=>{
  return Value.map(value => {
 return new Card (suits,value)
  })   
 })
};