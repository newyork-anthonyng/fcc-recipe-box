import React from 'react';

export function Test(props) {
	const { recipes } = props;
	return (
		<ul>
			{recipes.map(recipe => (
				<li key={recipe.id}>
					<h3>{recipe.name}</h3>
					<h4>{recipe.ingredients.toString()}</h4>
				</li>
			))}
		</ul>
	);
};
