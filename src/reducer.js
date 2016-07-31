import {
	ADD_RECIPE,
	REMOVE_RECIPE,
	EDIT_RECIPE,
	LOAD_RECIPES,
	TOGGLE_ADD_RECIPE
} from './actions';

const initialData = {
	addingRecipe: false,
	recipes: []
};

export default function(state = initialData, action) {
	let newRecipes;
	switch(action.type) {
		case ADD_RECIPE:
			const newRecipe = action.data;

			newRecipes = state.recipes.slice(0);
			newRecipes.push(newRecipe);

			return Object.assign({}, state, {
				recipes: newRecipes
			});
		case REMOVE_RECIPE:
			newRecipes = state.recipes.filter(recipe => {
				return recipe.id !== action.id;
			});

			return Object.assign({}, state, {
				recipes: newRecipes
			});
		case EDIT_RECIPE:
			newRecipes = state.recipes.map(recipe => {
				if(recipe.id === action.id) {
					return Object.assign({}, recipe, {
						name: action.name,
						ingredients: action.ingredients
					});
				} else {
					return recipe;
				}
			});

			return Object.assign({}, state, {
				recipes: newRecipes
			});
		case LOAD_RECIPES:
			return Object.assign({}, state, {
				recipes: action.recipes
			});
		case TOGGLE_ADD_RECIPE:
			return Object.assign({}, state, {
				addingRecipe: !state.addingRecipe
			});
		default:
			return state;
	};
};
