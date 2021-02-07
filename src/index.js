import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const state = {
  animals: [
    {
      name: "Tiger",
      emoji: "🐅",
    },
    {
      name: "Elephant",
      emoji: "🐘",
    },
    {
      name: "Gorilla",
      emoji: "🦍",
    },
  ],
  cageAnimal: null,
  showCage: false,
  showNewAnimalForm: false,
};

const theme = {
  black: "#282c34",
};

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <App state={state} />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
