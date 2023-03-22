import { FC } from 'react';

const AddPosition: FC = () => {
	return (
		<div className='relative flex flex-col gap-4'>
			<label htmlFor='add-position' className='text-text-primary px-5 text-2xl font-bold'>
				Localization
			</label>
			<button
				className='flex flex-col items-center gap-2 px-8 py-6 shadow-primary rounded-3xl from-[rgb(87,124,232)] to-[rgb(114,176,243)] bg-gradient-to-br'
				id='add-position'>
				<img className='h-6 w-6' src='/navbar/position.png' alt='' />
				<span className='text-xl font-bold '>Add localization</span>
			</button>
		</div>
	);
};

export default AddPosition;
