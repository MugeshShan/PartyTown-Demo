import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactGA from "react-ga4";
import { Partytown } from '@builder.io/partytown/react';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

//ReactGA.initialize("G-K1GDE14Q5F");
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


const SendAnalytics = ()=> {
  ReactGA.send({
    hitType: "pageview",
    page: window.location.pathname,
  });
}

export function Head() {
  return (
    <>
      <Partytown debug={true} forward={['dataLayer.push']} />
    </>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(SendAnalytics);
