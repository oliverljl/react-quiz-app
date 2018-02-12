import * as actionTypes from '../actions/actionType'; 
import quizQuestions from '../../DATA/questiones.js';

const shuffleArray = function (array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
}
//get the random questiones
const shuffledAnswerOptions = quizQuestions.map((question) => shuffleArray(question.answers)); 

// Define the initial state that use for application
const initialState = {
       counter: 0,
       questionId: 1,
       question: quizQuestions[0].question,
       answerOptions: shuffledAnswerOptions[0],
       answer: '',
       answersCount: 0,
       result: ''
};

// use reducer to calculate the state that based on the action 
// it will auto invoking once the action got pass into the reducer 
const reducer = (state = initialState, action) => {
	switch(action.type){
		case actionTypes.SELECT:
			state.answersCount =  state.answersCount + parseInt([action.payload]);
			return {
			...state,
      		answersCount: state.answersCount,
		}
		case actionTypes.NEXTPAGE:
		 	const counter = state.counter + 1;
    	 	const questionId = state.questionId + 1;
			return {
				...state, 
				counter: counter,
				questionId : questionId,
				question: quizQuestions[counter].question,
      			answerOptions: quizQuestions[counter].answers,
			}
		case actionTypes.PREV_PAGE:
		 	const count = state.counter - 1;
    	 	const questioncount = state.questionId - 1;
			return {
				...state, 
				counter: counter,
				questionId : questioncount,
				question: quizQuestions[count].question,
      			answerOptions: quizQuestions[count].answers,
			}
		case actionTypes.RESULT:
			return {
				result: true,
				resultAnswer: state.answersCount
			}
		default:
			return state;
	}
}

export default reducer


