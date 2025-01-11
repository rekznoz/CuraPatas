import { Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'Yup'

const Login = () => {
    const validationSchema = Yup.object({

        email: Yup.string()
            .required('El email es obligatorio')
            .email('El email debe ser válido'),

        password: Yup.string()
            .required('La contraseña es obligatoria')

    });

    const onSubmit = (values) => {
        console.log(values);
    };
    return (
        <div>
            <h1>Login</h1>
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                {({ values, handleChange, handleSubmit, errors, touched }) => (
                    <Form onSubmit={handleSubmit}>
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

                            <label htmlFor="password">Contraseña</label>
                            <input
                                type="password"
                                id="passwrod"
                                name="password"
                                value={values.password}
                                onChange={handleChange}
                            />
                            {touched.password && errors.password && (
                                <div style={{ color: 'red' }}>{errors.password}</div>
                            )}
                        </div>
                        <button type="submit">Enviar</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Login