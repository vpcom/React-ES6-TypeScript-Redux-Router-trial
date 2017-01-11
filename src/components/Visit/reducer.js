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
        */
    };
}