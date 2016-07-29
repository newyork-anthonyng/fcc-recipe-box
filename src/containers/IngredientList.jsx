import React from 'react';
import { connect } from 'react-redux';
import { Ingredient } from '../components/Ingredient';

const IngredientList = ({ ingredients, visible }) => {
	if(visible) {
		return (
			<div className="ingredient-list">
				<ul>
					{ingredients.map((ingredient, index) => (
						<li key={index}>
							<Ingredient ingredientTitle={ingredient} />
						</li>
					))}
				</ul>
			</div>
		);
	} else {
		return null;
	}
};

export default IngredientList;
