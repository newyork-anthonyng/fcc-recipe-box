import React from 'react';
import { connect } from 'react-redux';

import RecipeList from './RecipeList';
import AddRecipeButtonContainer from './AddRecipeButtonContainer';

const App = (props) => {
	console.log(props.addingRecipe);
	return (
		<div>
			<RecipeList />
			<AddRecipeButtonContainer />
		</div>
	);
};

const mapStateToProps = (state) => {
	return state;
};

export default connect(
	mapStateToProps
)(App);
