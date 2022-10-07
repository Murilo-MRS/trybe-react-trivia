import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import md5 from 'crypto-js/md5';

class Header extends Component {
  state = {
    url: '',
  };

  componentDidMount() {
    const { email } = this.props;
    this.setState({
      url: `https://www.gravatar.com/avatar/${md5(email).toString()}`,
    });
  }

  render() {
    const { name } = this.props;
    const { url } = this.state;
    return (
      <div>
        <img src={ url } data-testid="header-profile-picture" alt="gravatar" />
        <span data-testid="header-player-name">{ name }</span>
        <span data-testid="header-score">0</span>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.user.name,
  email: state.user.email,
});

Header.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Header);
