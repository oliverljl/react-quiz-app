import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import selectReducer from './store/reducers/select';
//initial the Project load virtual dom into real dom

const appReducer = combineReducers({
	select: selectReducer
})
// create the reducer and mount it onto the store
const store = createStore(appReducer);
// using the Provider middlerware to passing the Store Down
// so it enables the redux store for the application. 
const app = (
    <Provider store={store}>
            <App />
    </Provider>
)
ReactDOM.render(app , document.getElementById('root'));
registerServiceWorker();
