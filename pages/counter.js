import { useEffect, useState } from 'react';
import getTimeDifference from '../utils/timeDiff.util';

const Counter = ( after, before ) => {
	const timeLeft = getTimeDifference( after, before);
	const [ secondsElapsed, setSecondsElapsed ] = useState( 0 );
	const [ minutesElapsed, setMinutesElapsed ] = useState( 0 );

	useEffect(()=>{
		let myInterval = setInterval(() => {
				if (secondsElapsed < timeLeft.secondsElapsed) {
					setSecondsElapsed(secondsElapsed + 1);
				}
				if (secondsElapsed === timeLeft.secondsElapsed) {
					if (minutesElapsed === timeLeft.minutesElapsed) {
						clearInterval(myInterval)
					} else {
						setMinutesElapsed(minutesElapsed + 1);
						setSecondsElapsed(0);
					}
				} 
			}, 1000)
			return ()=> {
				clearInterval(myInterval);
			  };
		});

	return (
		<>
			<div>Total Time Remaining: {timeLeft.minutesElapsed}:{timeLeft.secondsElapsed < 10 ? `0${timeLeft.secondsElapsed}` : timeLeft.secondsElapsed}</div>
			<div>Elapsed: {minutesElapsed}:{secondsElapsed < 10 ? `0${secondsElapsed}` : secondsElapsed}</div>
		</>
	)
}

export default Counter;