import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {}
});

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Read the pre-initialized attribute from HTML element (set by blocking inline script in _document.js)
    const activeTheme = document.documentElement.getAttribute('data-theme') || localStorage.getItem('altapete_theme') || 'light';
    setTheme(activeTheme);
    document.documentElement.setAttribute('data-theme', activeTheme);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    localStorage.setItem('altapete_theme', next);
    document.documentElement.setAttribute('data-theme', next);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, mounted }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
