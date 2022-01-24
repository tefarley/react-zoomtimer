const getTimeDifference = ( after, before ) => {
	const difference = after - before;
	
	const milliseconds = new Date( difference ).getMilliseconds();
	const seconds = new Date( difference ).getSeconds();
	const minutes = new Date( difference ).getMinutes();

	return {
		milliseconds: milliseconds,
		seconds: seconds,
		minutes: minutes
	}
}

export default getTimeDifference;