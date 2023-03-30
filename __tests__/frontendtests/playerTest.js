import React from 'react';
// import userEvent from '@testing-library/user-event';
import { render, screen, userEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import Player from '../../client/components/Player.jsx';

describe('Unit testing player component', () => {
  let player;
  let setIsPlayerFinished = jest.fn();
  let dealPlayerCardOnClick = jest.fn();
  let calculateHandScore = jest.fn();
  let handleBet = jest.fn();

  const props = {
    playerHand: [
      { suit: 'hearts', value: 5 },
      { suit: 'clubs', value: 10 },
    ],
    setIsPlayerFinished,
    dealPlayerCardOnClick,
    handleBet,
  };

  beforeEach(() => {
    player = render(<Player {...props} />);
  });

  test('$5 bet button exists', () => {
    const button = screen.getByRole('button', { name: '$5' });
    expect(button).toBeTruthy();
  });
  test('$10 bet button exists', () => {
    const button = screen.getByRole('button', { name: '$10' });
    expect(button).toBeTruthy();
  });
  test('$20 bet button exists', () => {
    const button = screen.getByRole('button', { name: '$20' });
    expect(button).toBeTruthy();
  });
  test('$50 bet button exists', () => {
    const button = screen.getByRole('button', { name: '$50' });
    expect(button).toBeTruthy();
  });
  test('$100 bet button exists', () => {
    const button = screen.getByRole('button', { name: '$100' });
    expect(button).toBeTruthy();
  });

  // test('$5 bet button called on click', () => {
  //   const button = screen.getByRole('button', { name: '$5' });
  //   userEvent.click(button);
  //   expect(handleBet).toHaveBeenCalled();
  // });
});
