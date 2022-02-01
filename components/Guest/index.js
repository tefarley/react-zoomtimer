import Guest from './guest';
import styles from './Guest.module.css';

export default ({ guestInfo, currentTime }) => {
    return (
        <Guest 
            guestInfo={ guestInfo }
            currentTime={ currentTime }
            className={ styles.Guest }
        />
    )
}