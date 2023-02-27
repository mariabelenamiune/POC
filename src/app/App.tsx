import { Button } from '../components/Button';
import './App.css';
import { TaskCard } from '../components/Task';
import { Greeting } from '../components/Greeting';
import { Post } from '../components/Posts';
import { Counter } from '../components/Counter';

function App() {
	return (
		<>
			<TaskCard ready={true} />
			<Greeting />
			<Button text='Send' />
			<Post />
			<Counter />
		</>
	);
}

export default App;
