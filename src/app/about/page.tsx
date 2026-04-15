"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function AboutPage() {
  const milestones = [
    {
      year: "2022—PRESENT",
      role: "Senior Creative Engineer",
      company: "Avant Garde Tech Solutions",
      color: "#e10080"
    },
    {
      year: "2019—2022",
      role: "Full Stack Developer",
      company: "The Aesthetic Collective",
      color: "#b40065"
    },
    {
      year: "2017—2019",
      role: "UI/UX Designer",
      company: "Pixel & Paper Studio",
      color: "#211a1d"
    }
  ];

  const sectionStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '128px 24px'
  };

  const grid3Style = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '32px'
  };

  return (
    <main style={{ backgroundColor: '#fff8f8', minHeight: '100vh', overflowX: 'hidden' }}>
      <Navbar />

      <div style={sectionStyle}>
        {/* Hero Section */}
        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px', alignItems: 'end', marginBottom: '128px' }}>
          <div style={{ flex: 1 }}>
            <p style={{ fontFamily: 'var(--font-headline)', fontWeight: 900, color: '#e10080', fontSize: '1rem', letterSpacing: '0.5em', textTransform: 'uppercase', marginBottom: '16px' }}>The Engineer Behind the Aesthetics</p>
            <h1 style={{ fontFamily: 'var(--font-headline)', fontWeight: 900, fontSize: 'clamp(4rem, 12vw, 9rem)', lineHeight: 0.85, textTransform: 'uppercase', marginBottom: '32px' }}>
              About<br />
              <span className="editorial-text-mask">Arfa</span>
            </h1>
          </div>
          <div style={{ position: 'relative', width: '100%', maxWidth: '450px', marginLeft: 'auto' }}>
            <div style={{ border: '4px solid black', boxShadow: '12px 12px 0px 0px #b40065', backgroundColor: '#e10080' }}>
              <Image 
                src="/images/portrait.png" 
                alt="Arfa Sohail Khan" 
                width={800}
                height={1000}
                style={{ width: '100%', height: 'auto', display: 'block', filter: 'grayscale(1)', transition: 'filter 0.5s' }}
                onMouseEnter={(e) => e.currentTarget.style.filter = 'grayscale(0)'}
                onMouseLeave={(e) => e.currentTarget.style.filter = 'grayscale(1)'}
              />
            </div>
            <div style={{ position: 'absolute', bottom: '-40px', left: '-40px', backgroundColor: '#b40065', padding: '24px', border: '4px solid black', boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)' }} className="hidden md:block">
              <span className="material-symbols-outlined" style={{ color: 'white', fontSize: '48px' }}>architecture</span>
            </div>
          </div>
        </section>

        {/* Manifesto Grid */}
        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '32px', marginBottom: '160px' }}>
          {/* Large Card */}
          <div style={{ gridColumn: 'span 8', backgroundColor: 'white', border: '4px solid black', padding: '48px', boxShadow: '8px 8px 0px 0px rgba(0,0,0,1)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h2 style={{ fontFamily: 'var(--font-headline)', fontWeight: 900, fontSize: '2.5rem', textTransform: 'uppercase', marginBottom: '32px' }}>Code to Confection</h2>
              <p style={{ fontSize: '1.75rem', lineHeight: 1.4, color: '#5b3f48', marginBottom: '48px' }}>
                I build software like a master pâtissier constructs a croquembouche. It&apos;s not just about the structural integrity—it&apos;s about the <span style={{ backgroundColor: '#ffd9e3', padding: '0 8px', fontWeight: 700 }}>visual rhythm</span>, the tactile response, and the soul behind the pixels.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <span style={{ backgroundColor: '#ffb6c1', border: '4px solid black', padding: '8px 16px', fontWeight: 900, textTransform: 'uppercase', fontSize: '0.875rem' }}>Structural Precision</span>
              <span style={{ backgroundColor: '#e10080', border: '4px solid black', padding: '8px 16px', fontWeight: 900, textTransform: 'uppercase', fontSize: '0.875rem', color: 'white' }}>Artistic Chaos</span>
              <span style={{ backgroundColor: '#ce4252', border: '4px solid black', padding: '8px 16px', fontWeight: 900, textTransform: 'uppercase', fontSize: '0.875rem', color: 'white' }}>Human Logic</span>
            </div>
          </div>

          <div style={{ gridColumn: 'span 4', position: 'relative', border: '4px solid black', boxShadow: '8px 8px 0px 0px rgba(0,0,0,1)', overflow: 'hidden', height: '400px' }}>
            <Image src="/images/foundry.png" alt="Foundry" fill style={{ objectFit: 'cover', opacity: 0.8 }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)', padding: '24px', display: 'flex', alignItems: 'flex-end' }}>
              <p style={{ color: 'white', fontFamily: 'var(--font-headline)', fontWeight: 900, fontSize: '1.5rem', textTransform: 'uppercase' }}>The Foundry</p>
            </div>
          </div>

          <div style={{ gridColumn: 'span 4', position: 'relative', border: '4px solid black', boxShadow: '8px 8px 0px 0px rgba(0,0,0,1)', overflow: 'hidden', height: '400px' }}>
            <Image src="/images/texture-fallback.png" alt="Texture" fill style={{ objectFit: 'cover', opacity: 0.6 }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(180,0,101,0.6), transparent)', padding: '24px', display: 'flex', alignItems: 'flex-end' }}>
              <p style={{ color: 'white', fontFamily: 'var(--font-headline)', fontWeight: 900, fontSize: '1.5rem', textTransform: 'uppercase' }}>The Texture</p>
            </div>
          </div>

          <div style={{ gridColumn: 'span 4', backgroundColor: '#eddfe4', border: '4px solid black', boxShadow: '8px 8px 0px 0px rgba(0,0,0,1)', padding: '32px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
            <div style={{ fontSize: '5rem', fontWeight: 900, color: '#b40065', lineHeight: 1 }}>08+</div>
            <div style={{ borderTop: '4px solid black', paddingTop: '8px', marginTop: '8px', fontWeight: 900, textTransform: 'uppercase', fontSize: '0.875rem' }}>Years of Impact</div>
          </div>

          <div style={{ gridColumn: 'span 4', backgroundColor: 'white', border: '4px solid black', boxShadow: '8px 8px 0px 0px rgba(0,0,0,1)', padding: '32px', display: 'flex', alignItems: 'center' }}>
            <p style={{ fontSize: '1.25rem', fontWeight: 500, fontStyle: 'italic', lineHeight: 1.3 }}>&quot;We have enough functional apps. We need more digital poetry that actually works.&quot;</p>
          </div>
        </section>

        {/* Bio Section */}
        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '64px', marginBottom: '160px' }}>
          <div>
            <h3 style={{ fontFamily: 'var(--font-headline)', fontWeight: 900, fontSize: '3.5rem', textTransform: 'uppercase', lineHeight: 1, marginBottom: '24px' }}>
              The Soul of an <span style={{ color: '#b40065' }}>Artist</span>,<br /> The Mind of an <span className="editorial-text-mask">Architect</span>.
            </h3>
            <div style={{ width: '96px', height: '16px', backgroundColor: 'black', marginBottom: '48px' }}></div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <div style={{ display: 'flex', gap: '16px' }}>
                <span className="material-symbols-outlined" style={{ color: '#b40065', fontWeight: 'bold' }}>check_circle</span>
                <div>
                  <h4 style={{ fontWeight: 900, textTransform: 'uppercase', fontSize: '1rem', marginBottom: '4px' }}>Full-Stack Craftsmanship</h4>
                  <p style={{ color: '#5b3f48', fontSize: '0.875rem' }}>Building end-to-end solutions with obsessive attention to detail.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '16px' }}>
                <span className="material-symbols-outlined" style={{ color: '#b40065', fontWeight: 'bold' }}>check_circle</span>
                <div>
                  <h4 style={{ fontWeight: 900, textTransform: 'uppercase', fontSize: '1rem', marginBottom: '4px' }}>User-Centric Design</h4>
                  <p style={{ color: '#5b3f48', fontSize: '0.875rem' }}>Interactions that feel like a handshake, not a hurdle.</p>
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            <div style={{ backgroundColor: '#fff0f5', border: '4px solid black', padding: '40px', boxShadow: '8px 8px 0px 0px rgba(0,0,0,1)' }}>
              <p style={{ fontSize: '1.25rem', lineHeight: 1.6, marginBottom: '32px' }}>
                My journey didn&apos;t start in a sterile office. It started in the studio—surrounded by charcoal, oil paints, and the pursuit of perfect composition. When I moved into engineering, I didn&apos;t leave the artist behind; I gave her better tools.
              </p>
              <p style={{ fontSize: '1.25rem', lineHeight: 1.6 }}>
                Today, I specialize in bridging the gap between high-level brand strategy and deep technical execution. I don&apos;t just write code; I engineer experiences that resonate on a visceral level.
              </p>
            </div>
            <div style={{ position: 'relative', padding: '48px 32px' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, fontSize: '8rem', color: 'rgba(180,0,101,0.1)', fontWeight: 900, userSelect: 'none' }}>&quot;</div>
              <p style={{ position: 'relative', zIndex: 1, fontFamily: 'var(--font-headline)', fontWeight: 900, fontSize: '2.5rem', textTransform: 'uppercase', letterSpacing: 'tighter' }}>
                I design for the people who notice the <span style={{ color: '#b40065' }}>spacing between the letters</span> and the speed of the transition.
              </p>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section style={{ marginBottom: '160px' }}>
          <h3 style={{ fontFamily: 'var(--font-headline)', fontWeight: 900, fontSize: '4rem', textTransform: 'uppercase', textAlign: 'center', marginBottom: '64px' }}>Milestones</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {milestones.map((m, idx) => (
              <div key={idx} style={{ 
                border: '4px solid black', 
                backgroundColor: 'white', 
                padding: '32px', 
                display: 'flex', 
                flexDirection: 'row', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = m.color;
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'white';
                e.currentTarget.style.color = 'black';
              }}
              >
                <span style={{ fontSize: '2.5rem', fontWeight: 900, fontFamily: 'var(--font-headline)' }}>{m.year}</span>
                <div style={{ textAlign: 'left', flex: 1, marginLeft: '48px' }}>
                  <h4 style={{ fontSize: '1.5rem', fontWeight: 900, textTransform: 'uppercase' }}>{m.role}</h4>
                  <p style={{ opacity: 0.7, fontWeight: 700, textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.1em' }}>{m.company}</p>
                </div>
                <span className="material-symbols-outlined" style={{ fontSize: '48px' }}>arrow_outward</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ backgroundColor: '#b40065', padding: '96px', border: '4px solid black', boxShadow: '16px 16px 0px 0px rgba(0,0,0,1)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '15rem', fontWeight: 900, color: 'white', opacity: 0.1, pointerEvents: 'none', userSelect: 'none' }}>HELLO</div>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', color: 'white', fontWeight: 900, textTransform: 'uppercase', marginBottom: '48px', lineHeight: 1 }}>Ready to Build<br />Something Beautiful?</h2>
            <div style={{ display: 'flex', gap: '24px', justifyContent: 'center' }}>
              <button style={{ backgroundColor: 'white', color: 'black', border: '4px solid black', padding: '16px 48px', fontSize: '1.25rem', fontWeight: 900, textTransform: 'uppercase', boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)', cursor: 'pointer' }}>Hire Me</button>
              <button style={{ backgroundColor: 'black', color: 'white', border: '4px solid black', padding: '16px 48px', fontSize: '1.25rem', fontWeight: 900, textTransform: 'uppercase', boxShadow: '4px 4px 0px 0px rgba(180,0,101,1)', cursor: 'pointer' }}>View Projects</button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
