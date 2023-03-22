import { FC, useState } from 'react';

const Navbar: FC = () => {
	const [page, setPage] = useState('home');

	return (
		<nav>
			<div className='fixed bottom-5 left-5 right-5 flex justify-around rounded-3xl shadow-primary bg-white'>
				<img
					onClick={() => setPage('home')}
					className={`w-10 px-2 py-5 border-b-2 ${page === 'home' && 'border-black'}`}
					src='/navbar/home.png'
					alt=''
				/>
				<img
					onClick={() => setPage('search')}
					className={`w-10 px-2 py-5 border-b-2 ${page === 'search' && 'border-black'}`}
					src='/navbar/search.png'
					alt=''
				/>
				<img
					onClick={() => setPage('position')}
					className={`w-10 px-2 py-5 border-b-2 ${page === 'position' && 'border-black'}`}
					src='/navbar/position.png'
					alt=''
				/>
			</div>
		</nav>
	);
};

export default Navbar;
