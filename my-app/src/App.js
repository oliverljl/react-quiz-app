import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  Result from './components/Result';
import  Quiz from './components/Quiz';
import arrowImg from'./prev.jpg';
import { connect } from 'react-redux';
import * as actionCreators from './store/actions/actionCreators';
import quizQuestions from './DATA/questiones.js';

export class App extends Component {
    constructor(props) {
      super(props);
      this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }


//the method to calculate the result based on user selected
getResults() {
    const answersCount = this.props.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map((key) => answersCount[key]);
    let result = 0;
    for (let i in answersCount){
      result = i* answersCount[i] + result;
    } 
    return result;
}

setResults (result) {
    this.props.getResultPage();
}

handleAnswerSelected(value){
    this.props.selectAnswer(value);
    if (this.props.counter+1 < quizQuestions.length) {
        setTimeout(() => this.props.setNextQuestion(), 300);
      } else {
         setTimeout(() => this.setResults(this.getResults()), 300);
      }
}

// Applying destrucuring on the props object
renderQuiz() {
    const {answer, answerOptions, questionId, question} = this.props;
    return (
      <Quiz
        answer={answer}
        answerOptions={answerOptions}
        questionId={questionId}
        counter = {questionId}
        question={question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
}

renderResult() {
    return (
      <Result quizResult={this.props.resultAnswer} />
    );
}
// use conditionanl rendering to rendering componenent depends on situation
render() {
    let arrow = null;
    let arrowNext = null;
    let questionContent = {
      display:'flex',
      width:'100%',
      justifyContent: 'space-evenly',
      alignItems:'center'
    }
    let prevImg ={
      width:'30px',
      height:'30px',
    }
    let nextImg ={
      width:'30px',
      height:'30px',
      transform:'rotate(180deg)'
    }

    if (this.props.counter > 0) {
      arrow = <img style={prevImg} src={arrowImg} onClick={this.props.prevQuestion} />;
      arrowNext =  <img src={arrowImg} style={nextImg} onClick={this.props.nextQuestion} />;
    } 
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Quiz</h1>
        </header>
        <div style={questionContent}>
        {arrow}
        {this.props.result ? this.renderResult() : this.renderQuiz()}
        {arrowNext}
       </div>
      </div>
    );
  }
}
// Map state from store state to component properties 
// so component can get updated state
// Applying destrucuring on the state object
const mapStateToProps = state => {
  const {answer,counter,questionId,question,answerOptions,answersCount,result,resultAnswer} = state.select
  return {
      answer: answer,
      counter: counter,
      questionId: questionId,
      question: question,
      answerOptions: answerOptions,
      answersCount:answersCount, 
      result:result,
      resultAnswer:resultAnswer
  }
}
// Map dispatch action which lead to state changed to properties of component
// so component can fire some actions to make the state change 
// once the dispath mathod got be invoked, it will auto invoke the reducer to calculate the state.
//applying destrucuring on the actionCreators object
const mapDispatchToProps = dispatch => {
  const {setAnswer,setNextQuestion,prevQuestion,getResultPage} = actionCreators;
  return {
    selectAnswer: (data) => dispatch(setAnswer(data)),
    setNextQuestion: () => dispatch(setNextQuestion()),
    prevQuestion: () => dispatch(prevQuestion()),
    nextQuestion: () => dispatch(setNextQuestion()),
    getResultPage: () => dispatch(getResultPage())
  }
}
// Use HOC function connect to return a new component that is combine with redux 
export default connect(mapStateToProps, mapDispatchToProps)(App);
