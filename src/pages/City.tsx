import { FC, useState } from 'react';
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
import MonthInfo from '../components/MonthInfo';

const week = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
const hours: string[] = [];

for (let i = 0; i < 5; ++i) {
	hours.push(`${i} p.m.`);
}

const allCities = Object.keys(coordinates);

type Props = {
	city: string;
};

const City: FC<Props> = ({ city }) => {
	const weather = useSelector<State, any>((state) => state.weather);
	const [weekOrMonth, setWeekOrMonth] = useState<'week' | 'month'>('week');

	const navigate = useNavigate();
	const windowSize = useWindow();

	const now = moment(Date.now());
	const weatherType = weather[city].weather && weather[city].weather[0].main;

	return (
		<main
			className={`flex flex-col gap-20 ${
				windowSize < 768 ? 'pt-10 pb-32' : 'pt-5'
			}  text-white`}>
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
								{hours.map((hour, i) => (
									<div key={hour} className='flex flex-col items-center gap-2'>
										<p
											className={
												i === 0 ? 'text-xl font-bold' : 'text-sm font-thin'
											}>
											{i === 0 ? 'Now' : hour}
										</p>
										<div
											className={`${
												i === 0 ? 'w-6 h-6' : 'w-3 h-3'
											} rounded-full bg-white`}></div>
										<p
											className={`${
												i === 0 ? 'text-xl font-bold' : 'text-sm font-thin'
											}`}>
											{(weather[city].main?.temp - 273.15).toFixed(0)}°
										</p>
									</div>
								))}
							</div>
						</div>
						<div className='grid gap-4 grid-flow-col auto-cols-[40%] overflow-x-auto overscroll-x-contain'>
							{week.map((day) => (
								<DayOverview key={day} city={city} day={day} />
							))}
						</div>
					</section>
				</>
			)) || (
				<div className='m-auto flex gap-10'>
					<section className='flex flex-col gap-8'>
						<CityFocus city={city} />
						<div className='flex gap-8'>
							<div className='flex flex-col gap-4'>
								<h3 className='text-2xl font-bold px-4 text-text-primary'>Today</h3>
								<div className='relative flex items-center gap-6 px-10 py-8 rounded-3xl shadow-primary bg-[rgb(99,148,237)]'>
									<div className='w-1.5 absolute top-10 bottom-10 left-[45.5%] from-white to-white/10 bg-gradient-to-b'></div>
									<div className='flex flex-col items-center gap-6'>
										{hours.map((_, i) => (
											<div
												key={_ + i}
												className={`${
													i === 0 ? 'text-2xl font-bold' : ''
												}`}>
												{(weather[city].main?.temp - 273.15).toFixed(0)}°
											</div>
										))}
									</div>
									<div className='flex flex-col items-center gap-9'>
										{hours.map((hour, i) => (
											<div
												key={hour + i}
												className={`${
													i === 0 ? 'w-6 h-6' : 'w-3 h-3'
												} bg-white rounded-full`}></div>
										))}
									</div>
									<div className='flex flex-col items-center gap-6'>
										{hours.map((hour, i) => (
											<div
												key={hour + i}
												className={`${
													i === 0 ? 'text-2xl font-bold' : ''
												}`}>
												{i === 0 ? 'Now' : hour}
											</div>
										))}
									</div>
								</div>
							</div>
							<div className='flex flex-col'>
								<div className='w-fit rounded-tl-3xl rounded-tr-3xl shadow-primary'>
									<button
										onClick={() => setWeekOrMonth('week')}
										className={`p-5 rounded-tl-3xl rounded-tr-3xl text-xl font-bold ${
											weekOrMonth === 'month'
												? 'text-text-primary'
												: 'bg-[rgb(99,148,237)]'
										}`}>
										This week
									</button>
									<button
										onClick={() => setWeekOrMonth('month')}
										className={`p-5 rounded-tl-3xl rounded-tr-3xl text-xl font-bold  ${
											weekOrMonth === 'week'
												? 'text-text-primary'
												: 'bg-[rgb(99,148,237)]'
										}`}>
										This month
									</button>
								</div>
								<div className='h-full p-5 rounded-bl-3xl rounded-br-3xl  rounded-tr-3xl  flex flex-col gap-4 shadow-primary bg-[rgb(99,148,237)]'>
									<div className='flex gap-4'>
										{(weekOrMonth === 'week' &&
											week
												.slice(4)
												.map((day) => (
													<DayOverview key={day} city={city} day={day} />
												))) || <MonthInfo city={city} />}
									</div>
									<div className='flex gap-2 self-center'>
										<div className='w-2 h-2 rounded-full bg-white'></div>
										<div className='w-2 h-2 rounded-full bg-white'></div>
										<div className='w-2 h-2 rounded-full bg-white'></div>
									</div>
								</div>
							</div>
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
