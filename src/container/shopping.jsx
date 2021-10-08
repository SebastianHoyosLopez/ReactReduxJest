import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import Cart from '../components/Cart';

const styles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		textAlign: 'center'
	}
}));

const shopping = () => {
	const classes = styles();
	return (
		<Grid container className={classes.root}>
			<Grid item>
				<Typography variant="h2">lista de pedidos</Typography>
			</Grid>
			<Grid item>
				<Cart />
			</Grid>
		</Grid>
	);
};

export default shopping;
