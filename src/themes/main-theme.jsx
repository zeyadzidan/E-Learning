import { createTheme } from "@mui/material/styles";

import "@fontsource/quicksand/400.css";
import "@fontsource/quicksand/500.css";
import "@fontsource/quicksand/600.css";
import "@fontsource/quicksand/700.css";

const mainTheme = createTheme({
  palette: {
    primary: { main: "#28A19C" }, // Jungle Green
    hover: { main: "28B39C" }, // Jungle Green Saturated
    secondary: { main: "#FFBA00" }, // Mustard
    tertiary: { main: "#343434" }, // Dark Grey
    bgPrimary: { main: "white" }, // White
    bgSecondary: { main: "#F3F3F3" }, // Grey
  },
  typography: {
    fontFamily: ["quicksand", "sans-serif"].join(","),
  },
});

export default mainTheme;
