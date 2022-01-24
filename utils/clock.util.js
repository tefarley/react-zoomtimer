const Counter = () => {
    const [ time, setTime ] = useState( getTimeDifference( Date(), Date() ).time )
	const [ seconds, setSeconds ] = useState( 0 );
	const [ minutes, setMinutes ] = useState( 0 );

	const clock = ( dateObj ) => {
		while ( minutes < dateObj.minutes ) {
			while ( minutes < dateObj.minutes && seconds < dateObj.seconds ) {
				setTimeout( () => {
					setSeconds( seconds + 1 )				
				}, 1000 );
			}
			setMinutes( minutes + 1 );
			setSeconds( 0 );
		}
	}

	useEffect( () => {
		clock({
			seconds: 1,
			minutes: 1
		})
	}, [ seconds, minutes ])

	return (
		<>
			<div>Time Remaining: {time}</div>
			<div>{minutes}:{seconds}</div>
		</>
	)
}

export default Counter;
