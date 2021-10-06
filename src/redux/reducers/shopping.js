import * as actionTypes from '../Actions-types';
import initialState from '../../initialState';

const shopping = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_TO_CART:
			return {
				...state,
				cart: [ ...state.cart, action.payload ]
			};
		case actionTypes.REMOVE_FROM_CART:
			return {
				...state,
				cart: state.cart.filter((item) => item.id !== action.payload.id)
			};
		default:
			return state;
	}
};

export default shopping;
