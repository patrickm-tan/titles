import * as React from 'react';

export function startGame () {
    //This will have to be a dynamic when we implement settings
    const [counter, setCounter] = React.useState(10);

    React.useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    }, [counter]);

    return counter
}