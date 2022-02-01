import Counter from './counter';
import styles from './Counter.module.css';

export default ({ initialTime, currentTime }) => {
    return (
        <Counter 
            initialTime={ initialTime }
            currentTime={ currentTime }
            className={ styles.Counter }
        />
    )
}