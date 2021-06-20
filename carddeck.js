
const cardSUITS = ['♠', '♦', '♥' ,'♣'] ;
const Value =[ 'A','2','3','4','5','6','7','8','9','10','J','Q','K'];
  export default class DECK{
     constructor(cards = playDeck()){
         this.cards = cards
         
     }  
     get numberOfCards(){
       return this.cards.length
     }
    
    pop() {
      return this.cards.shift()
    }
    
    push(card) {
    this.cards.push(card)
    }

  shuffle() {
    this.cards.sort((a, b)=> Math.random() - .5)
    }  
  }
  class CARD {
      constructor(suit,value,) {
          this.suit = suit
          this.value = value
          
   }
   get color () {
     return this.suit ==='♠' || this.suit === '♣' ? 'black' : 'red'
   }

    getHTML() {
     const cardDiv= document.createElement('div');
     cardDiv.innerText = this.suit;
     cardDiv.classList.add("card", this.color);
     cardDiv.dataset.value = `${this.value} ${this.suit}`
     return cardDiv
     
   }  
}  

function playDeck() {
    return cardSUITS.flatMap(suit => {
    return Value.map(value => {
    return new CARD(suit,value ) 
    })
  })
}
