import { FC } from 'react';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { State } from '../redux/store';
import getImage from '../utility/getImage';

type Props = {
	city: string;
};

const MonthInfo: FC<Props> = ({ city }) => {
	const weather = useSelector<State, any>((state) => state.weather);

	const now = moment(Date.now());
	const type = weather[city].weather && weather[city].weather[0].main;

	return (
		<div className='flex gap-8 rounded-3xl px-5 py-4 bg-[rgb(120,168,241)]'>
			<div className='flex flex-col gap-10'>
				<span className='text-lg font-bold'>{now.format('ddd, DD MMM')}</span>
				<img className='w-20 h-20' src={`/weather/${getImage(type)}.png`} alt='' />
			</div>
			<div className='flex flex-col gap-4 text-sm'>
				<div className='flex flex-col gap-2'>
					<p className='text-2xl font-bold'>
						{(weather[city].main?.temp - 273.15).toFixed(0)}°
					</p>
					<p>Strong wind</p>
					<p className='w-[25ch]'>
						The high will be {(weather[city].main?.temp_max - 273.15).toFixed(0)}°C, the
						low will be {(weather[city].main?.temp_min - 273.15).toFixed(0)}°C.
					</p>
				</div>
				<div className='flex flex-col'>
					<p>Humidity: {weather[city].main?.humidity}%</p>
					<p>UV: 3</p>
					<p>Dew point: 3°C</p>
				</div>
			</div>
		</div>
	);
};

export default MonthInfo;
