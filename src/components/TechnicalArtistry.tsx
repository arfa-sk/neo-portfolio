"use client";

import { motion } from 'framer-motion';

export default function TechnicalArtistry() {
  const containerStyle: React.CSSProperties = {
    backgroundColor: '#fff0f5', 
    padding: '160px 48px',
    display: 'flex',
    justifyContent: 'center',
    borderBottom: '4px solid black'
  };

  const innerGrid: React.CSSProperties = {
    maxWidth: '1440px',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '1.2fr 1fr', // Heading gets more space
    gap: '64px',
    alignItems: 'start'
  };

  const cardStyle: React.CSSProperties = {
    backgroundColor: 'white',
    border: '4px solid black',
    padding: '64px 40px', // Increased vertical padding for "slab" look
    boxShadow: '5px 5px 0px 0px #000',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    height: '420px', // Forced height for consistent "slab" feel
    justifyContent: 'flex-start'
  };

  const iconBoxStyle: React.CSSProperties = {
    width: '64px',
    height: '64px',
    backgroundColor: '#b40065',
    border: '3px solid black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.4)',
    background: 'radial-gradient(circle at 30% 30%, #e10080, #b40065)',
    marginBottom: '16px'
  };

  return (
    <section style={containerStyle}>
      <div style={innerGrid} className="responsive-grid">
        
        {/* Left Column: Editorial Headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', position: 'sticky', top: '160px' }}>
          <div style={{ 
            backgroundColor: '#b40065', 
            color: 'white', 
            padding: '6px 16px', 
            border: '4px solid black', 
            fontWeight: 900, 
            width: 'fit-content',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            fontSize: '0.875rem',
            fontFamily: 'var(--font-headline)'
          }}>
            THE PHILOSOPHY
          </div>
          
          <div>
            <h2 style={{ 
              fontSize: 'clamp(4rem, 10vw, 8.5rem)', 
              fontWeight: 900, 
              lineHeight: 0.8, 
              letterSpacing: '-0.05em', 
              textTransform: 'uppercase',
              margin: '0 0 48px 0',
              color: 'black',
              fontFamily: 'var(--font-headline)'
            }}>
              TECHNICAL <br /> ARTISTRY
            </h2>

            <p style={{ 
              fontSize: '1.35rem', 
              lineHeight: 1.5, 
              color: '#5b3f48', 
              maxWidth: '550px',
              fontWeight: 500
            }}>
              I build software that doesn&apos;t just function—it resonates. My approach blends industrial-grade engineering with editorial design aesthetics, creating products that are as robust as they are beautiful.
            </p>
          </div>
        </div>

        {/* Right Column: Staggered 2-Column Vertical Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: '32px' 
        }}>
          {/* Column 1 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {[
              { title: "Clean Core", desc: "Scalable architectures built with performance and long-term maintainability in mind.", icon: "web" },
              { title: "High Velocity", desc: "Rapid prototyping and agile iteration cycles to bring concepts to market faster.", icon: "bolt" }
            ].map((card) => (
              <motion.div 
                key={card.title}
                whileHover={{ x: -4, y: -4, boxShadow: '9px 9px 0px 0px #000' }}
                style={cardStyle}
              >
                <div style={iconBoxStyle}>
                  <span className="material-symbols-outlined" style={{ color: 'white', fontSize: '36px' }}>{card.icon}</span>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.75rem', fontWeight: 900, textTransform: 'uppercase', marginBottom: '12px', color: 'black', fontFamily: 'var(--font-headline)' }}>
                    {card.title}
                  </h3>
                  <p style={{ fontSize: '1.125rem', color: '#5b3f48', fontWeight: 500, lineHeight: 1.4 }}>
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Column 2 (SHIFTED DOWNWARDS) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', marginTop: '64px' }}>
            {[
              { title: "Visual Logic", desc: "Design systems that translate complex data into intuitive, editorial interfaces.", icon: "palette" },
              { title: "Premium Feel", desc: "Attention to detail that elevates products from 'good' to 'extraordinary'.", icon: "diamond" }
            ].map((card) => (
              <motion.div 
                key={card.title}
                whileHover={{ x: -4, y: -4, boxShadow: '9px 9px 0px 0px #000' }}
                style={cardStyle}
              >
                <div style={iconBoxStyle}>
                  <span className="material-symbols-outlined" style={{ color: 'white', fontSize: '36px' }}>{card.icon}</span>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.75rem', fontWeight: 900, textTransform: 'uppercase', marginBottom: '12px', color: 'black', fontFamily: 'var(--font-headline)' }}>
                    {card.title}
                  </h3>
                  <p style={{ fontSize: '1.125rem', color: '#5b3f48', fontWeight: 500, lineHeight: 1.4 }}>
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 1024px) {
          .responsive-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
