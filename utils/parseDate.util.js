import prettyMilliseconds from "pretty-ms";

const parseDate = ( initialTime, currentTime ) => {
    const options = {
        verbose: true,
        secondsDecimalDigits: 0,
        // seperateMilliseconds: true,
        // formatSubMilliseconds: true
    };

    return prettyMilliseconds( currentTime - initialTime, options)
};

export default parseDate;