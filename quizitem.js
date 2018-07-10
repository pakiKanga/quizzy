import React from 'react';

class QuizItem extends React.Component {
  isCorrectAnswer(answer) {
    var answerPattern = /\[X]/i;
    if (answerPattern.test(answer)) {
      return true;
    }
    return false;
  }
  render() {
    if (this.isCorrectAnswer(this.props.answer)) {
      return (
        <li class="collection-item active">{this.props.answer}</li>
      )
    }
    return (
      <li class="collection-item">{this.props.answer}</li>
    )
  }
}



export default QuizItem
