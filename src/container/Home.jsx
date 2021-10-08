import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Products from '../components/Products';
import { increment, decrement, resetCounter } from '../redux/actions';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center'
	}
}));

const Home = () => {
	const classes = useStyles();
	const count = useSelector((state) => state.counter);
	const dispatch = useDispatch();
	return (
		<Grid container className={classes.root}>
			<Grid item>
				<Products />
			</Grid>
		</Grid>
	);
};

export default Home;
