import React from 'react';
import { useState } from 'react';

function Item({ name, category }) {
	const [addToCart, setAddToCart] = useState(false);

	// use another ternary to add to cart

	const handleClick = (e) => {
		setAddToCart(!addToCart);
		addToCart
			? (e.target.textContent = 'Add to Cart')
			: (e.target.textContent = 'Remove from cart');
	};

	return (
		<li className={addToCart ? 'in-cart' : ''}>
			<span>{name}</span>
			<span className="category">{category}</span>
			<button onClick={handleClick} className="add">
				Add to Cart
			</button>
		</li>
	);
}

export default Item;
