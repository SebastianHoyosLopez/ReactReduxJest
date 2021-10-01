import { combineReducers } from 'redux';
import counterReducer from './counterReducer'

const RootReducer = combineReducers({
    counter: counterReducer,
})

export default RootReducer;