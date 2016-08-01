import React from 'react';
import { connect } from 'react-redux';

import RecipeList from './RecipeList';
import ToggleAddRecipeButtonContainer from './ToggleAddRecipeButtonContainer';
import AddRecipeContainer from '../containers/AddRecipeContainer';
import EditRecipeContainer from '../containers/EditRecipeContainer';
import { loadRecipes } from '../actions';
import { Utility } from '../utility';

const App = React.createClass({
	componentDidMount: function() {
		const recipes = Utility.getRecipes() || [];
		this.props.loadRecipes(recipes);
	},

	componentDidUpdate: function(prevProps, prevState) {
		Utility.updateRecipes(this.props.recipes);
	},

	render: function() {
		let editingRecipe = this.props.recipes.filter((recipe) => {
			return recipe.id === this.props.editingRecipe;
		});
		editingRecipe = editingRecipe[0];

		return (
			<div>
				<RecipeList />
				<ToggleAddRecipeButtonContainer />
				{this.props.addingRecipe ? <AddRecipeContainer /> : null}
				{this.props.editingRecipe ? <EditRecipeContainer id={this.props.editingRecipe} name={editingRecipe.name} ingredients={editingRecipe.ingredients} /> : null}
			</div>
		);
	}
});

const mapStateToProps = (state) => {
	return state;
};

const mapDispatchToProps = (dispatch) => {
	return {
		loadRecipes: (recipes) => {
			dispatch(loadRecipes(recipes));
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
