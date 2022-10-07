import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
  state = {
    email: '',
    name: '',
    playButton: false,
  };

  handleClick = (event) => {
    event.preventDefault();
    this.fetchToken();
    this.setState({ playButton: true });
  };

  fetchToken = async () => {
    const response = await fetch('https://opentdb.com/api_token.php?command=request');
    const result = await response.json();
    const token = await result.token;

    localStorage.setItem('token', token);
  };

  render() {
    const { email, name, playButton } = this.state;
    const validateEmail = /^[a-z0-9.!#$%&’+/=?^_`{|}~-]+@[a-z0-9-]+(?:.[a-z0-9-]+)$/;
    const lengthMin = 1;
    const validate = (validateEmail.test(email) && name.length >= lengthMin);
    return (
      <div>
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
        {playButton && <Redirect to="/trivia" />}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchToken: () => dispatch(fetchApiAction()),
});

export default connect(null, mapDispatchToProps)(Login);
