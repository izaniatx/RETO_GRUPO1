import '../../css/recoveryPassword.css';
import React, { useState } from 'react';
import { validateField, validateForm } from '../lib/validators';

interface HandleChangeEvent {
    target: {
        name: string;
        value: string;
    };
}

interface HandleBlurEvent {
    target: {
        name: string;
        value: string;
    };
}

interface InputProps {
    label: string;
    name: string;
    type?: string;
    error?: string;
    onChange: (e: HandleChangeEvent) => void;
    onBlur: (e: HandleBlurEvent) => void;
}

function Input(props: InputProps) {
    return (
        <div className="mb-3">
            <label className="form-label">{props.label}</label>
            <input
                {...props}
                className={`form-control ${props.error ? 'input-error' : ''}`}
            />
            {props.error && <div className="text-danger">{props.error}</div>}
        </div>
    );
}

function RecoveryPassword() {
    const [values, setValues] = useState<{ usuario: string; email: string }>({ usuario: '', email: '' });
    const [errors, setErrors] = useState<{ usuario?: string; email?: string }>({});

    const handleChange = (e: HandleChangeEvent) => {
        const { name, value } = e.target;
        setValues(prev => ({ ...prev, [name]: value }));
    };

    const handleBlur = (e: HandleBlurEvent) => {
        const { name, value } = e.target;
        setErrors(prev => ({
            ...prev,
            [name]: validateField(name, value)
        }));
    };

    interface HandleSubmitEvent {
        preventDefault: () => void;
    }

    const handleSubmit = (e: HandleSubmitEvent) => {
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
                onClick={() => window.location.href = '/'}
                aria-label="Volver"
            >
                ←
            </button>

            <div className="container mt-5 text-center">
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