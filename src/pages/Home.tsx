import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import CityOverview from '../components/CityOverview';
import useWindow from '../hooks/useWindow';

type UnkProperties = {
	[key: string]: any;
};

export interface State {
	weather: {
		turin: UnkProperties;
		rome: UnkProperties;
		london: UnkProperties;
	};
}

const Home: FC = () => {
	const weather = useSelector((state: State) => state.weather);

	const navigate = useNavigate();
	const windowSize = useWindow();

	useEffect(() => {
		if (windowSize >= 768) {
			navigate('/turin');
		}
	}, [windowSize]);

	return (
		<main className='pb-32 flex flex-col items-center gap-8'>
			<section className='flex flex-col items-center gap-10 text-text-primary'>
				<h1 className='w-[13ch] text-center text-3xl font-bold'>Good morning Mario!</h1>
				<div className='flex items-center gap-4'>
					<img className='w-6 h-6' src='/plus.png' alt='' />
					<p className='text-lg font-bold'>Aggiungi città</p>
				</div>
			</section>
			<section className='w-full flex flex-col gap-5'>
				<CityOverview
					city='Turin'
					weather={weather.turin.weather}
					temperature={weather.turin.main?.temp}
				/>
				<CityOverview
					city='Rome'
					weather={weather.rome.weather}
					temperature={weather.rome.main?.temp}
				/>
				<CityOverview
					city='London'
					weather={weather.london.weather}
					temperature={weather.london.main?.temp}
				/>
			</section>
		</main>
	);
};

export default Home;
