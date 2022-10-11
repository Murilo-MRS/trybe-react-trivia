import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../styles/Questions.css';
import { sumScoreAction } from '../redux/actions';

class Questions extends Component {
  state = {
    results: [],
    counter: 0,
    loading: true,
    correctClass: '',
    incorrectClass: '',
    disabled: false,
    score: 0,
  };

  async componentDidMount() {
    await this.validateCode();
    const interval = 30000;
    setTimeout(() => {
      this.setState({ disabled: true });
    }, interval);
  }

  handleAnswer = (e) => {
    e.preventDefault();
    const { target } = e;
    const { sumScore } = this.props;
    const { results, counter, score } = this.state;
    const { difficulty } = results[counter];
    console.log(difficulty);
    if (target.id) {
      this.setState({
        correctClass: 'correct',
        incorrectClass: 'incorrect',
      }, () => this.handleScore(difficulty));
    } else {
      this.setState({ correctClass: 'correct', incorrectClass: 'incorrect' });
    }
    sumScore(score);
  };

  handleScore = (difficulty) => {
    const { score } = this.state;
    switch (difficulty) {
    case 'easy':
      this.setState({ score: score + (10 + (1)) });
      // sumScore(score);
      break;
    case 'medium':
      this.setState({ score: score + (10 + (2)) });
      // sumScore(score);
      break;
    case 'hard':
      this.setState({ score: score + (10 + (3)) });
      // sumScore(score);
      break;
    default:
      return score;
    }
  };

  validateCode = async () => {
    const invalidToken = 3;
    const { history } = this.props;
    const token = localStorage.getItem('token');
    const endPoint = `https://opentdb.com/api.php?amount=5&token=${token}`;
    const response = await fetch(endPoint);
    const returns = await response.json();
    const { response_code: responseCode, results } = returns;
    if (responseCode === invalidToken) {
      window.localStorage.removeItem('token');
      history.push('/');
    }
    this.setState({ results, loading: false });
  };

  shuffle = (array) => {
    let currentIndex = array.length;
    let randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  };

  render() {
    const { results, counter, loading, correctClass,
      incorrectClass, disabled, score } = this.state;
    if (loading) {
      return <p>Carregando ...</p>;
    }
    const answers = [results[counter].correct_answer,
      ...results[counter].incorrect_answers];
    const randomAns = this.shuffle(answers);
    const correct = results[counter].correct_answer;
    // const difficulty = results[counter].difficulty;
    // console.log(results[counter].difficulty);
    return (
      <>
        <div>Questions</div>
        <h1 data-testid="question-category">
          {results[counter].category}
        </h1>
        <h2 data-testid="question-text">
          {results[counter].question}
        </h2>
        <div data-testid="answer-options">
          {randomAns.map((answer) => (answer === correct ? (
            <button
              type="button"
              data-testid="correct-answer"
              id="correct"
              className={ correctClass }
              key={ answer }
              onClick={ this.handleAnswer }
              disabled={ disabled }
            >
              {answer}
            </button>
          ) : (
            <button
              type="button"
              data-testid="wrong-answer"
              className={ incorrectClass }
              key={ answer }
              onClick={ this.handleAnswer }
              disabled={ disabled }
            >
              {answer}
            </button>
          )))}
        </div>
      </>

    );
  }
}

Questions.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  sumScore: (score) => dispatch(sumScoreAction(score)),
});

export default connect(null, mapDispatchToProps)(Questions);
