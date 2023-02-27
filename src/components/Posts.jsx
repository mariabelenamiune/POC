import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
export const Post = () => {
	const getData = () => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(response => response.json())
			.then(data => console.log(data))
			.catch(error => console.error(error));
	};
	return (
		<button onClick={getData}>
			<HiOutlineArrowNarrowRight />
			Get Data{}
		</button>
	);
};
