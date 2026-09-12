import React from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import ProductImage from './ProductImage';

/**
 * CartDrawer Component
 * 
 * Displays cart items in Indian Rupees (₹) with formatted numbers and sarcastic billing lines.
 */
export default function CartDrawer({ 
  isOpen, 
  onClose, 
  cart, 
  onUpdateQuantity, 
  onRemoveItem,
  onClearCart
}) {
  if (!isOpen) return null;

  // Calculate totals in Rupees
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

  const handleCheckout = () => {
    alert(
      `🎉 CONGRATULATIONS ON YOUR ABSURD PURCHASE!\n\n` +
      `Order Total: ₹${subtotal.toLocaleString('en-IN')}\n` +
      `Items: ${totalItems} completely useless contraption(s)\n` +
      `Estimated Delivery: Between now and never\n\n` +
      `Your card/UPI was NOT charged because none of this is real. Thank you for shopping with OopsCart™!`
    );
    onClearCart();
    onClose();
  };

  return (
    <div className="cart-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div 
        className="cart-drawer-panel" 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="cart-header">
          <div className="cart-title-row">
            <ShoppingBag size={20} className="cart-header-icon" />
            <h3 className="cart-title">Your Bag of Regrets</h3>
            <span className="cart-count-pill">{totalItems}</span>
          </div>

          <button 
            className="cart-close-btn" 
            onClick={onClose}
            aria-label="Close cart drawer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Free Shipping Notice */}
        <div className="cart-shipping-notice">
          <Sparkles size={14} className="notice-icon" />
          <span>You qualify for <strong>Free Pointless Shipping across India</strong>!</span>
        </div>

        {/* Cart Items List */}
        <div className="cart-items-container">
          {cart.length === 0 ? (
            <div className="empty-cart-state">
              <ShoppingBag size={48} className="empty-cart-icon" />
              <h4>Your bag is blissfully empty</h4>
              <p>You haven't accumulated any unnecessary lifestyle complications yet.</p>
              <button 
                className="hero-btn-primary" 
                onClick={onClose}
                style={{ marginTop: '16px' }}
              >
                Browse Futility
              </button>
            </div>
          ) : (
            <div className="cart-items-list">
              {cart.map(({ product, quantity }) => (
                <div key={product.id} className="cart-item-row">
                  {/* Thumbnail */}
                  <div className="cart-item-media">
                    <ProductImage product={product} className="cart-item-img" />
                  </div>

                  {/* Details */}
                  <div className="cart-item-details">
                    <div className="cart-item-info">
                      <h4 className="cart-item-title">{product.name}</h4>
                      <span className="cart-item-badge">{product.uselessnessScore}</span>
                    </div>

                    <div className="cart-item-price">
                      ₹{(product.price * quantity).toLocaleString('en-IN')}
                      {quantity > 1 && (
                        <span className="cart-item-unit-price"> (₹{product.price.toLocaleString('en-IN')} each)</span>
                      )}
                    </div>

                    {/* Quantity Controls & Remove */}
                    <div className="cart-item-actions">
                      <div className="quantity-stepper">
                        <button 
                          onClick={() => onUpdateQuantity(product.id, -1)}
                          aria-label="Decrease quantity"
                          className="qty-btn"
                        >
                          <Minus size={13} />
                        </button>
                        <span className="qty-value">{quantity}</span>
                        <button 
                          onClick={() => onUpdateQuantity(product.id, 1)}
                          aria-label="Increase quantity"
                          className="qty-btn"
                        >
                          <Plus size={13} />
                        </button>
                      </div>

                      <button 
                        onClick={() => onRemoveItem(product.id)}
                        className="cart-remove-btn"
                        title="Remove from cart"
                        aria-label={`Remove ${product.name}`}
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Summary & Checkout */}
        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="cart-summary-rows">
              <div className="summary-row">
                <span className="summary-label">Subtotal</span>
                <span className="summary-val">₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
              <div className="summary-row">
                <span className="summary-label">Zero-Utility Freight</span>
                <span className="summary-val free-val">₹0</span>
              </div>
              <div className="summary-row">
                <span className="summary-label">Reverse Discount Surcharge</span>
                <span className="summary-val free-val">Included</span>
              </div>
              <div className="summary-row total-row">
                <span className="summary-label">Total Due</span>
                <span className="summary-val total-val">₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <button 
              className="checkout-btn"
              onClick={handleCheckout}
            >
              <span>Proceed to Pointless Checkout</span>
              <ArrowRight size={18} />
            </button>

            <div className="cart-disclaimer">
              <ShieldCheck size={13} />
              <span>100% Non-refundable • 0% Practical value guaranteed</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
