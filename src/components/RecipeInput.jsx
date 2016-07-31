import React from 'react';

export const RecipeInput = (props) => {
	return (
		<div className="recipe-input">
			<label htmlFor="name">Name</label>
			<input type="text" id="name" placeholder="Enter recipe title" />
			<br />
			<label htmlFor="ingredients">Name</label>
			<input type="text" id="ingredients" placeholder="Enter comma separated list of ingredients" />
		</div>
	);
};
