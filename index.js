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

    this.state = {question: "No question provided yet.", answers: []};
  }

  handleQuestionAppend() {
    console.log("New question");
  }
  handleQuestionChange(newQuestion, newAnswers) {
    this.setState({question: newQuestion, answers: newAnswers});
  }

  render() {
    const question = this.state.question;
    const answers = this.state.answers;
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
              <QuizCarousel question={question} answers={answers} />
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
