import moment from 'moment';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { State } from '../redux/store';
import getImage from '../utility/getImage';

type Props = {
	city: string;
};

const CityOverview: FC<Props> = ({ city }) => {
	const weather = useSelector<State, any>((state) => state.weather);

	const navigate = useNavigate();
	const now = moment(Date.now());

	const type = weather[city].weather && weather[city].weather[0].main;

	return (
		<div
			onClick={() => navigate(`/${city.toLowerCase()}`)}
			className={`flex items-center justify-between gap-8 p-4 text-white rounded-3xl shadow-primary hover:cursor-pointer ${
				type === 'Clouds'
					? 'from-[rgb(79,86,109)] to-[rgb(142,157,173)]'
					: 'from-[rgb(11,36,102)] to-[rgb(73,132,200)]'
			} bg-gradient-to-br`}>
			<div className='flex flex-col gap-2'>
				<h1 className='text-2xl font-semibold first-letter:capitalize'>{city}</h1>
				<h2 className='w-[10ch] text-sm'>{now.format('dddd DD, MMMM')}</h2>
				<p className='text-sm font-light'>
					{now.format('LLL').split(' ').slice(3).join(' ')}
				</p>
			</div>
			<img className='w-20 h-206' src={`/weather/${getImage(type)}.png`} alt='' />
			<p className='text-5xl font-bold'>{(weather[city].main?.temp - 273.15).toFixed(0)}°</p>
		</div>
	);
};

export default CityOverview;
