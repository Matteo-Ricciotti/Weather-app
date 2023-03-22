import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import useWeather from './hooks/useWeather';
import Page from './components/Page';

const Home = lazy(() => import('./pages/Home'));
const City = lazy(() => import('./pages/City'));

function App() {
	const [error, loading] = useWeather() as boolean[];

	return (
		<Routes>
			<Route path='/' element={<Page error={error} loading={loading} />}>
				<Route index element={<Home />} />
				<Route path='/turin' element={<City city='turin' />} />
				<Route path='/rome' element={<City city='rome' />} />
				<Route path='/london' element={<City city='london' />} />
			</Route>
			<Route path='*' element={<h1>Not Found</h1>} />
		</Routes>
	);
}

export default App;
