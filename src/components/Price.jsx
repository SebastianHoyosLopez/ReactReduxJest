import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { connect } from 'react-redux';

const price = (props) => {
	const { products } = props;

	const handleSumTotal = () => {
		const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
		const sum = products.reduce(reducer, 0);
		return sum;
	};

	return (
		<Grid container>
			<Typography variant="h6">{`Precio Total: $ ${handleSumTotal()}`}</Typography>
		</Grid>
	);
};

const mapStateToProps = (state) => {
	return {
		products: state.shopping.cart
	};
};

export default connect(mapStateToProps)(price);
