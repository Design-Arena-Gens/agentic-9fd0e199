'use client'

import React from 'react'
import styles from './page.module.css'

export default function BrandBoard() {
  return (
    <div className={styles.container}>
      {/* Hero Section with Primary Logo */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.primaryLogo}>
            <svg viewBox="0 0 800 120" className={styles.logoSvg}>
              <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" className={styles.logoText}>
                ITAFCOUTURE
              </text>
            </svg>
          </div>
          <p className={styles.tagline}>Digital Fashion Maison</p>
        </div>
        <div className={styles.heroPattern}></div>
      </section>

      {/* Monogram Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Monogram</h2>
        <div className={styles.monogramContainer}>
          <div className={styles.monogramBox}>
            <svg viewBox="0 0 200 200" className={styles.monogramSvg}>
              <g className={styles.monogramGroup}>
                <rect x="40" y="40" width="2" height="120" fill="currentColor"/>
                <rect x="40" y="40" width="30" height="2" fill="currentColor"/>
                <rect x="40" y="158" width="30" height="2" fill="currentColor"/>

                <path d="M 100 40 Q 140 40 140 80 Q 140 100 130 110 Q 140 120 140 140 Q 140 160 120 160 L 100 160 L 100 40"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"/>
                <line x1="100" y1="100" x2="130" y2="100" stroke="currentColor" strokeWidth="2"/>
              </g>
            </svg>
          </div>
          <div className={styles.monogramVariants}>
            <div className={styles.monogramSmall}>
              <svg viewBox="0 0 200 200">
                <g className={styles.monogramGroup}>
                  <rect x="40" y="40" width="2" height="120" fill="var(--pure-white)"/>
                  <rect x="40" y="40" width="30" height="2" fill="var(--pure-white)"/>
                  <rect x="40" y="158" width="30" height="2" fill="var(--pure-white)"/>
                  <path d="M 100 40 Q 140 40 140 80 Q 140 100 130 110 Q 140 120 140 140 Q 140 160 120 160 L 100 160 L 100 40"
                        stroke="var(--pure-white)"
                        strokeWidth="2"
                        fill="none"/>
                  <line x1="100" y1="100" x2="130" y2="100" stroke="var(--pure-white)" strokeWidth="2"/>
                </g>
              </svg>
            </div>
            <div className={styles.monogramSmallGold}>
              <svg viewBox="0 0 200 200">
                <g className={styles.monogramGroup}>
                  <rect x="40" y="40" width="2" height="120" fill="var(--soft-gold)"/>
                  <rect x="40" y="40" width="30" height="2" fill="var(--soft-gold)"/>
                  <rect x="40" y="158" width="30" height="2" fill="var(--soft-gold)"/>
                  <path d="M 100 40 Q 140 40 140 80 Q 140 100 130 110 Q 140 120 140 140 Q 140 160 120 160 L 100 160 L 100 40"
                        stroke="var(--soft-gold)"
                        strokeWidth="2"
                        fill="none"/>
                  <line x1="100" y1="100" x2="130" y2="100" stroke="var(--soft-gold)" strokeWidth="2"/>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Color Palette */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Color Palette</h2>
        <div className={styles.colorGrid}>
          <div className={styles.colorCard}>
            <div className={styles.colorSwatch} style={{backgroundColor: '#FEFEFE', border: '1px solid #E0E0E0'}}></div>
            <div className={styles.colorInfo}>
              <h3 className={styles.colorName}>Pure White</h3>
              <p className={styles.colorHex}>#FEFEFE</p>
            </div>
          </div>
          <div className={styles.colorCard}>
            <div className={styles.colorSwatch} style={{backgroundColor: '#0A0A0A'}}></div>
            <div className={styles.colorInfo}>
              <h3 className={styles.colorName}>Ink Black</h3>
              <p className={styles.colorHex}>#0A0A0A</p>
            </div>
          </div>
          <div className={styles.colorCard}>
            <div className={styles.colorSwatch} style={{backgroundColor: '#2A2A2A'}}></div>
            <div className={styles.colorInfo}>
              <h3 className={styles.colorName}>Deep Charcoal</h3>
              <p className={styles.colorHex}>#2A2A2A</p>
            </div>
          </div>
          <div className={styles.colorCard}>
            <div className={styles.colorSwatch} style={{backgroundColor: '#D4AF7A'}}></div>
            <div className={styles.colorInfo}>
              <h3 className={styles.colorName}>Soft Gold</h3>
              <p className={styles.colorHex}>#D4AF7A</p>
            </div>
          </div>
          <div className={styles.colorCard}>
            <div className={styles.colorSwatch} style={{backgroundColor: '#9A9A9A'}}></div>
            <div className={styles.colorInfo}>
              <h3 className={styles.colorName}>Warm Gray</h3>
              <p className={styles.colorHex}>#9A9A9A</p>
            </div>
          </div>
          <div className={styles.colorCard}>
            <div className={styles.colorSwatch} style={{backgroundColor: '#C5C5C5'}}></div>
            <div className={styles.colorInfo}>
              <h3 className={styles.colorName}>Technical Silver</h3>
              <p className={styles.colorHex}>#C5C5C5</p>
            </div>
          </div>
          <div className={styles.colorCard}>
            <div className={styles.colorSwatch} style={{backgroundColor: '#F5F3F0'}}></div>
            <div className={styles.colorInfo}>
              <h3 className={styles.colorName}>Accent Cream</h3>
              <p className={styles.colorHex}>#F5F3F0</p>
            </div>
          </div>
        </div>
      </section>

      {/* Typography System */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Typography System</h2>
        <div className={styles.typographyGrid}>
          <div className={styles.typeCard}>
            <h3 className={styles.typeLabel}>Display Serif</h3>
            <p className={styles.typeSample + ' serif'} style={{fontSize: '48px', fontWeight: 300, lineHeight: 1.2}}>
              Couture Excellence
            </p>
            <p className={styles.typeDetails}>Cormorant Garamond Light</p>
          </div>
          <div className={styles.typeCard}>
            <h3 className={styles.typeLabel}>Title Serif</h3>
            <p className={styles.typeSample + ' serif'} style={{fontSize: '32px', fontWeight: 400, lineHeight: 1.3}}>
              Timeless Design
            </p>
            <p className={styles.typeDetails}>Cormorant Garamond Regular</p>
          </div>
          <div className={styles.typeCard}>
            <h3 className={styles.typeLabel}>Sans Heading</h3>
            <p className={styles.typeSample + ' sans'} style={{fontSize: '24px', fontWeight: 500, lineHeight: 1.4, letterSpacing: '0.02em'}}>
              MODERN LUXURY
            </p>
            <p className={styles.typeDetails}>Inter Medium</p>
          </div>
          <div className={styles.typeCard}>
            <h3 className={styles.typeLabel}>Body Text</h3>
            <p className={styles.typeSample + ' sans'} style={{fontSize: '16px', fontWeight: 400, lineHeight: 1.6}}>
              The essence of haute couture lies in the precision of every stitch, the refinement of every detail, and the timelessness of design.
            </p>
            <p className={styles.typeDetails}>Inter Regular</p>
          </div>
        </div>
      </section>

      {/* Textures & Materials */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Textures & Materials</h2>
        <div className={styles.textureGrid}>
          <div className={styles.textureCard}>
            <div className={styles.textureMatte}></div>
            <p className={styles.textureLabel}>Matte Paper</p>
          </div>
          <div className={styles.textureCard}>
            <div className={styles.textureGold}></div>
            <p className={styles.textureLabel}>Gold Foil Emboss</p>
          </div>
          <div className={styles.textureCard}>
            <div className={styles.textureGrid1}></div>
            <p className={styles.textureLabel}>Technical Grid</p>
          </div>
          <div className={styles.textureCard}>
            <div className={styles.textureLines}></div>
            <p className={styles.textureLabel}>Micro Pattern Lines</p>
          </div>
          <div className={styles.textureCard}>
            <div className={styles.textureStitch}></div>
            <p className={styles.textureLabel}>Couture Stitching</p>
          </div>
        </div>
      </section>

      {/* Brand Patterns */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Brand Patterns</h2>
        <div className={styles.patternGrid}>
          <div className={styles.patternCard}>
            <svg viewBox="0 0 400 300" className={styles.patternSvg}>
              <g stroke="var(--deep-charcoal)" strokeWidth="0.5" fill="none">
                <path d="M 50 50 Q 100 80, 150 50 T 250 50 T 350 50" />
                <path d="M 50 100 L 100 100 Q 125 130, 150 100 L 200 100 Q 225 130, 250 100 L 350 100" />
                <circle cx="100" cy="150" r="30" />
                <circle cx="100" cy="150" r="20" />
                <line x1="50" y1="200" x2="150" y2="200" />
                <line x1="50" y1="210" x2="150" y2="210" strokeDasharray="2,2" />
                <path d="M 200 150 L 250 200 L 300 150 L 350 200" />
                <rect x="200" y="220" width="50" height="30" />
                <line x1="200" y1="235" x2="250" y2="235" strokeDasharray="3,3" />
              </g>
            </svg>
            <p className={styles.patternLabel}>CAD Sewing Pattern 01</p>
          </div>
          <div className={styles.patternCard}>
            <svg viewBox="0 0 400 300" className={styles.patternSvg}>
              <g stroke="var(--soft-gold)" strokeWidth="0.5" fill="none">
                <line x1="50" y1="50" x2="350" y2="50" />
                <line x1="50" y1="100" x2="350" y2="100" />
                <line x1="50" y1="150" x2="350" y2="150" />
                <line x1="50" y1="200" x2="350" y2="200" />
                <line x1="50" y1="250" x2="350" y2="250" />
                <line x1="100" y1="30" x2="100" y2="270" strokeDasharray="4,4" opacity="0.6" />
                <line x1="200" y1="30" x2="200" y2="270" strokeDasharray="4,4" opacity="0.6" />
                <line x1="300" y1="30" x2="300" y2="270" strokeDasharray="4,4" opacity="0.6" />
                <circle cx="200" cy="150" r="60" strokeDasharray="5,5" opacity="0.4" />
              </g>
            </svg>
            <p className={styles.patternLabel}>Technical Grid Pattern</p>
          </div>
          <div className={styles.patternCard}>
            <svg viewBox="0 0 400 300" className={styles.patternSvg}>
              <defs>
                <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="10" cy="10" r="0.8" fill="var(--deep-charcoal)" />
                </pattern>
              </defs>
              <rect width="400" height="300" fill="url(#dots)" opacity="0.3" />
              <g stroke="var(--deep-charcoal)" strokeWidth="0.5" fill="none">
                <path d="M 100 80 Q 150 60, 200 80 T 300 80" />
                <path d="M 100 120 Q 150 100, 200 120 T 300 120" />
                <line x1="80" y1="160" x2="320" y2="160" strokeDasharray="2,3" />
                <path d="M 100 200 L 140 220 L 180 200 L 220 220 L 260 200 L 300 220" />
              </g>
            </svg>
            <p className={styles.patternLabel}>Minimal Couture Lines</p>
          </div>
        </div>
      </section>

      {/* Imagery Direction */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Imagery Direction</h2>
        <div className={styles.imageryGrid}>
          <div className={styles.imageryCard}>
            <div className={styles.imageryBox} style={{background: 'linear-gradient(135deg, #f5f3f0 0%, #e8e6e3 100%)'}}>
              <div className={styles.imageryOverlay}>
                <svg viewBox="0 0 300 400" className={styles.imageryPattern}>
                  <g stroke="var(--deep-charcoal)" strokeWidth="0.3" fill="none" opacity="0.15">
                    <line x1="150" y1="50" x2="150" y2="350" />
                    <ellipse cx="150" cy="120" rx="40" ry="60" />
                    <path d="M 110 180 Q 150 200, 190 180 L 180 280 Q 150 300, 120 280 Z" />
                    <line x1="110" y1="200" x2="190" y2="200" strokeDasharray="2,2" />
                    <line x1="115" y1="240" x2="185" y2="240" strokeDasharray="2,2" />
                  </g>
                </svg>
              </div>
              <p className={styles.imageryText}>Editorial Fashion</p>
            </div>
            <p className={styles.imageryLabel}>B&W High Contrast</p>
          </div>
          <div className={styles.imageryCard}>
            <div className={styles.imageryBox} style={{background: 'linear-gradient(135deg, #2a2a2a 0%, #0a0a0a 100%)'}}>
              <div className={styles.imageryOverlay}>
                <svg viewBox="0 0 300 400" className={styles.imageryPattern}>
                  <g stroke="var(--technical-silver)" strokeWidth="0.4" fill="none">
                    <rect x="80" y="80" width="140" height="200" />
                    <line x1="80" y1="140" x2="220" y2="140" strokeDasharray="3,3" opacity="0.5" />
                    <line x1="80" y1="200" x2="220" y2="200" strokeDasharray="3,3" opacity="0.5" />
                    <circle cx="150" cy="110" r="20" opacity="0.4" />
                    <path d="M 100 280 L 100 340 L 150 360 L 200 340 L 200 280" opacity="0.6" />
                  </g>
                </svg>
              </div>
              <p className={styles.imageryText} style={{color: 'var(--pure-white)'}}>Technical Details</p>
            </div>
            <p className={styles.imageryLabel}>Garment Close-ups</p>
          </div>
          <div className={styles.imageryCard}>
            <div className={styles.imageryBox} style={{background: 'linear-gradient(to bottom, #fefefe 0%, #c5c5c5 100%)'}}>
              <div className={styles.imageryOverlay}>
                <svg viewBox="0 0 300 400" className={styles.imageryPattern}>
                  <defs>
                    <pattern id="grid-pattern" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                      <path d="M 30 0 L 0 0 0 30" fill="none" stroke="var(--warm-gray)" strokeWidth="0.3" opacity="0.3"/>
                    </pattern>
                  </defs>
                  <rect width="300" height="400" fill="url(#grid-pattern)" />
                  <g stroke="var(--deep-charcoal)" strokeWidth="0.5" fill="none">
                    <path d="M 100 100 L 120 150 L 180 150 L 200 100 Z" />
                    <path d="M 100 100 Q 150 80, 200 100" strokeDasharray="2,2" />
                    <line x1="120" y1="150" x2="120" y2="250" />
                    <line x1="180" y1="150" x2="180" y2="250" />
                  </g>
                </svg>
              </div>
              <p className={styles.imageryText}>Pattern Precision</p>
            </div>
            <p className={styles.imageryLabel}>CAD Technical Flat</p>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Brand Applications</h2>
        <div className={styles.applicationGrid}>
          <div className={styles.applicationCard}>
            <div className={styles.businessCard}>
              <div className={styles.businessCardFront}>
                <svg viewBox="0 0 200 200" className={styles.bcMonogram}>
                  <g className={styles.monogramGroup}>
                    <rect x="40" y="40" width="2" height="120" fill="var(--soft-gold)"/>
                    <rect x="40" y="40" width="30" height="2" fill="var(--soft-gold)"/>
                    <rect x="40" y="158" width="30" height="2" fill="var(--soft-gold)"/>
                    <path d="M 100 40 Q 140 40 140 80 Q 140 100 130 110 Q 140 120 140 140 Q 140 160 120 160 L 100 160 L 100 40"
                          stroke="var(--soft-gold)"
                          strokeWidth="2"
                          fill="none"/>
                    <line x1="100" y1="100" x2="130" y2="100" stroke="var(--soft-gold)" strokeWidth="2"/>
                  </g>
                </svg>
              </div>
            </div>
            <p className={styles.applicationLabel}>Business Card</p>
          </div>
          <div className={styles.applicationCard}>
            <div className={styles.letterhead}>
              <div className={styles.letterheadHeader}>
                <svg viewBox="0 0 800 60" className={styles.lhLogo}>
                  <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" className={styles.lhLogoText}>
                    ITAFCOUTURE
                  </text>
                </svg>
              </div>
              <div className={styles.letterheadLines}></div>
            </div>
            <p className={styles.applicationLabel}>Letterhead</p>
          </div>
          <div className={styles.applicationCard}>
            <div className={styles.packaging}>
              <div className={styles.packagingBox}>
                <svg viewBox="0 0 200 200" className={styles.pkgMonogram}>
                  <g className={styles.monogramGroup}>
                    <rect x="40" y="40" width="2" height="120" fill="var(--deep-charcoal)"/>
                    <rect x="40" y="40" width="30" height="2" fill="var(--deep-charcoal)"/>
                    <rect x="40" y="158" width="30" height="2" fill="var(--deep-charcoal)"/>
                    <path d="M 100 40 Q 140 40 140 80 Q 140 100 130 110 Q 140 120 140 140 Q 140 160 120 160 L 100 160 L 100 40"
                          stroke="var(--deep-charcoal)"
                          strokeWidth="2"
                          fill="none"/>
                    <line x1="100" y1="100" x2="130" y2="100" stroke="var(--deep-charcoal)" strokeWidth="2"/>
                  </g>
                </svg>
              </div>
            </div>
            <p className={styles.applicationLabel}>Packaging</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerPattern}></div>
        <p className={styles.footerText}>© 2024 ITAFCOUTURE — Where tradition meets innovation</p>
      </footer>
    </div>
  )
}
