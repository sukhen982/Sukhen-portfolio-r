import React from 'react';

interface SukhenLogoProps {
  className?: string;
  variant?: 'mark' | 'full';
  size?: number | string;
}

export const SukhenLogo: React.FC<SukhenLogoProps> = ({
  className = 'w-10 h-10',
  variant = 'mark',
}) => {
  if (variant === 'mark') {
    return (
      <svg
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="Sukhen Sarkar Graphic Designer Logo"
      >
        <defs>
          {/* Outer Ring Conic/Multi-stop Linear Gradient */}
          <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF9900" />
            <stop offset="25%" stopColor="#00E5FF" />
            <stop offset="50%" stopColor="#0066FF" />
            <stop offset="75%" stopColor="#9333EA" />
            <stop offset="100%" stopColor="#EC4899" />
          </linearGradient>

          {/* S Upper Loop Orange Gradient */}
          <linearGradient id="sLoopGrad" x1="20%" y1="10%" x2="80%" y2="90%">
            <stop offset="0%" stopColor="#FFC107" />
            <stop offset="40%" stopColor="#FF8F00" />
            <stop offset="100%" stopColor="#FF3D00" />
          </linearGradient>

          {/* Nib Gradient */}
          <linearGradient id="nibGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="50%" stopColor="#F1F5F9" />
            <stop offset="100%" stopColor="#E2E8F0" />
          </linearGradient>

          {/* Brush Ribbon Rainbow Gradient */}
          <linearGradient id="brushRibbonGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00E5FF" />
            <stop offset="35%" stopColor="#3B82F6" />
            <stop offset="60%" stopColor="#8B5CF6" />
            <stop offset="85%" stopColor="#EC4899" />
            <stop offset="100%" stopColor="#FF6B00" />
          </linearGradient>

          {/* Brush Tip Flame Gradient */}
          <linearGradient id="brushTipGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF9100" />
            <stop offset="50%" stopColor="#FF5722" />
            <stop offset="100%" stopColor="#FF1744" />
          </linearGradient>

          {/* Outer Glow Filter */}
          <filter id="glowEffect" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Dark Circular Base */}
        <circle cx="250" cy="250" r="236" fill="#05070D" />

        {/* Outer Multi-color Glowing Halo Ring */}
        <circle
          cx="250"
          cy="250"
          r="234"
          stroke="url(#ringGrad)"
          strokeWidth="11"
          filter="url(#glowEffect)"
          className="opacity-95"
        />

        {/* Thin Inner Ring Stroke */}
        <circle cx="250" cy="250" r="226" stroke="#00E5FF" strokeWidth="1" opacity="0.35" />

        {/* Central Graphic Composition */}
        <g transform="translate(0, 0)">
          {/* 1. S-Curve Upper Bold Arch (Orange/Amber gradient) */}
          <path
            d="M 148 238 C 130 185 152 110 220 78 C 275 52 328 72 342 115 C 330 115 315 110 292 108 C 248 104 205 125 186 160 C 168 192 178 230 208 252 C 238 274 258 290 262 312 C 265 330 252 352 230 360 C 195 372 152 345 142 305 C 130 315 118 322 105 328 C 122 388 178 418 238 412 C 302 405 335 360 328 308 C 320 256 270 230 230 202 C 205 185 198 168 202 152 C 208 135 228 122 254 122 C 280 122 300 135 306 150 C 316 142 330 132 342 125 C 328 92 288 78 245 80 C 172 84 135 145 148 238 Z"
            fill="url(#sLoopGrad)"
          />

          {/* 2. White Fountain Pen Nib - Center / Right Core */}
          {/* Main Nib Body */}
          <path
            d="M 276 96 L 314 96 L 314 175 C 314 186 318 196 325 204 L 328 208 C 334 216 335 228 330 238 L 298 302 C 296 306 292 306 290 302 L 260 238 C 255 228 256 216 262 208 L 265 204 C 272 196 276 186 276 175 Z"
            fill="url(#nibGrad)"
            stroke="#CBD5E1"
            strokeWidth="2"
          />

          {/* Nib Metal Collar Band */}
          <rect x="274" y="162" width="42" height="7" rx="2" fill="#94A3B8" />
          <rect x="274" y="172" width="42" height="3" rx="1" fill="#64748B" />

          {/* Nib Center Slit & Breather Hole */}
          <circle cx="294" cy="225" r="4.5" fill="#0A0F1D" />
          <path d="M 294 229 L 294 303" stroke="#0A0F1D" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M 294 175 L 294 220" stroke="#94A3B8" strokeWidth="1.5" />

          {/* 3. 2x2 Digital Pixel Anchor Squares (Top-Right) */}
          <g transform="translate(332, 92)">
            {/* Top-Left: Cyan */}
            <rect x="0" y="0" width="18" height="18" rx="3" fill="#00E5FF" />
            {/* Top-Right: Royal Blue */}
            <rect x="22" y="0" width="18" height="18" rx="3" fill="#0066FF" />
            {/* Bottom-Left: Magenta */}
            <rect x="0" y="22" width="18" height="18" rx="3" fill="#EC4899" />
            {/* Bottom-Right: Lime Green */}
            <rect x="22" y="22" width="18" height="18" rx="3" fill="#22C55E" />
            {/* Extra mini pixel for dynamic touch */}
            <rect x="44" y="22" width="14" height="14" rx="2" fill="#F59E0B" opacity="0.9" />
          </g>

          {/* 4. Dynamic Artist Paint Brush Swoosh / Ribbon */}
          <path
            d="M 185 365 C 220 380 270 380 320 355 C 365 332 390 285 388 238 C 388 210 376 185 358 170 C 354 176 352 186 354 195 C 368 215 372 238 368 260 C 362 295 335 328 296 342 C 255 356 215 348 185 330 Z"
            fill="url(#brushRibbonGrad)"
          />

          {/* 5. Paintbrush Ferrule & Bristle Flame Tip */}
          {/* Ferrule (brush metal band) */}
          <g transform="translate(390, 205) rotate(45)">
            <rect x="-8" y="-4" width="16" height="8" rx="2" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1.5" />
            {/* Bristle Head with flame paint tip */}
            <path
              d="M -8 -4 C -10 -15 -4 -28 0 -34 C 4 -28 10 -15 8 -4 Z"
              fill="url(#brushTipGrad)"
            />
            {/* Inner golden glow core */}
            <path
              d="M -4 -4 C -5 -12 -2 -22 0 -26 C 2 -22 5 -12 4 -4 Z"
              fill="#FDE047"
            />
          </g>
        </g>
      </svg>
    );
  }

  // Full Badge Variant (includes typography as shown in the uploaded brand logo image)
  return (
    <svg
      viewBox="0 0 600 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Sukhen Sarkar Graphic Designer Official Logo"
    >
      <defs>
        {/* Outer Circular Rainbow / Neon Gradient */}
        <linearGradient id="fullRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF9900" />
          <stop offset="20%" stopColor="#FFD600" />
          <stop offset="45%" stopColor="#00E5FF" />
          <stop offset="65%" stopColor="#0070F3" />
          <stop offset="85%" stopColor="#7C3AED" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>

        {/* S Upper Loop Amber/Orange Gradient */}
        <linearGradient id="fullSGrad" x1="20%" y1="10%" x2="80%" y2="90%">
          <stop offset="0%" stopColor="#FFC107" />
          <stop offset="45%" stopColor="#FF8F00" />
          <stop offset="100%" stopColor="#FF3D00" />
        </linearGradient>

        {/* Fountain Pen Metallic Nib */}
        <linearGradient id="fullNibGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor="#F8FAFC" />
          <stop offset="100%" stopColor="#E2E8F0" />
        </linearGradient>

        {/* Ribbon Rainbow Gradient */}
        <linearGradient id="fullRibbonGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00E5FF" />
          <stop offset="35%" stopColor="#3B82F6" />
          <stop offset="65%" stopColor="#8B5CF6" />
          <stop offset="85%" stopColor="#EC4899" />
          <stop offset="100%" stopColor="#FF8F00" />
        </linearGradient>

        {/* Brush Tip Glow */}
        <linearGradient id="fullTipGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FF9100" />
          <stop offset="60%" stopColor="#FF5722" />
          <stop offset="100%" stopColor="#FF1744" />
        </linearGradient>

        {/* Golden Text Gradient */}
        <linearGradient id="goldTextGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFB300" />
          <stop offset="50%" stopColor="#FFC107" />
          <stop offset="100%" stopColor="#FFA000" />
        </linearGradient>

        {/* Glow Filter */}
        <filter id="fullGlow" x="-15%" y="-15%" width="130%" height="130%">
          <feGaussianBlur stdDeviation="7" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Dark Outer Shield Circle */}
      <circle cx="300" cy="300" r="286" fill="#05070D" />

      {/* Outer Glowing Neon Ring */}
      <circle
        cx="300"
        cy="300"
        r="282"
        stroke="url(#fullRingGrad)"
        strokeWidth="11"
        filter="url(#fullGlow)"
      />

      {/* Inner Accent Hairline */}
      <circle cx="300" cy="300" r="273" stroke="#00E5FF" strokeWidth="1" opacity="0.3" />

      {/* ======================================================== */}
      {/* 1. CENTRAL "S" EMBLEM + PEN NIB + PIXELS + BRUSH SWOOSH */}
      {/* ======================================================== */}
      <g transform="translate(50, 15) scale(0.84)">
        {/* S-Shape Arch Ribbon */}
        <path
          d="M 170 215 C 150 170 170 105 230 75 C 285 50 338 70 350 110 C 338 110 322 105 300 104 C 255 100 212 120 195 155 C 178 185 186 222 216 242 C 246 262 266 278 270 300 C 273 318 260 338 238 346 C 205 358 165 332 155 295 C 145 305 132 312 120 318 C 138 375 192 405 248 398 C 310 390 342 348 335 298 C 328 248 278 222 238 196 C 214 180 208 162 212 148 C 218 132 238 120 262 120 C 288 120 306 132 312 146 C 322 138 335 128 346 122 C 332 90 292 76 250 78 C 182 82 155 140 170 215 Z"
          fill="url(#fullSGrad)"
        />

        {/* Fountain Pen Nib */}
        <path
          d="M 285 90 L 322 90 L 322 165 C 322 176 326 186 333 194 L 336 198 C 342 206 343 218 338 228 L 306 288 C 304 292 300 292 298 288 L 268 228 C 263 218 264 206 270 198 L 273 194 C 280 186 284 176 284 165 Z"
          fill="url(#fullNibGrad)"
          stroke="#94A3B8"
          strokeWidth="1.5"
        />

        {/* Nib Collar Bands */}
        <rect x="283" y="152" width="40" height="6" rx="2" fill="#94A3B8" />
        <rect x="283" y="161" width="40" height="3" rx="1" fill="#64748B" />

        {/* Nib Breather Hole and Ink Slit */}
        <circle cx="302" cy="216" r="4.5" fill="#0A0F1D" />
        <path d="M 302 220 L 302 288" stroke="#0A0F1D" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M 302 165 L 302 211" stroke="#94A3B8" strokeWidth="1.5" />

        {/* 2x2 Digital Pixel Squares */}
        <g transform="translate(340, 88)">
          <rect x="0" y="0" width="18" height="18" rx="3" fill="#00E5FF" />
          <rect x="22" y="0" width="18" height="18" rx="3" fill="#0066FF" />
          <rect x="0" y="22" width="18" height="18" rx="3" fill="#EC4899" />
          <rect x="22" y="22" width="18" height="18" rx="3" fill="#22C55E" />
          <rect x="44" y="22" width="13" height="13" rx="2" fill="#F59E0B" opacity="0.9" />
        </g>

        {/* Dynamic Rainbow Paintbrush Swoosh */}
        <path
          d="M 195 350 C 230 365 278 365 325 342 C 368 320 392 276 390 232 C 390 205 378 182 362 168 C 358 174 356 182 358 190 C 370 210 374 230 370 250 C 365 282 340 312 304 326 C 265 340 228 334 195 318 Z"
          fill="url(#fullRibbonGrad)"
        />

        {/* Paintbrush Metal Ferrule & Flame Tip */}
        <g transform="translate(393, 202) rotate(45)">
          <rect x="-8" y="-4" width="16" height="8" rx="2" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1.5" />
          <path d="M -8 -4 C -10 -15 -4 -28 0 -34 C 4 -28 10 -15 8 -4 Z" fill="url(#fullTipGrad)" />
          <path d="M -4 -4 C -5 -12 -2 -22 0 -26 C 2 -22 5 -12 4 -4 Z" fill="#FDE047" />
        </g>
      </g>

      {/* ======================================================== */}
      {/* 2. TYPOGRAPHY: SUKHEN SARKAR (Script / Signature Style) */}
      {/* ======================================================== */}
      <g transform="translate(300, 395)" textAnchor="middle">
        {/* Script Brand Signature */}
        <text
          x="0"
          y="0"
          fontFamily="'Brush Script MT', 'Dancing Script', 'Caveat', 'Great Vibes', cursive, sans-serif"
          fontSize="48"
          fontWeight="bold"
          letterSpacing="0.02em"
        >
          <tspan fill="#FFFFFF">Sukhen </tspan>
          <tspan fill="url(#goldTextGrad)">Sarkar</tspan>
        </text>
      </g>

      {/* ======================================================== */}
      {/* 3. SUBTITLE: GRAPHIC DESIGNER (Uppercase Sans with Spacing) */}
      {/* ======================================================== */}
      <g transform="translate(300, 432)" textAnchor="middle">
        <text
          x="0"
          y="0"
          fill="#FFFFFF"
          fontFamily="'Inter', 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif"
          fontSize="17"
          fontWeight="800"
          letterSpacing="0.34em"
        >
          GRAPHIC DESIGNER
        </text>
      </g>

      {/* ======================================================== */}
      {/* 4. GOLDEN ACCENT DIVIDER WITH CENTER DIAMOND (◆) */}
      {/* ======================================================== */}
      <g transform="translate(300, 452)">
        {/* Left Golden Line */}
        <line x1="-150" y1="0" x2="-20" y2="0" stroke="#F59E0B" strokeWidth="1.5" opacity="0.85" />
        {/* Center Diamond */}
        <polygon points="0,-4 4,0 0,4 -4,0" fill="#F59E0B" />
        {/* Right Golden Line */}
        <line x1="20" y1="0" x2="150" y2="0" stroke="#F59E0B" strokeWidth="1.5" opacity="0.85" />
      </g>

      {/* ======================================================== */}
      {/* 5. TAGLINE: Logos | Menu Cards | Pro Designs */}
      {/* ======================================================== */}
      <g transform="translate(300, 482)" textAnchor="middle">
        <text
          x="0"
          y="0"
          fill="#E2E8F0"
          fontFamily="'Inter', 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif"
          fontSize="14"
          fontWeight="500"
          letterSpacing="0.08em"
        >
          <tspan fill="#FFFFFF">Logos </tspan>
          <tspan fill="#F59E0B"> | </tspan>
          <tspan fill="#FFFFFF">Menu Cards </tspan>
          <tspan fill="#F59E0B"> | </tspan>
          <tspan fill="#FFFFFF">Pro Designs</tspan>
        </text>
      </g>
    </svg>
  );
};
