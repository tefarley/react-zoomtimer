import Guest from '../components/Guest/index';
import { useState } from 'react';
import { useIntervalWhen } from 'rooks';

const Home = () => {
	const guests = [
		{
			email: 'teddy@email.com',
			created: 1643147083623
		},
		{
			email: 'fei@email.com',
			created: 1643147183623
		}
	];

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

export default Home;