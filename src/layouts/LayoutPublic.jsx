import React from 'react'
import { Outlet } from "react-router-dom"; // Componente de React Router para renderizar rutas hijas

function LayoutPublic() {
  return (
    <div>
      <h2>Esto es el layout publico</h2>
      <Outlet /> {/* Renderiza las rutas hijas dentro de este componente */}
    </div>
  )
}

export default LayoutPublic
