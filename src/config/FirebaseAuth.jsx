/**
 * @file FirebaseAuth.js
 * @description Funciones para gestionar la autenticación de usuarios mediante Firebase.
 * Proporciona funcionalidades para:
 * - Iniciar sesión.
 * - Registrar nuevos usuarios.
 * - Cerrar sesión.
 * - Escuchar cambios en el estado de autenticación.
 * 
 * @dependencies
 * - Firebase SDK para JavaScript.
 * - La instancia de configuración de Firebase exportada desde `FirebaseConfig.jsx`.
 * @version 1.0
 * @date 2024
 */

// Importa las funciones necesarias de Firebase
import { 
  getAuth, // Para obtener la instancia de autenticación
  createUserWithEmailAndPassword, // Para crear un nuevo usuario con email y contraseña
  signInWithEmailAndPassword, // Para iniciar sesión con email y contraseña
  signOut, // Para cerrar sesión del usuario
  onAuthStateChanged // Para escuchar los cambios en el estado de autenticación
} from "firebase/auth";
import app from "./FirebaseConfig.jsx"; // Asegúrate de que este archivo exporta la instancia de Firebase

// Inicializa la autenticación con Firebase usando la configuración de `app`
export const auth = getAuth(app);

/**
* Función para iniciar sesión de un usuario.
* @param {string} email - El correo electrónico del usuario.
* @param {string} password - La contraseña del usuario.
* @returns {Promise} - Devuelve una promesa que se resuelve con el objeto de usuario si el inicio de sesión es exitoso.
*/
export function firebaseLogin(email, password) {
return signInWithEmailAndPassword(auth, email, password);
}

/**
* Función para registrar un nuevo usuario.
* @param {string} email - El correo electrónico del nuevo usuario.
* @param {string} password - La contraseña del nuevo usuario.
* @returns {Promise} - Devuelve una promesa que se resuelve con el objeto de usuario si el registro es exitoso.
*/
export function firebaseRegistro(email, password) {
return createUserWithEmailAndPassword(auth, email, password);
}

/**
* Función para cerrar sesión de un usuario.
* @returns {Promise} - Devuelve una promesa que se resuelve cuando el usuario ha cerrado sesión.
*/
export function firebaseLogout() {
return signOut(auth);
}

/**
* Función para escuchar los cambios en el estado de autenticación.
* @param {function} callback - Una función de retorno que será llamada cada vez que cambie el estado de autenticación.
* @returns {function} - Devuelve una función de desuscripción para dejar de escuchar los cambios de autenticación.
*/
export function onAuthStateListener(callback) {
return onAuthStateChanged(auth, callback);
}
