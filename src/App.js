import * as React from 'react';
import './App.css';
import Characters from './components/Characters';
import Header from './components/Header';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header/>
      <Container maxWidth="lg">
        <Characters/>
      </Container>
    </React.Fragment>
  );
}

export default App;