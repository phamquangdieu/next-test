'use client';
import React from 'react'
import { CustomContextProvider } from './Context';
import Heading from './Heading';

const CustomContext = () => {
    return (
        <CustomContextProvider level={1}>
            <Heading>Heading 1</Heading>
            <CustomContextProvider level={2}>
                <Heading>Heading 2</Heading>
            </CustomContextProvider>
        </CustomContextProvider>
    );
}
 
export default CustomContext;