import { CssBaseline } from '@mui/material';
import { Amplify } from "aws-amplify";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { COGNITO_REGION, USER_POOL_ID, USER_POOL_WEB_CLIENT_ID } from './utils/sensitiveData';

Amplify.configure({
  Auth: {
    userPoolId: USER_POOL_ID,
    region: COGNITO_REGION,
    userPoolWebClientId: USER_POOL_WEB_CLIENT_ID
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CssBaseline />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
