export const Utility = (function() {
	const getRecipes = () => {
		const recipesJSON = window.localStorage.getItem('recipes');
		return JSON.parse(recipesJSON);
	};

	const updateRecipes = (recipes) => {
		const recipesJSON = JSON.stringify(recipes);
		window.localStorage.setItem('recipes', recipesJSON);
	};

	const uid = () => {
		return Math.random().toString(34).slice(2);
	};

	return {
		getRecipes: getRecipes,
		updateRecipes: updateRecipes,
		uid: uid
	};
})();
