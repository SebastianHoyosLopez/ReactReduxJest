import React from 'react';

const Product = ({ product }) => {
	return (
		<div>
			<img src={product.image} alt="imagen producto" />
			<div>
				<h2>
					{product.title}
					<span>$ {product.price}</span>
				</h2>
				<p>{product.description}</p>
			</div>
		</div>
	);
};

export default Product;
