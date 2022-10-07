import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWithRouterAndRedux';
import App from '../App';
// import Login from '../pages/Login';

describe('Valida tela de Login', () => {
  it('Verifica se os inputs name e email existem na página', () => {
    renderWithRouterAndRedux(<App />);
    const name = screen.getByTestId('input-player-name');
    const email = screen.getByTestId('input-gravatar-email');
    const button = screen.getByTestId('btn-play');

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(button).toBeDisabled();

    userEvent.type(email, 'teste@teste.com');
    userEvent.type(name, 'Fulano');

    expect(button).toBeEnabled();
  });

  it('Verifica redirecionamento do botão de configurações', () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const button = screen.getByTestId('btn-settings');
    userEvent.click(button);
    const { location: { pathname } } = history;

    expect(pathname).toBe('/settings');
  });

  it('Verifica redirecionamento do botão de play', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    const name = screen.getByTestId('input-player-name');
    const email = screen.getByTestId('input-gravatar-email');
    userEvent.type(email, 'teste@teste.com');
    userEvent.type(name, 'Fulano');
    const { location: { pathname } } = history;

    const button = screen.getByTestId('btn-play');
    userEvent.click(button);

    expect(pathname).toBe('/');
  });

  it('Verifica armazenamento de token no localStorage', async () => {
    const mockTokenData = {
      response_code: 0,
      response_message: 'Token Generated Successfully!',
      token: '0071bbf26b291115964f510c630e26b3c6b58723b9025e367feda55b045ffde8',
    };

    const mockImplementation = jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockTokenData),
    });

    renderWithRouterAndRedux(<App />);

    const loginButtonPlay = screen.getByTestId('btn-play');
    const loginInputs = screen.getAllByRole('textbox');

    userEvent.type(loginInputs[0], 'Fulano');
    userEvent.type(loginInputs[1], 'oi@teste.com');

    expect(loginButtonPlay).toBeEnabled();
    userEvent.click(loginButtonPlay);

    await waitFor(() => {
      expect(mockImplementation).toHaveBeenCalled();
      jest.restoreAllMocks();
    });

    const localStorageTokenValue = localStorage.getItem('token');
    expect(localStorageTokenValue).toEqual(mockTokenData.token);
  });
});
