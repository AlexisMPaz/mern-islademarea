"use client"
import { useContext, useState, useRef } from 'react';
import UserContext from '@/context/UserContext';
import { useRouter } from 'next/navigation';
import Link from "next/link"

export default function LoginPage() {
    const { updateUser } = useContext(UserContext)
    const router = useRouter()
    const datForm = useRef()
    const [message, setMessage] = useState(null);

    const consultarForm = (e) => {
        e.preventDefault();
        const datosFormulario = new FormData(datForm.current);
        const cliente = Object.fromEntries(datosFormulario);

        let url = `${process.env.NEXT_PUBLIC_API_URL}/api/session/register`

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cliente),
            credentials: "include"
        })
            .then(response => response.json())
            .then(data => {
                if (data.status === "success") {
                    updateUser(data.payload);
                    router.push('/products');
                } else {
                    data.message ? setMessage(data.message) : setMessage("Ocurrio un problema con el servidor")
                }
            })
            .catch(error => {
                setMessage("No se pudo conectar con el servidor, intente mas tarde")
                console.error(error)
            })
        e.target.reset();
    };

    return (
        <div className="container mainContainer">
            {message && <div className="alert alert-danger">{message}</div>}
            <div style={{ maxWidth: '500px', margin: '2rem auto' }}>

                <form className="mb-3" onSubmit={consultarForm} ref={datForm}>
                    <div className="form-group">
                        <label htmlFor="first_name">Nombre</label>
                        <input type="text" className="form-control" name="first_name" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="last_name">Apellido</label>
                        <input type="text" className="form-control" name="last_name" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Correo Electrónico</label>
                        <input type="email" className="form-control" name="email" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="age">Edad</label>
                        <input type="number" className="form-control" name="age" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" className="form-control" name="password" required />
                    </div>

                    <button type="submit" className="btn btn-primary mt-3 mb-3">Enviar</button>
                    <p className="title">Completa tus datos para crear una cuenta.</p>
                </form>

                <div className="d-flex justify-content-center mb-3">
                    <Link href="/login" className="btn btn-outline-warning">Login</Link>
                </div>
                <div className="d-flex justify-content-center mb-3">
                    <Link href="/forgotpassword" className="btn btn-outline-warning">Recuperar contraseña</Link>
                </div>
            </div>
        </div>
    )
}