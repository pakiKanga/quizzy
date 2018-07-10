import React from 'react';

class QuizInput extends React.Component {
  constructor(props) {
  super(props);
  this.state = {value: ''};

  this.handleChange = this.handleChange.bind(this);
}

getQuestion(data) {
  var separatedLines = data.split("\n");
  var questionPattern = /-/;
  if (questionPattern.test(separatedLines[0])) {
    return separatedLines[0].substr(1, separatedLines[0].length);
  }
  return "No question provided yet.";
}

getAnswers(data) {
  var separatedLines = data.split("\n");
  var optionPattern = /\./;
  var answerList = []
  for (var i = 0; i < separatedLines.length; i++) {
    if (optionPattern.test(separatedLines[i])) {
      answerList.push(separatedLines[i].substr(1, separatedLines[i].length));
    }
  }
  return answerList;
}

handleAppend(event) {
  this.setState({value: ''});
}
handleChange(event) {
  if (this.validateInput(event)) {
    this.props.onQuestionChange(this.getQuestion(event.target.value), this.getAnswers(event.target.value));
    this.setState({value: event.target.value});

  }
}

validateInput(event) {

  var currInput = event.target.value.split("\n");
  console.log(currInput);
  var questionPattern = /-/;
  var optionPattern = /. | /;

  if (!questionPattern.test(currInput[0])) {
    return false;
  }


  // for (var i = 1; i < currInput.length; i++) {
  //   if (!optionPattern.test(currInput[i])) {
  //     return false;
  //   }
  // }
  return true;
}

  render() {
    const question = this.props.question;

    return (
         <form>
             <div className="input-field">
               <textarea id="textarea1" value={this.state.value} onChange={this.handleChange} className="materialize-textarea"></textarea>
               <label htmlFor="textarea1">Enter A Question</label>
             </div>
         </form>
    )
  }
}

export default QuizInput;
