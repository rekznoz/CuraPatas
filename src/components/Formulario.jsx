import React from 'react'
import {Formik,Form} from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
    nombre: Yup.string()
        .required('El nombre es obligatorio')
        .min(3, 'Debe tener mínimo 3 caracteres'),

    apellido: Yup.string()
        .required('El apellido es obligatorio')
        .min(4, 'El apellido debe tener mínimo 4 caracteres'),

    email: Yup.string()
        .required('El email es obligatorio')
        .email('El email debe ser válido'),

    telefono: Yup.string()
        .required('El teléfono es obligatorio')
        .min(9, 'Debe contener 9 números')
});

const Formulario = () => {

    const onSubmit = (values) => {
        console.log(values);
    };

    return (
        <div>
            <h1>Formulario básico</h1>
            <Formik
                initialValues={{
                    nombre: '',
                    apellido: '',
                    email: '',
                    telefono: ''
                }}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                {({ values, handleChange, handleSubmit, errors, touched }) => (
                    <Form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="nombre">Nombre</label>
                            <input
                                type="text"
                                id="nombre"
                                name="nombre"
                                value={values.nombre}
                                onChange={handleChange}
                            />
                            {touched.nombre && errors.nombre && (
                                <div style={{ color: 'red' }}>{errors.nombre}</div>
                            )}
                        </div>

                        <div>
                            <label htmlFor="apellido">Apellido</label>
                            <input
                                type="text"
                                id="apellido"
                                name="apellido"
                                value={values.apellido}
                                onChange={handleChange}
                            />
                            {touched.apellido && errors.apellido && (
                                <div style={{ color: 'red' }}>{errors.apellido}</div>
                            )}
                        </div>

                        <div>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                            />
                            {touched.email && errors.email && (
                                <div style={{ color: 'red' }}>{errors.email}</div>
                            )}
                        </div>

                        <div>
                            <label htmlFor="telefono">Teléfono</label>
                            <input
                                type="tel"
                                id="telefono"
                                name="telefono"
                                value={values.telefono}
                                onChange={handleChange}
                            />
                            {touched.telefono && errors.telefono && (
                                <div style={{ color: 'red' }}>{errors.telefono}</div>
                            )}
                        </div>

                        <button type="submit">Enviar</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default Formulario