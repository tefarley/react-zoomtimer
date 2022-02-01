import { useState } from 'react';
import { useIntervalWhen } from 'rooks';
import Counter from '../Counter/index';

const Guest = ({ guestInfo }) => {
	const [ currentTime, setCurrentTime ] = useState( Date.now() );

	useIntervalWhen(() => {
		setCurrentTime( Date.now() );
	}, 1000, true, true );

	return (
		<>
			<div>{guestInfo.email} has been waiting for <Counter initialTime={ guestInfo.created } currentTime={ currentTime } /></div>
		</>
	)
};

export default Guest;