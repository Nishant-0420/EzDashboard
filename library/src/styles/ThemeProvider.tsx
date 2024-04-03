import React, { createContext } from 'react';

import themes from './themes'; // Import the 'themes' object from the appropriate file

const ThemeContext = createContext<ThemeContextType>({
    theme: themes.lightTheme,
    toggleTheme: () => { }
});
const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = React.useState(themes.lightTheme);
    const toggleTheme = (themeName: String = 'light') => {
        if(themeName === 'dark') {
            setTheme({...themes.darkTheme});
            return;
        }
        setTheme(themes.lightTheme);
    }
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeProvider, ThemeContext };
export default ThemeProvider;