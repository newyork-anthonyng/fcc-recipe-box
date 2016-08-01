import React from 'react';
import { Button } from './Button';

export const CloseButton = (props) => {
	const { handleClick } = props;
	return (
		<div className="close-button">
			<Button
				handleClick={handleClick}
				text={"X"}
			/>
		</div>
	);
};
