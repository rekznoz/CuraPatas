import {useContext, useEffect, useState} from "react";
// Recoge los datos del formulario
import {Formik} from 'formik'
// https://formik.org/docs/overview

// Validar los datos del formulario con Yup
import {bool, object, string} from 'yup'

import "../css/perfilesusuario.css";
import {AuthContext} from "../context/AuthContext.jsx";
import {editarUsuario} from "../config/AuthService.jsx";

const validationSchema = object({
    foto: string()
        .url('La foto no es válida o no es una URL')
        .matches(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/, 'La URL no es válida'),
    nombre: string()
        .required('El campo nombre es obligatorio')
        .max(50, 'El nombre no puede tener más de 50 caracteres')
        .matches(/^[a-zA-ZÀ-ÿ\s]{1,40}$/, 'El nombre no es válido')
        .min(3, 'El nombre debe tener al menos 3 caracteres'),
    email: string()
        .required('El campo email es obligatorio')
        .email('El email no es válido')
        .max(50, 'El email no puede tener más de 50 caracteres')
        .matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/, 'El email no es válido'),
    ubicacion: string()
        .max(50, 'La ubicación no puede tener más de 50 caracteres'),
    telefono: string()
        .required('El campo teléfono es obligatorio')
        .matches(/^[0-9]{9}$/, 'El teléfono no es válido'),
    descripcion: string()
        .max(200, 'La descripción no puede tener más de 200 caracteres')
})

const perfilVacio = {
    foto: '',
    nombre: '',
    email: '',
    rol: '',
    ubicacion: '',
    telefono: '',
    descripcion: ''
}

/*

{
    "nombre": "",
    "_id": "6787c02a5bb0f740fb2fb912",
    "username": "brad_vickers",
    "email": "rafa@asd.com",
    "secreto": "asdasd",
    "animales": [],
    "rol": "usuario",
    "descripcion": "",
    "ubicacion": "",
    "telefono": "",
    "fechaRegistro": "15/1/2025",
    "__v": 0
}

 */

export default function PerfilUsuario() {

    const [editar, setEditar] = useState(false)
    const {login, user, logout, isAuthenticated} = useContext(AuthContext);
    const [usuario, setUsuario] = useState(perfilVacio)

    const {_id, username, secreto, animales} = user
    const { nombre, email, rol, descripcion, ubicacion, telefono, fechaRegistro } = usuario

    const mostrarEditar = () => {
        if (editar) {
            setEditar(false)
        } else {
            setEditar(true)
        }
    }

    useEffect(() => {
        setUsuario({
            foto: '',
            nombre: user.nombre,
            email: user.email,
            rol: user.rol,
            ubicacion: user.ubicacion,
            telefono: user.telefono,
            descripcion: user.descripcion
        })
    }, []);

    const handleSave = (values) => {
        editarUsuario(_id, values)
            .then(response => {
                console.log(response)
                mostrarEditar()
                setUsuario(values)
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (<>
            <div className="area1">
                <div className="encabezado-perfil">
                    <img className="foto-perfil" src="https://mighty.tools/mockmind-api/content/human/122.jpg"
                         alt="profile"/>
                    <div className="nombre-perfil">{nombre}</div>
                    <div className="rol-perfil">{rol}</div>
                    <button className="boton-editar-usuario-perfil" onClick={mostrarEditar}>Editar Perfil</button>
                </div>
            </div>
            <div className="area2">
                <div className="informacion-perfil-usuario">
                    {
                        editar ?
                            <Formik
                                initialValues={usuario}
                                validationSchema={validationSchema}
                                onSubmit={handleSave}
                            >
                                {({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting}) => (
                                    <>
                                        <div className="bloque-informacion">
                                            <h4>Foto</h4>
                                            <input type="text" name="foto" placeholder="URL de la foto"
                                                   value={values.foto}
                                                   onChange={handleChange} onBlur={handleBlur}/>
                                            {errors.foto && touched.foto && <div>{errors.foto}</div>}
                                        </div>
                                        <div className="bloque-informacion">
                                            <h4>Nombre</h4>
                                            <input type="text" name="nombre" placeholder="Nombre" value={values.nombre}
                                                   onChange={handleChange} onBlur={handleBlur}/>
                                            {errors.nombre && touched.nombre && <div>{errors.nombre}</div>}
                                        </div>
                                        <div className="bloque-informacion">
                                            <h4>Email</h4>
                                            <input type="text" name="email" placeholder="Email" value={values.email}
                                                   onChange={handleChange} onBlur={handleBlur}/>
                                            {errors.email && touched.email && <div>{errors.email}</div>}
                                        </div>
                                        <div className="bloque-informacion">
                                            <h4>Ubicación</h4>
                                            <input type="text" name="ubicacion" placeholder="Ubicación"
                                                   value={values.ubicacion} onChange={handleChange}
                                                   onBlur={handleBlur}/>
                                            {errors.ubicacion && touched.ubicacion && <div>{errors.ubicacion}</div>}
                                        </div>
                                        <div className="bloque-informacion">
                                            <h4>Teléfono</h4>
                                            <input type="text" name="telefono" placeholder="Teléfono"
                                                   value={values.telefono}
                                                   onChange={handleChange} onBlur={handleBlur}/>
                                            {errors.telefono && touched.telefono && <div>{errors.telefono}</div>}
                                        </div>
                                        <div className="bloque-informacion">
                                            <h4>Descripción</h4>
                                            <textarea name="descripcion" placeholder="Descripción"
                                                      value={values.descripcion}
                                                      onChange={handleChange} onBlur={handleBlur}/>
                                            {errors.descripcion && touched.descripcion &&
                                                <div>{errors.descripcion}</div>}
                                        </div>
                                        <button onClick={handleSubmit} type="submit" disabled={isSubmitting}>Guardar
                                        </button>
                                    </>
                                )}
                            </Formik>
                            :
                            <>
                                <div className="bloque-informacion">
                                    <h4>Descripción</h4>
                                    <p>{descripcion}</p>
                                </div>
                                <div className="bloque-informacion">
                                    <h4>Ubicación</h4>
                                    <p>{ubicacion}</p>
                                </div>
                                <div className="bloque-informacion">
                                    <h4>Teléfono</h4>
                                    <p>{telefono}</p>
                                </div>
                                <div className="bloque-informacion">
                                    <h4>Email</h4>
                                    <p>{email}</p>
                                </div>
                                <div className="bloque-informacion">
                                    <h4>Fecha de Registro</h4>
                                    <p>{fechaRegistro}</p>
                                </div>
                            </>
                    }

                </div>
            </div>
            <div className="area3">
                <div className="seccion-mascotas-perfil">

                    <div className="encabezado-seccion-mascotas">
                        <h3>Mascotas Registradas</h3>
                        <button>Editar Mascotas</button>
                    </div>

                    <div className="lista-mascotas">
                        <div className="carta-mascota">
                            <img className="foto-mascota"
                                 src="https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U"
                                 alt="mascota"/>
                            <div className="detalles-mascota">
                                <p className="nombre-mascota">Perrito Plox</p>
                                <p className="informacion-mascota">Perro - 3 años - Vacunado</p>
                            </div>
                        </div>
                    </div>

                    <div className="formulario-agregar-mascota">
                        <h4>Agregar Mascota</h4>
                        <form>
                            <input type="text" placeholder="Nombre"/>
                            <input type="text" placeholder="Especie"/>
                            <input type="text" placeholder="Edad"/>
                            <input type="text" placeholder="Vacunas"/>
                            <button>Agregar</button>
                        </form>
                    </div>

                </div>

            </div>
        </>
    )
}