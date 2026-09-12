import React, { useState } from 'react';

/**
 * ProductImage Component
 * 
 * Handles loading custom user images from /public/images/ while providing
 * high-aesthetic SVG vector fallbacks for all products if the user's custom
 * photo hasn't been added yet.
 */
export default function ProductImage({ product, className = "" }) {
  const [imageError, setImageError] = useState(false);

  // If user provided a real image and it hasn't failed to load, show it
  if (product.image && !imageError) {
    return (
      <img
        src={product.image}
        alt={product.name}
        className={className}
        onError={() => setImageError(true)}
        loading="lazy"
      />
    );
  }

  // Fallback: Rich, modern SVG vector illustration for each absurd product
  return (
    <div className={`product-svg-fallback ${className}`}>
      <div className="product-svg-container">
        {renderProductIllustration(product.id, product.accentColor)}
      </div>
    </div>
  );
}

function renderProductIllustration(id, accent = "#3b82f6") {
  switch (id) {
    case "potato-gps":
      return (
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-illustration">
          {/* Orbital rings */}
          <ellipse cx="100" cy="100" rx="75" ry="32" stroke={accent} strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" transform="rotate(-25 100 100)" />
          <ellipse cx="100" cy="100" rx="70" ry="24" stroke="rgba(255,255,255,0.2)" strokeWidth="1" transform="rotate(35 100 100)" />
          {/* Potato body */}
          <path d="M55 105C50 80 75 55 110 58C145 61 160 85 155 115C150 145 125 155 90 150C60 145 58 125 55 105Z" fill="#a16207" />
          <path d="M60 100C55 85 75 65 105 66C135 67 150 90 145 115C140 140 120 148 90 143C65 138 62 120 60 100Z" fill="#b45309" opacity="0.8" />
          {/* Potato eyes/spots */}
          <circle cx="80" cy="85" r="3" fill="#78350f" />
          <circle cx="120" cy="95" r="2.5" fill="#78350f" />
          <circle cx="95" cy="120" r="3.5" fill="#78350f" />
          <circle cx="135" cy="120" r="2" fill="#78350f" />
          {/* Titanium high-tech GPS collar */}
          <rect x="86" y="80" width="28" height="36" rx="6" fill="#1e293b" stroke="#94a3b8" strokeWidth="2" />
          <circle cx="100" cy="94" r="5" fill={accent} />
          <circle cx="100" cy="94" r="9" stroke={accent} strokeWidth="1.5" opacity="0.6" />
          <path d="M100 70V80" stroke={accent} strokeWidth="2" strokeLinecap="round" />
          <circle cx="100" cy="68" r="3" fill="#ffffff" />
          {/* GPS telemetry signal beams */}
          <path d="M92 63C96 60 104 60 108 63" stroke={accent} strokeWidth="1.5" strokeLinecap="round" />
          <path d="M87 58C94 53 106 53 113 58" stroke={accent} strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
        </svg>
      );

    case "banana-peeler":
      return (
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-illustration">
          {/* Mechanical base */}
          <rect x="40" y="150" width="120" height="24" rx="6" fill="#1e293b" stroke="#475569" strokeWidth="1.5" />
          <circle cx="60" cy="162" r="4" fill="#22c55e" />
          <circle cx="75" cy="162" r="4" fill={accent} />
          {/* Banana */}
          <path d="M50 135C65 80 120 60 155 75C148 83 105 88 80 125C70 140 55 142 50 135Z" fill="#eab308" />
          <path d="M155 75L165 72L162 80Z" fill="#713f12" />
          <path d="M50 135L44 140L42 133Z" fill="#713f12" />
          {/* Peel curling back */}
          <path d="M125 72C115 50 90 45 75 55" stroke="#ca8a04" strokeWidth="6" strokeLinecap="round" fill="none" />
          {/* High-tech robotic peeling arms */}
          <path d="M50 150L65 110L78 115" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
          <path d="M150 150L135 100L120 105" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
          <circle cx="65" cy="110" r="4" fill="#0f172a" stroke="#cbd5e1" strokeWidth="2" />
          <circle cx="135" cy="100" r="4" fill="#0f172a" stroke="#cbd5e1" strokeWidth="2" />
          {/* Laser targeting crosshair */}
          <circle cx="105" cy="95" r="14" stroke="#ef4444" strokeWidth="1" strokeDasharray="3 3" />
          <path d="M105 76V82M105 108V114M86 95H92M118 95H124" stroke="#ef4444" strokeWidth="1.5" />
        </svg>
      );

    case "water-powder":
    case "waterproof-bottle":
      return (
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-illustration">
          {/* Luxury Canister / Tin */}
          <rect x="70" y="60" width="60" height="90" rx="8" fill="#0f172a" stroke="#06b6d4" strokeWidth="2" />
          <rect x="76" y="48" width="48" height="14" rx="3" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
          
          {/* Label on Canister */}
          <rect x="75" y="76" width="50" height="46" rx="4" fill="#1e293b" stroke="rgba(255,255,255,0.1)" />
          <text x="100" y="90" fill="#38bdf8" fontSize="8" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">H2O</text>
          <text x="100" y="101" fill="#e2e8f0" fontSize="6.5" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">POWDER</text>
          <text x="100" y="112" fill="#94a3b8" fontSize="4.8" fontFamily="sans-serif" textAnchor="middle">JUST ADD WATER</text>

          {/* Measuring Scoop & Dry Crystals */}
          <path d="M125 105L150 85L160 90" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" />
          <ellipse cx="125" cy="105" rx="10" ry="6" fill="#334155" stroke="#cbd5e1" strokeWidth="1.5" />
          {/* Spilling white/cyan powder crystals */}
          <circle cx="120" cy="115" r="2" fill="#e0f2fe" />
          <circle cx="124" cy="122" r="1.5" fill="#bae6fd" />
          <circle cx="118" cy="128" r="2.5" fill="#38bdf8" />
          <circle cx="126" cy="135" r="2" fill="#e0f2fe" />
          <circle cx="121" cy="142" r="1.5" fill="#7dd3fc" />
          <circle cx="116" cy="148" r="2" fill="#38bdf8" />

          {/* Droplet crossed out indicating 0% moisture */}
          <circle cx="48" cy="75" r="15" fill="rgba(6,182,212,0.1)" stroke="#06b6d4" strokeWidth="1" />
          <path d="M48 66C48 66 43 73 43 77C43 80 45.2 82 48 82C50.8 82 53 80 53 77C53 73 48 66 48 66Z" fill="#38bdf8" />
          <line x1="41" y1="83" x2="55" y2="69" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    case "pedal-wheelchair":
      return (
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-illustration">
          {/* Large Wheelchair Wheel */}
          <circle cx="82" cy="120" r="38" stroke="#cbd5e1" strokeWidth="4" fill="none" />
          <circle cx="82" cy="120" r="32" stroke="#64748b" strokeWidth="1.5" fill="none" />
          {/* Spokes */}
          <line x1="82" y1="88" x2="82" y2="152" stroke="#475569" strokeWidth="1" />
          <line x1="50" y1="120" x2="114" y2="120" stroke="#475569" strokeWidth="1" />
          <line x1="60" y1="98" x2="104" y2="142" stroke="#475569" strokeWidth="1" />
          <line x1="60" y1="142" x2="104" y2="98" stroke="#475569" strokeWidth="1" />
          {/* Small Front Wheel */}
          <circle cx="145" cy="144" r="14" stroke="#94a3b8" strokeWidth="3" fill="none" />
          {/* Seat & Frame */}
          <path d="M82 120L95 90H125L135 130L145 144" stroke="#e2e8f0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M85 62L95 90" stroke="#ef4444" strokeWidth="4" strokeLinecap="round" />
          {/* Bicycle Pedals & Crankset attached to wheelchair! */}
          <circle cx="125" cy="115" r="10" stroke={accent} strokeWidth="2" fill="#0f172a" />
          <line x1="125" y1="115" x2="135" y2="102" stroke="#f87171" strokeWidth="3" strokeLinecap="round" />
          <line x1="125" y1="115" x2="115" y2="128" stroke="#f87171" strokeWidth="3" strokeLinecap="round" />
          <rect x="131" y="98" width="9" height="5" rx="1.5" fill="#fca5a5" />
          <rect x="110" y="127" width="9" height="5" rx="1.5" fill="#fca5a5" />
          <path d="M82 120L125 115" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3 3" />
        </svg>
      );

    case "bluetooth-cable":
      return (
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-illustration">
          {/* Braided loop */}
          <path d="M55 125C40 90 55 55 100 55C145 55 160 90 145 125" stroke="#475569" strokeWidth="8" strokeLinecap="round" />
          <path d="M55 125C40 90 55 55 100 55C145 55 160 90 145 125" stroke="#3b82f6" strokeWidth="3" strokeDasharray="4 4" strokeLinecap="round" />
          {/* Left USB-C head */}
          <rect x="44" y="125" width="22" height="32" rx="4" fill="#1e293b" stroke="#cbd5e1" strokeWidth="1.5" />
          <rect x="50" y="157" width="10" height="12" rx="2" fill="#94a3b8" />
          {/* Right USB-C head */}
          <rect x="134" y="125" width="22" height="32" rx="4" fill="#1e293b" stroke="#cbd5e1" strokeWidth="1.5" />
          <rect x="140" y="157" width="10" height="12" rx="2" fill="#94a3b8" />
          {/* Bluetooth wireless bridge connecting them in midair */}
          <path d="M78 145C90 135 110 135 122 145" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 3" />
          <path d="M84 152C92 145 108 145 116 152" stroke="#93c5fd" strokeWidth="1.5" strokeLinecap="round" />
          {/* Bluetooth icon in center */}
          <circle cx="100" cy="100" r="22" fill="#1e3a8a" stroke="#60a5fa" strokeWidth="1.5" />
          <path d="M100 88V112L108 106L94 94M100 100H92M108 94L94 106L100 112" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case "wifi-rock":
      return (
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-illustration">
          {/* Glowing Wi-Fi radio waves emitting from the rock */}
          <path d="M60 55C85 35 115 35 140 55" stroke={accent} strokeWidth="2.5" strokeLinecap="round" opacity="0.4" />
          <path d="M72 67C90 52 110 52 128 67" stroke={accent} strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
          <path d="M85 80C95 72 105 72 115 80" stroke={accent} strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="100" cy="92" r="3" fill="#ffffff" />
          {/* Natural rock geometry */}
          <polygon points="55,145 80,105 125,95 158,125 148,160 85,165" fill="#334155" stroke="#64748b" strokeWidth="2" />
          <polygon points="80,105 125,95 115,135 75,138" fill="#475569" />
          <polygon points="125,95 158,125 115,135" fill="#1e293b" />
          {/* Subtle glowing status LED drilled into rock */}
          <circle cx="100" cy="120" r="4" fill="#a855f7" />
          <circle cx="100" cy="120" r="8" stroke="#c084fc" strokeWidth="1" opacity="0.6" />
          <text x="100" y="152" fill="#94a3b8" fontSize="8" fontFamily="monospace" textAnchor="middle">MAC: 00:F0:7A:10</text>
        </svg>
      );

    case "square-wheel":
      return (
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-illustration">
          {/* Ground with bump marks */}
          <line x1="30" y1="165" x2="170" y2="165" stroke="#475569" strokeWidth="2" />
          {/* Aerodynamic Carbon Square Wheel */}
          <rect x="52" y="52" width="96" height="96" rx="2" transform="rotate(18 100 100)" fill="#18181b" stroke={accent} strokeWidth="3" />
          <rect x="66" y="66" width="68" height="68" rx="2" transform="rotate(18 100 100)" stroke="#71717a" strokeWidth="1.5" fill="#09090b" />
          {/* Center Axle Hub */}
          <circle cx="100" cy="100" r="14" fill="#27272a" stroke="#f97316" strokeWidth="2" />
          <circle cx="100" cy="100" r="6" fill="#f97316" />
          {/* Directional rotation arrow trying desperately to roll */}
          <path d="M142 62C155 75 162 95 156 118" stroke="#fb923c" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 3" />
          <polygon points="152,122 159,118 162,125" fill="#fb923c" />
          {/* Impact sparks on corner */}
          <line x1="60" y1="150" x2="48" y2="158" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" />
          <line x1="65" y1="156" x2="60" y2="168" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    case "usb-powered-usb":
      return (
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-illustration">
          {/* Male USB Plug */}
          <rect x="42" y="85" width="34" height="30" rx="3" fill="#cbd5e1" stroke="#64748b" strokeWidth="1.5" />
          <rect x="48" y="93" width="8" height="5" fill="#334155" />
          <rect x="48" y="102" width="8" height="5" fill="#334155" />
          {/* Premium Anodized Aluminum Body */}
          <rect x="76" y="75" width="48" height="50" rx="8" fill="#1e293b" stroke="#475569" strokeWidth="2" />
          {/* Female USB Port */}
          <rect x="124" y="85" width="34" height="30" rx="3" fill="#0f172a" stroke="#64748b" strokeWidth="1.5" />
          <rect x="132" y="92" width="18" height="16" rx="2" fill="#1e293b" stroke="#334155" strokeWidth="1" />
          <rect x="135" y="97" width="12" height="6" fill="#38bdf8" />
          {/* Status LED glowing */}
          <circle cx="100" cy="100" r="5" fill={accent} />
          <circle cx="100" cy="100" r="9" stroke={accent} strokeWidth="1.5" opacity="0.5" />
          {/* 1:1 In/Out indicator */}
          <text x="100" y="145" fill="#94a3b8" fontSize="10" fontFamily="sans-serif" textAnchor="middle">1 IN : 1 OUT (NET 0)</text>
        </svg>
      );

    case "left-handed-spoon":
      return (
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-illustration">
          {/* Hand curvature guideline */}
          <path d="M50 160C70 140 100 110 120 70" stroke="rgba(236,72,153,0.3)" strokeWidth="1" strokeDasharray="3 3" />
          {/* Inverted Spoon Handle */}
          <path d="M55 165C65 155 82 135 98 112C112 92 125 78 135 68" stroke="#cbd5e1" strokeWidth="7" strokeLinecap="round" />
          <path d="M55 165C65 155 82 135 98 112C112 92 125 78 135 68" stroke="#f1f5f9" strokeWidth="2" strokeLinecap="round" />
          {/* Skewed Left-Handed Bowl */}
          <ellipse cx="145" cy="58" rx="24" ry="16" transform="rotate(-38 145 58)" fill="#94a3b8" stroke="#e2e8f0" strokeWidth="2" />
          <ellipse cx="145" cy="58" rx="19" ry="12" transform="rotate(-38 145 58)" fill="#64748b" opacity="0.6" />
          {/* Anti-Right-Hand Warning */}
          <rect x="52" y="44" width="46" height="22" rx="4" fill="#831843" stroke="#f472b6" strokeWidth="1" />
          <text x="75" y="58" fill="#fbcfe8" fontSize="9" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">LEFT ONLY</text>
        </svg>
      );

    case "air-guitar-tuner":
      return (
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-illustration">
          {/* Tuner Body */}
          <rect x="65" y="48" width="70" height="104" rx="14" fill="#18181b" stroke="#3f3f46" strokeWidth="2" />
          {/* High-Contrast OLED Tuning Screen */}
          <rect x="75" y="60" width="50" height="50" rx="8" fill="#09090b" stroke="#27272a" strokeWidth="1" />
          {/* Tuning Meter display */}
          <path d="M82 92C88 84 100 80 100 80C100 80 112 84 118 92" stroke="#3f3f46" strokeWidth="2" strokeLinecap="round" />
          <line x1="100" y1="92" x2="100" y2="76" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="100" cy="74" r="2.5" fill="#22c55e" />
          <text x="100" y="103" fill="#a855f7" fontSize="11" fontWeight="bold" fontFamily="monospace" textAnchor="middle">IN TUNE</text>
          {/* Virtual imaginary strings */}
          <line x1="40" y1="130" x2="160" y2="130" stroke={accent} strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
          <line x1="40" y1="140" x2="160" y2="140" stroke={accent} strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
          <text x="100" y="172" fill="#71717a" fontSize="8" fontFamily="sans-serif" textAnchor="middle">[ NO STRINGS DETECTED ]</text>
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-illustration">
          <circle cx="100" cy="100" r="50" stroke={accent} strokeWidth="2" strokeDasharray="6 6" />
          <text x="100" y="105" fill="#ffffff" fontSize="16" fontFamily="sans-serif" textAnchor="middle">OopsCart</text>
        </svg>
      );
  }
}
