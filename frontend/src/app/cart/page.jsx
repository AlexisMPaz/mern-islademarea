"use client"
import { useState, useEffect } from 'react';
import CartMenu from '@/components/Cart/CartMenu';
import CartCard from '@/components/Cart/CartCard';

export default function CartPage() {
    const [cart, setCart] = useState(null);
    const [message, setMessage] = useState(null);

    const handleMessage = (message) => {
        setMessage(message);
    };

    const fetchCart = async () => {
        try {
            let url = `${process.env.NEXT_PUBLIC_API_URL}/api/carts`;
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
            });
            const data = await response.json();
            if (data.status === 'success') {
                setCart(data.payload);
            } else {
                setMessage(data.message);
            }
        } catch (error) {
            setMessage('Hubo un problema, intente más tarde');
            console.error('Error fetching products:', error);
        }
    }

    useEffect(() => {
        fetchCart()
    }, [])



    return (
        <div className="container mainContainer">
            {message && (<div className="alert alert-danger" style={{ maxWidth: '500px', margin: '2rem auto' }}>{message}</div>)}

            {cart && (
                <>
                    <div className="row artifactCard" style={{ maxWidth: '800px', margin: '2rem auto' }}>
                        {cart.products.map((product) => (
                           < CartCard key={product.productId._id}  product={product} handleMessage = {handleMessage} fetchCart = {fetchCart}  />
                        ))}
                    </div>

                    < CartMenu cart={cart} handleMessage = {handleMessage} />
                </>
            )}


        </div>
    )
}


