import { createStore } from 'redux';
import reducers from './reducers';
/*
const initialState = {
    counterReducer: [{value: 0}],
    visitReducer: [{visitCount: 4}]
};
*/
console.log(reducers);
//console.log(initialState);

const store = createStore(reducers);//, initialState);

export default store;