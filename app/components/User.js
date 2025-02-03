import { fetchData } from '@/redux/actions/countActions';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

let counter;
const User = () => {
    const { loading, data, error } = useSelector((state) => state.count);
    const dispatch = useDispatch();
    console.log(123, data, loading);

    useEffect(() => {
        dispatch(fetchData());
        dispatch(fetchData());
        dispatch(fetchData());
      }, [dispatch]);

    return (
        <div>
            123
        </div>
    );
}
 
export default React.memo(User);