export const ADD_RECIPE = 'ADD_RECIPE';
export const REMOVE_RECIPE = 'REMOVE_RECIPE';
export const EDIT_RECIPE = 'EDIT_RECIPE';
export const TOGGLE_ADD_RECIPE = 'TOGGLE_ADD_RECIPE';

const uid = () => Math.random().toString(34).slice(2);

export function addRecipe({ name, ingredients }) {
	return {
		type: ADD_RECIPE,
		data: {
			id: uid(),
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

export function toggleAddRecipe() {
	return {
		type: TOGGLE_ADD_RECIPE
	};
}
