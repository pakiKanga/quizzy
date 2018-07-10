import React from 'react';

class Submit extends React.Component {
  constructor(props) {
    super(props);
    this.appendQuestion = this.appendQuestion.bind(this);
  }
  appendQuestion() {
    this.props.onQuestionAppend();
  }
  render() {
    return (
      <a className="waves-effect waves-light btn" onClick={this.appendQuestion}>Add Question</a>
    )
  }
}

export default Submit;
