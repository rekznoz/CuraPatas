import { Link, useRouteError } from "react-router-dom"; // Importación de Link y useRouteError para manejo de rutas

const Error = () => {
  const error = useRouteError(); // Obtiene el error de la ruta actual

  return (
    <div className="notfound-container">
      
      <div className="notfound-content">
        {/* Título de la página de error */}
        <h1 className="notfound-title">¡Revelio! Página no encontrada</h1>
        
        {/* Mensaje principal indicando el error */}
        <p className="notfound-message">
          Parece que te has perdido en los pasillos de Hogwarts.
        </p>

        {/* Detalles del error con el mensaje y el código de error */}
        <p className="notfound-error">
          <strong>Error:</strong>{" "}
          {error?.error?.message || "Página no encontrada"}(
          {error?.status || 404})
        </p>

        {/* Enlace de redirección al inicio */}
        <div className="redirection">
          <Link to="/" className="notfound-link">
            🏠 finite incantatem
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
