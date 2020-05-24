import React from 'react';
import './App.css';
import Main from './components/main/Main'
import { createMuiTheme } from '@material-ui/core/styles';
import colors from "./resources/colors";
import { ThemeProvider } from '@material-ui/styles';
import {BrowserRouter} from 'react-router-dom';

const theme = createMuiTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: colors.black,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Main/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
