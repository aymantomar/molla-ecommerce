import { createContext,  useState } from "react";

export const ThemeContext = createContext();

// export const useTheme = () => useContext(ThemeContext);
// eslint-disable-next-line react/prop-types
export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };
  const theme = {
    isDark,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
