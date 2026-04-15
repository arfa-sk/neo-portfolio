"use client";

export default function Footer() {
  return (
    <footer style={{ 
      width: '100%',
      backgroundColor: '#b40065', 
      padding: '80px 24px 48px', 
      borderTop: '4px solid black',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      color: 'black' // Latest design uses black text on pink
    }}>
      <div style={{ 
        fontSize: '3.5rem', 
        fontWeight: 900, 
        fontStyle: 'italic', 
        fontFamily: 'var(--font-headline)',
        textTransform: 'uppercase',
        letterSpacing: '-0.05em',
        marginBottom: '48px'
      }}>
        ARFA.SK
      </div>
      
      <div style={{ display: 'flex', gap: '40px', marginBottom: '64px', flexWrap: 'wrap', justifyContent: 'center' }}>
        {[
          { name: 'Twitter', href: '#' },
          { name: 'Dribbble', href: '#' },
          { name: 'LinkedIn', href: '#' }
        ].map(link => (
          <a 
            key={link.name} 
            href={link.href} 
            style={{ 
              fontSize: '1.25rem', 
              fontWeight: 900, 
              color: 'black', 
              textDecoration: 'none',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              transition: 'all 0.2s',
              fontFamily: 'var(--font-headline)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.textDecoration = 'underline';
              e.currentTarget.style.textDecorationThickness = '4px';
              e.currentTarget.style.textUnderlineOffset = '8px';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.textDecoration = 'none';
            }}
          >
            {link.name}
          </a>
        ))}
      </div>

      <div style={{ 
        width: '100%', 
        maxWidth: '896px', 
        borderTop: '4px solid black', 
        paddingTop: '32px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '24px'
      }}>
        <p style={{ 
          fontFamily: 'var(--font-headline)', 
          fontSize: '1.125rem', 
          fontWeight: 900, 
          textTransform: 'uppercase', 
          letterSpacing: '0.1em'
        }}>
          Copyright 2024
        </p>
        
        {/* Color Palette Chips */}
        <div style={{ display: 'flex', gap: '16px' }}>
          <div style={{ width: '24px', height: '24px', backgroundColor: 'black' }}></div>
          <div style={{ width: '24px', height: '24px', backgroundColor: '#ffd9e3', border: '2px solid black' }}></div>
          <div style={{ width: '24px', height: '24px', backgroundColor: '#ffb6c1', border: '2px solid black' }}></div>
        </div>
      </div>
    </footer>
  );
}
