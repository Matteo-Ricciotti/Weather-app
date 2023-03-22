import { FC } from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';

import DayOverview from '../components/DayOverview';
import { useNavigate } from 'react-router-dom';
import getImage from '../utility/getImage';
import useWindow from '../hooks/useWindow';
import CityOverview from '../components/CityOverview';
import { coordinates } from '../utility/constants';
import { State } from '../redux/store';
import SearchCity from '../components/SearchCity';
import AddPosition from '../components/AddPosition';
import CityFocus from '../components/CityFocus';

const week = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
const allCities = Object.keys(coordinates);

type Props = {
	city: string;
};

const City: FC<Props> = ({ city }) => {
	const weather = useSelector<State, any>((state) => state.weather);

	const navigate = useNavigate();
	const windowSize = useWindow();

	const now = moment(Date.now());
	const weatherType = weather[city].weather && weather[city].weather[0].main;

	return (
		<main className='flex flex-col gap-20 pt-10 pb-32 text-white'>
			{(windowSize < 768 && (
				<>
					<div className='fixed top-0 left-0 right-0 p-5 flex items-center justify-between'>
						<img
							className='w-8 h-8'
							src='/back.png'
							alt=''
							onClick={() => navigate('/')}
						/>
						<h1 className='text-2xl font-semibold first-letter:capitalize'>{city}</h1>
						<img className='w-6 h-6' src='/plus.png' alt='' />
					</div>

					<section className='flex flex-col items-center gap-16 text-center'>
						<div>
							<h2 className='text-lg font-medium'>{now.format('dddd DD, MMMM')}</h2>
							<p className='text-lg font-light'>{weatherType}</p>
						</div>
						<div className='flex items-center gap-6'>
							<img
								className='w-24 h-24'
								src={`/weather/${getImage(weatherType)}.png`}
								alt=''
							/>
							<p className='text-8xl font-bold'>
								{(weather[city].main?.temp - 273.15).toFixed(0)}°
							</p>
						</div>
					</section>
					<section className='flex flex-col gap-10'>
						<div className='relative flex flex-col justify-center'>
							<div className='absolute h-1.5 left-5 right-0 from-white to-white/10 bg-gradient-to-r'></div>
							<div className='flex items-center justify-start gap-10'>
								<div className='flex flex-col items-center gap-2'>
									<p>now</p>
									<div className='w-6 h-6 rounded-full bg-white'></div>
									<p>00:00</p>
								</div>
								{new Array(4).fill(0).map((_, i) => (
									<div key={i} className='flex flex-col items-center gap-2'>
										<p>now</p>
										<div className='w-3 h-3 rounded-full bg-white'></div>
										<p>00:00</p>
									</div>
								))}
							</div>
						</div>
						<div className='grid gap-4 grid-flow-col auto-cols-[40%] overflow-x-auto overscroll-x-contain'>
							{week.map((day) => (
								<DayOverview key={day} day={day} />
							))}
						</div>
					</section>
				</>
			)) || (
				<div className='m-auto flex gap-10'>
					<section>
						<CityFocus city={city} />
						<div>
							<div></div>
							<div></div>
						</div>
					</section>
					<section className='flex flex-col gap-8'>
						<div className='flex items-center justify-center gap-4'>
							<img className='w-6 h-6' src='/plus.png' alt='' />
							<p className='text-lg font-bold text-text-primary'>Aggiungi città</p>
						</div>
						<div className='flex flex-col gap-4'>
							{allCities.map((c) => {
								if (c !== city) return <CityOverview key={c} city={c} />;
							})}
						</div>
						<SearchCity />
						<AddPosition />
					</section>
				</div>
			)}
		</main>
	);
};

export default City;
