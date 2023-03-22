const getImage = (type: string) => {
	switch (type) {
		case 'Clouds':
			return 'cloud';
		case 'Clear':
			return 'sun';
		case 'Rain':
			return 'rain';
	}
};

export default getImage;
