import React from 'react';
import { connect } from 'react-redux';
import { Button } from '../components/Button';
import { addRecipe, toggleAddRecipe } from '../actions';
import { Utility } from '../utility';

const AddRecipeContainer = React.createClass({
	addRecipe: function() {
		const name = this.myRecipeTitle.value;
		const ingredients = this.myRecipeIngredients.value;

		const hasEmptyFields = name === '' || ingredients === '';
		if(hasEmptyFields) return;

		const newRecipe = {
			id: Utility.uid(),
			name: name,
			ingredients: ingredients.split(',')
		};
		this.props.saveNewRecipe(newRecipe);
		this.resetForm();
	},

	resetForm: function() {
		this.myRecipeTitle.value = '';
		this.myRecipeIngredients.value = '';
		this.props.toggleAddRecipe();
	},

	render: function() {
		return (
			<div className="background">
				<div className="add-recipe">
					<h1>Add New Recipe</h1>
					<hr />
					<div className="recipe-input">
						<label htmlFor="name">Name</label>
						<input
							type="text"
							id="name"
							placeholder="Enter recipe title"
							ref={(ref) => this.myRecipeTitle = ref}
						/>
						<br />
						<label htmlFor="ingredients">Ingredients</label>
						<textarea
							id="ingredients"
							placeholder="Enter comma separated list of ingredients"
							ref={(ref) => this.myRecipeIngredients = ref}
						/>
					</div>
					<Button
						text={"Save Recipe"}
						handleClick={this.addRecipe}
					/>
				</div>
			</div>
		);
	}
});

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => {
	return {
		saveNewRecipe: (newRecipe) => {
			dispatch(addRecipe(newRecipe));
		},
		toggleAddRecipe: () => {
			dispatch(toggleAddRecipe());
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AddRecipeContainer);
