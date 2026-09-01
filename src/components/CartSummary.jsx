import React from 'react';

const CartSummary = ({ cartItems, onIncreaseQuantity, onDecreaseQuantity, onRemoveItem, onClose }) => {
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="cart-summary-overlay" onClick={onClose}>
      <div className="cart-summary" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h3>Shopping Cart</h3>
          <button
            className="btn-close"
            onClick={onClose}
            aria-label="Close cart"
          ></button>
        </div>

        {cartItems.length === 0 ? (
          <div className="empty-cart text-center py-5">
            <div className="empty-cart-icon">🛒</div>
            <p className="empty-cart-message">Your cart is empty.</p>
            <p className="empty-cart-submessage">Add some products to get started.</p>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item-image"
                  />
                  <div className="cart-item-details">
                    <h5 className="cart-item-name">{item.name}</h5>
                    <p className="cart-item-price">${item.price.toFixed(2)}</p>
                  </div>
                  <div className="cart-item-controls">
                    <div className="quantity-controls">
                      <button
                        className="btn btn-sm btn-outline-secondary quantity-btn"
                        onClick={() => onDecreaseQuantity(item.id)}
                        aria-label={`Decrease quantity of ${item.name}`}
                      >
                        -
                      </button>
                      <span className="quantity-display">{item.quantity}</span>
                      <button
                        className="btn btn-sm btn-outline-secondary quantity-btn"
                        onClick={() => onIncreaseQuantity(item.id)}
                        aria-label={`Increase quantity of ${item.name}`}
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="btn btn-sm btn-danger remove-btn"
                      onClick={() => onRemoveItem(item.id)}
                      aria-label={`Remove ${item.name} from cart`}
                    >
                      Remove
                    </button>
                  </div>
                  <div className="cart-item-subtotal">
                    <strong>${(item.price * item.quantity).toFixed(2)}</strong>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-footer">
              <div className="cart-totals">
                <div className="total-items">
                  <span>Total Items:</span>
                  <strong>{totalItems}</strong>
                </div>
                <div className="total-price">
                  <span>Total Price:</span>
                  <strong>${totalPrice.toFixed(2)}</strong>
                </div>
              </div>
              <button className="btn btn-success checkout-btn w-100">
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartSummary;
