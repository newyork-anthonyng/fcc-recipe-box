import React from 'react';
import { connect } from 'react-redux';
import { Button } from '../components/Button';
import { toggleAddRecipe } from '../actions';

const mapStateToProps = (state) => {
	return {};
};

const mapDispatchToProps = (dispatch) => {
	return {
		handleClick: () => {
			dispatch(toggleAddRecipe());
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Button);
