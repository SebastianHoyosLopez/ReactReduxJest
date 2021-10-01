import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

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
					<Link to="/">Home</Link>
				</h1>
			</Grid>
			<Grid item>
				<h1>
					<Link to="/Shopping">shopping</Link>
				</h1>
			</Grid>
		</Grid>
	);
};

export default Header;
