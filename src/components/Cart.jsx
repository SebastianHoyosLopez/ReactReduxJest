import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import { removeFromCart } from '../redux/actions/index';
import { connect } from 'react-redux';
import Product from './Product';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex'
	},
	textDescriptionContainer: {
		textAlign: 'center'
	}
}));

const Cart = (props) => {
	const { products } = props;
	const classes = useStyles();

	const handleRemove = (product) => () => {
		props.removeFromCart(product);
	};

	return (
		<Grid container className={classes.root}>
			{products.map((product) => (
				<Grid lg={4} item key={product.id}>
					<Product textBotton="Eliminar" product={product} handleAction={handleRemove} />
				</Grid>
			))}
		</Grid>
	);
};

const mapStateToProps = (state) => {
	return {
		products: state.shopping.cart
	};
};

const mapDispatchToProps = {
	removeFromCart: removeFromCart
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
