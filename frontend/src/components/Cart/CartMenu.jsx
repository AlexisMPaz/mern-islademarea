import Link from "next/link"

const CartMenu = ({ cart }) => {
    return (
        <div className='row' style={{ maxWidth: '800px', margin: '2rem auto' }}>
            <div className="col-md-4 mt-2 d-flex justify-content-center align-items-center">
                <Link className="btn btn-outline-warning" href="/products">Continuar Comprando</Link>
            </div>

            <div className="col-md-4 mt-2 d-flex justify-content-center align-items-center">
                <p className='cart-text itemName'>Total a Pagar: {cart.total} <img src="/img/coin.png" alt="Monedas" /></p>
            </div>

            <div className="col-md-4 mt-2 d-flex justify-content-center d-flex align-items-center">
                <Link className="btn btn-outline-warning" href="/checkout">Finalizar Compra</Link>
            </div>

        </div>
    );
};

export default CartMenu;