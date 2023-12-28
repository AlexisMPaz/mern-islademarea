"use client"
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import DetailsCard from '@/components/Products/Details/DetailsCard';
import ItemCount from '@/components/Products/Details/ItemCount';

export default function DetailsPage() {
    const searchParams = useSearchParams();
    const [message, setMessage] = useState(null);
    const [product, setProduct] = useState(null);

    const handleMessage = (message) => {
        setMessage(message);
    };

    useEffect(() => {
        const productId = searchParams.get('id')
        const fetchProduct = async (id) => {
            try {
                let url = `${process.env.NEXT_PUBLIC_API_URL}/api/products/${id}`;
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    credentials: 'include',
                }
                );
                const data = await response.json();
                if (data.status === 'success') {
                    setProduct(data.payload);
                    console.log(data)
                } else {
                    setMessage(data.message);
                }
            } catch (error) {
                setMessage('Hubo un problema, intente más tarde');
                console.error('Error fetching products:', error);
            }
        }

        fetchProduct(productId);
    }, []);

    return (
        <div className="container mainContainer">
            {message && (<div className="alert alert-danger" style={{ maxWidth: '500px', margin: '2rem auto' }}>{message}</div>)}

            {product && (

                <div style={{ maxWidth: '1000px', margin: '2rem auto' }}>

                    <DetailsCard product={product}/>
                    <ItemCount stock={product.stock} id={product._id} handleMessage={handleMessage}/>
                </div>
            )}
        </div>
    )
}