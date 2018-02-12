import React from 'react';
import PropTypes from 'prop-types';
const Result = (props) => {
    return (
      <div className="result">
        You total point is <strong>{props.quizResult}</strong>!
      </div>
    );
  }

  Result.propTypes = {
    quizResult: PropTypes.number.isRequired,
  };

  export default Result;