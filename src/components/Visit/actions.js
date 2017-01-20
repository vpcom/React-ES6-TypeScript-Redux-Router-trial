/*
 * action types
 */

export const INCREMENT = 'INCREMENT'

/*
 * action creators
 */

export function increment(quantity) {
    console.log("quantity: ");
    console.log(quantity);
    return {
        type: INCREMENT,
        quantity
    }
}
