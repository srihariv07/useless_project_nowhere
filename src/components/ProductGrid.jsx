import React from 'react';
import ProductCard from './ProductCard';
import { CATEGORIES } from '../data/products';
import { SlidersHorizontal } from 'lucide-react';

/**
 * ProductGrid Component
 * 
 * Renders category filters and a responsive grid of ProductCards.
 */
export default function ProductGrid({ 
  products, 
  activeCategory, 
  onSelectCategory, 
  onSelectProduct,
  onAddToCart
}) {
  // Filter products by selected category
  const filteredProducts = activeCategory === "All Innovations"
    ? products
    : products.filter(item => item.category === activeCategory);

  return (
    <section id="catalog" className="catalog-section">
      <div className="catalog-header">
        <div className="catalog-title-wrap">
          <span className="section-eyebrow">OUR CURATED INVENTORY</span>
          <h2 className="section-title">The Absurdity Catalog</h2>
          <p className="section-subtitle">
            Every creation is lab-tested to ensure it solves no real problems, improves no lives, and generates 100% pure bewildered laughter.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="category-filter-bar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`filter-pill ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => onSelectCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="catalog-meta-bar">
          <span className="catalog-count">
            Showing <strong>{filteredProducts.length}</strong> over-engineered items
          </span>
          <span className="catalog-sort-hint">
            <SlidersHorizontal size={14} /> Sorted by: Decreasing Practicality
          </span>
        </div>
      </div>

      {/* Responsive Product Grid */}
      <div className="products-grid">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onSelectProduct={onSelectProduct}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="empty-catalog-state">
          <p>No useless products found in this category. We will engineer some immediately.</p>
          <button 
            className="hero-btn-secondary" 
            onClick={() => onSelectCategory("All Innovations")}
          >
            Show All Products
          </button>
        </div>
      )}
    </section>
  );
}
