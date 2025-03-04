import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {UsersApp} from './UsersApp.jsx';
import './style.css';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './auth/pages/context/AuthProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <AuthProvider>
    <UsersApp/>
    </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
