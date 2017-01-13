/*
 * action types
 */

export const INCREMENT = 'INCREMENT'

/*
 * action creators
 */

export function increment(quantity) {
    return {
        type: INCREMENT,
        quantity
    }
}
