import { useEffect, useState } from 'react';
import axios from 'axios';

import API_KEY from '../../API_KEY';
import { coordinates } from '../utility/constants';

import { useDispatch } from 'react-redux';
import { set } from '../redux/weatherSlice';

const useWeather = () => {
	const [error, setError] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(false);
	const [data, setData] = useState({ turin: null, rome: null, london: null });

	const dispatch = useDispatch();

	const fetchData = async () => {
		const controller = new AbortController();

		setError(false);
		setLoading(true);
		setData({ turin: null, rome: null, london: null });

		try {
			const { data: turinWeather } = await axios({
				url: `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.turin.lat}&lon=${coordinates.turin.lat}&appid=${API_KEY}`,
				method: 'GET',
				signal: controller.signal
			});

			const { data: romeWeather } = await axios({
				url: `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.rome.lat}&lon=${coordinates.rome.lat}&appid=${API_KEY}`,
				method: 'GET',
				signal: controller.signal
			});

			const { data: londonWeather } = await axios({
				url: `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.london.lat}&lon=${coordinates.london.lat}&appid=${API_KEY}`,
				method: 'GET',
				signal: controller.signal
			});

			const _data = { turin: turinWeather, rome: romeWeather, london: londonWeather };

			setData(_data);
			dispatch(set(_data));
		} catch (err) {
			console.error(err);
			setError(true);
		} finally {
			setLoading(false);
			controller.abort();
		}
	};

	// Ogni ora i dati vengono aggiornati
	useEffect(() => {
		fetchData();

		const id = setInterval(() => {
			fetchData();
		}, 1000 * 60 * 60);

		return () => clearInterval(id);
	}, []);

	return [error, loading, data, fetchData];
};

export default useWeather;
