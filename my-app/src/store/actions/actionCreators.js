import * as actionTypes from './actionType'; 
// Defined the action creators that used for define multiples actions
export const prevQuestion = () => {
    return {
        type: actionTypes.PREV_PAGE
    }
}

export const setAnswer = (data) => {
    return {
        type: actionTypes.SELECT,
        payload: data
    }
}

export const setNextQuestion = (data) => {
    return {
        type: actionTypes.NEXTPAGE,
    }
}

export const getResultPage = (data) => {
    return {
        type: actionTypes.RESULT,
    }
}