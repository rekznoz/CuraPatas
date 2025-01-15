import {useContext, useState} from "react"
import {registrarUsuario, loguearUsuario} from "../config/AuthService"
import {AuthContext} from "../context/AuthContext.jsx";

// Recoge los datos del formulario
import {Formik} from 'formik'
// https://formik.org/docs/overview

// Validar los datos del formulario con Yup
import {bool, object, string} from 'yup'
import {Link} from "react-router-dom"
// https://www.npmjs.com/package/yup

const validationSchema = object({
    email: string()
        .required('El campo email es obligatorio')
        .email('El email no es válido'),
    secreto: string()
        .required('El campo contraseña es obligatorio')
        .min(6, 'La contraseña debe tener al menos 6 caracteres')
        .max(20, 'La contraseña debe tener como máximo 20 caracteres'),
    terminos: bool()
        .oneOf([true], 'Debes aceptar los términos y condiciones')
})

const usuarioVacio = {
    username: 'brad_vickers',
    email: 'rafa@asd.com',
    secreto: 'asdasd',
    terminos: false
}

export default function Login() {

    const [registro, setRegistro] = useState(false)
    const {login, user, logout, isAuthenticated} = useContext(AuthContext);

    const ocultarLogin = () => {
        // Ocultar el modal de Login
        const modal = document.getElementById('modal-login-registro')
        modal.style.display = 'none'
    }

    const mostrarRegistro = () => {
        if (registro) {
            setRegistro(false)
        } else {
            setRegistro(true)
        }
    }

    const onSubmit = async (values, {resetForm}) => {
        if (registro) {
            try {
                await registrarUsuario(values)
                alert('Usuario registrado correctamente')
            } catch (error) {
                alert('Error al registrar el usuario')
            }
        } else {
            const respuesta = await login(values);
            if (respuesta) {
                alert("Login exitoso");
                resetForm();
            } else {
                alert("Credenciales incorrectas");
            }
        }
        resetForm()
    }

    if (isAuthenticated) {
        return <></>
    }

    return (
        <Formik initialValues={usuarioVacio} validationSchema={validationSchema} onSubmit={onSubmit}>
            {({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting}) => (
                <>
                    <div id="modal-login-registro" className="modal-login-registro">
                        <div className="contenedor-login">
                            <form onSubmit={handleSubmit}>
                                <h2>{
                                    registro ? 'Registro' : 'Login'
                                }</h2>

                                {registro ?
                                    <div className="contenedor-entrada">
                                        <input type="username" placeholder="Ingrese su Usuario"
                                               name="username"
                                               value={values.username} onBlur={handleBlur} onChange={handleChange}/>
                                        {touched.username && errors.username ?
                                            <p className="FormError">{errors.username}</p> : null}
                                    </div>
                                    : <></>
                                }

                                <div className="contenedor-entrada">
                                    <input type="email" placeholder="Ingrese su Email"
                                           name="email"
                                           value={values.email} onBlur={handleBlur} onChange={handleChange}/>
                                    {touched.email && errors.email ? <p className="FormError">{errors.email}</p> : null}
                                </div>

                                <div className="contenedor-entrada">
                                    <input type="password" placeholder="Ingrese su contraseña"
                                           name="secreto" value={values.secreto} onBlur={handleBlur}
                                           onChange={handleChange}/>
                                    {touched.secreto && errors.secreto ?
                                        <p className="FormError">{errors.secreto}</p> : null}
                                </div>

                                <div className="politicas-login">
                                    <input className="input-login" type="checkbox" name="terminos"
                                           checked={values.terminos} value={values.terminos} onBlur={handleBlur}
                                           onChange={handleChange}/>
                                    <span>Aceptar las politicas de <Link to="privacy"
                                                                         className="enlace-politicas">Privacidad</Link> y el <Link
                                        to="terms" className="enlace-politicas">Acuerdo de usuario</Link></span>
                                    {touched.terminos && errors.terminos ?
                                        <p className="FormError">{errors.terminos}</p> : null}
                                </div>

                                <div className="contenedor-login-botones">
                                    {
                                        !registro &&
                                        <>
                                            <div className="contenedor-texto-registro">
                                                <span>¿No tienes cuenta?</span>
                                                <p className="click-registro" onClick={mostrarRegistro}>Registrate</p>
                                            </div>
                                            <button className="botonLogin" type="submit" disabled={isSubmitting}>Login
                                            </button>
                                            <button className="botonCerrarLogin" onClick={ocultarLogin}>Cerrar</button>
                                        </>
                                    }
                                    {
                                        registro &&
                                        <>
                                            <button className="botonRegistro" type="submit"
                                                    disabled={isSubmitting}>Registrarse
                                            </button>
                                            <button className="botonCerrarLogin" onClick={mostrarRegistro}
                                                    disabled={isSubmitting}>Regresar
                                            </button>
                                        </>

                                    }
                                </div>
                            </form>

                        </div>
                    </div>
                </>
            )}
        </Formik>
    )
}