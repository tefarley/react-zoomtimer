import { useState, useEffect } from 'react';
import prettyMilliseconds from 'pretty-ms';

const Guest = ({ guestInfo, currentTime }) => {
    const options = {
        verbose: true,
        secondsDecimalDigits: 0,
        //seperateMilliseconds: true,
        //formatSubMilliseconds: true
    };

    const [ elapsedTime, setElapsedTime ] = useState( prettyMilliseconds( currentTime - guestInfo.created, options ) );

    useEffect( () => {
        setElapsedTime( prettyMilliseconds( currentTime - guestInfo.created, options ) );
    }, [ currentTime ] );

    return (
        <>
            <div>{ guestInfo.email } has been waiting for { elapsedTime }</div>
        </>
    )
};

export default Guest;