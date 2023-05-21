import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Partytown } from '@builder.io/partytown/react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <Partytown debug={true} forward={['dataLayer.push']} />
      <script type="text/partytown" src="https://www.googletagmanager.com/gtag/js?id=G-K1GDE14Q5F"></script>
    </div>
  );
}

export default App;
