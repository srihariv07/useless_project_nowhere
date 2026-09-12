import React from 'react';
import { ShieldAlert, Heart, ExternalLink } from 'lucide-react';

/**
 * Footer Component
 * 
 * Styled like a luxury design house footer with deadpan legal and satirical disclaimers.
 */
export default function Footer() {
  return (
    <footer id="philosophy" className="footer-section">
      <div className="footer-container">
        {/* Upper Brand Column */}
        <div className="footer-top-grid">
          <div className="footer-brand-col">
            <div className="brand-logo footer-logo">
              <span className="brand-name">OopsCart<sup className="brand-tm">™</sup></span>
              <span className="brand-sub">PURPOSELESS LUXURY</span>
            </div>
            <p className="footer-manifesto">
              The world's premier purveyor of impeccably crafted, rigorously tested, completely useless contraptions.
              Designed to provoke contemplation and mild irritation.
            </p>
          </div>

          <div className="footer-links-col">
            <h5 className="footer-column-title">Futile Lines</h5>
            <ul>
              <li><a href="#catalog">GPS Potato Trackers</a></li>
              <li><a href="#catalog">Autonomous Banana Peelers</a></li>
              <li><a href="#catalog">Dehydrated Water Powder</a></li>
              <li><a href="#catalog">Pedal-Driven Mobility</a></li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h5 className="footer-column-title">Philosophy</h5>
            <ul>
              <li><a href="#manifesto" onClick={(e) => { e.preventDefault(); alert("MANIFESTO:\n\n1. If it works, break it.\n2. If it is useful, rethink it.\n3. If it saves time, make it take 14 minutes."); }}>Core Tenets</a></li>
              <li><a href="#rnd" onClick={(e) => { e.preventDefault(); alert("R&D LABS:\n\nCurrently testing a rechargeable candle and a solar-powered flashlight that only works in direct sunlight."); }}>R&D Labs</a></li>
              <li><a href="#patents" onClick={(e) => { e.preventDefault(); alert("PATENTS:\n\nAll our ideas are proudly unpatentable."); }}>Futile Patents</a></li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h5 className="footer-column-title">Customer Regrets</h5>
            <ul>
              <li><a href="#support" onClick={(e) => { e.preventDefault(); alert("CUSTOMER SERVICE:\n\nPlease hold. Your call will not be answered because our phones are wireless string cups."); }}>Support Desks</a></li>
              <li><a href="#returns" onClick={(e) => { e.preventDefault(); alert("RETURNS:\n\nWe accept all returns, but replace them with items of equal or lesser utility."); }}>Return Policy</a></li>
              <li><a href="#warranty" onClick={(e) => { e.preventDefault(); alert("WARRANTY:\n\nGuaranteed to underperform for at least 3 years."); }}>Zero-Warranty</a></li>
            </ul>
          </div>
        </div>

        {/* Legal Disclaimer Box */}
        <div className="footer-disclaimer-card">
          <ShieldAlert size={20} className="disclaimer-icon" />
          <div className="disclaimer-text">
            <strong>OFFICIAL SATIRE NOTICE:</strong> OopsCart™ is a parody project designed for educational, entertainment, and front-end development purposes. None of the products listed are actual medical, transportation, or consumer electronics devices (though we secretly wish the potato tracker existed).
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <span>&copy; {new Date().getFullYear()} OopsCart™ Global Industries LLC. No rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
