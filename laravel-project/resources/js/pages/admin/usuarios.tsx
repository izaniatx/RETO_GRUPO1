import React, { useState } from 'react';
import MainLayout from "../../layouts/MainLayout"; 
import { Link } from '@inertiajs/react';
import '../../../css/usuarios.css';
import { router, usePage } from '@inertiajs/react';

const Usuarios = () => {

    interface Rol{
        id: number;
        rol: string;
    }

    interface User {
        id: number;
        usuario?: string;
        nombre?: string;
        name?: string;
        email: string;
        telefono?: string;
        rol_id?: number;
        rol?:Rol;
        isDeleted?: boolean;
        created_at: string;
    }

    const { users: usersProps, total, totalMes } = usePage<{ 
    users: User[]; 
    total: number; 
    totalMes: number 
    }>().props;

    const [users, setUsers] = useState<User[]>(usersProps);

const handleSuspender = (id: number) => {
    if (!confirm('¿Seguro que quieres suspender este usuario?')) return;

    router.post(
        '/admin/usuarios/delete', // tu ruta
        { id },                   // datos enviados
        {
            preserveScroll: true, // opcional
            onSuccess: (page) => {
                alert('Usuario suspendido correctamente');
                // Actualizar la tabla localmente con los datos que devuelve el backend
                // Por ejemplo:
                setUsers(users.map(u => u.id === id ? { ...u, isDeleted: true } : u));
            },
            onError: (errors) => {
                console.error(errors);
                alert('Error al suspender el usuario');
            },
        }
    );
};

   

    return (
        <MainLayout>
            <div className="d-flex" style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
                
                {/* BARRA LATERAL (SIDEBAR) - Mantenemos la misma que en Dashboard */}
                <aside className="bg-dark text-white p-4 shadow" style={{ width: "250px" }}>
                    <h4 className="fw-bold mb-4 text-center border-bottom pb-3">Panel Admin</h4>
                    <nav className="nav flex-column gap-2">
                        <Link href="/admin/dashboard" className="nav-link nav-inventario-2 text-white-50 px-3 py-2">
                            <i className="bi bi-speedometer2 me-2"></i> Inventario
                        </Link>
                        {/* Enlace activo ahora es Usuarios */}
                        <Link href="/admin/usuarios" className="nav-link nav-usuarios-2 text-white bg-primary rounded px-3 py-2">
                            <i className="bi bi-people me-2"></i> Usuarios
                        </Link>
                        <Link href="/admin/mensajes" className="nav-link nav-mensajes-2 text-white-50 px-3 py-2">
                            <i className="bi bi-chat-dots me-2"></i> Mensajes
                        </Link>
                    </nav>
                </aside>

                {/* AREA DE TRABAJO */}
                <main className="flex-grow-1 p-4">
                    <div className="container-fluid">
                        <header className="d-flex justify-content-between align-items-center mb-4">
                            <h2 className="h4 fw-bold text-uppercase m-0">Gestión de Usuarios</h2>
                            <button className="btn btn-dark shadow-sm px-4">
                                + Nuevo Usuario
                            </button>
                        </header>

                        {/* STATS QUICK VIEW */}
                        <div className="row g-3 mb-4">
                            <div className="col-md-6">
                                <div className="card border-0 shadow-sm text-center p-3">
                                    <span className="text-muted small">Total Registrados</span>
                                    <h2 className="fw-bold m-0">{total}</h2>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card border-0 shadow-sm text-center p-3 border-start border-primary border-4">
                                    <span className="text-muted small">Nuevos este mes</span>
                                    <h2 className="fw-bold m-0 text-primary">{totalMes}</h2>
                                </div>
                            </div>
                        </div>

                        {/* TABLA DE USUARIOS */}
                        <section className="card border-0 shadow-sm overflow-hidden">
                            <div className="table-responsive">
                                <table className="table table-hover align-middle mb-0">
                                    <thead className="table-dark">
                                        <tr>
                                            <th>Usuario</th>
                                            <th className="ps-4">Nombre</th>
                                            <th>Email</th>
                                            <th>Teléfono</th>
                                            <th>Rol</th>
                                            <th>F. Registro</th>
                                            <th>Eliminado</th>
                                            <th className="text-end pe-4">Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users.map((user) => (
                                            <tr key={user.id}>
                                                <td>{user.usuario}</td>
                                                <td className="ps-4 fw-bold">{user.nombre}</td>
                                                <td className="text-muted">{user.email}</td>
                                                <td>{user.telefono}</td>
                                                <td>
                                                    <span className={`badge rounded-pill ${user.rol?.rol=== 'Administrador' ? 'bg-primary' : 'bg-secondary'}`}>
                                                        {user.rol?.rol}
                                                    </span>
                                                </td>
                                                <td className="text-muted small">{user.created_at}</td>
                                                <td>
                                                    <span
                                                        className={`badge rounded-pill ${user.isDeleted ? 'bg-danger' : 'bg-success'}`}
                                                    >
                                                        {user.isDeleted ? 'Sí' : 'No'}
                                                    </span>
                                                    </td>
                                                <td className="text-end pe-4">
                                                    <button className="btn btn-sm btn-light border me-2">Editar</button>
                                                    <button
                                                            className="btn btn-sm btn-outline-danger"
                                                            onClick={() => handleSuspender(user.id)}
                                                        >
                                                            Suspender
                                                        </button>

                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>
                    </div>
                </main>
            </div>
        </MainLayout>
    );
};

export default Usuarios;