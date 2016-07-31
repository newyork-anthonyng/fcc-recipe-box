import React from 'react';

export const Button = (props) => {
	const { handleClick, text} = props;

	return (
		<button onClick={handleClick}>
			{text}
		</button>
	);
};
