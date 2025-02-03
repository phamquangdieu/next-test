import { createContext, useContext } from 'react'

export const CustomContext = createContext(0)

export const CustomContextProvider = ({ children, level }) => {
    return (
        <CustomContext.Provider value={level}>
            {children}
        </CustomContext.Provider>
    );
}