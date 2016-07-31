import React from 'react';
import { connect } from 'react-redux';

import RecipeList from './RecipeList';
import ToggleAddRecipeButtonContainer from './ToggleAddRecipeButtonContainer';
import AddRecipeContainer from '../containers/AddRecipeContainer';
import { loadRecipes } from '../actions';
import { Utility } from '../utility';

const App = React.createClass({
	componentDidMount: function() {
		const recipes = Utility.getRecipes() || [];
		this.props.loadRecipes(recipes);
	},

	render: function() {
		return (
			<div>
				<RecipeList />
				<ToggleAddRecipeButtonContainer />
				{this.props.addingRecipe ? <AddRecipeContainer /> : null}
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
