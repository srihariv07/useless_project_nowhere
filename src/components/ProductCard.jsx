import React from 'react';
import { Eye, ArrowUpRight, ShoppingBag } from 'lucide-react';
import ProductImage from './ProductImage';

/**
 * ProductCard Component
 * 
 * Sarcastic Pricing:
 * Lower price is struck out (e.g. ~~₹12,499~~), and HIGHER price is the selling price (e.g. ₹18,999)
 * because USELESS™ reverse-discounts and charges you extra for no reason!
 */
export default function ProductCard({ product, onSelectProduct, onAddToCart }) {
  const formattedPrice = `₹${product.price.toLocaleString('en-IN')}`;
  const formattedLowerPrice = product.originalPrice ? `₹${product.originalPrice.toLocaleString('en-IN')}` : null;

  return (
    <article 
      className="product-card"
      onClick={() => onSelectProduct(product)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelectProduct(product);
        }
      }}
    >
      {/* Top Card Badge */}
      <div className="product-card-top">
        <span className="product-category-tag">{product.category}</span>
        {product.badge && (
          <span className="product-badge" style={{ borderColor: `${product.accentColor}44` }}>
            {product.badge}
          </span>
        )}
      </div>

      {/* Product Image Container */}
      <div className="product-card-media">
        <ProductImage product={product} className="product-image" />
        <div className="product-card-overlay">
          <span className="quick-view-btn">
            <Eye size={16} />
            Examine Inefficiency
          </span>
        </div>
      </div>

      {/* Product Information */}
      <div className="product-card-body">
        <div className="product-card-heading">
          <h3 className="product-card-title">{product.name}</h3>
          <ArrowUpRight size={18} className="product-card-arrow" />
        </div>

        <p className="product-card-tagline">{product.tagline}</p>

        {/* Uselessness Rating Indicator */}
        <div className="product-rating-row">
          <div className="uselessness-badge" title="Certified Uselessness Score">
            <span className="rating-dot" style={{ backgroundColor: product.accentColor }}></span>
            <span className="rating-score">{product.uselessnessScore}</span>
          </div>
          
          <div className="utility-score" title="Functional Utility Score">
            <span className="utility-label">Utility:</span>
            <span className="utility-value">{product.utilityRating}</span>
          </div>
        </div>

        {/* Pricing: Sarcastic Reverse Discount (Lower Striked, Higher Selling) */}
        <div className="product-card-footer">
          <div className="product-price-box">
            <span className="product-price">{formattedPrice}</span>
            {formattedLowerPrice && (
              <span className="product-original-price" title="Was cheaper, but we decided to charge you more!">
                {formattedLowerPrice}
              </span>
            )}
            {product.markupLabel && (
              <span className="markup-pill" title="Reverse discount applied">
                {product.markupLabel}
              </span>
            )}
          </div>

          <div className="card-buttons-group">
            <button 
              className="card-add-cart-btn" 
              onClick={(e) => {
                e.stopPropagation();
                onAddToCart(product);
              }}
              title={`Add ${product.name} to cart for ${formattedPrice}`}
              aria-label={`Add ${product.name} to cart`}
            >
              <ShoppingBag size={14} />
              <span>Add</span>
            </button>

            <button 
              className="card-select-btn" 
              onClick={(e) => {
                e.stopPropagation();
                onSelectProduct(product);
              }}
              aria-label={`Inspect ${product.name}`}
            >
              Inspect
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
