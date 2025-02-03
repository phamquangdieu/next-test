'use client'
import { atom, useAtom } from "jotai";

const count = atom(1);
export const readWriteAtom = atom((get) => get(count),
(get, set, incrementBy, b) => {
    set(count, get(count) + incrementBy + b);
  },
);

const Counter = () => {
    const [counter, setCounter] = useAtom(readWriteAtom);
    return (
        <div>
            <div>{counter}</div>
            <button onClick={() => setCounter(5, 6)}>increment</button>
        </div>
    )
}

export default Counter;