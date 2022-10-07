import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import logo from '../trivia.png';
import { loginAction } from '../redux/actions';

class Login extends React.Component {
  state = {
    email: '',
    name: '',
    playButton: false,
    openSettings: false,
  };

  handleClick = (event) => {
    event.preventDefault();
    this.fetchToken();
    this.setState({ playButton: true });

    // const { name, email } = this.state;
    const { dispatch } = this.props;
    dispatch(loginAction(this.state));
  };

  fetchToken = async () => {
    const response = await fetch('https://opentdb.com/api_token.php?command=request');
    const result = await response.json();
    const token = await result.token;

    localStorage.setItem('token', token);
  };

  settingsBtn = () => {
    // element.preventDefault();
    this.setState({ openSettings: true });
  };

  render() {
    const { email, name, playButton, openSettings } = this.state;
    const validateEmail = /^[a-z0-9.!#$%&’+/=?^_`{|}~-]+@[a-z0-9-]+(?:.[a-z0-9-]+)$/;
    const lengthMin = 1;
    const validate = (validateEmail.test(email) && name.length >= lengthMin);
    return (
      <div>
        <header className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
          <p>SUA VEZ </p>
          <input
            type="text"
            placeholder="Nome"
            name="name"
            value={ name }
            data-testid="input-player-name"
            onChange={ ({ target: { value } }) => this.setState({ name: value }) }
          />
          <input
            type="email"
            placeholder="E-Mail"
            name="email"
            value={ email }
            data-testid="input-gravatar-email"
            onChange={ ({ target: { value } }) => this.setState({ email: value }) }
          />
          <button
            type="button"
            data-testid="btn-play"
            disabled={ !validate }
            onClick={ this.handleClick }
          >
            Play
          </button>

          <button
            type="button"
            data-testid="btn-settings"
            onClick={ this.settingsBtn }
          >
            Configurações
          </button>
          {openSettings && <Redirect to="/settings" />}
          {playButton && <Redirect to="/trivia" />}
        </header>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
}.isRequired;

// const mapDispatchToProps = (dispatch) => ({
//   fetchToken: () => dispatch(fetchApiAction()),
// });

export default connect()(Login);
/* export default Login; */
