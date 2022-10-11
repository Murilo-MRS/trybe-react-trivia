import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWithRouterAndRedux';
import App from '../App';
import Game from '../pages/Game';

describe('Valida tela de Feedback', () => {
  it('Verifica se o título Game existe na página', () => {
    renderWithRouterAndRedux(<App />);

    const title = screen.getByRole('div');

    expect(title).toBeInTheDocument();
  });
  it('Verifica history da página', () => {
    renderWithRouterAndRedux(<Game />);
    const { location: { pathname } } = history;

    expect(pathname).toBe('/trivia');
  });
});
