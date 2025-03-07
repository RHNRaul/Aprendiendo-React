import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Principal } from './pages/Principal.jsx';
import { BrowserRouter } from 'react-router-dom';
import {LoginProvider} from './context/Login/LoginProvider.jsx'
import {Cargando} from './components/Modal/Cargando.jsx'
import { CargandoProvider } from './context/Cargando/CargandoProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <CargandoProvider>
    <LoginProvider>
    <Cargando/>    
    <Principal/>
    </LoginProvider>
    </CargandoProvider>
    </BrowserRouter>
  </StrictMode>,
)
