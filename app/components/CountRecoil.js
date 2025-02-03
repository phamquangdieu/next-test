import React from 'react'
import { atom, useRecoilState } from 'recoil';

const counterAtom = atom({
    key: 'counter',
    default: 0
})

const CounterRecoil = () => {
    const [counter, setCounter] = useRecoilState(counterAtom);
    return (
        <div>
            {counter}
            <button onClick={() => setCounter(prev => prev + 1)}>increment</button>
            <button onClick={() => setCounter(prev => prev - 1)}>decrement</button>
        </div>
    );
}
 
export default CounterRecoil;