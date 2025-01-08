/**
 * @file firebaseConfig.js
 * @description Este archivo contiene la configuración necesaria para inicializar Firebase en tu aplicación.
 * Configura Firebase con las variables de entorno obtenidas desde el archivo `.env` (o `vite.config.js` si usas Vite).
 * Asegúrate de que las variables de entorno estén correctamente definidas para establecer la conexión con Firebase.
 * 
 * @dependencies
 * - Firebase SDK para JavaScript.
 * - Variables de entorno definidas en el archivo `.env` (o `vite.config.js` si usas Vite).
 * @version 1.0
 * @date 2024
 */

// Importa la función para inicializar la aplicación Firebase
import { initializeApp } from "firebase/app";

// Configuración de Firebase con las variables de entorno
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY, // Clave API de Firebase.
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN, // Dominio de autenticación de Firebase.
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID, // ID del proyecto Firebase.
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET, // Bucket de almacenamiento de Firebase.
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID, // ID de remitente de mensajes (para notificaciones).
  appId: import.meta.env.VITE_FIREBASE_APP_ID, // ID de la aplicación Firebase.
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID, // ID de medición (para Firebase Analytics).
};

// Inicializa Firebase con la configuración proporcionada
const app = initializeApp(firebaseConfig);

// Exporta la instancia de la aplicación Firebase para ser utilizada en otras partes de la aplicación.
export default app;
