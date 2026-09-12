import React, { useEffect } from 'react';
import { X, Star, ShoppingBag, ShieldCheck, Shuffle, Sparkles, TrendingUp } from 'lucide-react';
import ProductImage from './ProductImage';

/**
 * ProductDetailModal Component
 * 
 * Sarcastic Pricing in Rupees (₹):
 * Lower price struck through (was cheaper), higher price is the selling price!
 */
export default function ProductDetailModal({ 
  product, 
  originallyClickedProduct,
  onClose,
  onAddToCart,
  onShuffleRandom,
  onShowOriginal
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!product) return null;

  const isSwapped = originallyClickedProduct && originallyClickedProduct.id !== product.id;
  const formattedPrice = `₹${product.price.toLocaleString('en-IN')}`;
  const formattedLowerPrice = product.originalPrice ? `₹${product.originalPrice.toLocaleString('en-IN')}` : null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          className="modal-close-btn" 
          onClick={onClose}
          aria-label="Close product view"
        >
          <X size={20} />
        </button>

        {/* Algorithm Redirection Banner */}
        {isSwapped && (
          <div className="algorithm-override-banner">
            <div className="override-header">
              <span className="override-badge">
                <Sparkles size={13} />
                ALGORITHM OVERRIDE
              </span>
              <p className="override-text">
                You clicked on <strong>"{originallyClickedProduct.name}"</strong>, but our advanced neural network decided you would be far more disappointed by <strong>"{product.name}"</strong>.
              </p>
            </div>

            <div className="override-actions">
              <button 
                className="shuffle-btn"
                onClick={onShuffleRandom}
                title="Pick another random useless product"
              >
                <Shuffle size={14} />
                <span>Roll Another Random Product 🎲</span>
              </button>

              <button 
                className="original-link-btn"
                onClick={onShowOriginal}
              >
                Show me "{originallyClickedProduct.name}" anyway
              </button>
            </div>
          </div>
        )}

        <div className="modal-grid">
          {/* Left Column: Product Visual */}
          <div className="modal-media-col">
            <div className="modal-image-wrapper">
              <ProductImage product={product} className="modal-product-image" />
            </div>
            
            <div className="modal-badges-row">
              <span className="modal-tag">{product.category}</span>
              <span className="modal-useless-pill" style={{ color: product.accentColor }}>
                ★ {product.uselessnessScore}
              </span>
            </div>

            <button 
              className="quick-shuffle-btn"
              onClick={onShuffleRandom}
            >
              <Shuffle size={14} />
              <span>Surprise Me With Another</span>
            </button>
          </div>

          {/* Right Column: Detailed Satirical Specs */}
          <div className="modal-info-col">
            <div className="modal-header">
              <span className="modal-eyebrow">{product.badge || "EXCLUSIVE INNOVATION"}</span>
              <h2 className="modal-title">{product.name}</h2>
              <p className="modal-tagline">{product.tagline}</p>
            </div>

            {/* Sarcastic Price Strip in Rupees */}
            <div className="modal-price-strip">
              <div className="modal-price-main-wrap">
                <span className="modal-price">{formattedPrice}</span>
                {formattedLowerPrice && (
                  <span className="modal-original-price" title="Original lower price before markup">
                    {formattedLowerPrice}
                  </span>
                )}
                {product.markupLabel && (
                  <span className="modal-markup-tag">
                    <TrendingUp size={12} />
                    {product.markupLabel}
                  </span>
                )}
              </div>
              <span className="modal-tax-note">Reverse Discount: We increased the price because you looked interested</span>
            </div>

            {/* Deep Description */}
            <div className="modal-description-box">
              <p>{product.description}</p>
            </div>

            {/* Technical Specifications */}
            <div className="modal-specs-section">
              <h4 className="specs-title">Technical Specifications</h4>
              <div className="specs-list">
                {product.specs?.map((spec, index) => (
                  <div key={index} className="spec-row">
                    <span className="spec-label">{spec.label}</span>
                    <span className="spec-value">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Satirical Customer Review */}
            {product.review && (
              <div className="modal-review-card">
                <div className="review-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="#eab308" stroke="#eab308" />
                  ))}
                  <span className="review-author">— {product.review.author}</span>
                </div>
                <p className="review-text">"{product.review.comment}"</p>
              </div>
            )}

            {/* Action Bar */}
            <div className="modal-actions-bar">
              <button 
                className="modal-add-cart-btn"
                onClick={() => onAddToCart(product)}
              >
                <ShoppingBag size={18} />
                <span>Add to Cart ({formattedPrice})</span>
              </button>

              <button 
                className="modal-secondary-btn"
                onClick={onClose}
              >
                Keep Browsing
              </button>
            </div>

            <div className="modal-guarantee-note">
              <ShieldCheck size={14} />
              <span>Backed by our 30-Day No-Questions-Asked Disappointment Warranty.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
