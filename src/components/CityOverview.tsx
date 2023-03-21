import { FC } from 'react';

type Props = {
	[key: string]: string;
};

const CityOverview: FC<Props> = ({ city, date, time, temperature }) => {
	return (
		<div className='w-fit flex items-center p-4 gap-8 text-white rounded-3xl from-[rgb(11,36,102)] to-[rgb(73,132,200)] bg-gradient-to-br'>
			<div className='flex flex-col gap-2'>
				<h1 className='text-2xl font-semibold'>{city}</h1>
				<h2 className='w-[10ch] text-sm'>{date}</h2>
				<p className='text-sm font-light'>{time}</p>
			</div>
			<img className='w-20 h-206' src='/weather/sun.png' alt='' />
			<p className='text-5xl font-bold'>{temperature}°</p>
		</div>
	);
};

export default CityOverview;
