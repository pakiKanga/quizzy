import React from 'react';
import QuizItem from './quizitem.js';

class QuizCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: 'No question provided yet',
      answers: [],

    };


  }

  render() {
    const question = this.props.question;
    const answers = this.props.answers;
    const answerList = answers.map((answers) =>
      <QuizItem answer={answers} />
    );
    return (
      <div className="card blue-grey darken-1 z-depth-3">
        <div className="card-content white-text">
          <span className="card-title">{question}</span>
          <ul className="collection black-text">
            {answerList}
            </ul>
        </div>

      </div>
    )
  }
}

export default QuizCarousel
