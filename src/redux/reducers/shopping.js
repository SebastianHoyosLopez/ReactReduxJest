import * as actionTypes from '../Actions-types';
import initialState from '../../initialState';

const shopping = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_TO_CART:
			const cartShopping = state.cart;
			const found = cartShopping.find((item) => item.id === action.payload.id);
			if (found) {
				return {
					...state,
					cart: state.cart.map((product) => {
						if (product.id === action.payload.id) {
							return {
								...product,
								quantity: product.quantity + 1
							};
						} else {
							return product;
						}
					})
				};
			} else {
				return {
					...state,
					cart: [ ...state.cart, { ...action.payload, quantity: 1 } ]
				};
			}
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
