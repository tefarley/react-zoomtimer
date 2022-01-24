import { useEffect, useState } from 'react';
import getTimeDifference from '../utils/timeDiff.util';

const Counter = () => {
	const timediff = getTimeDifference( new Date(100000), new Date(10000) );
	const [ seconds, setSeconds ] = useState( 0 );
	const [ minutes, setMinutes ] = useState( 0 );

	useEffect(()=>{
		let myInterval = setInterval(() => {
				if (seconds < timediff.seconds) {
					setSeconds(seconds + 1);
				}
				if (seconds === timediff.seconds) {
					if (minutes === timediff.minutes) {
						clearInterval(myInterval)
					} else {
						setMinutes(minutes + 1);
						setSeconds(0);
					}
				} 
			}, 1000)
			return ()=> {
				clearInterval(myInterval);
			  };
		});

	return (
		<>
			<div>Total Time Remaining: {timediff.minutes}:{timediff.seconds < 10 ? `0${timediff.seconds}` : timediff.seconds}</div>
			<div>Elapsed: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</div>
		</>
	)
}

export default Counter;