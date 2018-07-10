import React from 'react';

class QuizGuide extends React.Component {
  render() {
    return (
      <div className="card blue-grey darken-1 z-depth-3">
        <div className="card-content white-text">
          <span className="card-title">Syntax Guide</span>
          <p>-New Question</p>
          <p>.Answer</p>
          <p>.Correct Answer[X]</p>
        </div>

      </div>
    )
  }
}

export default QuizGuide;
