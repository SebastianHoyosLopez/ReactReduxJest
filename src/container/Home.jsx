import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Products from '../components/Products';
import { increment, decrement, resetCounter } from '../redux/actions';

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
	}
}))

const Home = () => {
	const classes = useStyles()
	const count = useSelector((state) => state.counter);
	const dispatch = useDispatch();
	return (
		<Grid container className={classes.root}>
			<Grid item>
				<h1>
					Contador: <span>{count}</span>
				</h1>
				<button onClick={() => dispatch(increment())}>sumar</button>
				<button onClick={() => dispatch(decrement())}>restar</button>
				<button onClick={() => dispatch(resetCounter())}>reset</button>
			</Grid>
			<Grid item>
				<Products />
			</Grid>
		</Grid>
	);
};

export default Home;
