import React, { useState, useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { AuthContext } from '../auth/AuthContext';
import { types } from '../types/types';


const LoginForm = ({history}) => {

    const {dispatch} = useContext(AuthContext)

    const [successForm, setsuccessForm] = useState(false);

    const handleLogin = () => {
        // history.push('/');
        // history.replace('/');
        // {
        //     name: 'Juan'
        // }

        dispatch({
            type: types.login,
            payload: {
                name: 'Juan'
            }
        })

        history.replace('/')
    }

    return (
        <>
            <div className="container-fluid bg-light">
                <div className="row justify-content-center">
                    <div className="col col-md-4 mt-5 mb-5">
                        <div className="card" style={{ width: '30rem' }}>


                            <Formik
                                initialValues={{
                                    email: '',
                                    password: ''
                                }}
                                validate={(valores) => {
                                    let error = {}

                                    // Validacion Email
                                    if (!valores.email) {
                                        error.email = 'Por favor ingresa tu Email'
                                    } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)) {
                                        error.email = 'Direccion de correo invalida'
                                    }

                                    // Validacion Password
                                    if (!valores.password) {
                                        error.password = 'Por favor ingresa tu Password'
                                    }

                                    return error;
                                }
                                }

                                onSubmit={({ resetForm }) => {
                                    resetForm();
                                    console.log('Formulario enviado');
                                    setsuccessForm(true);
                                    setTimeout(() => setsuccessForm(false), 5000)
                                }}
                            >

                                {({ errors }) => (
                                    <Form>
                                        <div className="mb-3">
                                            <label htmlFor="email" className="form-label">Email: </label>
                                            <Field
                                                type="email"
                                                name="email"
                                                className="form-control"
                                                placeholder="Ingresa tu email"
                                                id="email"
                                            />

                                            <ErrorMessage name="email" component={() => (
                                                <div className="alert alert-danger">{errors.email}</div>
                                            )} />
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="password" className="form-label">Password: </label>
                                            <Field
                                                type="password"
                                                name="password"
                                                className="form-control"
                                                placeholder="Ingresa tu password"
                                                id="password"
                                            />

                                            <ErrorMessage name="password" component={() => (
                                                <div className="alert alert-danger">{errors.password}</div>
                                            )} />
                                        </div>

                                        <div className="d-grid gap-2 col-6 mx-auto mb-4">
                                            <button
                                                type="submit"
                                                className="btn btn-primary btn-sm"
                                                onClick={handleLogin}
                                            >
                                                Login
                                            </button>

                                            {successForm && <p className="alert alert-success">Formulario enviado con exito</p>}

                                        </div>
                                    </Form>
                                )}

                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginForm;

