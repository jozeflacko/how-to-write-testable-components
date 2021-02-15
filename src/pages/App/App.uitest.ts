import React from 'react';
import App from './App';

it('should render app', () => {

    (cy as any).visit('http://localhost:5000');

    cy.pause();
});
