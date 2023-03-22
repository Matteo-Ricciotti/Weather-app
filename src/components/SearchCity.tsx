import { FC } from 'react';

const SearchCity: FC = () => {
	return (
		<div className='relative flex flex-col gap-4 text-black'>
			<label htmlFor='search-city' className='text-text-primary px-5 text-2xl font-bold'>
				Search
			</label>
			<input
				className='px-6 py-8 h-24 shadow-primary rounded-3xl placeholder:text-gray-300 placeholder:text-xl placeholder:font-bold'
				id='search-city'
				placeholder='ex: Miami'
				type='text'
			/>
			<div className='flex flex-col items-center justify-center absolute bottom-0 right-0 w-10 h-24 rounded-2xl bg-[rgb(95,138,235)] hover:cursor-pointer'>
				<img className='w-5 h-5' src='/navbar/search.png' alt='' />
			</div>
		</div>
	);
};

export default SearchCity;
