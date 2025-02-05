import React,{ StrictMode } from 'react'
import ReactDOM,{ createRoot } from 'react-dom/client'
import {HelloWorld,HelloWorld2,EjemploNombre,EjemploNombreProps,Jugador} from './components/helloWorld.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelloWorld></HelloWorld>
    <HelloWorld2></HelloWorld2>
    <EjemploNombre/>
    <EjemploNombreProps usuario={'leonel'} />
    <Jugador nombre={'Leonel Messi'} numero={'10'}></Jugador>
  </StrictMode>
);
