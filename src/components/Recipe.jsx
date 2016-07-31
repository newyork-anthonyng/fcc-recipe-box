import React from 'react';
import IngredientList from '../containers/IngredientList';
import { Button } from './Button';

const Recipe = React.createClass({
	getInitialState: function() {
		return {
			ingredientsVisible: false
		};
	},

	handleClick: function() {
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
					recipeId={this.props.id}
				/>
			</div>
		);
	}
});

export { Recipe };
