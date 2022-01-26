import Counter from './components/counter';

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

	return <Counter guests={ guests } />
};

export default Home;