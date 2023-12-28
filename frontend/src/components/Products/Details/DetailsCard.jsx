const DetailsCard = ({ product }) => {
    return (
        <div className="card border-light mb-3 container artifactCard">
            <div className="row">
                <div className="col-4 d-flex align-items-center justify-content-center">
                    <img src={product.thumbnails[0]} className="img-fluid" alt="..." />
                </div>
                <div className="col-8">
                    <div className="card-body">
                        <h4 className="card-title itemName">{product.title}</h4>
                        <p className="card-text greetingText">Todos nuestros artefactos tienen garantía de confianza. Si luego de usarlo no estas conforme y lograste sobrevivir podes devolverlo.</p>
                        <p className="card-text itemType">{product.description}</p>
                        <p className="card-text itemInfo">- Codigo: {product.code}</p>
                        <p className="card-text itemInfo">- Precio: {product.price} <img src="/img/coin.png" alt="Monedas" /></p>
                        <p className="card-text itemInfo">- Stock Disponible: {product.stock}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsCard;