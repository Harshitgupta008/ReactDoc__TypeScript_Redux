import { createContext, ReactNode, useState } from "react";

interface ThemeType {
    theme: string;
    ToggleTheme: () => void;
}
export const CreateThemeContext = createContext<ThemeType | null>(null);

interface ThemeContextType {

    children: ReactNode;
}
const ThemeContext: React.FC<ThemeContextType> = ({ children }) => {

    const [theme, setTheme] = useState<string>('light');
    
    const ToggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    }
    return <CreateThemeContext.Provider value={{ theme, ToggleTheme }}>
        {children}
    </CreateThemeContext.Provider>
}
export default ThemeContext;