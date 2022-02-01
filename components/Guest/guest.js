import Counter from '../Counter/index';

const Guest = ({ guestInfo, currentTime }) => {
	return <div>{guestInfo.email} has been waiting for <Counter initialTime={ guestInfo.created } currentTime={ currentTime } /></div>
};

export default Guest;