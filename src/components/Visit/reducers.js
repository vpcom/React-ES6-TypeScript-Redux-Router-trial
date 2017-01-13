
import { INCREMENT } from './actions'
import { combineReducers } from 'redux'



function increment(state = 0, action) {
    switch (action.type) {
        case INCREMENT:
            return state + 1
        default:
            return state
    }
}


const incrementVisit = combineReducers({
    increment
})

export default incrementVisit

/*
export default (state = 0, action) => {
    switch (action.type) {
        case 'VISITOR':
            return state + 1
        default:
            return state
    }
}

export function onIncrement() {
    console.log("on increment")
    return {
        /*
        type: ADD_TODO,
        text
        *
    };
}

*/