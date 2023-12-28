import { useState } from 'react';

const CartCard = ({ product, handleMessage, fetchCart }) => {

    const [isDeleting, setIsDeleting] = useState(false);

    const deleteProduct = async (id) => {
      if (isDeleting) return;
      try {
        setIsDeleting(true);
        let url = `${process.env.NEXT_PUBLIC_API_URL}/api/carts/product/${id}`;
        const response = await fetch(url, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          },
          credentials: 'include',
        });
        const data = await response.json();
        setIsDeleting(false);
        if (data.status === 'success') {
            fetchCart()
        } else {
          handleMessage(data.message);
        }
      } catch (error) {
        setIsDeleting(false);
        handleMessage('Hubo un problema, intente más tarde');
        console.error('Error fetching products:', error);
      }
    };


    return (
        <div className='m-4'>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={product.productId.thumbnails[0]} className="img-fluid" alt={product.productId.title} />
                </div>
                <div className="col-md-6">
                    <div className="card-body">
                        <h5 className="card-title itemName">{product.productId.title}</h5>
                        <p className="card-text itemInfo">{product.productId.price} <img src="/img/coin.png" alt="Monedas" /> c/u</p>
                        <p className="card-text itemInfo">Cantidad: {product.quantity}</p>
                    </div>
                </div>
                <div className="col-md-2">
                    <button className='btn btn-danger' onClick={() => deleteProduct(product.productId._id)}>Borrar</button>
                </div>
            </div>
        </div>
    );
};

export default CartCard;