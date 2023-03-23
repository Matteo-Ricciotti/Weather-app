import moment from 'moment';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { State } from '../redux/store';
import getImage from '../utility/getImage';

type Props = {
	city: string;
};

const CityFocus: FC<Props> = ({ city }) => {
	const weather = useSelector<State, any>((state) => state.weather);

	const now = moment(Date.now());
	const type = weather[city].weather && weather[city].weather[0].main;

	return (
		<div className='flex items-center py-16 pr-80 h-1/2 shadow-primary from-[rgb(188,214,239)] to-[rgb(137,192,223)] bg-gradient-to-br rounded-3xl'>
			<div className='relative -left-10 flex flex-col items-center gap-8 px-5 py-8 rounded-tr-3xl rounded-br-3xl bg-[rgb(99,148,237)]'>
				<span className='text-4xl font-bold'>
					{(weather[city].main?.temp - 273.15).toFixed(0)}°
				</span>
				<img className='w-20 h-20' src={`/weather/${getImage(type)}.png`} alt='' />
			</div>
			<div className='text-text-primary self-start'>
				<h1 className='first-letter:capitalize text-3xl font-bold'>{city}</h1>
				<h2 className='text-lg font-semibold'>{now.format('dddd DD, MMMM')}</h2>
				<p>{type}</p>
			</div>
		</div>
	);
};

export default CityFocus;
