'use client';
import { decrement, increment } from '@/redux/actions/countActions';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// const URL = 'https://dogapi.dog/docs/api-v2';
let count = 0;
const Count = () => {
    const router = useRouter();
    const counter = useSelector((state) => state.count.counter);
    useEffect(() => {
        count++
    }, [counter])
    console.log(count);
    
    const dispatch = useDispatch();

    const onIncrement = () => {
        dispatch(increment(5))
        dispatch(decrement())
    };
    const on2Increment = () => dispatch(increment(5));
    const onDecrement = () => dispatch(decrement());
    return (
        <div>
            <div>{counter}</div>
            <button onClick={onIncrement}>increment</button>
            <button onClick={onDecrement}>decrement</button>
        </div>
    );
}
 
export default Count;