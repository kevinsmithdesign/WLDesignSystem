import React, { createContext, useState, useMemo, useContext } from "react";
import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import ThemeThree from "../themes/ThemeThree";
import ThemeOne from "../themes/ThemeOne"; // Blue Print
import ThemeTwo from "../themes/ThemeTwo";
import ThemeFour from "../themes/ThemeFour";

const ThemeContext = createContext();

export const ThemeProviderDesignSystem = ({ children }) => {
  const [themeName, setThemeName] = useState("Blue Print");

  const theme = useMemo(() => {
    switch (themeName) {
      case "Blue Print":
        return ThemeOne;
      case "Greenhouse":
        return ThemeTwo;
      case "Spectrum":
        return ThemeThree;
      default:
        return ThemeFour;
    }
  }, [themeName]);

  return (
    <ThemeContext.Provider value={{ themeName, setThemeName, theme }}>
      <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
