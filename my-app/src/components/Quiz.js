import React from 'react';
import Question from './Question';
import QuestionCount from './QuestionCount';
import AnswerOption from './AnswerOption';
import PropTypes from 'prop-types';
// stateless component that include three stateless component for display the view layer of the webpage
 const Quiz = (props) => {
  var answerOptions = {
      display:'flex',
      paddingLeft:'0',
      justifyContent:'space-evenly',
      alignItems: 'center',
  }
  const renderAnswerOptions = (key) => {
    return (
      <AnswerOption
        key={key.content}
        answerContent={key.content}
        answerType={key.type}
        answer={props.answer}
        questionId={props.questionId}
        onAnswerSelected={props.onAnswerSelected}
      />
    );
  }

    return (
       <div className="quiz">
         <QuestionCount
           counter={props.questionId}
           total={props.questionTotal}
         />
         <Question content={props.question} />
         <ul style={answerOptions}>
           {props.answerOptions.map(renderAnswerOptions)}
         </ul>
       </div>
    );
  }

  Quiz.propTypes = {
    answer: PropTypes.string.isRequired,
    answerOptions: PropTypes.array.isRequired,
    counter: PropTypes.number.isRequired,
    question: PropTypes.string.isRequired,
    questionId: PropTypes.number.isRequired,
    questionTotal: PropTypes.number.isRequired,
    onAnswerSelected: PropTypes.func.isRequired
  };

  export default Quiz;
