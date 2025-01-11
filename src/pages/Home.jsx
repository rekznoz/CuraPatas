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
      <div className="area1">
          <h1>Area 1</h1>
      </div>
      <div className="area2">
          <h1>Area 2</h1>
      </div>
      <div className="area3">
          <h1>Area 3</h1>
      </div>
    </div>
  )
}
