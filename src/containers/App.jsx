import React from 'react';
import { connect } from 'react-redux';

import RecipeList from './RecipeList';

const App = (props) => {
	return (
		<div>
			<RecipeList />
		</div>
	);
};

const mapStateToProps = (state) => {
	return state;
};

export default connect(
	mapStateToProps
)(App);
