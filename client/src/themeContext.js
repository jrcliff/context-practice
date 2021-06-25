import React, { useState } from 'react';
const ThemeContext = React.createContext('Day'); 


function ThemeContextProvider() {
    const [theme, setTheme] = useState('Day');
    let toggleTheme = () => {
        setTheme(theme === 'Day' ? 'Night' : 'Day')
        
    }

    return (
        <ThemeContext.Provider
            value={{theme: theme, toggleTheme: toggleTheme}}>
            {theme}
        </ThemeContext.Provider>
    )
}
export default ThemeContext;


