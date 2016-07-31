import React from 'react';

export const Button = (props) => {
	const { handleClick, children } = props;

	return (
		<button onClick={handleClick}>
			{children}
		</button>
	);
};
