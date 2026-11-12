import ProductCard from './ProductCard';

function ProductGrid({ products, onAddToCart }) {
    return (
        <section id="katalog" className="py-5">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="fw-bold">Katalog Digital Pilihan</h2>
                    <p className="text-muted">Pilih modul berkualitas sesuai kebutuhan pengembangan tokomu.</p>
                </div>
                <div className="row">
                    {products.map((item) => (
                        <ProductCard
                            key={item.id}
                            product={item}
                            onAddToCart={onAddToCart}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProductGrid;
