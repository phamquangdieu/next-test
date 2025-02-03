'use client';
import { decrement, increment } from '@/redux/actions/countActions';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
// const URL = 'https://dogapi.dog/docs/api-v2';
const Count = () => {
    const counter = useSelector((state) => state.count.counter);
    const dispatch = useDispatch();

    const onIncrement = () => dispatch(increment());
    const onDecrement = () => dispatch(decrement());
    return (
        <div>
            <div>{counter}</div>
            <button onClick={onIncrement}>increment</button>
            <button onClick={onDecrement}>decrement</button>
        </div>
    );
}
 
export default React.memo(Count);