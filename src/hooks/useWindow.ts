import { useEffect, useState } from 'react';

const getWindowSize = (): number => {
	return Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
};

const useWindow = (): number => {
	const [windowSize, setWindowSize] = useState(getWindowSize());

	useEffect(() => {
		const handleWindowResize = () => setWindowSize(getWindowSize());

		window.addEventListener('resize', handleWindowResize);

		return () => {
			window.removeEventListener('resize', handleWindowResize);
		};
	}, []);

	return windowSize;
};

export default useWindow;
