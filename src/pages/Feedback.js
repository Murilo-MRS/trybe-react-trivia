import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';

class Feedback extends Component {
  render() {
    const { assertions, score } = this.props;
    const three = 3;
    return (
      <div>
        <Header />
        <h1 data-testid="feedback-text">Feedback</h1>
        {
          assertions >= three ? <h1 data-testid="feedback-text">Well Done!</h1>
            : <h1 data-testid="feedback-text">Could be better...</h1>
        }
        <h1 data-testid="feedback-total-score">{score}</h1>
        <h1 data-testid="feedback-total-question">{assertions}</h1>
      </div>
    );
  }
}

Feedback.propTypes = {
  assertions: PropTypes.number,
}.isRequired;

const mapStateToProps = (state) => ({
  assertions: state.player.assertions,
  score: state.player.score,
});

export default connect(mapStateToProps)(Feedback);
