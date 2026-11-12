import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import { productsData } from './data/product';

function App() {
  const [cartCount, setCartCount] = useState(0);

  // Fungsi Event Handling saat tombol "Beli Modul" diklik
  const handleAddToCart = (product) => {
    setCartCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar cartCount={cartCount} />
      <Hero />
      <main className="flex-grow-1">
        <ProductGrid products={productsData} onAddToCart={handleAddToCart} />
      </main>
      <Footer />
    </div>
  );
}

export default App;