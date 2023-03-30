import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// import renderer from 'react-test-renderer';

// import App from '../../client/components/App.jsx';
import Card from '../../client/components/Card.jsx';
import Dealer from '../../client/components/Dealer.jsx';
// import Game from '../../client/components/Game.jsx';
import HighScore from '../../client/components/HighScore.jsx';
// import Login from '../../client/components/Login.jsx';
import NavBar from '../../client/components/NavBar.jsx';
import Opponent from '../../client/components/Opponent.jsx';
// import Player from '../../client/components/Player.jsx';
import PlayerCredit from '../../client/components/PlayerCredits.jsx';
// import Signup from '../../client/components/Signup.jsx';
import Table from '../../client/components/Table.jsx';


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
});

// testing dealer components
describe('testing dealer component', () => {
  let dealer;
  beforeEach(() => {
    dealer = render(<Dealer />);
  });

  // Renders an image
  test('Renders an image', () => {
    const image = screen.getByRole('img');
    expect(image).toBeTruthy();
  });

  // Image is from props file
  test('Image matches shark png', () => {
    const image = screen.getByRole('img');
    expect(image.alt).toBe('Dealer Image');
  });
});

// testing high score component
describe('testing high score component', () => {
  let highScore;
  const reset = jest.fn();
  const props = {
    reset,
  };

  // function Mock(){
  //   reset('reset');
  // }

  // Mock();

  beforeEach(() => {
    highScore = render(<HighScore {...props} />);
  });
  test('button exists', () => {
    const button = screen.getByRole('button', {name: 'New Game'});
    expect(button).toBeTruthy();
  });
  // need to come back to this
  // test('reset function has been called on click', () => {
  //   const button = screen.getByRole('button', {name: 'New Game'});
  //   userEvent.click(button);
  //   expect(reset).toHaveBeenCalled();
  // });
});

// testing navbar component
describe('testing navbar component', () => {
  let navBar;
  beforeEach(() => {
    navBar = render(<NavBar />);
  });
  test('renders an h1', () => {
    expect(navBar.getByRole('heading', {level: 1})).toBeInTheDocument();
  });
  test('checks h1 text', () => {
    const name = navBar.getByText('Shark Jack')
    expect(name).toBeTruthy();
  });
});