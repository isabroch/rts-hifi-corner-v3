import { createContext } from "react";

const ThemeContext = createContext({
  fontSize: {
    s: "0.8rem",
    m: "1rem",
    l: "2rem",
    xl: "3rem"
  },
  fontWeight: {
    light: 300,
    normal: 400,
    bold: 800
  },
  color: {
    required: "#da2a2a",
    brand: "#a39161",
    brandDark: "#68542B",
    dark: "#000000",
    darkOpacity: "rgba(0, 0, 0, 0.75)",
    light: "#ffffff",
    neutralDark: "#444444",
    neutral: "#acacac",
    neutralLightOpacity: "rgba(243, 243, 243, 0.8)",
    neutralLight: "#f3f3f3"
  }
});

export default ThemeContext;
