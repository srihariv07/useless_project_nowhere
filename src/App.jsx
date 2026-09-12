import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import ProductDetailModal from './components/ProductDetailModal';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';
import { PRODUCTS } from './data/products';
import { Sparkles, ShoppingBag, Check } from 'lucide-react';
import './App.css';

/**
 * Main Application Component: USELESS™
 */
export default function App() {
  // 1. Category filter state
  const [activeCategory, setActiveCategory] = useState("All Innovations");

  // 2. Product selection, Random switch state, and Warning Popup
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [originallyClicked, setOriginallyClicked] = useState(null);
  const [warningProduct, setWarningProduct] = useState(null);
  const [warningContent, setWarningContent] = useState({ title: '', subtitle: '', btnText: '' });

  // 3. Cart state
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // 4. Feedback toast notification state
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  /**
   * Triggers the warning popup when a product is clicked.
   */
  const handleProductCardClick = (clickedProduct) => {
    const titles = [
      "⚠️ FINANCIAL WARNING ⚠️",
      "🚨 TERRIBLE IDEA DETECTED 🚨",
      "🛑 STOP YOURSELF 🛑",
      "💸 MONEY BURNING IN PROGRESS 💸",
      "💀 CRITICAL LACK OF JUDGMENT 💀"
    ];
    const subtitles = [
      "You are about to completely waste your money on this.",
      "Are you sure? Your bank account is already crying.",
      "This product literally does nothing useful.",
      "Why are you like this? Just close the tab.",
      "Even your imaginary friends are judging this purchase."
    ];
    const buttons = [
      "I Accept My Bad Decisions",
      "I Hate Money, Let's Go",
      "Proceed to Financial Regret",
      "Ignore Logic, Continue",
      "Yes, I Am Unhinged"
    ];

    setWarningContent({
      title: titles[Math.floor(Math.random() * titles.length)],
      subtitle: subtitles[Math.floor(Math.random() * subtitles.length)],
      btnText: buttons[Math.floor(Math.random() * buttons.length)]
    });
    setWarningProduct(clickedProduct);
  };

  /**
   * Absurd Feature: When acknowledging the warning,
   * randomly pick a DIFFERENT product to show!
   */
  const handleAcceptWarning = () => {
    const clickedProduct = warningProduct;
    setWarningProduct(null); // Close the warning popup
    
    // Filter out the clicked product to guarantee a different random item
    const otherProducts = PRODUCTS.filter(p => p.id !== clickedProduct.id);
    const randomIndex = Math.floor(Math.random() * otherProducts.length);
    const randomProduct = otherProducts[randomIndex];

    setOriginallyClicked(clickedProduct);
    setSelectedProduct(randomProduct);
  };

  /**
   * Roll another random product while inside the modal
   */
  const handleShuffleRandom = () => {
    if (!selectedProduct) return;
    const pool = PRODUCTS.filter(p => p.id !== selectedProduct.id);
    const randomIndex = Math.floor(Math.random() * pool.length);
    setSelectedProduct(pool[randomIndex]);
  };

  /**
   * Revert to the originally clicked product
   */
  const handleShowOriginal = () => {
    if (originallyClicked) {
      setSelectedProduct(originallyClicked);
    }
  };

  /**
   * Cart Actions
   */
  const handleAddToCart = (product) => {
    // Play a randomly shuffled sound effect (guarantees no back-to-back repeats)
    const sounds = ['/sounds/cart-sound-1.mp3', '/sounds/cart-sound-2.mp3'];
    let nextSoundIndex;
    do {
      nextSoundIndex = Math.floor(Math.random() * sounds.length);
    } while (nextSoundIndex === window.lastCartSoundIndex);
    
    window.lastCartSoundIndex = nextSoundIndex;
    const audio = new Audio(sounds[nextSoundIndex]);
    audio.play().catch(e => console.error("Error playing sound:", e));

    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex(item => item.product.id === product.id);
      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + 1
        };
        return updated;
      } else {
        return [...prevCart, { product, quantity: 1 }];
      }
    });

    showToast(`Added "${product.name}" (₹${product.price.toLocaleString('en-IN')}) to your bag of regrets!`);
  };

  const handleUpdateQuantity = (productId, delta) => {
    setCart((prevCart) => {
      return prevCart
        .map(item => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean);
    });
  };

  const handleRemoveFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  // Calculate total item count for cart badge
  const totalCartCount = cart.reduce((total, item) => total + item.quantity, 0);

  // Smooth scroll to catalog
  const handleExploreClick = () => {
    const catalogElement = document.getElementById('catalog');
    if (catalogElement) {
      catalogElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-layout">
      {/* 1. Navbar with live cart count & drawer opener */}
      <Navbar 
        activeCategory={activeCategory} 
        onSelectCategory={setActiveCategory}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* 2. Main Page Content */}
      <main>
        <Hero onExploreClick={handleExploreClick} />

        <ProductGrid
          products={PRODUCTS}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          onSelectProduct={handleProductCardClick}
          onAddToCart={handleAddToCart}
        />
      </main>

      {/* 3. Product Detail Modal (Shows random product + swap notice) */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          originallyClickedProduct={originallyClicked}
          onClose={() => {
            setSelectedProduct(null);
            setOriginallyClicked(null);
          }}
          onAddToCart={handleAddToCart}
          onShuffleRandom={handleShuffleRandom}
          onShowOriginal={handleShowOriginal}
        />
      )}

      {/* 4. Cart Slide-Out Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
      />

      {/* 5. Floating Toast Notification */}
      {toastMessage && (
        <div className="toast-notification" role="status">
          <div className="toast-icon-wrap">
            <Check size={14} className="toast-check" />
          </div>
          <span className="toast-text">{toastMessage}</span>
          <button 
            className="toast-view-cart-btn" 
            onClick={() => {
              setToastMessage(null);
              setIsCartOpen(true);
            }}
          >
            View Bag
          </button>
        </div>
      )}

      {/* 6. Footer */}
      <Footer />

      {/* 7. Colorful Warning Popup */}
      {warningProduct && (
        <div className="colorful-warning-overlay">
          <div className="colorful-warning-box">
            <h2 className="colorful-warning-title">{warningContent.title}</h2>
            <p className="colorful-warning-subtitle">{warningContent.subtitle}</p>
            <button className="colorful-warning-btn" onClick={handleAcceptWarning}>
              {warningContent.btnText}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
