import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import md5 from 'crypto-js/md5';
import { getAvatar } from '../redux/actions';

class Header extends Component {
  componentDidMount() {
    const { getAvatarDispatch, email } = this.props;
    const hash = md5(email).toString();
    getAvatarDispatch(hash);
  }

  render() {
    const { name, url } = this.props;
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
  name: state.player.name,
  email: state.player.gravatarEmail,
  url: state.player.url,
});

const mapDispatchToProps = (dispatch) => ({
  getAvatarDispatch: (email) => dispatch(getAvatar(email)),
});

Header.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Header);
