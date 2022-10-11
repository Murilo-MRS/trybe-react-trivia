import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Questions extends Component {
  state = {
    results: [],
    counter: 0,
    loading: true,
  };

  async componentDidMount() {
    await this.validateCode();
  }

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
    const { results, counter, loading } = this.state;
    if (loading) {
      return <p>Carregando ...</p>;
    }
    const answers = [results[counter].correct_answer,
      ...results[counter].incorrect_answers];
    const randomAns = this.shuffle(answers);
    const correct = results[counter].correct_answer;
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
            <button type="button" data-testid="correct-answer" key={ answer }>
              {answer}
            </button>
          ) : (
            <button type="button" data-testid="wrong-answer" key={ answer }>
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

export default connect()(Questions);
