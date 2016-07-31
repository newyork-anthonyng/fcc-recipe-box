import React from 'react';
import { connect } from 'react-redux';
import { Recipe } from '../components/Recipe';

const mapStateToProps = (state) => {
	return {
		recipes: state.recipes
	};
};

const RecipeList = ({ recipes }) => {
	return (
		<div className="recipe-list">
			{recipes.map((recipe) => (
				<Recipe key={recipe.id}
					id={recipe.id}
					recipeTitle={recipe.name}
					ingredients={recipe.ingredients}
				/>
			))}
		</div>
	);
};

export default connect(
	mapStateToProps
)(RecipeList);

