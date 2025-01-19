import {useContext, useEffect, useState} from "react";
// Recoge los datos del formulario
import {Formik} from 'formik'
// https://formik.org/docs/overview

// Validar los datos del formulario con Yup
import {bool, object, string} from 'yup'

import "../css/perfilesusuario.css";
import {AuthContext} from "../context/AuthContext.jsx";
import {editarUsuario} from "../config/AuthService.jsx";
import {useLoaderData} from "react-router-dom";
import {agregarAnimal} from "../config/AnimalesService.jsx";

const validacionPerfil = object({
    foto: string()
        .url('La foto no es válida o no es una URL')
        .matches(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/, 'La URL no es válida'),
    nombre: string()
        .required('El campo nombre es obligatorio')
        .max(50, 'El nombre no puede tener más de 50 caracteres')
        .matches(/^[a-zA-ZÀ-ÿ\s]{1,40}$/, 'El nombre no es válido')
        .min(3, 'El nombre debe tener al menos 3 caracteres'),
    correo: string()
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

const validacionAnimal = object({
    nombre: string()
        .required('El campo nombre es obligatorio')
        .max(50, 'El nombre no puede tener más de 50 caracteres')
        .matches(/^[a-zA-ZÀ-ÿ\s]{1,40}$/, 'El nombre no es válido')
        .min(3, 'El nombre debe tener al menos 3 caracteres'),
    especie: string()
        .required('El campo especie es obligatorio')
        .max(50, 'La especie no puede tener más de 50 caracteres')
        .matches(/^[a-zA-ZÀ-ÿ\s]{1,40}$/, 'La especie no es válida')
        .min(3, 'La especie debe tener al menos 3 caracteres'),
    raza: string()
        .required('El campo raza es obligatorio')
        .max(50, 'La raza no puede tener más de 50 caracteres')
        .matches(/^[a-zA-ZÀ-ÿ\s]{1,40}$/, 'La raza no es válida')
        .min(3, 'La raza debe tener al menos 3 caracteres'),
    edad: string()
        .required('El campo edad es obligatorio')
        .matches(/^[0-9]{1,2}$/, 'La edad no es válida'),
    estadoSalud: string()
        .required('El campo estado de salud es obligatorio')
        .max(50, 'El estado de salud no puede tener más de 50 caracteres')
        .matches(/^[a-zA-ZÀ-ÿ\s]{1,40}$/, 'El estado de salud no es válido')
        .min(3, 'El estado de salud debe tener al menos 3 caracteres'),
})

const perfilVacio = {
    foto: '',
    nombre: '',
    correo: '',
    rol: '',
    ubicacion: '',
    telefono: '',
    descripcion: '',
    fechaRegistro: ''
}

const animalVacio = {
    nombre: '',
    especie: '',
    raza: '',
    edad: '',
    estadoSalud: '',
    perdida: false,
    adopcion: false
}

/*
    formato usuario

    {
      "_id": "678b8e007fdb668b741981e6",
      "nombreUsuario": "rafa",
      "correo": "rafa@example.com",
      "secreto": "$2a$10$XNJtVtY0U9oXyzqi7jUedOykU/3ekvNz4fr0IJOEj4s56V2F4KG2W",
      "animales": [],
      "rol": "admin",
      "descripcion": "",
      "ubicacion": "",
      "telefono": "",
      "fechaRegistro": "18/1/2025",
      "__v": 0
    }

    formato animales
      {
      "_id": "678d1d453bc193a9de550582",
      "nombre": "ejemplo3",
      "especie": "ejemplo3",
      "raza": "ejemplo3",
      "edad": 3,
      "estadoSalud": "bueno",
      "duenio": "Juan Pérez",
      "perdida": false,
      "fechaRegistro": "19/1/2025",
      "__v": 0
    }
*/

export default function PerfilUsuario() {

    // Modales de edición
    const [modaleditarPerfil, setModaleditarPerfil] = useState(false)
    const [modaleditarAnimal, setModaleditarAnimal] = useState(false)
    const [modalagregarAnimal, setModalagregarAnimal] = useState(false)

    // Datos del usuario
    const {login, user, logout, isAuthenticated} = useContext(AuthContext);
    const [usuario, setUsuario] = useState(perfilVacio)
    const [animal, setAnimal] = useState(animalVacio)
    const datosUsuario = useLoaderData()[0]

    if (!datosUsuario) {
        return <></>
    }

    const {_id, nombreUsuario, secreto, animales} = datosUsuario
    const {nombre, correo, rol, descripcion, ubicacion, telefono, fechaRegistro} = usuario

    const mostrarEditarPerfil = () => {
        if (modaleditarPerfil) {
            setModaleditarPerfil(false)
        } else {
            setModaleditarPerfil(true)
        }
    }

    const mostrarEditarAnimal = (id) => {
        if (modaleditarAnimal) {
            setModaleditarAnimal(false)
        } else {
            setModaleditarAnimal(true)
        }
    }

    const mostrarAgregarAnimal = () => {
        if (modalagregarAnimal) {
            setModalagregarAnimal(false)
        } else {
            setModalagregarAnimal(true)
        }
    }

    useEffect(() => {
        if (datosUsuario) {
            setUsuario({
                foto: '',
                nombre: datosUsuario.nombre,
                correo: datosUsuario.correo,
                rol: datosUsuario.rol,
                ubicacion: datosUsuario.ubicacion,
                telefono: datosUsuario.telefono,
                descripcion: datosUsuario.descripcion,
                fechaRegistro: datosUsuario.fechaRegistro
            });
        }
    }, [datosUsuario]);

    const guardarPerfil = (values) => {
        editarUsuario(_id, values)
            .then(response => {
                console.log(response)
                mostrarEditarPerfil()
                setUsuario(values)
            })
            .catch(error => {
                console.error(error)
            })
    }

    const agregarAnimalUsuario = (values) => {
        values.duenio = nombreUsuario
        agregarAnimal(values)
            .then(response => {
                console.log(response)
                mostrarAgregarAnimal()
                setAnimal(values)
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <>
            <div className="area1">
                <div className="encabezado-perfil">
                    <img className="foto-perfil" src="https://mighty.tools/mockmind-api/content/human/122.jpg"
                         alt="profile"/>
                    <div className="nombre-perfil">{nombre}</div>
                    <div className="rol-perfil">{rol}</div>
                    <h4>Descripción</h4>
                    <p>{descripcion}</p>
                    {
                        isAuthenticated && user.nombreUsuario === nombreUsuario ?
                            <button className="boton-editar-usuario-perfil" onClick={mostrarEditarPerfil}>Editar
                                Perfil</button>
                            : null
                    }
                </div>
            </div>
            <div className="area2">
                <div className="informacion-perfil-usuario">
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
                        <p>{correo}</p>
                    </div>
                    <div className="bloque-informacion">
                        <h4>Fecha de Registro</h4>
                        <p>{fechaRegistro}</p>
                    </div>

                </div>
            </div>
            <div className="area3">
                <div className="seccion-animales">
                    <h3>Mis Animales</h3>
                    {
                        isAuthenticated && user.nombreUsuario === nombreUsuario ?
                            <button className="boton-editar-animal" onClick={mostrarAgregarAnimal}>Agregar Animal</button>
                            : null
                    }
                    <div className="lista-animales">
                        {
                            animales.map((animal, index) => {
                                return (
                                    <div key={index} className="animal">
                                        <img className="foto-animal"
                                             src="https://mighty.tools/mockmind-api/content/human/122.jpg"
                                             alt="animal"/>
                                        <div className="nombre-animal">{animal.nombre}</div>
                                        <div className="especie-animal">{animal.especie}</div>
                                        <div className="raza-animal">{animal.raza}</div>
                                        <div className="edad-animal">{animal.edad}</div>
                                        <div className="estado-salud-animal">{animal.estadoSalud}</div>
                                        <div className="fecha-registro-animal">{animal.fechaRegistro}</div>
                                        <button className="boton-editar-animal" onClick={mostrarEditarAnimal}>Editar
                                        </button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

            {
                /* Modal de edición de usuario */
                modaleditarPerfil ?
                    <div className="modal-editar-usuario">
                        <Formik
                            initialValues={usuario}
                            validationSchema={validacionPerfil}
                            onSubmit={(values) => {
                                guardarPerfil(values)
                            }}
                        >
                            {({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting}) => (
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="nombre">Nombre</label>
                                        <input
                                            type="text"
                                            name="nombre"
                                            id="nombre"
                                            value={values.nombre}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {errors.nombre && touched.nombre ? (
                                            <div className="error">{errors.nombre}</div>
                                        ) : null}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="correo">Correo</label>
                                        <input
                                            type="email"
                                            name="correo"
                                            id="correo"
                                            value={values.correo}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {errors.correo && touched.correo ? (
                                            <div className="error">{errors.correo}</div>
                                        ) : null}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="ubicacion">Ubicación</label>
                                        <input
                                            type="text"
                                            name="ubicacion"
                                            id="ubicacion"
                                            value={values.ubicacion}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {errors.ubicacion && touched.ubicacion ? (
                                            <div className="error">{errors.ubicacion}</div>
                                        ) : null}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="telefono">Teléfono</label>
                                        <input
                                            type="text"
                                            name="telefono"
                                            id="telefono"
                                            value={values.telefono}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {errors.telefono && touched.telefono ? (
                                            <div className="error">{errors.telefono}</div>
                                        ) : null}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="descripcion">Descripción</label>
                                        <textarea
                                            name="descripcion"
                                            id="descripcion"
                                            value={values.descripcion}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {errors.descripcion && touched.descripcion ? (
                                            <div className="error">{errors.descripcion}</div>
                                        ) : null
                                        }
                                    </div>
                                    <button type="submit">Guardar</button>
                                    <button onClick={mostrarEditarPerfil}>Cancelar</button>
                                </form>
                            )}
                        </Formik>
                    </div>
                    : null
            }

            {modalagregarAnimal && (
                <div className="modal-agregar-animal">
                    <Formik
                        initialValues={animal}
                        validationSchema={validacionAnimal}
                        onSubmit={(values) => {
                            agregarAnimalUsuario(values);
                            console.log(values);
                        }}
                    >
                        {({values, errors, touched, handleChange, handleBlur, handleSubmit}) => (
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="nombre">Nombre</label>
                                    <input
                                        type="text"
                                        name="nombre"
                                        id="nombre"
                                        value={values.nombre}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.nombre && touched.nombre && <div className="error">{errors.nombre}</div>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="especie">Especie</label>
                                    <input
                                        type="text"
                                        name="especie"
                                        id="especie"
                                        value={values.especie}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.especie && touched.especie && <div className="error">{errors.especie}</div>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="raza">Raza</label>
                                    <input
                                        type="text"
                                        name="raza"
                                        id="raza"
                                        value={values.raza}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.raza && touched.raza && <div className="error">{errors.raza}</div>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="edad">Edad</label>
                                    <input
                                        type="text"
                                        name="edad"
                                        id="edad"
                                        value={values.edad}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.edad && touched.edad && <div className="error">{errors.edad}</div>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="estadoSalud">Estado de Salud</label>
                                    <input
                                        type="text"
                                        name="estadoSalud"
                                        id="estadoSalud"
                                        value={values.estadoSalud}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.estadoSalud && touched.estadoSalud &&
                                        <div className="error">{errors.estadoSalud}</div>}
                                </div>
                                <div className="form-group-checkbox">
                                    <label htmlFor="perdida">¿Esta perdida?</label>
                                    <input
                                        type="checkbox"
                                        name="perdida"
                                        id="perdida"
                                        value={values.perdida}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </div>
                                <div className="form-group-checkbox">
                                    <label htmlFor="adopcion">¿Esta en Adopcion?</label>
                                    <input
                                        type="checkbox"
                                        name="adopcion"
                                        id="adopcion"
                                        value={values.adopcion}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </div>
                                <button type="submit">Guardar</button>
                                <button type="button" onClick={mostrarAgregarAnimal}>Cancelar</button>
                            </form>
                        )}
                    </Formik>
                </div>
            )}

        </>
    )
}