import { FC, Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import useWindow from '../hooks/useWindow';
import Navbar from './Navbar';

type Props = {
	error: boolean;
	loading: boolean;
};

const Page: FC<Props> = ({ error, loading }) => {
	const windowSize = useWindow();
	const { pathname } = useLocation();

	return (
		<>
			{(loading && <h1>Fetching data...</h1>) ||
				(error && <h1>Error fetching data!!!</h1>) || (
					<Suspense fallback={<h1>Loading...</h1>}>
						<div
							className={`p-5 h-screen ${
								pathname !== '/' && windowSize < 768
									? 'from-[rgb(85,120,232)] to-[rgb(114,177,237)] bg-gradient-to-br'
									: ''
							}`}>
							<Outlet />
							{windowSize < 768 && <Navbar />}
						</div>
					</Suspense>
				)}
		</>
	);
};

export default Page;
