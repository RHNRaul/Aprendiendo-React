import React,{ StrictMode } from 'react'
import ReactDOM,{ createRoot } from 'react-dom/client'
import {HelloWorld,HelloWorld2,EjemploNombre,EjemploNombreProps,Jugador,MostrarUsuario} from './components/helloWorld.jsx'
import {Bienvenida} from './components/Bienvenida.jsx'
import {usuario} from './usuario.js';


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Bienvenida usuario="Raul" libro={{ titulo: "1984", desc: "Trata de una distopía en la cual se vive una dictadura." }} />
  </StrictMode>
);
