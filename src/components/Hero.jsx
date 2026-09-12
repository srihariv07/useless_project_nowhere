import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * Hero Component — Amazon-style Banner Carousel
 * 
 * Auto-rotating promotional banners just like Amazon's homepage.
 * Each banner has absurd promotional copy.
 */
export default function Hero({ onExploreClick }) {
  const [activeSlide, setActiveSlide] = useState(0);

  const banners = [
    {
      headline: "Great Useless Futility Festival",
      subtext: "Up to 0% off on products that do absolutely nothing. Limited purposelessness!",
      cta: "Shop the Futility",
      bg: "linear-gradient(135deg, #232f3e 0%, #37475a 50%, #131921 100%)",
      accent: "#febd69",
    },
    {
      headline: "OopsCart Prime Day is Here",
      subtext: "Exclusive deals for Prime members. Free next-day delivery of pure disappointment.",
      cta: "See Prime Deals",
      bg: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
      accent: "#00d2ff",
    },
    {
      headline: "New Arrivals in Futile Tech",
      subtext: "GPS Trackers for Potatoes, Noise Cancelling Bells, and more innovations nobody asked for.",
      cta: "Explore New Launches",
      bg: "linear-gradient(135deg, #1b1b2f 0%, #2d132c 50%, #3a1c3f 100%)",
      accent: "#e94560",
    },
    {
      headline: "Kitchen Absurdity Store",
      subtext: "Autonomous Banana Peelers and Left-Handed Spoons. Solving problems you never had.",
      cta: "Shop Kitchen Futility",
      bg: "linear-gradient(135deg, #0d1117 0%, #1a3a1a 50%, #0d1117 100%)",
      accent: "#4ade80",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % banners.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const goTo = (dir) => {
    setActiveSlide(prev => (prev + dir + banners.length) % banners.length);
  };

  const current = banners[activeSlide];

  return (
    <section className="hero-section" style={{ background: current.bg }}>
      {/* Carousel navigation arrows */}
      <button className="carousel-arrow carousel-left" onClick={() => goTo(-1)} aria-label="Previous banner">
        <ChevronLeft size={40} />
      </button>
      <button className="carousel-arrow carousel-right" onClick={() => goTo(1)} aria-label="Next banner">
        <ChevronRight size={40} />
      </button>

      {/* Banner content */}
      <div className="hero-container">
        <h1 className="hero-title" style={{ color: current.accent }}>
          {current.headline}
        </h1>
        <p className="hero-subtitle">{current.subtext}</p>
        <button className="hero-btn-primary" onClick={onExploreClick} style={{ background: current.accent, color: '#0a0b0e' }}>
          {current.cta}
        </button>
      </div>

      {/* Slide indicators */}
      <div className="carousel-dots">
        {banners.map((_, i) => (
          <button
            key={i}
            className={`carousel-dot ${i === activeSlide ? 'active' : ''}`}
            onClick={() => setActiveSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Gradient fade at bottom (Amazon signature) */}
      <div className="hero-bottom-fade"></div>
    </section>
  );
}
