console.log("Up and Running!");



const cards = [
{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png"
},
{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png"
},
{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"

}
];


 const cardsInPlay = []

function checkForMatch(){
	if (cardsInPlay === 2);

	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You got a match!");
	} else {
		alert("Sorry, try again.");
	}
}

function flipCard(cardElement){
this.getAttribute('data-id');
console.log("User flipped " + cards[cardId].rank);

cardsInPlay.push(cards[cardId].rank);

console.log(cards[cardId].cardImage);
console.log(cards[cardId].suit);



return;




};

function createBoard() {
	for (var i = 0; i < cards.length; i++ ) {
		var newListItem = document.createElement('img');
		newListItem.setAttribute('src', "images/back.png");
		newListItem.setAttribute('data-id', i );
		newListItem.appendChild('click', 'flipCard');

	}
};

checkForMatch();

const cardOne = cards[0];

const cardTwo = cards[2];


createBoard();







	
