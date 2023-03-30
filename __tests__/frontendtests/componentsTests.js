import React from 'react';
// import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

// import renderer from 'react-test-renderer';

import Card from '../../client/components/Card.jsx';

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
