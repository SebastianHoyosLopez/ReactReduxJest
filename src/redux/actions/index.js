// contador
import * as ActionTypes from "../Actions-types";

export const increment = (payload) => ({
  type: ActionTypes.INCREMENT,
  payload,
});

export const decrement = (payload) => ({
  type: ActionTypes.DECREMENT,
  payload,
});

export const resetCounter = (payload) => ({
  type: ActionTypes.RESETCOUNTER,
  payload,
});

// shopping

export const add_to_cart = (payload) => ({
  type: ActionTypes.ADD_TO_CART,
  payload,
});

export const removeFromCart = (payload) => ({
  type: ActionTypes.REMOVE_FROM_CART,
  payload,
});
