const cardValues = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const suits = ['hearts', 'diamonds', 'clubs', 'spades'];

const createDeck = () => {
	const deck = [];
	for (const suit of suits) {
		for (const value of cardValues) {
			deck.push({ suit, value });
		}
	}
	return deck;
}

const shuffleDeck = (deck) => {
	for (let i = deck.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[deck[i], deck[j]] = [deck[j], deck[i]];
	}
	return deck;
}

const dealCard = (deck) => {
	return deck.pop();
}

// no export
const getCardValue = (card) => {
	const value = card.value;
	if (value === 'A') {
		return 11;
	} else if (value === 'K' || value === 'Q' || value === 'J') {
		return 10;
	} else {
		return parseInt(value);
	}
}


const calculateHandScore = (hand) => {
	let score = 0;
	let aces = 0;
	for (const card of hand) {
		score += getCardValue(card);
		if (card.value === 'A') {
			aces++;
		}
	}
	while (score > 21 && aces > 0) {
		score -= 10;
		aces--;
	}
	return score;
}


const getWinner = (playerHand, dealerHand) => {
	const playerScore = calculateHandScore(playerHand);
	const dealerScore = calculateHandScore(dealerHand);


	if (playerScore > 21) {
		return 'Dealer';
	} else if (dealerScore > 21) {
		return 'Player';
	} else if (playerScore > dealerScore) {
		return 'Player';
	} else if (playerScore < dealerScore) {
		return 'Dealer';
	} else {
		return 'Draw';
	}
}

const getCardImage = (c) => {
	const card = { ...c };
	const pictureCards = {
		'J': 'jack',
		'Q': 'queen',
		'K': 'king',
		'A': 'ace'
	}
	if (card.value in pictureCards) card.value = pictureCards[card.value]
	// const path = `../assets/card-pictures/${card.value}_of_${card.suit}.png`;
	const path = `/static/cardImageFolder/${card.value}_of_${card.suit}.png`;
	return path;
}

module.exports = { createDeck, shuffleDeck, dealCard, getCardValue, calculateHandScore, getWinner, getCardImage };

// export default createDeck ;
// shuffleDeck, dealCard, calculateHandScore, getWinner, getCardImage 

// const playBlackjack = () => {
// 	const deck = createDeck();
// 	shuffleDeck(deck);

// 	const playerHand = [dealCard(deck), dealCard(deck)];
// 	const dealerHand = [dealCard(deck), dealCard(deck)];

// 	let playerTurn = true;

// 	while (playerTurn) {
// 		console.log('Player hand:', playerHand);
// 		console.log('Dealer hand:', dealerHand[0]);

// 		const input = prompt('Do you want to (h)it or (s)tand?');
// 		if (input === 'h') {
// 			playerHand.push(dealCard(deck));
// 			if (calculateHandScore(playerHand) > 21) {
// 				playerTurn = false;
// 			}
// 		} else if (input === 's') {
// 			playerTurn = false;
// 		} else {
// 			console.log('Invalid input, please enter h or s.');
// 		}
// 	}

// 	while (calculateHandScore(dealerHand) < 17) {
// 		dealerHand.push(dealCard(deck));
// 	}

// 	console.log('Player final hand:', playerHand);
// 	console.log('Dealer final hand:', dealerHand);

// 	console.log('player card images: ', getCardImage(playerHand[0]), getCardImage(playerHand[1]))

// 	const result = getWinner(playerHand, dealerHand);
// 	if (result === 'Draw') {
// 		console.log("It's a draw!");
// 	} else {
// 		console.log(`${result} wins!`);
// 	}
// }

// const prompt = (question) => {
// 	return readlineSync.question(question);
// }

// try {
// 	playBlackjack();
// } catch (err) {
// 	console.error('Error:', err);
// }