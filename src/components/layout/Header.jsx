import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		justifyContent: 'space-around'
	}
}));

const Header = () => {
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
					</Link>
				</h1>
			</Grid>
		</Grid>
	);
};

export default Header;
