const cards = [
	{
		rank: 'queen';
		suit: 'hearts';
		cardImage: 'images/queen-of-hearts.png';
	},
	{
		rank: 'queen';
		suit: 'diamonds';
		cardImage: 'images/queen-of-diamonds';
	},
	{
		rank: 'king';
		suit: 'hearts';
		cardImage: 'images/king-of-hearts.png';
	},
	{
		rank: 'king';
		suit: 'diamonds';
		cardImage:'images/king-of-diamonds'
	}

];
let cardsInPlay = [];
function checkForMatch(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
	  console.log("You found a match!");
	} else {
	  console.log("Sorry, try again.");
}
}
function flipCard(cardId) {
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].suit);
	if (cardsInPlay.length === 2){
		checkForMatch();
	}
}
flipCard(0);
flipCard(2);
