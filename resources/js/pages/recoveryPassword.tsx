import './css/recoveryPassword.css';
import React, { useState } from 'react';
import { validateField, validateForm } from '../lib/validators';

function Input(props) {
    return (
        <div className="mb-3">
            <label className="form-label">{props.label}</label>
            <input
                {...props}
                className={`form-control ${props.error ? 'input-error' : ''}`}
            />
            {props.error && (
                <small className="error">{props.error}</small>
            )}
        </div>
    );
}

function RecoveryPassword() {

    const [values, setValues] = useState({
        usuario: '',
        email: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues(prev => ({ ...prev, [name]: value }));
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        setErrors(prev => ({
            ...prev,
            [name]: validateField(name, value)
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formErrors = validateForm(values);
        setErrors(formErrors);

        if (Object.keys(formErrors).length === 0) {
            const subject = 'Recuperación de contraseña';
            const body = `Hola,\n\nSolicito recuperar la contraseña del usuario: ${values.usuario}\n\nGracias.`;

            window.location.href = 
                `mailto:${values.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        }
    };

    return (
        <div className="registro-bg" style={{ position: 'relative' }}>
            <button
                className="btn-atras"
                onClick={() => window.location.href = '/RETO/'}
                aria-label="Volver"
            >
                ←
            </button>

            <div className="container mt-5 ">
                <h2 className="mb-4 text-white">RECUPERAR CONTRASEÑA</h2>

                <form onSubmit={handleSubmit} className="cnt">
                    <div className="row justify-content-center">

                        <div className="col-md-6 registro-inputs">
                            <Input
                                label="Usuario"
                                name="usuario"
                                error={errors.usuario}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />

                            <Input
                                label="Correo Electrónico"
                                name="email"
                                type="email"
                                error={errors.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </div>

                        <div className="text-center mt-4">
                            <button type="submit" className="btn btn-primary">
                                Recuperar contraseña
                            </button>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    );
}

export default RecoveryPassword;