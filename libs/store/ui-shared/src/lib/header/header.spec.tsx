import { render } from '@testing-library/react';

import Header from './header';

describe('store-ui-shared: Header component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=header--primary&args=title:BoardGameHoard'));
    
    it('should show the title', () => {
      cy.get('header').contains('BoardGameHoard');
    });
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to store-ui-shared!');
    });
});
