"use client";

export default function LetsBuild() {
  return (
    <section style={{ padding: '128px 32px', backgroundColor: 'white', borderTop: '4px solid black' }}>
      <div style={{ maxWidth: '1024px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ 
          fontSize: 'clamp(4rem, 15vw, 10rem)', 
          fontWeight: 900, 
          fontFamily: 'var(--font-headline)', 
          color: '#b40065', 
          textTransform: 'uppercase', 
          lineHeight: 0.85,
          letterSpacing: '-0.05em',
          marginBottom: '48px'
        }}>
          LET'S <br /> BUILD
        </h2>
        <p style={{ 
          fontSize: 'clamp(1.5rem, 4vw, 2rem)', 
          fontWeight: 500, 
          color: '#5b3f48', 
          fontFamily: 'var(--font-headline)', 
          textTransform: 'uppercase', 
          letterSpacing: '-0.02em', 
          maxWidth: '672px', 
          margin: '0 auto 64px'
        }}>
          Ready to transform your vision into a high-fidelity digital reality?
        </p>
        <button style={{ 
          backgroundColor: '#e10080', 
          color: 'white', 
          border: '4px solid black', 
          padding: '32px 64px', 
          fontSize: 'clamp(2rem, 6vw, 4rem)', 
          fontFamily: 'var(--font-headline)', 
          fontWeight: 900, 
          textTransform: 'uppercase', 
          letterSpacing: '-0.05em',
          boxShadow: '8px 8px 0px 0px rgba(0,0,0,1)',
          cursor: 'pointer',
          transition: 'all 0.2s'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translate(8px, 8px)';
          e.currentTarget.style.boxShadow = 'none';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translate(0, 0)';
          e.currentTarget.style.boxShadow = '8px 8px 0px 0px rgba(0,0,0,1)';
        }}
        >
          GET IN TOUCH
        </button>
      </div>
    </section>
  );
}
