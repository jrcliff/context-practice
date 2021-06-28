import React, { createContext, useState } from 'react';

export const ThemeContext = createContext(); 

export const ThemeProvider = ({children}) => {
    const [currentTheme, setCurrentTheme] = useState('Day')
    const toggleTheme = () => {
        currentTheme === 'Day' ? setCurrentTheme('Night') : setCurrentTheme('Day')
    }
    return (
        <ThemeContext.Provider
            value={{
                currentTheme,
                setCurrentTheme,
                toggleTheme
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};







