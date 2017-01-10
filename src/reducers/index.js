import { combineReducers } from 'redux';

// Reducers
import counterReducer from '../components/Counter/reducer';
import visitReducer from '../components/Visit/reducer';

// Combine Reducers
var reducers = combineReducers({
    counterReducer: counterReducer,
    visitReducer: visitReducer,
});

export default reducers;