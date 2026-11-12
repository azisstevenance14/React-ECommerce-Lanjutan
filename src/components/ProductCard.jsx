import { BsCartPlus, BsStarFill } from 'react-icons/bs';

function ProductCard({ product, onAddToCart }) {
    // Format angka ke Rupiah
    const formatRupiah = (number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            maximumFractionDigits: 0
        }).format(number);
    };

    return (
        <div className="col-md-6 col-lg-3 mb-4">
            <div className="card h-100 shadow-sm border-0">
                <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.title}
                    style={{ height: '180px', objectFit: 'cover' }}
                />
                <div className="card-body d-flex flex-column">
                    <span className="badge bg-secondary mb-2 w-auto align-self-start">{product.category}</span>
                    <h5 className="card-title h6 fw-bold">{product.title}</h5>
                    <p className="card-text text-muted small flex-grow-1">{product.description}</p>

                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <span className="fw-bold text-primary">{formatRupiah(product.price)}</span>
                        <span className="small text-warning d-flex align-items-center gap-1">
                            <BsStarFill /> {product.rating}
                        </span>
                    </div>

                    <button
                        onClick={() => onAddToCart(product)}
                        className="btn btn-outline-primary w-100 d-flex align-items-center justify-content-center gap-2"
                    >
                        <BsCartPlus /> Beli Modul
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;