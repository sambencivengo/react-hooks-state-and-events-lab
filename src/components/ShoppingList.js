import React from 'react';
import { useState } from 'react/cjs/react.development';
import Item from './Item';

function ShoppingList({ items }) {
	const [selectedCategory, setSelectedCategory] = useState('All');

	const handleFilter = (e) => {
		setSelectedCategory(e.target.value);
	};
	console.log(selectedCategory);
	const newList = items.filter((item) => {
		if (selectedCategory === 'All') {
			return true;
		} else {
			return item.category === selectedCategory;
		}
	});

	// store filter variable ✅
	// filter results
	// render them on the page(REPLACE ITEMS IN .MAP)

	return (
		<div className="ShoppingList">
			<div className="Filter">
				<select onChange={handleFilter} name="filter">
					<option value="All">Filter by category</option>
					<option value="Produce">Produce</option>
					<option value="Dairy">Dairy</option>
					<option value="Dessert">Dessert</option>
				</select>
			</div>
			<ul className="Items">
				{newList.map((item) => (
					<Item key={item.id} name={item.name} category={item.category} />
				))}
			</ul>
		</div>
	);
}

export default ShoppingList;
