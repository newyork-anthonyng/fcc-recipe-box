import React from 'react';
import { connect } from 'react-redux';
import { Button } from '../components/Button';
import { editRecipe } from '../actions';

const EditRecipeContainer = React.createClass({
	editRecipe: function(e) {
		e.stopPropagation();
		console.log(this.myRecipeTitle.value);
		console.log(this.myRecipeIngredients.value);
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
					defaultValue={name}
				/>
				<br />
				<label htmlFor="ingredients">Ingredients</label>
				<textarea
					type="text"
					id="ingredients"
					placeholder="Enter comma separated list of ingredients"
					ref={(ref) => this.myRecipeIngredients = ref}
					defaultValue={ingredients}
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

export default EditRecipeContainer;
