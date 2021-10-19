import React, { useState } from 'react';
import ShoppingList from './ShoppingList';
import itemData from '../data/items';

function App() {
	// replace 'false' with a state variable that can be toggled between true and false
	// this will be used for the Dark Mode Toggle feature

	const [darkModeToggle, setDarkModeToggle] = useState(false);
	const appClass = darkModeToggle ? 'App dark' : 'App light';
	const handleDarkModeClick = (e) => {
		setDarkModeToggle(!darkModeToggle);
		darkModeToggle
			? (e.target.textContent = 'Dark Mode')
			: (e.target.textContent = 'Light Mode');
		console.log(e);
	};

	return (
		<div className={appClass}>
			<header>
				<h2>Shopster</h2>
				<button onClick={handleDarkModeClick}>Dark Mode</button>
			</header>
			<ShoppingList items={itemData} />
		</div>
	);
}

export default App;
