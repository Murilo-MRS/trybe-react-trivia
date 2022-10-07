import React from 'react';

class Login extends React.Component {
  state = {
    email: '',
    name: '',
  };

  render() {
    const { email, name } = this.state;
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
        >
          Play

        </button>
      </div>
    );
  }
}

export default Login;
