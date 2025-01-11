import React from 'react'
import Formulario from "../components/Formulario.jsx";
import Login from '../components/Login.jsx';
import Register from '../components/Register.jsx';


export default function Home() {
  return (
    <div>
      <h1>Esto es el home</h1>
       <Formulario/>
       <Login/>
       <Register/>
    </div>
  )
}
