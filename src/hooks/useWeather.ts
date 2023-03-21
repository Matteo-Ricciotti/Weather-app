import { useEffect, useState } from 'react';

import axios from 'axios';

interface Coords {
	lat: number;
	lon: number;
}

const useWeather = (coordinates: Coords) => {
	const [error, setError] = useState<boolean | null>(null);
	const [loading, setLoading] = useState<boolean>(false);
	const [data, setData] = useState(null);

	const fetchData = async () => {
		const controller = new AbortController();

		setError(null);
		setData(null);
		setLoading(true);

		try {
			const { data: weather } = await axios({
				url: `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${
					coordinates.lat
				}&appid=${process.env.API_KEY!}`,
				method: 'GET',
				signal: controller.signal
			});

			setData(weather);
		} catch (err) {
			console.error(err);
			setError(true);
		} finally {
			setLoading(false);
			controller.abort();
		}
	};

	useEffect(() => {
		fetchData();

		const id = setInterval(() => {
			fetchData();
		}, 1000 * 60 * 60);

		return () => clearInterval(id);
	}, []);

	return [data, error, loading, fetchData];
};

export default useWeather;
