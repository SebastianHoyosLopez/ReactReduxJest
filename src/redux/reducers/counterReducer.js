import * as actionTypes from "../Actions-types";

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return state + 1;
    case actionTypes.DECREMENT:
      return state - 1;
    case actionTypes.RESETCOUNTER:
      return 0;
    default:
      return state;
  }
};

export default counterReducer;
