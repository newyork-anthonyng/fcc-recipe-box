import React from 'react';
import { connect } from 'react-redux';
import { Button } from '../components/Button';
import { editRecipe, toggleEditRecipe } from '../actions';

const EditRecipeContainer = React.createClass({
	editRecipe: function(e) {
		e.stopPropagation();

		const newTitle = this.myRecipeTitle.value;
		const newIngredients = this.myRecipeIngredients.value.split(',');
		this.props.editRecipe({
			id: this.props.id,
			name: newTitle,
			ingredients: newIngredients
		});

		this.resetForm();
	},

	resetForm: function() {
		this.myRecipeTitle.value = '';
		this.myRecipeIngredients.value = '';
		this.props.toggleEditRecipe(this.props.id);
	},

	render: function() {
		const name = 'Hello World';
		const ingredients = 'Ingredients';

		return (
			<div className="edit-recipe">
				<h1>Editing Recipe</h1>
				<label htmlFor="name">Name</label>
				<input
					type="text"
					id="name"
					placeholder="Enter recipe title"
					ref={(ref) => this.myRecipeTitle = ref}
					defaultValue={this.props.name}
				/>
				<br />
				<label htmlFor="ingredients">Ingredients</label>
				<textarea
					type="text"
					id="ingredients"
					placeholder="Enter comma separated list of ingredients"
					ref={(ref) => this.myRecipeIngredients = ref}
					defaultValue={this.props.ingredients.join(', ')}
				/>
				<br />
				<Button
					handleClick={this.editRecipe}
					text={"Edit Recipe"}
				/>
			</div>
		);
	}
});

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => {
	return {
		editRecipe: ({ id, name, ingredients }) => {
			dispatch(editRecipe({
				id: id,
				name: name,
				ingredients: ingredients
			}));
		},
		toggleEditRecipe: (id) => {
			dispatch(toggleEditRecipe(id));
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(EditRecipeContainer);
