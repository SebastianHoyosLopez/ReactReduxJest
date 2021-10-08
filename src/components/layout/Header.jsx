import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, Grid } from '@material-ui/core';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		justifyContent: 'space-around'
	}
}));

const Header = () => {
	const countProducts = useSelector((state) => state.shopping.cart.length);
	const classes = useStyles();
	return (
		<Grid container className={classes.root}>
			<Grid item>
				<h1>
					<Link to="/">Tienda</Link>
				</h1>
			</Grid>
			<Grid item>
				<h1>
					<Link to="/Shopping">
						<ShoppingCartIcon />
						{countProducts}
					</Link>
				</h1>
			</Grid>
		</Grid>
	);
};

export default Header;
