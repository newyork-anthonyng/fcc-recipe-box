import React from 'react';
import { connect } from 'react-redux';
import { removeRecipe } from '../actions';
import { Ingredient } from '../components/Ingredient';
import { Button } from '../components/Button';
import { Utility } from '../utility';

const IngredientList = React.createClass({
	removeRecipe: function(e) {
		e.stopPropagation();
		this.props.removeRecipe(this.props.recipeId);
		this.updateLocalStorage();
	},

	updateLocalStorage: function() {
		const updatedRecipes = Utility.getRecipes().filter((recipe) => {
			return recipe.id !== this.props.recipeId;
		});

		Utility.updateRecipes(updatedRecipes);
	},

	render: function() {
		if(this.props.visible) {
			return (
				<div className="ingredient-list">
					<ul>
						{this.props.ingredients.map((ingredient, index) => (
							<li key={index}>
								<Ingredient ingredientTitle={ingredient} />
							</li>
						))}
					</ul>
					<Button
						handleClick={this.removeRecipe}
						text={"Delete Recipe"}
					/>
				</div>

			);
		} else {
			return null;
		}
	}
});

const mapStateToProps = (state) => {
	return state;
};

const mapDispatchToProps = (dispatch) => {
	return {
		removeRecipe: (id) => {
			dispatch(removeRecipe(id));
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(IngredientList);
