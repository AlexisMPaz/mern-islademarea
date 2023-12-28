import { useState } from 'react';

const ItemCount = ({ stock, id, handleMessage }) => {

    const [quantity, setQuantity] = useState(1)

    const add = () => quantity < stock && setQuantity(quantity + 1);
    const subtract = () => quantity > 1 && setQuantity(quantity - 1);

    const addToCart = async () => {
        try {
            let url = `${process.env.NEXT_PUBLIC_API_URL}/api/carts/product/${id}`;
            
            const first_response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
            });

            const first_data = await first_response.json()

            if(first_data. status === "error") {
                return handleMessage(data.message)
            }

            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ quantity: quantity }),
                credentials: 'include',
            });

            const data = await response.json();
            if (data.status === "success") {
                handleMessage("Se ha agregado el producto al Carrito")
            } else {
                handleMessage(data.message)
            }

        } catch (error) {
            handleMessage('Hubo un problema, intente más tarde');
            console.error(error);
        }
    }

    return (
        <div style={{ maxWidth: '300px', margin: '2rem auto' }}>
            <button className="me-3 btn btn-warning" onClick={subtract}>-</button>
            <span className='itemInfo'>{quantity}</span>
            <button className="ms-3 btn btn-warning" onClick={add}>+</button>
            <button className="ms-4 btn btn-warning" onClick={addToCart}>Agregar al Carrito</button>
        </div>
    );
};

export default ItemCount;