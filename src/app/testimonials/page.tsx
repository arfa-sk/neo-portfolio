"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function TestimonialsPage() {
  const containerStyle: React.CSSProperties = {
    maxWidth: '1600px',
    margin: '0 auto',
    padding: '160px 24px 128px',
    position: 'relative'
  };

  const floatingDecorationStyle = (top: string, left?: string, right?: string): React.CSSProperties => ({
    position: 'absolute',
    top,
    left,
    right,
    zIndex: 0,
    opacity: 0.6,
  });

  return (
    <main style={{ backgroundColor: '#fff8f8', minHeight: '100vh', overflowX: 'hidden' }}>
      <Navbar />

      <div style={containerStyle}>
        {/* Floating Elements */}
        <div className="confectionery-float" style={floatingDecorationStyle('160px', undefined, '40px')}>
          <span className="material-symbols-outlined" style={{ fontSize: '10rem', color: '#ffd9e3', fontVariationSettings: "'FILL' 1" }}>cake</span>
        </div>
        <div className="confectionery-float-delayed" style={floatingDecorationStyle('400px', '20px')}>
          <span className="material-symbols-outlined" style={{ fontSize: '6rem', color: '#ffb6c1', fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
        </div>
        <div className="confectionery-float" style={floatingDecorationStyle('80%', undefined, '80px')}>
          <span className="material-symbols-outlined" style={{ fontSize: '8rem', color: '#b40065', fontVariationSettings: "'FILL' 1" }}>diamond</span>
        </div>

        {/* Header */}
        <header style={{ marginBottom: '160px', position: 'relative', zIndex: 10 }}>
          <p style={{ 
            color: '#b40065', 
            fontFamily: 'var(--font-headline)', 
            fontWeight: 900, 
            textTransform: 'uppercase', 
            letterSpacing: '0.4em', 
            fontSize: '1.25rem',
            marginBottom: '24px'
          }}>
            Voices & Validation
          </p>
          <h1 style={{ 
            fontSize: 'clamp(4rem, 14vw, 15rem)', 
            fontWeight: 900, 
            lineHeight: 0.8, 
            letterSpacing: '-0.05em', 
            textTransform: 'uppercase',
            marginBottom: '48px'
          }}>
            The Word <br />
            <span style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              On the <span style={{ color: '#b40065', fontStyle: 'italic', textDecoration: 'underline', textDecorationThickness: '1.5rem', textUnderlineOffset: '2rem' }}>Street.</span>
            </span>
          </h1>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '48px', alignItems: 'flex-end', marginTop: '80px' }}>
            <div style={{ 
              backgroundColor: 'black', 
              color: 'white', 
              padding: '32px', 
              border: '4px solid black', 
              boxShadow: '12px 12px 0px 0px #b40065', 
              maxWidth: '400px' 
            }}>
              <span className="material-symbols-outlined" style={{ color: '#b40065', fontSize: '64px', marginBottom: '16px' }}>format_quote</span>
              <p style={{ fontSize: '1.5rem', fontWeight: 900, textTransform: 'uppercase', lineHeight: 1.1, fontStyle: 'italic' }}>
                Engineering excellence through the lens of radical confectionery collaboration.
              </p>
            </div>
            <div style={{ flex: 1, borderBottom: '8px solid black', paddingBottom: '16px' }}>
              <p style={{ fontFamily: 'monospace', fontSize: '0.875rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#b40065' }}>SCROLL_TO_EXPLORE_FEEDBACK</p>
            </div>
          </div>
        </header>

        {/* Slab Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '48px', alignItems: 'start' }}>
          {/* Slab 1 */}
          <section style={{ 
            gridColumn: 'span 8', 
            backgroundColor: '#ffd9e3', 
            border: '4px solid black', 
            padding: '48px', 
            boxShadow: '8px 8px 0px 0px #000',
            position: 'relative'
          }}>
            <div className="confectionery-float" style={{ position: 'absolute', top: '-40px', right: '-40px', color: 'rgba(255,255,255,0.4)' }}>
               <span className="material-symbols-outlined" style={{ fontSize: '200px', fontVariationSettings: "'FILL' 1" }}>star</span>
            </div>
            <div style={{ position: 'relative', zIndex: 10 }}>
              <span className="material-symbols-outlined" style={{ color: '#b40065', fontSize: '64px', marginBottom: '32px', fontVariationSettings: "'FILL' 1" }}>star</span>
              <blockquote style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 900, lineHeight: 0.9, letterSpacing: '-0.05em', marginBottom: '48px', textTransform: 'uppercase' }}>
                &quot;ARFA DOESN&apos;T JUST WRITE CODE; HE ARCHITECTS EXPERIENCES THAT <span style={{ backgroundColor: 'black', color: 'white', padding: '0 16px', display: 'inline-block' }}>DEFINE BRANDS.</span>&quot;
              </blockquote>
              <div style={{ display: 'flex', gap: '24px', alignItems: 'center', paddingTop: '40px', borderTop: '4px solid black' }}>
                <div style={{ width: '80px', height: '80px', border: '4px solid black', boxShadow: '4px 4px 0px 0px #000', backgroundColor: 'white', overflow: 'hidden' }}>
                  <Image src="/images/sarah.png" alt="Sarah" width={80} height={80} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(1) contrast(1.2)' }} />
                </div>
                <div>
                  <p style={{ fontSize: '1.5rem', fontWeight: 900, textTransform: 'uppercase' }}>Sarah Jenkins</p>
                  <p style={{ fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#b40065' }}>CTO / NEXUS FLOW</p>
                </div>
              </div>
            </div>
          </section>

          {/* Slab 2 */}
          <section style={{ gridColumn: 'span 4', backgroundColor: 'white', border: '4px solid black', padding: '32px', boxShadow: '8px 8px 0px 0px #000', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <blockquote style={{ fontSize: '2.5rem', fontWeight: 900, fontStyle: 'italic', color: '#b40065', lineHeight: 1, letterSpacing: '-0.05em', marginBottom: '32px' }}>
                &quot;HE BROKE THE GRID AND REBUILT IT BETTER.&quot;
              </blockquote>
              <p style={{ borderLeft: '4px solid black', paddingLeft: '16px', fontSize: '1rem', lineHeight: 1.6, marginBottom: '32px', color: '#5b3f48' }}>
                Working with Arfa was a lesson in modern aesthetics. He pushed our brand further than we thought possible while maintaining rigorous technical standards.
              </p>
            </div>
            <div>
              <p style={{ fontWeight: 900, fontSize: '0.875rem' }}>ELARA VANCE</p>
              <p style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', opacity: 0.6 }}>Creative Director</p>
            </div>
          </section>

          {/* Slab 3 */}
          <section style={{ gridColumn: 'span 5', backgroundColor: '#ffdada', border: '4px solid black', padding: '40px', boxShadow: '8px 8px 0px 0px #000' }}>
            <div style={{ backgroundColor: '#b40065', color: 'white', padding: '8px 16px', border: '4px solid black', boxShadow: '4px 4px 0px 0px #000', width: 'fit-content', fontWeight: 900, fontSize: '0.875rem', textTransform: 'uppercase', marginBottom: '32px' }}>Highly Recommended</div>
            <blockquote style={{ fontSize: '2rem', fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: '32px' }}>
              &quot;The integration of brutalist aesthetics with high-performance engineering is something I&apos;ve rarely seen executed this flawlessly.&quot;
            </blockquote>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
               <div style={{ width: '48px', height: '4px', backgroundColor: 'black' }}></div>
               <div>
                  <p style={{ fontWeight: 900, fontSize: '0.875rem' }}>MARCUS REED</p>
                  <p style={{ fontWeight: 900, fontSize: '0.75rem', color: '#b40065', textTransform: 'uppercase' }}>Lead Architect / Studio Noir</p>
               </div>
            </div>
          </section>

          {/* Slab 4 - Grid Mix */}
          <div style={{ gridColumn: 'span 7', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
            <div style={{ backgroundColor: '#f4f4f5', border: '4px solid black', padding: '16px', boxShadow: '8px 8px 0px 0px #000', transition: 'transform 0.3s' }}>
                <div style={{ width: '100%', aspectRatio: '4/5', backgroundColor: '#e4e4e7', border: '2px solid black', marginBottom: '16px', position: 'relative', overflow: 'hidden' }}>
                  <Image src="/images/tech-code.png" alt="Detail" fill style={{ objectFit: 'cover' }} />
                </div>
                <p style={{ fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase' }}>Precise execution</p>
            </div>
            <div style={{ backgroundColor: '#b40065', border: '4px solid black', padding: '24px', boxShadow: '8px 8px 0px 0px #000', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', color: 'white' }}>
              <blockquote style={{ fontSize: '1.75rem', fontWeight: 700, textTransform: 'uppercase', lineHeight: 1, marginBottom: '24px' }}>
                &quot;Absolute precision in every single pixel.&quot;
              </blockquote>
              <p style={{ fontFamily: 'monospace', fontWeight: 900, fontSize: '0.75rem' }}>David Zhang</p>
            </div>
          </div>

          {/* Slab 5 */}
          <section style={{ gridColumn: 'span 6', backgroundColor: '#09090b', color: 'white', border: '4px solid black', padding: '48px', boxShadow: '8px 8px 0px 12px #b40065' }}>
            <span className="material-symbols-outlined confectionery-float-delayed" style={{ color: '#b40065', fontSize: '72px', marginBottom: '32px', display: 'inline-block' }}>electric_bolt</span>
            <blockquote style={{ fontSize: '3rem', fontWeight: 900, textTransform: 'uppercase', fontStyle: 'italic', letterSpacing: '-0.05em', lineHeight: 1, marginBottom: '48px' }}>
              &quot;ARFA IS THE ENGINEER YOU HIRE WHEN THE PROBLEM IS <span style={{ color: '#b40065' }}>IMPOSSIBLE.</span>&quot;
            </blockquote>
            <div>
              <p style={{ fontFamily: 'monospace', fontSize: '1.25rem', fontWeight: 900, color: '#b40065', textTransform: 'uppercase' }}>Elena Petrov</p>
              <p style={{ fontSize: '0.75rem', fontWeight: 700, color: '#71717a', textTransform: 'uppercase', letterSpacing: '0.2em' }}>Founder / Volt AI</p>
            </div>
          </section>

          {/* Slab 6 */}
          <section style={{ gridColumn: 'span 6', backgroundColor: '#ffd9e3', border: '4px solid black', padding: '48px', boxShadow: '12px 12px 0px 0px #000', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '16px', right: '16px', fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.2em', opacity: 0.4 }}>FEEDBACK_REF_2024</div>
            <blockquote style={{ fontSize: '4rem', fontWeight: 900, textTransform: 'uppercase', lineHeight: 1, marginBottom: '40px' }}>
              &quot;FAST. BOLD. RELENTLESS.&quot;
            </blockquote>
            <p style={{ fontSize: '1.25rem', fontWeight: 700, lineHeight: 1.4, marginBottom: '48px' }}>
              &quot;Our conversion rates jumped by 40% after the redesign. The UI is polarizing in the best way—it makes people look.&quot;
            </p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <p style={{ fontSize: '1.5rem', fontWeight: 900, textTransform: 'uppercase' }}>SOPHIA LORENZO</p>
                <p style={{ fontSize: '0.75rem', fontWeight: 900, color: '#b40065', textTransform: 'uppercase' }}>Marketing VP / Aura</p>
              </div>
              <div style={{ backgroundColor: 'black', color: 'white', padding: '12px', border: '2px solid black', borderRadius: '50%' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '36px' }}>verified_user</span>
              </div>
            </div>
          </section>
        </div>

        {/* Big CTA */}
        <section style={{ marginTop: '160px', border: '8px solid black', backgroundColor: 'white', padding: '64px', boxShadow: '20px 20px 0px 0px #b40065', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', bottom: '-80px', left: '-80px', width: '384px', height: '384px', backgroundColor: '#ffd9e3', borderRadius: '50%', filter: 'blur(80px)', opacity: 0.3 }}></div>
          <div style={{ position: 'relative', zIndex: 10, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '64px', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: 'clamp(4rem, 8vw, 8rem)', fontWeight: 900, lineHeight: 0.8, textTransform: 'uppercase', letterSpacing: '-0.05em', marginBottom: '32px' }}>
                Your Project is <span style={{ color: '#b40065', fontStyle: 'italic' }}>Next.</span>
              </h2>
              <p style={{ fontSize: '1.25rem', color: '#52525b', fontWeight: 500, marginBottom: '40px', maxWidth: '448px', lineHeight: 1.5 }}>
                Join the elite circle of companies that have dared to level up their digital presence through high-impact engineering and radical, avant-garde design.
              </p>
              <button style={{ 
                backgroundColor: 'black', 
                color: 'white', 
                padding: '24px 48px', 
                fontSize: '1.25rem', 
                fontWeight: 900, 
                textTransform: 'uppercase', 
                letterSpacing: '0.2em', 
                boxShadow: '8px 8px 0px 0px #b40065',
                display: 'flex',
                alignItems: 'center',
                gap: '24px',
                cursor: 'pointer',
                transition: 'all 0.2s',
                border: 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#b40065';
                e.currentTarget.style.transform = 'translate(4px, 4px)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'black';
                e.currentTarget.style.transform = 'translate(0, 0)';
                e.currentTarget.style.boxShadow = '8px 8px 0px 0px #b40065';
              }}
              >
                Start a Project
                <span className="material-symbols-outlined" style={{ fontSize: '32px' }}>arrow_forward</span>
              </button>
            </div>
            <div style={{ position: 'relative' }}>
              <div style={{ border: '4px solid black', aspectRatio: '4/3', backgroundColor: '#e4e4e7', boxShadow: '12px 12px 0px 0px #000', position: 'relative', zIndex: 10 }}>
                <Image src="/images/flux.png" alt="Mockup" fill style={{ objectFit: 'cover' }} />
              </div>
              <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '128px', height: '128px', backgroundColor: '#b40065', border: '4px solid black', zIndex: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', transform: 'rotate(12deg)' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '64px' }}>celebration</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        .confectionery-float {
          animation: float 6s ease-in-out infinite;
        }
        .confectionery-float-delayed {
          animation: float 8s ease-in-out infinite 1s;
        }
      `}</style>
    </main>
  );
}
