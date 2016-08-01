import React from 'react';
import { connect } from 'react-redux';
import { removeRecipe, toggleEditRecipe } from '../actions';
import { Ingredient } from '../components/Ingredient';
import { Button } from '../components/Button';
import { Utility } from '../utility';

const IngredientList = React.createClass({
	editRecipe: function(e) {
		e.stopPropagation();
		this.props.toggleEditRecipe(this.props.recipeId);
	},

	removeRecipe: function(e) {
		e.stopPropagation();
		this.props.removeRecipe(this.props.recipeId);
	},

	render: function() {
		if(this.props.visible) {
			return (
				<div className="ingredient-list">
					<h2>Ingredients</h2>
					<hr />
					<ul>
						{this.props.ingredients.map((ingredient, index) => (
							<li key={index}>
								<Ingredient ingredientTitle={ingredient} />
							</li>
						))}
					</ul>
					<div className="edit-button">
						<Button
							handleClick={this.editRecipe}
							text={"Edit Recipe"}
						/>
					</div>
					<div className="delete-button">
						<Button
							handleClick={this.removeRecipe}
							text={"Delete Recipe"}
						/>
					</div>
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
		},
		toggleEditRecipe: (id) => {
			dispatch(toggleEditRecipe(id));
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(IngredientList);
