import {createStore , applyMiddleware , compose} from 'redux' ;
import thunk from 'redux-thunk';
import combineReducer from '../reducers/index'

const devTools =window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store=createStore(
    combineReducer , 
    compose(applyMiddleware(thunk) , devTools)
);
export default store ;

