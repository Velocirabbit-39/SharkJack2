import React from 'react';
// import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

// import renderer from 'react-test-renderer';

import Card from '../../client/components/Card.jsx';
import Opponent from '../../client/components/Opponent.jsx';
import Table from '../../client/components/Table.jsx';
import PlayerCredit from '../../client/components/PlayerCredits.jsx';

describe('Unit testing React components', () => {
  // testing Card component
  describe('Card test', () => {
    let card;
    // Define a fake props location
    const props = {
      card: { suit: 'hearts', value: 'K' },
    };

    beforeEach(() => {
      card = render(<Card {...props} />);
    });

    // Renders an image
    test('Renders an image', () => {
      const image = screen.getByRole('img');
      expect(image).toBeTruthy();
    });

    // Image is from props file
    test('Image source matches props', () => {
      const path = '/static/cardImageFolder/king_of_hearts.png';
      const image = screen.getByRole('img');
      expect(image.src).toContain(path);
    });
  });

  // testing Opponent component
  describe('Opponent test', () => {
    let opponent;

    beforeEach(() => {
      opponent = render(<Opponent />);
    });

    // Renders an h2
    test('Renders two h2s', () => {
      expect(screen.getAllByRole('heading', {level: 2})).toHaveLength(2);
    });
    // Correct text
    test('Each h2 has the correct text', () => {
      expect(screen.getByText('Credit: #')).toBeInTheDocument();
      expect(screen.getByText('Turn: turn')).toBeInTheDocument();
    })
  });

  // Testing Table component
  describe('Table test', () => {
    let table;

    // Define a fake props
    const props = {
      dealerHand: [{ suit: 'hearts', value: 'K' }, { suit: 'clubs', value: '10' }]
    };

    beforeEach(() => {
      table = render(<Table {...props} />);
    });

    // Renders the correct amount of card components
    test('Renders the correct amount of cards', () => {
      expect(screen.getAllByRole('img')).toHaveLength(2);
    });

    // Renders the correct cards
    test('Renders the correct cards', () => {
      const path1 = '/static/cardImageFolder/king_of_hearts.png';
      const image1 = screen.getAllByRole('img')[0];
      expect(image1.src).toContain(path1);

      const path2 = '/static/cardImageFolder/10_of_clubs.png';
      const image2 = screen.getAllByRole('img')[1];
      expect(image2.src).toContain(path2);
    })
  });

  // Testing Table component
  describe('PlayerCredits test', () => {
    let playerCredit;

    // Define a fake props
    const props = {
      amount: 1000,
      winner: 'Player'
    };

    // Renders the correct amount
    test('Renders one h2 displaying the correct amount', () => {
      render(<PlayerCredit {...props} />);
      const h2 = screen.getByRole('heading', {level: 2});
      expect(h2).toBeInTheDocument();
      expect(h2).toHaveTextContent('Cash: $1000');
    });

    //Renders the correct winning message
    test('Renders the correct winning message', () => {
      const { rerender } = render(<PlayerCredit {...props} />)
      const winningMessage = screen.getByText('You Won!');
      expect(winningMessage).toBeInTheDocument();

      rerender(<PlayerCredit winner={'Dealer'}/>)
      expect(screen.getByText('You Lost!')).toBeInTheDocument()

      rerender(<PlayerCredit winner={'Draw'}/>)
      expect(screen.getByText('It\'s a Draw!')).toBeInTheDocument()
    })
  });
});
