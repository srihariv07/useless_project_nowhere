import React, { useState } from 'react';
import { ShoppingCart, Search, MapPin, ChevronDown, Menu, X, User } from 'lucide-react';

/**
 * Navbar Component — Amazon Style
 * 
 * Dark navy bar, prominent search bar, delivery location,
 * account dropdown, and orange cart icon. Pure Amazon energy.
 */
export default function Navbar({ onSelectCategory, activeCategory, cartCount = 0, onOpenCart }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="navbar-header">
      {/* Amazon-style main nav bar */}
      <nav className="navbar-container">
        <div className="navbar-left">
          {/* Brand */}
          <a href="#" className="brand-logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <span className="brand-name">OopsCart<sup className="brand-tm">™</sup></span>
            <span className="brand-sub">.in</span>
          </a>

          {/* Delivery location */}
          <div className="nav-deliver-to desktop-only">
            <MapPin size={16} className="deliver-icon" />
            <div className="deliver-text">
              <span className="deliver-label">Deliver to Nowhere</span>
              <span className="deliver-location">Void 000000</span>
            </div>
          </div>
        </div>

        {/* Amazon-style search bar */}
        <div className="amazon-search-bar desktop-only">
          <select className="search-category-select">
            <option>All Departments</option>
            <option>Futile Tech</option>
            <option>Culinary Absurdity</option>
            <option>Mobility Paradox</option>
            <option>Smart Home</option>
          </select>
          <input 
            type="text" 
            placeholder="Search useless products" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="amazon-search-input"
          />
          <button className="amazon-search-btn" aria-label="Search">
            <Search size={20} />
          </button>
        </div>

        {/* Right side actions */}
        <div className="navbar-right">
          {/* Language */}
          <div className="nav-action-item desktop-only">
            <span className="nav-flag">🇮🇳</span>
            <span className="nav-action-label">EN</span>
            <ChevronDown size={10} />
          </div>

          {/* Account */}
          <div className="nav-action-item desktop-only" onClick={() => alert("ACCOUNT DETAILS\n\nName: Valued Fool\nMembership: OopsCart Prime™ (₹0/yr)\nOrders: 0 delivered, 0 shipped, all regretted\nWishlist: Your entire life savings\n\nRewards Points: -4,200")}>
            <span className="nav-action-small">Hello, Valued Fool</span>
            <span className="nav-action-label">Account & Regrets <ChevronDown size={10} /></span>
          </div>

          {/* Returns & Orders */}
          <div className="nav-action-item desktop-only" onClick={() => alert("RETURN POLICY\n\nAll items are non-returnable because:\n1. We can't find our warehouse\n2. The product was useless when you bought it\n3. You knew this\n\nRefund Status: Denied (permanently)")}>
            <span className="nav-action-small">Returns</span>
            <span className="nav-action-label">& Regrets</span>
          </div>

          {/* Cart */}
          <button 
            className="amazon-cart-button" 
            title="Your bag of regrets"
            onClick={onOpenCart}
            aria-label={`Open shopping cart with ${cartCount} items`}
          >
            <div className="amazon-cart-icon-wrap">
              <ShoppingCart size={28} />
              <span className="amazon-cart-badge">{cartCount}</span>
            </div>
            <span className="amazon-cart-text">Cart</span>
          </button>

          {/* Mobile Hamburger Toggle */}
          <button 
            className="mobile-toggle-button mobile-only" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Amazon-style category sub-nav bar */}
      <div className="subnav-bar">
        <div className="subnav-content">
          <button className="subnav-link subnav-all" onClick={() => onSelectCategory("All Innovations")}>
            <Menu size={16} /> All
          </button>
          <button className="subnav-link" onClick={() => onSelectCategory("All Innovations")}>Today's Pointless Deals</button>
          <button className="subnav-link" onClick={() => onSelectCategory("Tech & Telemetry")}>Futile Tech</button>
          <button className="subnav-link" onClick={() => onSelectCategory("Culinary Futility")}>Absurd Kitchen</button>
          <button className="subnav-link" onClick={() => onSelectCategory("Mobility Paradox")}>Mobility Paradox</button>
          <button className="subnav-link" onClick={() => onSelectCategory("Smart Home Absurdity")}>Smart Home</button>
          <button className="subnav-link" onClick={() => onSelectCategory("Everyday Luxury")}>Everyday Waste</button>
          <span className="subnav-link subnav-promo">OopsCart Prime™ — Free Pointless Delivery</span>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-menu-drawer">
          <a href="#catalog" className="mobile-nav-link" onClick={() => { onSelectCategory("All Innovations"); setMobileMenuOpen(false); }}>
            All Innovations
          </a>
          <a href="#catalog" className="mobile-nav-link" onClick={() => { onSelectCategory("Tech & Telemetry"); setMobileMenuOpen(false); }}>
            Futile Tech
          </a>
          <a href="#catalog" className="mobile-nav-link" onClick={() => { onSelectCategory("Culinary Futility"); setMobileMenuOpen(false); }}>
            Absurd Kitchen
          </a>
          <a href="#catalog" className="mobile-nav-link" onClick={() => { onSelectCategory("Mobility Paradox"); setMobileMenuOpen(false); }}>
            Mobility Paradox
          </a>
          <button className="mobile-nav-link text-left" onClick={() => { setMobileMenuOpen(false); onOpenCart(); }}>
            View Cart ({cartCount})
          </button>
        </div>
      )}
    </header>
  );
}
