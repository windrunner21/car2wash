import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LandingPage from "./pages/landing";
import "./i18n";

const theme = createTheme({
  typography: {
    fontFamily: '"Poppins"',
    useNextVariants: true,
    suppressDeprecationWarnings: true,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <LandingPage />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
