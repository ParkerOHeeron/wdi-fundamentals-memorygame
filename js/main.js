const cards = ["queen", "queen", "king", "king"];
let cardsInPlay = [];
let cardOne = cards[0];
let cardTwo = cards[2];
cardsInPlay.push(cardOne);
/*console.log("User flipped" + poppedcard);*/
cardsInPlay.push(cardTwo);
if (cardsInPlay.length === 2){
	if (cardsInPlay[0] == cardsInPlay[1]){
		alert("You found a match!");
	}else{
		alert("Sorry, try again.");
	}
}