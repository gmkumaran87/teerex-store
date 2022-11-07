import React from "react";
import { ThemeProvider } from "styled-components";
import { tablet, laptop } from "./responsive";

const theme = {
  // Colors
  white: "#fff",
  black: "#000",
  grey: "#6D6D6D",
  teal: "rgb(20, 125, 125)",

  backgroundBlue: "rgb(216, 238, 246)",

  // Background
  buttonBgGradient: "linear-gradient(90deg, #FF594C 0%, #FAC527 100%)",
  wrapperBgGradient:
    "linear-gradient(94.43deg, rgba(249, 249, 249, 0.49) 34.95%, rgba(249, 249, 249, 0.175) 67.01%)",
  buttonWrapperGradient:
    "linear-gradient(94.33deg, rgba(255, 255, 255, 0.6) 3.19%, rgba(255, 255, 255, 0.1) 99.26%)",

  // Border radius
  boxRadius: "10px",
  // boxShadow: "0px 4px 10px rgb(216, 238, 245,.23)",
  boxShadow: "0px 4px 10px rgb(16 62 77 / 23%)",
};

const Theme = ({ children }) => {
  return (
    <ThemeProvider theme={{ ...theme, tablet, laptop }}>
      {children}
    </ThemeProvider>
  );
};

export default Theme;
