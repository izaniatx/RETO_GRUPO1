import React from 'react';
import { Head, router } from '@inertiajs/react';

const VerifyEmail = () => {
    const handleLogout = () => {
        router.post('/logout');
    };

    const resendVerification = (e: React.FormEvent) => {
        e.preventDefault();
        router.post('/email/verification-notification');
    };

    return (
        <div className="container mt-5 text-center">
            <Head title="Verificar Email" />
            
            <div className="card shadow p-4">
                <h2 className="fw-bold mb-4">¡Gracias por registrarte!</h2>
                <p>
                    Antes de continuar, ¿podrías verificar tu dirección de correo electrónico haciendo clic en el enlace que te acabamos de enviar? 
                    Si no recibiste el correo, con gusto te enviaremos otro.
                </p>

                <div className="mt-4 d-flex justify-content-between">
                    <form onSubmit={resendVerification}>
                        <button type="submit" className="btn btn-primary">
                            Reenviar correo de verificación
                        </button>
                    </form>

                    <button onClick={handleLogout} className="btn btn-link text-secondary">
                        Cerrar sesión
                    </button>
                </div>
            </div>
        </div>
    );
};

export default VerifyEmail;