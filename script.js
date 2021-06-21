import Deck from './carddeck.js'

// make a function where the vaule of card compare and determine bigger vaule
 const CARD_VALUE_= {
   "2":2,
   "3":3,
   "4":4,
   "5":5,
   "6":6,
   "7":7,
   "8":8,
   "9":9,
   "10":10,
   "J":11,
   "K":13,
   "Q":12,
   "A":14,


 }

const computerCardSlot = document.querySelector(".computer-card-slot")
const playerCardSlot = document.querySelector(".player-card-slot")
const computerDeckElement = document.querySelector('.computer-deck')
const playerDeckElement = document.querySelector('.player-deck')
const text = document.querySelector('.text')


let playerDeck 
let computerDeck
let inRound
let stop
// make a conditon to hide and flip card in  btw rounds
document.addEventListener('click', () => {
  if(stop){
    startGame()
    return
  }

  if(inRound){
    cleanBeforeRound()
  }else
  flipCards()
})


startGame()
function  startGame() {
  const deck = new Deck();
  deck.shuffle()

  
  const deckMidpoint = Math.ceil(deck.numberOfCards/2)
  playerDeck = new Deck(deck.cards.slice(0, deckMidpoint));
  computerDeck = new Deck(deck.cards.slice(deckMidpoint, deck.numberOfCards));
  inRound = false;
  stop = false;

  cleanBeforeRound()
}
 function cleanBeforeRound() {
   inRound= false
   computerCardSlot.innerHTML= '';
   playerCardSlot.innerHTML='';
   text.innerText = '';


   updateDeckCount()
 }
 function flipCards() {
   inRound = true

   const playerCard= playerDeck.pop()
   const computerCard = computerDeck.pop()

   playerCardSlot.appendChild(playerCard.getHTML())
   computerCardSlot.appendChild(computerCard.getHTML())

   updateDeckCount()
   if (RoundWinner(playerCard,computerCard)){
      text.innerText= "you already know 😀"
      playerDeck.push(playerCard);
      playerDeck.push(computerCard);
   }
    else if(RoundWinner(computerCard,playerCard)){
       text.innerText = "womp womp loser😒 "
       computerDeck.push(computerCard)
       computerDeck.push(playerCard)
    } else{
      text.innerText= "Draw nice game 😎"
      playerDeck.push(playerCard);
      computerDeck.push(computerCard);
    }
    if ( isGameOver (playerDeck)){
      text.innerText= " dang I ran out of card i lose 🤬!"
      stop = true;
    } 
    else if(isGameOver(computerDeck)){
        text.innerText = " yeeeehh hawww i win 🤠!!"
    }
    
 }
   

function updateDeckCount() {
  computerDeckElement.innerText = computerDeck.numberOfCards;
  playerDeckElement.innerText = playerDeck.numberOfCards;
  
 } 
 function RoundWinner(cardOne, cardTwo) {
  return CARD_VALUE_[cardOne.value] > CARD_VALUE_[cardTwo.value]
  } 
  function isGameOver(deck){
     return deck.numberOfCards ===0
  }