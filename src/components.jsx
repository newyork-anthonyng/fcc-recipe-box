import React from 'react';

export function Test(props) {
	const { recipes } = props;
	return (
		<ul>
			{recipes.map(recipe => (
				<li key={recipe.id}>
					<h1>{recipe.name}</h1>
					<h2>{recipe.ingredients.toString()}</h2>
				</li>
			))}
		</ul>
	);
};
