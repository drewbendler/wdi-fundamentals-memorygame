console.log("Up and Running!");


const cards = ["queen", "queen", "king", "king" ];

const cardsInPlay = []

function checkForMatch(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You got a match!");
	} else {
		console.log("Sorry, try again.");
	}
}

function flipCard(cardId){

console.log("User flipped " + cards[cardId]);

cardsInPlay.push(cards[cardId]);

return;

};

flipCard(0);
flipCard(2);

checkForMatch();

const cardOne = cards[0];

const cardTwo = cards[2];







	
