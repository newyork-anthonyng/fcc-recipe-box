export const ADD_RECIPE = 'ADD_RECIPE';
export const REMOVE_RECIPE = 'REMOVE_RECIPE';
export const EDIT_RECIPE = 'EDIT_RECIPE';
export const LOAD_RECIPES = 'LOAD_RECIPES';
export const TOGGLE_ADD_RECIPE = 'TOGGLE_ADD_RECIPE';

export function addRecipe({ id, name, ingredients }) {
	return {
		type: ADD_RECIPE,
		data: {
			id: id,
			name: name,
			ingredients: ingredients
		}
	};
};

export function removeRecipe(id) {
	return {
		type: REMOVE_RECIPE,
		id: id
	};
};

export function editRecipe(id, {name, ingredients}) {
	return {
		type: EDIT_RECIPE,
		id: id,
		name: name,
		ingredients: ingredients
	};
}

export function loadRecipes(recipes) {
	return {
		type: LOAD_RECIPES,
		recipes: recipes
	};
}

export function toggleAddRecipe() {
	return {
		type: TOGGLE_ADD_RECIPE
	};
}
