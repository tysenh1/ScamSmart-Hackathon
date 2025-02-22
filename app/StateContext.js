import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

export const StateProvider = ({ children }) => {
    const [activePage, setActivePage] = useState('Initial State');

    return (
        <StateContext.Provider value={{ activePage, setActivePage }}>
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => {
    return useContext(StateContext);
};