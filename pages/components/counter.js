import { useState } from 'react';
import { useIntervalWhen } from 'rooks';
import Guest from './guest';

const Counter = ({ guests }) => {
	const [ currentTime, setCurrentTime ] = useState( Date.now() );

	useIntervalWhen(() => {
		setCurrentTime( Date.now() );
	}, 1000, true, true );

	return (
		<>
			{
				guests.map(( guest ) => {

					return (
						<Guest 
							guestInfo={ guest }
							currentTime={ currentTime }
						/>
					)

				})
			}
		</>
	)
};

export default Counter;