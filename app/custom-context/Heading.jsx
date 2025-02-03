import React, { useContext } from 'react'
import { CustomContext } from './Context';

const Heading = ({ children }) => {
    const value = useContext(CustomContext);
    if (value === 1) {
        return <div className='text-3xl'>{children}</div>
    }
    if (value === 2) {
        return <div className='text-xl'>{children}</div>
    }
    return <div>{children}</div>
}
 
export default Heading;