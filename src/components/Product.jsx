import React from 'react';
import { Typography, makeStyles, Card, CardMedia, CardContent, Button } from '@material-ui/core';
import { Box } from '@mui/system';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between'
	},
	image: {
		objectFit: 'contain'
	},
	textDescriptionContainer: {
		textAlign: 'center'
	}
}));

const Product = ({ textBotton, product, handleAction }) => {
	const classes = useStyles();
	return (
		<Box
			sx={{
				width: 330,
				margin: 2,
				justifyContent: 'center'
			}}
		>
			<Card className={classes.root}>
				<CardMedia component="img" height="230" image={product.image} alt={product.title} />
				<CardContent className={classes.textDescriptionContainer}>
					<Typography gutterBottom variant="h5" component="div">
						{product.title}
					</Typography>
					<Typography variant="body2">{product.description}</Typography>
					<Typography variant="body2">{product.price}</Typography>
					{product.quantity ? <Typography variant="body2">Cantidad: {product.quantity}</Typography> : null}
				</CardContent>
				<Button variant="contained" onClick={handleAction(product)}>
					{textBotton}
				</Button>
			</Card>
		</Box>
	);
};

export default Product;
