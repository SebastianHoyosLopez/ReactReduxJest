import * as ActionTypes from '../Actions-types'

export const increment = (payload) => ({
    type: ActionTypes.INCREMENT,
    payload,
})

export const decrement = (payload) => ({
    type: ActionTypes.DECREMENT,
    payload,
})

export const resetCounter = (payload) => ({
    type: ActionTypes.RESETCOUNTER,
    payload
})