import React from 'react';
import { connect } from 'react-redux';

import RecipeList from './RecipeList';
import ToggleAddRecipeButtonContainer from './ToggleAddRecipeButtonContainer';
import AddRecipeContainer from '../containers/AddRecipeContainer';

const App = (props) => {
	return (
		<div>
			<RecipeList />
			<ToggleAddRecipeButtonContainer />
			{props.addingRecipe ? <AddRecipeContainer /> : null}
		</div>
	);
};

const mapStateToProps = (state) => {
	return state;
};

export default connect(
	mapStateToProps
)(App);
