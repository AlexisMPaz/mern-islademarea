"use client"
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function ProductsPage() {
    const [ticket, setTicket] = useState(null);
    const [message, setMessage] = useState(null);

    useEffect(() => {
        const createThicket = async () => {
            try {
                let url = `${process.env.NEXT_PUBLIC_API_URL}/api/carts/purchase`;
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    credentials: 'include',
                });
                const data = await response.json();

                if (data.status === 'success') {
                    setTicket(data.payload);
                } else {
                    setMessage(data.message);
                }
            } catch (error) {
                setMessage('Hubo un problema, intente más tarde');
                console.error('Error fetching products:', error);
            }
        };

        createThicket();
    }, []);

    return (
        <div className="container mainContainer">
            {message && (<div className="alert alert-danger" style={{ maxWidth: '500px', margin: '2rem auto' }}>{message}</div>)}

            {ticket && (
                <div className="card border-light mb-3 container artifactCard" style={{ maxWidth: '500px', margin: '2rem auto' }}>
                    <div className="card-body">
                        <p className="card-text greetingText">Muchas gracias por confiar en nosotros. Guarde el código de su compra para el seguimiento:</p>
                        <h4 className="card-title itemName">- Código: {ticket.code}</h4>
                        <p className="card-text itemInfo">- Total: {ticket.amount} <img src="/img/coin.png" alt="Monedas" /></p>
                    </div>
                </div>
            )}

            <div className="d-flex justify-content-center">
                <Link className="btn btn-outline-warning" href="/products">Continuar Comprando</Link>
            </div>

        </div>
    );
}