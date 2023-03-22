import { FC } from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';

import DayOverview from '../components/DayOverview';
import { State } from './Home';
import { useNavigate } from 'react-router-dom';
import getImage from '../utility/getImage';

const week = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

type Props = {
	city: string;
};

const City: FC<Props> = ({ city }) => {
	const weather = useSelector<State, any>((state) => state.weather);

	const navigate = useNavigate();

	const now = moment(Date.now());
	const weatherType = weather[city].weather && weather[city].weather[0].main;

	return (
		<main className='flex flex-col gap-20 pt-10 pb-32 text-white'>
			<div className='fixed top-0 left-0 right-0 p-5 flex items-center justify-between'>
				<img className='w-8 h-8' src='/back.png' alt='' onClick={() => navigate('/')} />
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
						<div className='flex flex-col items-center gap-2'>
							<p>now</p>
							<div className='w-3 h-3 rounded-full bg-white'></div>
							<p>00:00</p>
						</div>
						<div className='flex flex-col items-center gap-2'>
							<p>now</p>
							<div className='w-3 h-3 rounded-full bg-white'></div>
							<p>00:00</p>
						</div>
						<div className='flex flex-col items-center gap-2'>
							<p>now</p>
							<div className='w-3 h-3 rounded-full bg-white'></div>
							<p>00:00</p>
						</div>
						<div className='flex flex-col items-center gap-2'>
							<p>now</p>
							<div className='w-3 h-3 rounded-full bg-white'></div>
							<p>00:00</p>
						</div>
					</div>
				</div>
				<div className='grid gap-4 grid-flow-col auto-cols-[40%] overflow-x-auto overscroll-x-contain'>
					{week.map((day) => (
						<DayOverview key={day} day={day} weather='Clear' temperature={10} />
					))}
				</div>
			</section>
		</main>
	);
};

export default City;
