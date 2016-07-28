import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import reducer from './reducer';
import { Test } from './components.jsx';

const store = createStore(reducer);

render(
	<Test recipes={store.getState()} />,
	document.getElementById('app')
);
