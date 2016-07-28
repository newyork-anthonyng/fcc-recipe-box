import React from 'react';
import { render } from 'react-dom';
import { Test } from './components.jsx';

render(
	<Test foo={'bar'} />,
	document.getElementById('app')
);
