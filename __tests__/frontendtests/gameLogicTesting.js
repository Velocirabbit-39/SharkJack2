// import React from 'react';

// const cardValues = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
// const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
// import { createDeck } from '../../client/GameLogic' ;
const {createDeck, shuffleDeck, dealCard, calculateHandScore, getWinner, getCardImage } = require('../../client/GameLogic') ;

//client/GameLogic.js
// shuffleDeck, dealCard, calculateHandScore, getWinner, getCardImage

// test createDeck function
describe('create deck test', () => {
  let deck = createDeck();
  it('function should return array of length 52', () => {
    expect(deck).toHaveLength(52);
    // expect(typeof deck).toEqual('array');
  })
})

// test shuffleDeck function

// test dealCard function

// test getCardValue function

// test calculateHandScore function

// test getWinner function

// test getCardImage function

