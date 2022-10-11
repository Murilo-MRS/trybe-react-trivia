import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Questions from '../components/Questions';

class Trivia extends Component {
  render() {
    const { history } = this.props;
    return (
      <>
        <div className="Game">Game</div>
        <Header />
        <Questions history={ history } />
      </>
    );
  }
}
Trivia.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Trivia;
