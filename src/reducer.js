import { ADD_RECIPE, REMOVE_RECIPE, EDIT_RECIPE } from './actions';

const initialData = [
	{
		id: 1,
		name: 'First recipe',
		ingredients: [
			'a',
			'b',
			'c'
		]
	},
	{
		id: 2,
		name: 'Second recipe',
		ingredients: [
			'd',
			'e',
			'f'
		]
	}
];

export default function(state = initialData, action) {
	switch(action.type) {
		case ADD_RECIPE:
			return [
				...state,
				action.data
			];
		case REMOVE_RECIPE:
			return state.filter(recipe => {
				return recipe.id !== action.id;
			});
		case EDIT_RECIPE:
			return state.map(recipe => {
				if(recipe.id === action.id) {
					return Object.assign({}, recipe, {
						name: action.name,
						ingredients: action.ingredients
					});
				} else {
					return recipe;
				}
			});
		default:
			return state;
	};
};
