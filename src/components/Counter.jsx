import { useState, useEffect } from 'react';

export const Counter = () => {
	const [counter, setCounter] = useState(10);

	useEffect(() => {
		console.log('updated');
	}, [counter]);

	return (
		<>
			<h1> Counter: {counter}</h1>
			<button
				onClick={() => {
					setCounter(counter + 1);
				}}
			>
				Increment
			</button>

			<button
				onClick={() => {
					setCounter(counter - 1);
				}}
			>
				Subtract
			</button>

			<button
				onClick={() => {
					setCounter(10);
				}}
			>
				Reload
			</button>
		</>
	);
};
