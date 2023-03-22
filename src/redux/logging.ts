const logging = (store: any) => (next: any) => (action: any) => {
	console.log('Received action', action);

	return next(action);
};

export default logging;
