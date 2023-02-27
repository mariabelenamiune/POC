import Proptypes from 'prop-types';

export function Button({ text }) {
	const handleChange = () => {
		console.log('Click on the button');
	};
	return <button onClick={handleChange}>{text}</button>;
}

Button.propTypes = {
	text: Proptypes.string,
};
