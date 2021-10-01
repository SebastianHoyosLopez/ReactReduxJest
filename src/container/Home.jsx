import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, resetCounter } from '../redux/actions';

const Home = () => {
	const count = useSelector((state) => state.counter);
	const dispatch = useDispatch();
	return (
		<div>
			<h1>
				Contador: <span>{count}</span>
			</h1>
			<button onClick={() => dispatch(increment())}>sumar</button>
			<button onClick={() => dispatch(decrement())}>restar</button>
			<button onClick={() => dispatch(resetCounter())}>reset</button>
		</div>
	);
};

export default Home;
