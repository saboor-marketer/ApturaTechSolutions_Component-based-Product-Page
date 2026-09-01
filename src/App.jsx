import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import Filter from './components/Filter';
import CartSummary from './components/CartSummary';
import Footer from './components/Footer';
import { products } from './data/products';

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('default');

  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(products.map(product => product.category))];
    return uniqueCategories.sort();
  }, []);

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products;

    if (selectedCategory) {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (sortOption === 'price-low') {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else if (sortOption === 'price-high') {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    }

    return filtered;
  }, [selectedCategory, searchTerm, sortOption]);

  const cartCount = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  }, [cart]);

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const increaseQuantity = (productId) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (productId) => {
    setCart(prevCart =>
      prevCart.map(item => {
        if (item.id === productId) {
          if (item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          }
        }
        return item;
      }).filter(item => item.quantity > 0)
    );
  };

  const removeItem = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const clearFilters = () => {
    setSelectedCategory('');
    setSearchTerm('');
    setSortOption('default');
  };

  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  return (
    <div className="app">
      <Header cartCount={cartCount} onCartClick={handleCartClick} />
      
      <main className="container py-4">
        <section className="mb-5">
          <h1 className="text-center mb-4">Welcome to ShopHub</h1>
          <p className="text-center text-muted">
            Discover amazing products at unbeatable prices
          </p>
        </section>

        <Filter
          categories={categories}
          selectedCategory={selectedCategory}
          searchTerm={searchTerm}
          sortOption={sortOption}
          onCategoryChange={setSelectedCategory}
          onSearchChange={setSearchTerm}
          onSortChange={setSortOption}
          onClearFilters={clearFilters}
        />

        <section className="products-section">
          <h2 className="mb-4">
            {selectedCategory ? `${selectedCategory} Products` : 'All Products'}
            <span className="product-count badge bg-secondary ms-2">
              {filteredAndSortedProducts.length}
            </span>
          </h2>

          {filteredAndSortedProducts.length === 0 ? (
            <div className="text-center py-5">
              <p className="lead">No products found matching your criteria.</p>
              <button
                className="btn btn-outline-primary"
                onClick={clearFilters}
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
              {filteredAndSortedProducts.map(product => (
                <div key={product.id} className="col">
                  <ProductCard product={product} onAddToCart={addToCart} />
                </div>
              ))}
            </div>
          )}
        </section>
      </main>

      <Footer />

      {isCartOpen && (
        <CartSummary
          cartItems={cart}
          onIncreaseQuantity={increaseQuantity}
          onDecreaseQuantity={decreaseQuantity}
          onRemoveItem={removeItem}
          onClose={handleCloseCart}
        />
      )}
    </div>
  );
}

export default App;
