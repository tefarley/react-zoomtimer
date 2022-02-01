import Guest from './guest';
import styles from './Guest.module.css';

export default ({ guestInfo }) => {
    return (
        <Guest 
            guestInfo={ guestInfo }
            className={ styles.Guest }
        />
    )
}