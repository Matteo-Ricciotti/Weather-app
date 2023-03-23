import { FC } from 'react';
import { useSelector } from 'react-redux';
import { State } from '../redux/store';
import getImage from '../utility/getImage';

type Props = {
	city: string;
	day: string;
};

const DayOverview: FC<Props> = ({ city, day }) => {
	const weather = useSelector<State, any>((state) => state.weather);

	const type = weather[city].weather && weather[city].weather[0].main;

	return (
		<div className='flex flex-col items-center gap-4 p-4 rounded-3xl text-white bg-[rgb(120,167,241)]'>
			<h3 className='text-lg font-bold first-letter:capitalize'>{day}</h3>
			<p className='text-3xl font-bold'>{(weather[city].main?.temp - 273.15).toFixed(0)}°</p>
			<img className='w-20 h-20' src={`/weather/${getImage(type)}.png`} alt='' />
		</div>
	);
};

export default DayOverview;
