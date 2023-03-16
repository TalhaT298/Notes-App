import React from 'react';

const Header = ({ handleToggleDarkMode }) => {
	return (
		<div>
			<div className='header my-8
		'>
			<h1>Notes App</h1>
			<button
				onClick={() =>
					handleToggleDarkMode(
						(previousDarkMode) => !previousDarkMode
					)
				}
				className='save'
			>
				Toggle Mode
			</button>
		</div>
		
		</div>
	);
};

export default Header;
