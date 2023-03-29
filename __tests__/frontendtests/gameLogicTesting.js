// const cardValues = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
// const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
const {createDeck, shuffleDeck, dealCard, getCardValue, calculateHandScore, getWinner, getCardImage } = require('../../client/GameLogic') ;


// test createDeck function
describe('test createDeck', () => {
  const deck = createDeck();
  it('function should return array of length 52', () => {
    expect(deck).toHaveLength(52);
    expect(Array.isArray(deck)).toBeTruthy();
  })
  it('should contain all values in a deck of cards', () => {
    expect(deck).toContainEqual({ suit: 'hearts', value: '2' })
    expect(deck).toContainEqual({ suit: 'hearts', value: '3' })
    expect(deck).toContainEqual({ suit: 'hearts', value: '4' })
    expect(deck).toContainEqual({ suit: 'hearts', value: '5' })
    expect(deck).toContainEqual({ suit: 'hearts', value: '6' })
    expect(deck).toContainEqual({ suit: 'hearts', value: '7' })
    expect(deck).toContainEqual({ suit: 'hearts', value: '8' })
    expect(deck).toContainEqual({ suit: 'hearts', value: '9' })
    expect(deck).toContainEqual({ suit: 'hearts', value: '10' })
    expect(deck).toContainEqual({ suit: 'hearts', value: 'J' })
    expect(deck).toContainEqual({ suit: 'hearts', value: 'Q' })
    expect(deck).toContainEqual({ suit: 'hearts', value: 'K' })
    expect(deck).toContainEqual({ suit: 'hearts', value: 'A' })
    expect(deck).toContainEqual({ suit: 'diamonds', value: '2' })
    expect(deck).toContainEqual({ suit: 'diamonds', value: '3' })
    expect(deck).toContainEqual({ suit: 'diamonds', value: '4' })
    expect(deck).toContainEqual({ suit: 'diamonds', value: '5' })
    expect(deck).toContainEqual({ suit: 'diamonds', value: '6' })
    expect(deck).toContainEqual({ suit: 'diamonds', value: '7' })
    expect(deck).toContainEqual({ suit: 'diamonds', value: '8' })
    expect(deck).toContainEqual({ suit: 'diamonds', value: '9' })
    expect(deck).toContainEqual({ suit: 'diamonds', value: '10' })
    expect(deck).toContainEqual({ suit: 'diamonds', value: 'J' })
    expect(deck).toContainEqual({ suit: 'diamonds', value: 'Q' })
    expect(deck).toContainEqual({ suit: 'diamonds', value: 'K' })
    expect(deck).toContainEqual({ suit: 'diamonds', value: 'A' })
    expect(deck).toContainEqual({ suit: 'clubs', value: '2' })
    expect(deck).toContainEqual({ suit: 'clubs', value: '3' })
    expect(deck).toContainEqual({ suit: 'clubs', value: '4' })
    expect(deck).toContainEqual({ suit: 'clubs', value: '5' })
    expect(deck).toContainEqual({ suit: 'clubs', value: '6' })
    expect(deck).toContainEqual({ suit: 'clubs', value: '7' })
    expect(deck).toContainEqual({ suit: 'clubs', value: '8' })
    expect(deck).toContainEqual({ suit: 'clubs', value: '9' })
    expect(deck).toContainEqual({ suit: 'clubs', value: '10' })
    expect(deck).toContainEqual({ suit: 'clubs', value: 'J' })
    expect(deck).toContainEqual({ suit: 'clubs', value: 'Q' })
    expect(deck).toContainEqual({ suit: 'clubs', value: 'K' })
    expect(deck).toContainEqual({ suit: 'clubs', value: 'A' })
    expect(deck).toContainEqual({ suit: 'spades', value: '2' })
    expect(deck).toContainEqual({ suit: 'spades', value: '3' })
    expect(deck).toContainEqual({ suit: 'spades', value: '4' })
    expect(deck).toContainEqual({ suit: 'spades', value: '5' })
    expect(deck).toContainEqual({ suit: 'spades', value: '6' })
    expect(deck).toContainEqual({ suit: 'spades', value: '7' })
    expect(deck).toContainEqual({ suit: 'spades', value: '8' })
    expect(deck).toContainEqual({ suit: 'spades', value: '9' })
    expect(deck).toContainEqual({ suit: 'spades', value: '10' })
    expect(deck).toContainEqual({ suit: 'spades', value: 'J' })
    expect(deck).toContainEqual({ suit: 'spades', value: 'Q' })
    expect(deck).toContainEqual({ suit: 'spades', value: 'K' })
    expect(deck).toContainEqual({ suit: 'spades', value: 'A' })
  })
})

// test shuffleDeck function
describe('test shuffleDeck', () => {
  const deck = createDeck();
  const shuffled = shuffleDeck(deck);
  it('function should return array of length 52', () => {
    expect(shuffled).toHaveLength(52);
    expect(Array.isArray(shuffled)).toBeTruthy();
  })
  it('should contain all values in a deck of cards', () => {
    expect(deck).toContainEqual({ suit: 'hearts', value: '2' })
    expect(deck).toContainEqual({ suit: 'hearts', value: '3' })
    expect(deck).toContainEqual({ suit: 'hearts', value: '4' })
    expect(deck).toContainEqual({ suit: 'hearts', value: '5' })
    expect(deck).toContainEqual({ suit: 'hearts', value: '6' })
    expect(deck).toContainEqual({ suit: 'hearts', value: '7' })
    expect(deck).toContainEqual({ suit: 'hearts', value: '8' })
    expect(deck).toContainEqual({ suit: 'hearts', value: '9' })
    expect(deck).toContainEqual({ suit: 'hearts', value: '10' })
    expect(deck).toContainEqual({ suit: 'hearts', value: 'J' })
    expect(deck).toContainEqual({ suit: 'hearts', value: 'Q' })
    expect(deck).toContainEqual({ suit: 'hearts', value: 'K' })
    expect(deck).toContainEqual({ suit: 'hearts', value: 'A' })
    expect(deck).toContainEqual({ suit: 'diamonds', value: '2' })
    expect(deck).toContainEqual({ suit: 'diamonds', value: '3' })
    expect(deck).toContainEqual({ suit: 'diamonds', value: '4' })
    expect(deck).toContainEqual({ suit: 'diamonds', value: '5' })
    expect(deck).toContainEqual({ suit: 'diamonds', value: '6' })
    expect(deck).toContainEqual({ suit: 'diamonds', value: '7' })
    expect(deck).toContainEqual({ suit: 'diamonds', value: '8' })
    expect(deck).toContainEqual({ suit: 'diamonds', value: '9' })
    expect(deck).toContainEqual({ suit: 'diamonds', value: '10' })
    expect(deck).toContainEqual({ suit: 'diamonds', value: 'J' })
    expect(deck).toContainEqual({ suit: 'diamonds', value: 'Q' })
    expect(deck).toContainEqual({ suit: 'diamonds', value: 'K' })
    expect(deck).toContainEqual({ suit: 'diamonds', value: 'A' })
    expect(deck).toContainEqual({ suit: 'clubs', value: '2' })
    expect(deck).toContainEqual({ suit: 'clubs', value: '3' })
    expect(deck).toContainEqual({ suit: 'clubs', value: '4' })
    expect(deck).toContainEqual({ suit: 'clubs', value: '5' })
    expect(deck).toContainEqual({ suit: 'clubs', value: '6' })
    expect(deck).toContainEqual({ suit: 'clubs', value: '7' })
    expect(deck).toContainEqual({ suit: 'clubs', value: '8' })
    expect(deck).toContainEqual({ suit: 'clubs', value: '9' })
    expect(deck).toContainEqual({ suit: 'clubs', value: '10' })
    expect(deck).toContainEqual({ suit: 'clubs', value: 'J' })
    expect(deck).toContainEqual({ suit: 'clubs', value: 'Q' })
    expect(deck).toContainEqual({ suit: 'clubs', value: 'K' })
    expect(deck).toContainEqual({ suit: 'clubs', value: 'A' })
    expect(deck).toContainEqual({ suit: 'spades', value: '2' })
    expect(deck).toContainEqual({ suit: 'spades', value: '3' })
    expect(deck).toContainEqual({ suit: 'spades', value: '4' })
    expect(deck).toContainEqual({ suit: 'spades', value: '5' })
    expect(deck).toContainEqual({ suit: 'spades', value: '6' })
    expect(deck).toContainEqual({ suit: 'spades', value: '7' })
    expect(deck).toContainEqual({ suit: 'spades', value: '8' })
    expect(deck).toContainEqual({ suit: 'spades', value: '9' })
    expect(deck).toContainEqual({ suit: 'spades', value: '10' })
    expect(deck).toContainEqual({ suit: 'spades', value: 'J' })
    expect(deck).toContainEqual({ suit: 'spades', value: 'Q' })
    expect(deck).toContainEqual({ suit: 'spades', value: 'K' })
    expect(deck).toContainEqual({ suit: 'spades', value: 'A' })
  })
  it('should not be strictly equal to deck', () => {
    expect(shuffled).not.toContainEqual(deck);
  })
})

// test dealCard function
describe('test dealCard', () => {
  const deck = createDeck();
  const shuffled = shuffleDeck(deck);
  const lastCard = shuffled[51];
  it('expect last card in shuffled to be the saem as the popped card from function', () => {
    expect(dealCard(shuffled)).toEqual(lastCard);
  })
})

// test getCardValue function
describe('test getCardValue', () => {
  const card1 = {suit: 'hearts', value: 'A'};
  const card2 = {suit: 'diamonds', value: 'K'};
  const card3 = {suit: 'clubs', value: 'Q'};
  const card4 = {suit: 'spades', value: 'J'};
  const card5 = {suit: 'spades', value: '6'};
  const card6 = {suit: 'spades', value: '2'};
  it('should match expected values', () => {
    expect(getCardValue(card1)).toEqual(11);
    expect(getCardValue(card2)).toEqual(10);
    expect(getCardValue(card3)).toEqual(10);
    expect(getCardValue(card4)).toEqual(10);
    expect(getCardValue(card5)).toEqual(6);
    expect(getCardValue(card6)).toEqual(2);
  })
})

// test calculateHandScore function
describe('test calculateHandScore', () => {
  const hand1 = [{suit: 'spades', value: 'A'}, {suit: 'clubs', value: 'J'}]
  const hand2 = [{suit: 'spades', value: '4'}, {suit: 'clubs', value: 'Q'}]
  const hand3 = [{suit: 'spades', value: '6'}, {suit: 'clubs', value: 'K'}, {suit: 'spades', value: 'A'}]
  const hand4 = [{suit: 'spades', value: '6'}, {suit: 'clubs', value: 'K'}, {suit: 'spades', value: 'A'}, {suit: 'hearts', value: 'A'}]

  it('should calculate scores accurately', () => {
    expect(calculateHandScore(hand1)).toEqual(21);
    expect(calculateHandScore(hand2)).toEqual(14);
  })
  it('should account for Aces', () => {
    expect(calculateHandScore(hand3)).toEqual(17);
    expect(calculateHandScore(hand4)).toEqual(18);
  })
})

// test getWinner function
describe('test getWinner', () => {
  const playerHand1 = [{suit: 'spades', value: 'A'}, {suit: 'clubs', value: 'J'}]
  const dealerHand1 = [{suit: 'spades', value: '4'}, {suit: 'clubs', value: 'Q'}]
  const playerHand2 = [{suit: 'spades', value: 'K'}, {suit: 'clubs', value: 'Q'}, {suit: 'clubs', value: 'K'}]
  const dealerHand2 = [{suit: 'spades', value: '4'}, {suit: 'clubs', value: 'Q'}]
  const playerHand4 = [{suit: 'spades', value: '4'}, {suit: 'clubs', value: 'Q'}]
  const dealerHand4 = [{suit: 'spades', value: '4'}, {suit: 'spades', value: '4'}, {suit: 'spades', value: '6'}]
  
  it('should calculate the correct winner when player hand is greater than dealer', () => {
    expect(getWinner(playerHand1, dealerHand1)).toEqual('Player');
  })
  it('should calculate correct winner when player hand is over 21', () => {
    expect(getWinner(playerHand2, dealerHand2)).toEqual('Dealer');
  })
  it('should calculate correct winner when dealer hand is over 21', () => {
    expect(getWinner(dealerHand2, playerHand2)).toEqual('Player');
  })
  it('should calculate correct winner when dealer is greater than player', () => {
    expect(getWinner(dealerHand1, playerHand1)).toEqual('Dealer')
  })
  it('should calculate draw if there is a tie', () => {
    expect(getWinner(dealerHand4, playerHand4)).toEqual('Draw')
  })
})

// test getCardImage function
describe('test getCardImage', () => {
  const card1 = {suit: 'hearts', value: 'A'};
  const card2 = {suit: 'diamonds', value: 'K'};
  const card3 = {suit: 'clubs', value: 'Q'};

  it('should return the correct card path', () => {
    expect(getCardImage(card1)).toEqual(`/static/cardImageFolder/ace_of_hearts.png`);
    expect(getCardImage(card2)).toEqual(`/static/cardImageFolder/king_of_diamonds.png`);
    expect(getCardImage(card3)).toEqual(`/static/cardImageFolder/queen_of_clubs.png`);
  })
})

