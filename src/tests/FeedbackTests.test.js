import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWithRouterAndRedux';
import App from '../App';
import Feedback from '../pages/Feedback';

describe('Valida tela de Feedback', () => {
  it('Verifica se o título Feedback existe na página', () => {
    renderWithRouterAndRedux(<App />);

    const title = screen.getByTestId('feedback-text');

    expect(title).toBeInTheDocument();
  });

  it('Verifica exibição do score na página', () => {
    renderWithRouterAndRedux(<App />);

    const score = screen.getByTestId('feedback-total-score');

    expect(score).toBeInTheDocument();
  });
  it('Verifica exibição de acertos na página', () => {
    renderWithRouterAndRedux(<App />);

    const assertions = screen.getByTestId('feedback-total-question');

    expect(assertions).toBeInTheDocument();
  });
  it('Verifica redirecionamento do botão de play again', () => {
    const { history } = renderWithRouterAndRedux(<Feedback />);

    const button = screen.getByTestId('btn-play-again');
    expect(button).toBeInTheDocument();

    userEvent.click(button);
    const { location: { pathname } } = history;

    expect(pathname).toBe('/');
  });
  it('Verifica redirecionamento do botão de ranking', () => {
    const { history } = renderWithRouterAndRedux(<Feedback />);

    const button = screen.getByTestId('btn-ranking');
    expect(button).toBeInTheDocument();

    userEvent.click(button);
    const { location: { pathname } } = history;

    expect(pathname).toBe('/ranking');
  });
});
