import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom';

import Game from '../../client/components/Game.jsx';

//testing Game.jsx
describe('Unit testing game component', () => {
  let game;
  // let dealerHand = [];
  // let playerHand = [];
  // let isPlayerFinished;
  const props = {
    user: { money: 1000, username: 'test', password: 'test' },
  };

  beforeEach(() => {
    game = render(<Game {...props} />);
  });

  // Renders a Player component
  test('Renders an h3 element', () => {
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(1);
  });

  test('Renders 2 h2 elements', () => {
    expect(screen.getAllByRole('heading', { level: 2 })).toHaveLength(2);
  });

  test('Renders 8 button elements', () => {
    expect(screen.getAllByRole('button')).toHaveLength(8);
  });

  // The page loads with 2 new cards for the player and dealer
//   test('Renders 2 new cards for the player and the dealer', () => {
//     reset();
//     expect(playerHand).toHaveLength(2);
//     expect(dealerHand).toHaveLength(2);
//     expect(isPlayerFinished).toBe(false);
//   });
});
