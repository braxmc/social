import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import {initMiddleware} from 'devise-axios';

import App from './App';
import reportWebVitals from './reportWebVitals';

import AuthProvider from './providers/AuthProvider';
import PostProvider from './providers/PostProvider';

initMiddleware();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <PostProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PostProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
