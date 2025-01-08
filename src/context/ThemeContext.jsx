/**
 * @file ThemeContext.js
 * @description Este archivo define el contexto `ThemeContext` que maneja el estado global del tema de la aplicación (oscuro o claro).
 * Permite que cualquier componente que lo consuma pueda acceder y modificar el tema de la aplicación mediante el contexto.
 * 
 * Utiliza el hook `useState` de React para mantener el estado del tema y proporciona una función `toggleTheme` para cambiar entre los temas "light" y "dark".
 * 
 * @dependencies
 * - React (`createContext`, `useState`)
 * @version 1.0
 * @date 2024
 */

// Importa las funciones necesarias de React
import { createContext, useState } from "react";

// Creamos el contexto para el tema de la aplicación
export const ThemeContext = createContext();

/**
 * ThemeProvider es el componente que proporciona el contexto a toda la aplicación.
 * Permite que los componentes hijos puedan acceder al tema actual y modificarlo.
 * 
 * @param {Object} props - Las propiedades del componente.
 * @param {ReactNode} props.children - Los componentes hijos que consumirán el contexto.
 * 
 * @returns {JSX.Element} Un proveedor del contexto `ThemeContext` que envuelve a los componentes hijos.
 */
export const ThemeProvider = ({ children }) => {
  // Estado para almacenar el tema actual, predeterminado es "dark"
  const [theme, setTheme] = useState("dark");

  /**
   * Función para alternar entre los temas "light" y "dark".
   * Cambia el estado del tema entre "light" y "dark" cada vez que se llama.
   */
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    // Proveedor del contexto que ofrece el valor del tema y la función para alternarlo a los componentes hijos
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
