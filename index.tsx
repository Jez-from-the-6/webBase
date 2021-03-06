import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './shared/css/app.css';
import React from 'react';
import { render } from 'react-dom';
import App from './app';

declare global {
  interface Window {
    Plotly: any;
  }
}

render(<App />, document.getElementById('root'));
