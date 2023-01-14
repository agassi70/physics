import React from 'react';
import Layout from "layout/Layout";
import Header from "features/Header";
import {CssBaseline, ThemeProvider, Container} from '@material-ui/core'
import theme from './theme'
import {BrowserRouter} from "react-router-dom";
import 'styles/styles.scss'


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Container fixed disableGutters>
        <BrowserRouter>
          <Header/>
          <Layout/>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
