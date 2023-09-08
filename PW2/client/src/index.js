import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import AppRouter from './routers/AppRouter';
import AuthProvider from './auth/AuthProvider';
import 'bootstrap/dist/css/bootstrap.min.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  </React.StrictMode>
)


