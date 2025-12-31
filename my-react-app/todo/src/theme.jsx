import { useState,createContext,useEffect } from "react";
export const ThemeContext = createContext();


export function Theme({ children }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });


  function toggletheme() {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  }

   useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  

  return (
    <ThemeContext.Provider value={{ theme, toggletheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
