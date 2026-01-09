import './css/registro.css';
import React, { useState } from 'react';
import { validateField, validateForm } from '../lib/validators';

    function Input(props) {
        return (
            <div className="mb-3">
                <label className="r-form-label">{props.label}</label>
                <input
                    {...props}
                    className={`r-form-control ${props.error ? 'r-input-error' : ''}`}
                />
                {props.error && (
                    <small className="r-error">{props.error}</small>
                )}
            </div>
        );
    }

function Registro() {

    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        usuario: '',
        contrasenya: '',
        telefono: ''
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
            console.log('Formulario válido', values);
        }
    };

    return (
        <div className="r-registro-bg" style={{ position: 'relative' }}>
            <button
                className="r-btn-atras"
                onClick={() => window.location.href = '/RETO/'}
                aria-label="Volver"
            >
                ←
            </button>
            <div className="container">
                <h2 className="mb-4 text-white">REGISTRO</h2>

                <form onSubmit={handleSubmit} className="r-cnt">
                    <div className="row">

                        <div className="col-md-6 r-registro-inputs">
                            <Input label="Nombre" name="firstName" error={errors.firstName} onChange={handleChange} onBlur={handleBlur} />
                            <Input label="Correo Electrónico" name="email" error={errors.email} onChange={handleChange} onBlur={handleBlur} />
                            <Input label="Usuario" name="usuario" error={errors.usuario} onChange={handleChange} onBlur={handleBlur} />
                        </div>

                        <div className="col-md-6 r-registro-inputs">
                            <Input label="Apellido" name="lastName" error={errors.lastName} onChange={handleChange} onBlur={handleBlur} />
                            <Input label="Contraseña" name="contrasenya" type="password" error={errors.contrasenya} onChange={handleChange} onBlur={handleBlur} />
                            <Input label="Teléfono" name="telefono" type="tel" error={errors.telefono} onChange={handleChange} onBlur={handleBlur} />
                        </div>

                        <div className="text-center mt-4">
                            <button type="submit" className="r-btn-primary">
                                Registrarse
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Registro;
