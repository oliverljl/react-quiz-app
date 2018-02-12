import React from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
const AnswerOption = (props) => {
   var styles = {
    textDecoration: 'none',
    listStyle:'none'
   }
   var wrapper = {
      width:200,
      height:200,
      border:'1px solid black',
      margin:'10px',
      borderRadius:'10px',
      display:'flex',
      justifyContent:'center',
      alignItems: 'center',
      padding:'0',
      ':hover':{
        backgroundColor:'#e3ecfc'
      }
   }
   return (
    <ul style={wrapper} onClick={()=>{props.onAnswerSelected(props.answerType)}}>
      <li style={styles}>
      <label htmlFor={props.answerType}>
          {props.answerContent}
        </label>
      </li>
    </ul>
    );
  }

  AnswerOption.propTypes = {
    answerType: PropTypes.string.isRequired,
    answerContent: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
    onAnswerSelected: PropTypes.func.isRequired
  };

  export default Radium(AnswerOption);