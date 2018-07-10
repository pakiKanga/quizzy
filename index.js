import React from 'react';
import ReactDOM from 'react-dom';
import 'materialize-css'; // It installs the JS asset only
import 'materialize-css/dist/css/materialize.min.css';
import './index.css';
import Header from './header.js';
import QuizGuide from './quizguide.js';
import Submit from './buttons.js';
import QuizInput from './quizinput.js';
import QuizCarousel from './quizcarousel.js';


class Container extends React.Component {
  constructor(props) {
    super(props);
    this.handleQuestionChange = this.handleQuestionChange.bind(this);
    this.handleQuestionAppend = this.handleQuestionAppend.bind(this);
    this.state = {
      index: 0,
      question: ["No question has been provided yet!"],
       answers: [[]]
     };
  }

  handleQuestionAppend() {
    this.setState(
      {
       index: this.state.index + 1,
       question: this.appendQuestions(this.state.question[this.state.index]),
       answers: [this.appendAnswers(this.state.answers[this.state.index])]
     });
  }

  updateCurrentQuestion(newQuestion) {
    var newList = this.state.question;
    newList[this.state.index] = newQuestion;
    return newList;
  }

  appendQuestions(newQuestion) {
    var newList = this.state.question;
    newList.push(newQuestion);
    return newList;
  }

  appendAnswers(newAnswer) {
    var newList = this.state.answers;
    newList.push(newAnswer);
    return newList;
  }

  handleQuestionChange(newQuestion, newAnswers) {
    this.setState({question: this.updateCurrentQuestion(newQuestion), answers: newAnswers});
  }

  getQuestion() {
    var questionList = []
    console.log(this.state.answers);

    for (var i = 0; i < this.state.question.length; i++) {
      questionList.push(<QuizCarousel question={this.state.question[i]} answers={this.state.answers} />);
    }
    return questionList;
  }

  render() {
    const answers = this.state.answers;


    const questionCards = this.getQuestion();
    return (
      <div className="wrapper">
        <div className="header-wrapper">
          <Header />
        </div>

        <div className="body-wrapper">
          <div className="leftBar bordered">
            <div className="guide-div">
              <QuizGuide />
            </div>
          </div>

          <div className="middleBar bordered">
            <div className = "QuizBox z-depth-2">
              <QuizInput onQuestionChange={this.handleQuestionChange} />
            </div>

            <div className="SubmitButton center">
              <Submit onQuestionAppend={this.handleQuestionAppend} />
            </div>

          </div>

          <div className="rightBar bordered">
            <div className="QuestionBar">
              <h1 className="questions-header">Question Bank</h1>
                {questionCards}
            </div>
          </div>
        </div>



        <div className="footer-wrapper">

        </div>
      </div>


    )
  }
}

// ========================================

ReactDOM.render(
  <Container />,
  document.getElementById('root')
);
