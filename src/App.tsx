import useWeather from './hooks/useWeather';

function App() {
	const [data, error, loading, reload] = useWeather({ lat: 0, lon: 0 });

	const logData = () => {
		console.log(data);
	};

	return (
		<div>
			<button onClick={logData}>Log data</button>
		</div>
	);
}

export default App;
