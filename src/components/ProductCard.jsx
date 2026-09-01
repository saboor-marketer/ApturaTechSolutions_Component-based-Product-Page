import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <div className="card h-100">
        <img
          src={product.image}
          alt={product.name}
          className="card-img-top product-image"
          loading="lazy"
        />
        <div className="card-body d-flex flex-column">
          <span className="badge bg-secondary category-badge mb-2 align-self-start">
            {product.category}
          </span>
          <h5 className="card-title product-name">{product.name}</h5>
          <p className="card-text product-description flex-grow-1">
            {product.description}
          </p>
          <div className="mt-auto">
            <p className="card-text product-price">
              <strong>${product.price.toFixed(2)}</strong>
            </p>
            <button
              className="btn btn-primary w-100 add-to-cart-btn"
              onClick={() => onAddToCart(product)}
              aria-label={`Add ${product.name} to cart`}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
