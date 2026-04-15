"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <main style={{ backgroundColor: '#fff8f8', minHeight: '100vh' }}>
      <Navbar />

      <div style={{ maxWidth: '1440px', margin: '0 auto', borderLeft: '4px solid black', borderRight: '4px solid black' }}>
        {/* Header Section */}
        <header style={{ 
          padding: '128px 48px 80px', 
          backgroundColor: 'white', 
          borderBottom: '4px solid black', 
          position: 'relative', 
          overflow: 'hidden' 
        }}>
          <p style={{ 
            fontFamily: 'var(--font-headline)', 
            color: '#b40065', 
            fontWeight: 900, 
            textTransform: 'uppercase', 
            letterSpacing: '0.2em', 
            fontSize: '1rem',
            marginBottom: '16px'
          }}>
            Inquiry / Collaboration / Design
          </p>
          <h1 style={{ 
            fontSize: 'clamp(3rem, 10vw, 10rem)', 
            fontWeight: 900, 
            lineHeight: 0.85, 
            textTransform: 'uppercase',
            fontFamily: 'var(--font-headline)',
            letterSpacing: '-0.05em'
          }}>
            Let&apos;s Build <br />
            <span style={{ color: '#b40065', fontStyle: 'italic' }}>Something</span> <br /> 
            Beautiful
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginTop: '48px' }}>
            <div style={{ width: '96px', height: '16px', backgroundColor: '#b40065', border: '2px solid black' }}></div>
            <p style={{ fontSize: '1.25rem', fontWeight: 500, maxWidth: '576px', lineHeight: 1.4 }}>
              Crafting digital high-fashion through bold code and unapologetic aesthetics. Reach out for bespoke design systems and editorial web experiences.
            </p>
          </div>
        </header>

        {/* Main Content Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))' }} className="contact-grid">
          {/* Form Section */}
          <section style={{ padding: '64px 48px', borderRight: '4px solid black', backgroundColor: 'white' }}>
            <div style={{ marginBottom: '48px' }}>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 900, textTransform: 'uppercase', fontFamily: 'var(--font-headline)' }}>The Briefing</h2>
              <div style={{ height: '4px', width: '80px', backgroundColor: '#e10080' }}></div>
            </div>

            <form style={{ display: 'flex', flexDirection: 'column', gap: '40px' }} onSubmit={(e) => e.preventDefault()}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
                <div>
                  <label style={{ display: 'block', fontWeight: 900, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>Brand or Name</label>
                  <input 
                    type="text" 
                    placeholder="WHO ARE YOU?" 
                    style={{ width: '100%', border: '4px solid black', padding: '20px', fontSize: '1.125rem', fontWeight: 900, fontFamily: 'var(--font-headline)', outline: 'none' }} 
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: 900, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>Digital Address</label>
                  <input 
                    type="email" 
                    placeholder="EMAIL@EXAMPLE.COM" 
                    style={{ width: '100%', border: '4px solid black', padding: '20px', fontSize: '1.125rem', fontWeight: 900, fontFamily: 'var(--font-headline)', outline: 'none' }} 
                  />
                </div>
              </div>
              <div>
                <label style={{ display: 'block', fontWeight: 900, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>The Concept</label>
                <textarea 
                  rows={6} 
                  placeholder="WHAT ARE WE CREATING?" 
                  style={{ width: '100%', border: '4px solid black', padding: '20px', fontSize: '1.125rem', fontWeight: 900, fontFamily: 'var(--font-headline)', outline: 'none', resize: 'none' }} 
                ></textarea>
              </div>
              <button 
                type="submit" 
                style={{ 
                  backgroundColor: '#b40065', 
                  color: 'white', 
                  padding: '24px 48px', 
                  fontSize: '1.5rem', 
                  fontWeight: 900, 
                  textTransform: 'uppercase', 
                  border: '4px solid black', 
                  boxShadow: '8px 8px 0px 0px #000',
                  cursor: 'pointer',
                  alignSelf: 'flex-start',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translate(4px, 4px)';
                  e.currentTarget.style.boxShadow = '4px 4px 0px 0px #000';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translate(0, 0)';
                  e.currentTarget.style.boxShadow = '8px 8px 0px 0px #000';
                }}
              >
                Initiate Project
              </button>
            </form>
          </section>

          {/* Sidebar Section */}
          <aside style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#f9eaef' }}>
            <div style={{ 
              flex: 1, 
              padding: '64px 48px', 
              borderBottom: '4px solid black', 
              backgroundColor: '#e10080', 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              justifyContent: 'center',
              position: 'relative'
            }}>
               {/* Pattern Background */}
               <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '32px 32px' }}></div>
               
               <div style={{ 
                 position: 'relative', 
                 zIndex: 10, 
                 width: '192px', 
                 height: '192px', 
                 backgroundColor: 'white', 
                 border: '4px solid black', 
                 display: 'flex', 
                 alignItems: 'center', 
                 justifyContent: 'center',
                 boxShadow: '12px 12px 0px 0px #000'
               }}>
                 <div style={{ 
                   width: '128px', 
                   height: '128px', 
                   borderRadius: '50%', 
                   border: '2px solid black', 
                   background: 'radial-gradient(circle at 30% 30%, #e10080, #b40065)', 
                   display: 'flex', 
                   alignItems: 'center', 
                   justifyContent: 'center',
                   boxShadow: 'inset 0 4px 8px rgba(255,255,255,0.4)'
                 }}>
                   <span className="material-symbols-outlined" style={{ color: 'white', fontSize: '64px' }}>favorite</span>
                 </div>
                 <div style={{ position: 'absolute', top: '-16px', right: '-16px', backgroundColor: 'black', color: 'white', padding: '4px 12px', fontWeight: 900, fontSize: '0.75rem', textTransform: 'uppercase', fontStyle: 'italic' }}>Premium Quality</div>
               </div>
               <h3 style={{ marginTop: '48px', fontSize: '2rem', fontWeight: 900, textTransform: 'uppercase', textAlign: 'center', lineHeight: 1.1 }}>Hand-Crafted <br /> Digital Luxury</h3>
            </div>

            <div style={{ padding: '64px 48px', backgroundColor: 'white' }}>
               <h3 style={{ fontSize: '1.5rem', fontWeight: 900, textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
                 <div style={{ width: '32px', height: '4px', backgroundColor: 'black' }}></div>
                 Directory
               </h3>
               <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                 {[
                   { name: 'GitHub', icon: 'code' },
                   { name: 'LinkedIn', icon: 'person' },
                   { name: 'Instagram', icon: 'photo_camera' }
                 ].map(item => (
                   <a key={item.name} href="#" className="directory-link" style={{ 
                     display: 'flex', 
                     justifyContent: 'space-between', 
                     alignItems: 'center', 
                     padding: '24px', 
                     border: '4px solid black', 
                     textDecoration: 'none', 
                     color: 'black',
                     boxShadow: '4px 4px 0px 0px #000',
                     transition: 'all 0.2s'
                   }}>
                     <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                       <div style={{ width: '40px', height: '40px', backgroundColor: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                         <span className="material-symbols-outlined" style={{ color: 'white' }}>{item.icon}</span>
                       </div>
                       <span style={{ fontWeight: 900, fontSize: '1.25rem', textTransform: 'uppercase' }}>{item.name}</span>
                     </div>
                     <span className="material-symbols-outlined">arrow_outward</span>
                   </a>
                 ))}
               </div>
            </div>
          </aside>
        </div>

        {/* Marquee Divider */}
        <div style={{ width: '100%', height: '48px', backgroundColor: 'black', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
          <div className="marquee" style={{ display: 'flex', whiteSpace: 'nowrap', gap: '48px' }}>
             {[...Array(6)].map((_, i) => (
               <span key={i} style={{ color: '#e10080', fontWeight: 900, fontSize: '1.5rem', fontStyle: 'italic', textTransform: 'uppercase' }}>
                 Arfa Sohail Khan x Digital Avant-Garde x 2024
               </span>
             ))}
          </div>
        </div>
      </div>

      <Footer />
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee {
          animation: marquee 20s linear infinite;
        }
        .directory-link:hover {
          background-color: #e10080 !important;
          color: white !important;
          transform: translate(2px, 2px);
          box-shadow: none !important;
        }
        .directory-link:hover span {
          color: white !important;
        }
        @media (max-width: 768px) {
           .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
