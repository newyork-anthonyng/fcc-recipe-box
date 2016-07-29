import React from 'react';
import IngredientList from '../containers/IngredientList';

const Recipe = React.createClass({
	getInitialState: function() {
		return {
			ingredientsVisible: false
		};
	},

	handleClick: function() {
		console.log('you clicked on me');
		this.setState({
			ingredientsVisible: !this.state.ingredientsVisible
		});
	},

	render: function() {
		return (
			<div
				className="recipe"
				onClick={this.handleClick}
			>
				<h1>{this.props.recipeTitle}</h1>
				<IngredientList
					visible={this.state.ingredientsVisible}
					ingredients={this.props.ingredients}
				/>
			</div>
		);
	}
});

export { Recipe };
