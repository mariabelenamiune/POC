import './task.css';

// eslint-disable-next-line react/prop-types
export function TaskCard({ ready }) {
	const title = { fontWeight: 'bold' };
	return (
		<div className='card'>
			<h1 style={title}>My first task</h1>
			<span
				style={
					ready ? { backgroundColor: 'green' } : { backgroundColor: 'blue' }
				}
			>
				{ready ? 'Task done' : 'Task already in progress'}
			</span>
		</div>
	);
}
