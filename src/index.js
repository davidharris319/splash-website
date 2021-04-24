import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App/App';
import { BrowserRouter as Router } from 'react-router-dom';
import GA4React from "ga-4-react";

var ANALYTICS_TOKEN = process.env.REACT_APP_GA_TRACKING_CODE;
const ga4react = new GA4React(ANALYTICS_TOKEN);

(async () => {
  await ga4react.initialize();

  ReactDOM.render(
    <Router><App /></Router>,
    document.getElementById('root')
  );
})();


