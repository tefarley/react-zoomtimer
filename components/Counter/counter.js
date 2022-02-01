import { useState, useEffect } from 'react';
import prettyMilliseconds from 'pretty-ms';

const Counter = ({ initialTime, currentTime }) => {
    const options = {
        verbose: true,
        secondsDecimalDigits: 0,
        //seperateMilliseconds: true,
        //formatSubMilliseconds: true
    };

    const [ elapsedTime, setElapsedTime ] = useState( prettyMilliseconds( currentTime - initialTime, options ) );

    useEffect( () => {
        setElapsedTime( prettyMilliseconds( currentTime - initialTime, options ) );
    }, [ currentTime ] );

    return (
        <>
            { elapsedTime }
        </>
    )
};

export default Counter;