import { Route, Routes } from 'react-router-dom';
import useWeather from './hooks/useWeather';

function App() {
	const [data, error, loading, reload] = useWeather({ lat: 0, lon: 0 });

	return (
		<Routes>
			<Route path='/' element={<App />} />
			<Route path='/turin' element={<App />} />
			<Route path='/rome' element={<App />} />
			<Route path='/london' element={<App />} />
		</Routes>
	);
}

export default App;
