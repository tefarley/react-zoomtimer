import Guest from '../components/Guest/index';
import styles from '../components/Guest/Guest.module.css';

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

	return (
		<>
			{
				guests.map(( guest ) => {
					return (

						<Guest 
							guestInfo={ guest }
							className={ styles.Guest }
						/>

					)
				})
			}
		</>
	)
};

export default Home;