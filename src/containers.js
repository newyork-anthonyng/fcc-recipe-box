import { connect } from 'react-redux';
import { Test } from './components';

const mapStateToProps = (state) => {
	return { recipes: state };
};

const mapDispatchToProps = (dispatch) => {
	return {};
};

export const TestList = connect(
	mapStateToProps,
	mapDispatchToProps
)(Test);
