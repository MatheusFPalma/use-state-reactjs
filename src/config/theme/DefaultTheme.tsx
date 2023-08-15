import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#25ef1a",
    secondary: "#212A42",
    text: "#333",
  },
  border: "2px",
  borderRadius: "20px",
};

interface DefaultThemeProps {
  children: React.ReactNode;
}

const DefaultTheme: React.FC<DefaultThemeProps> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default DefaultTheme;
