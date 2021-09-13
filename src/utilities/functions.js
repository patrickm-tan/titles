import {useEffect, useState} from 'react';

import {DATA} from './utils'

//const [score, setScore] = useState(0)

export function startCountdown () {
    //This will have to be a dynamic when we implement settings
    const [counter, setCounter] = useState(10);

    useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    }, [counter]);

    return counter
}

export function test(max) {
    max = DATA[0].hints.length
    return DATA[0].hints[randomizer(max)]
}

export function randomizer(max) {
    var numbersUsed = []
    numbersUsed.push(Math.floor(Math.random() * max))
    return numbersUsed[numbersUsed.length - 1]
}

export function next(max) {
    return test(max)
}

export function check(list) {

}

export function getScore() {

}