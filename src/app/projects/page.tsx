"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function ProjectsPage() {
  return (
    <main style={{ backgroundColor: 'var(--background)' }}>
      {/* Specific Navbar Override Vibe for this page if needed, but we'll stick to the component */}
      <Navbar />
      
      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '80px 32px' }}>
        {/* Hero Section / Header */}
        <header style={{ marginBottom: '128px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <span className="neo-border bg-pink uppercase-label" style={{ 
            color: 'white', 
            padding: '4px 16px', 
            fontSize: '0.75rem', 
            letterSpacing: '0.2em',
            marginBottom: '24px'
          }}>
            Portfolio 2024
          </span>
          <h1 style={{ 
            fontSize: 'clamp(4rem, 10vw, 9rem)', 
            lineHeight: 0.8, 
            letterSpacing: '-0.05em', 
            marginBottom: '32px' 
          }}>
            PROJECTS <br />
            <span className="pink-text" style={{ fontStyle: 'italic' }}>GALLERY</span>
          </h1>
          <p style={{ 
            maxWidth: '672px', 
            fontSize: '1.25rem', 
            fontWeight: 500, 
            lineHeight: 1.6, 
            borderLeft: '8px solid var(--primary)', 
            paddingLeft: '32px',
            marginTop: '16px'
          }}>
            An editorial collection of digital experiences, full-stack architectures, and creative coding experiments designed at the intersection of brutalism and luxury.
          </p>
        </header>

        {/* Bento Grid Layout */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(12, 1fr)', 
          gap: '32px' 
        }}>
          {/* Project 1: Large Featured */}
          <div style={{ gridColumn: 'span 8' }}>
            <div className="neo-border neo-project-card" style={{ 
              backgroundColor: 'var(--surface-container-lowest)',
              boxShadow: '12px 12px 0px 0px rgba(0,0,0,1)',
              transition: 'all 0.3s'
            }}>
              <div style={{ position: 'relative', width: '100%', height: '500px', borderBottom: '4px solid black' }}>
                <Image 
                  src="/images/neon-ledger.png" 
                  alt="Neon Ledger Pro" 
                  fill 
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '32px' }}>
                <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
                  <span className="neo-border uppercase-label" style={{ backgroundColor: 'var(--secondary-container)', padding: '4px 12px', fontSize: '0.7rem' }}>Fullstack</span>
                  <span className="neo-border uppercase-label" style={{ backgroundColor: 'var(--primary-fixed)', padding: '4px 12px', fontSize: '0.7rem' }}>Fintech</span>
                </div>
                <h2 style={{ fontSize: '3rem', marginBottom: '16px' }}>NEON LEDGER PRO</h2>
                <p style={{ fontSize: '1.125rem', marginBottom: '32px', maxWidth: '576px' }}>A decentralized financial dashboard utilizing high-performance Rust backends and a custom-built WebGL visualization engine.</p>
                <button className="btn btn-primary neo-shadow">View Case Study</button>
              </div>
            </div>
          </div>

          {/* Project 2: Vertical Side */}
          <div style={{ gridColumn: 'span 4' }}>
            <div className="neo-border bg-white" style={{ 
              padding: '24px', 
              height: '100%', 
              display: 'flex', 
              flexDirection: 'column',
              boxShadow: '8px 8px 0px 0px rgba(0,0,0,1)'
            }}>
              <div style={{ position: 'relative', marginBottom: '24px' }}>
                <div className="neo-border glossy-icon" style={{ 
                  position: 'absolute', 
                  top: '-16px', 
                  right: '-16px', 
                  width: '64px', 
                  height: '64px', 
                  zIndex: 10,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'var(--primary)'
                }}>
                  <span style={{ color: 'white', fontWeight: 900 }}>*</span>
                </div>
                <div style={{ position: 'relative', width: '100%', height: '256px', border: '4px solid black' }}>
                  <Image src="/images/ether-gloss.png" alt="Ether Gloss" fill style={{ objectFit: 'cover' }} />
                </div>
              </div>
              <div style={{ flexGrow: 1 }}>
                <span className="uppercase-label pink-text" style={{ fontSize: '0.75rem', marginBottom: '8px', display: 'block' }}>Web3 Architecture</span>
                <h3 style={{ fontSize: '1.875rem', marginBottom: '16px' }}>ETHER GLOSS</h3>
                <p style={{ fontSize: '0.875rem' }}>Developing an NFT marketplace with a focus on tactile interaction and premium visual aesthetics.</p>
              </div>
              <div style={{ marginTop: '32px', paddingTop: '24px', borderTop: '4px solid rgba(0,0,0,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="uppercase-label" style={{ fontSize: '0.75rem' }}>2024 Edition</span>
                <span>→</span>
              </div>
            </div>
          </div>

          {/* Project 3: Wide Middle */}
          <div style={{ gridColumn: 'span 5' }}>
            <div className="neo-border" style={{ 
              backgroundColor: 'var(--surface-container-high)', 
              padding: '32px',
              boxShadow: '8px 8px 0px 0px rgba(0,0,0,1)'
            }}>
              <h3 style={{ fontSize: '2.25rem', marginBottom: '24px' }}>SYSTEM <br />COUTURE</h3>
              <div style={{ position: 'relative', width: '100%', height: '192px', border: '4px solid black', marginBottom: '24px' }}>
                <Image src="/images/system-couture.png" alt="System Couture" fill style={{ objectFit: 'cover' }} />
              </div>
              <p style={{ fontSize: '1rem', fontStyle: 'italic', marginBottom: '24px' }}>Where fashion meets function. A bespoke CSS framework for luxury editorial platforms.</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {['Tailwind CSS', 'UI Framework', 'Editorial'].map(tag => (
                  <span key={tag} className="bg-black text-white uppercase-label" style={{ padding: '4px 12px', fontSize: '10px' }}>{tag}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Project 4: Image Centric */}
          <div style={{ gridColumn: 'span 7' }}>
            <div className="neo-border" style={{ 
              position: 'relative', 
              height: '100%', 
              boxShadow: '8px 8px 0px 0px #e10080',
              overflow: 'hidden'
            }}>
              <div style={{ position: 'absolute', inset: 0 }}>
                <Image src="/images/cyber-velvet.png" alt="Cyber Velvet" fill style={{ objectFit: 'cover' }} />
                <div style={{ 
                  position: 'absolute', 
                  inset: 0, 
                  background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' 
                }}></div>
              </div>
              <div style={{ position: 'relative', zIndex: 10, padding: '48px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-start', color: 'white' }}>
                <span style={{ 
                  backgroundColor: 'var(--primary-container)', 
                  padding: '4px 16px', 
                  fontSize: '0.75rem', 
                  fontWeight: 900, 
                  textTransform: 'uppercase',
                  border: '2px solid white',
                  marginBottom: '16px'
                }}>Active Build</span>
                <h3 style={{ fontSize: '3rem', color: 'white', marginBottom: '16px' }}>CYBER VELVET</h3>
                <p style={{ fontSize: '1.125rem', marginBottom: '24px', maxWidth: '448px' }}>Hardware-accelerated interface for real-time data monitoring in high-stakes environments.</p>
                <a href="#" className="uppercase-label" style={{ fontSize: '1.25rem', color: 'white', borderBottom: '4px solid var(--primary-container)' }}>Explore Project</a>
              </div>
            </div>
          </div>

          {/* Project 5: Small Card */}
          <div style={{ gridColumn: 'span 4' }}>
            <div className="neo-border bg-white" style={{ padding: '32px', transition: 'background-color 0.2s' }}>
              <div className="neo-border" style={{ 
                width: '48px', 
                height: '48px', 
                backgroundColor: 'black', 
                color: 'white', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                marginBottom: '24px',
                border: '4px solid var(--primary)'
              }}>
                <span style={{ fontWeight: 900 }}>API</span>
              </div>
              <h4 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>API ARCHIVE</h4>
              <p style={{ fontSize: '0.875rem', marginBottom: '16px' }}>A curated repository of 50+ custom endpoints for creative developers.</p>
              <div className="uppercase-label" style={{ fontSize: '0.75rem', display: 'flex', gap: '8px', alignItems: 'center' }}>
                View Repository <span>↗</span>
              </div>
            </div>
          </div>

          {/* Project 6: Quote/Stat Block */}
          <div style={{ gridColumn: 'span 4' }}>
            <div className="bg-pink neo-border" style={{ 
              height: '100%', 
              padding: '32px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              boxShadow: '8px 8px 0px 0px rgba(0,0,0,1)'
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '5rem', fontWeight: 900, color: 'white', letterSpacing: '-0.05em' }}>12+</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 900, textTransform: 'uppercase', lineHeight: 1 }}>Global Clients <br />Launched 2023</div>
              </div>
            </div>
          </div>

          {/* Project 7: Final Wide */}
          <div style={{ gridColumn: 'span 4' }}>
            <div className="bg-surface-container-highest neo-border" style={{ padding: '32px', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <h4 style={{ fontSize: '1.875rem', fontStyle: 'italic', marginBottom: '16px' }}>PINK OPS</h4>
              <p style={{ fontSize: '0.875rem', marginBottom: '24px', flexGrow: 1 }}>Identity design and front-end development for a cybersecurity startup focusing on offensive security visualization.</p>
              <div style={{ display: 'flex', gap: '8px' }}>
                <div style={{ color: 'var(--primary)', fontWeight: 900 }}>SEC</div>
                <div style={{ color: 'var(--primary)', fontWeight: 900 }}>TERM</div>
                <div style={{ color: 'var(--primary)', fontWeight: 900 }}>MON</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <section style={{ 
          marginTop: '128px', 
          border: '10px solid black', 
          padding: '48px', 
          backgroundColor: 'white', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          gap: '48px'
        }} className="md:flex-row">
          <div style={{ maxWidth: '576px' }}>
            <h2 style={{ fontSize: '3.75rem', lineHeight: 1, marginBottom: '24px' }}>READY TO BUILD <span className="pink-text">THE FUTURE?</span></h2>
            <p style={{ fontSize: '1.25rem', fontWeight: 700, fontStyle: 'italic' }}>Let's collaborate on your next high-impact digital project.</p>
          </div>
          <button className="btn md:w-auto" style={{ 
            backgroundColor: '#FF1493', 
            color: 'white', 
            fontSize: '1.875rem', 
            padding: '24px 48px', 
            border: '4px solid black',
            boxShadow: '10px 10px 0px 0px rgba(0,0,0,1)',
            width: '100%'
          }}>
            Hire Me Now
          </button>
        </section>
      </div>

      <Footer />
      
      <style jsx global>{`
        .neo-project-card:hover {
          transform: translate(-8px, -8px);
          box-shadow: 20px 20px 0px 0px #FF1493 !important;
        }
      `}</style>
    </main>
  );
}
