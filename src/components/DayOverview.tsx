import { FC } from 'react';
import getImage from '../utility/getImage';

type Props = {
	day: string;
};

const DayOverview: FC<Props> = ({ day }) => {
	const weather = 'Clear';
	const temperature = 15;

	return (
		<div className='flex flex-col items-center gap-4 p-4 rounded-3xl text-white bg-[rgb(120,167,241)]'>
			<h3 className='text-lg font-bold first-letter:capitalize'>{day}</h3>
			<p className='text-3xl font-bold'>{temperature}°</p>
			<img className='w-20 h-20' src={`/weather/${getImage(weather)}.png`} alt='' />
		</div>
	);
};

export default DayOverview;
