"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function ExperiencePage() {
  const trajectory = [
    {
      year: "2022 — PRESENT",
      role: "Principal Engineer",
      company: "Velvet Global Systems",
      description: "Leading the core platform infrastructure for a series-C fintech unicorn. Architected a micro-frontend architecture that reduced bundle sizes by 45% and improved developer velocity by 2x.",
      tags: ["Kubernetes", "Node.js", "Rust"]
    },
    {
      year: "2019 — 2022",
      role: "Staff Software Architect",
      company: "Neo-Genesis Labs",
      description: "Spearheaded the development of a real-time data ingestion pipeline processing 10TB+ daily. Implemented strict observability patterns using OpenTelemetry and Prometheus.",
      tags: ["AWS", "Kafka", "Go"]
    },
    {
      year: "2015 — 2019",
      role: "Lead Fullstack Engineer",
      company: "Studio Brutal",
      description: "Managed a cross-functional team of 12 engineers. Focused on delivering premium, high-impact user experiences for luxury fashion brands using modern React patterns.",
      tags: ["React", "TypeScript", "Python"]
    }
  ];

  return (
    <main style={{ backgroundColor: 'var(--background)' }}>
      <Navbar />
      
      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '80px 32px' }} className="space-y-32">
        {/* Hero Section */}
        <header style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', alignItems: 'flex-end', position: 'relative' }}>
          <div style={{ gridColumn: 'span 2' }}>
            <span className="neo-border" style={{ 
              display: 'inline-block', 
              backgroundColor: 'var(--primary-fixed)', 
              color: 'var(--on-primary-fixed-variant)', 
              padding: '4px 16px', 
              fontSize: '0.875rem', 
              fontWeight: 900, 
              textTransform: 'uppercase', 
              letterSpacing: '0.2em', 
              marginBottom: '24px' 
            }}>
              Laboratory 01: Engineering Evolution
            </span>
            <h1 style={{ fontSize: 'clamp(4rem, 15vw, 8rem)', lineHeight: 0.85, fontWeight: 900, color: 'var(--primary)', textTransform: 'uppercase', marginBottom: '32px' }}>
              TECH <br /> <span style={{ color: 'black' }}>LAB.</span>
            </h1>
            <p style={{ marginTop: '32px', fontSize: '1.5rem', fontWeight: 500, lineHeight: 1.2, maxWidth: '576px' }}>
              Architecting high-frequency digital ecosystems through a lens of aggressive performance and editorial aesthetics.
            </p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <div className="neo-border" style={{ 
              width: '100%', 
              aspectRatio: '1/1', 
              backgroundColor: 'var(--surface-container-highest)', 
              boxShadow: '12px 12px 0px 0px #e10080', 
              overflow: 'hidden', 
              transform: 'rotate(3deg)', 
              transition: 'transform 0.5s' 
            }}>
              <Image 
                src="/images/flux.png" 
                alt="Abstract tech structures" 
                fill 
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </header>

        {/* Core Competencies: Cake-Style Icons */}
        <section className="neo-border" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: 0 
        }}>
          {[
            { title: "System Architecture", color: 'var(--primary)', iconColor: 'white', textColor: 'white', icon: 'S' },
            { title: "Fullstack R&D", color: 'var(--surface-container-highest)', iconColor: 'var(--primary)', textColor: 'black', icon: 'F' },
            { title: "Big Data Infra", color: 'white', iconColor: 'var(--secondary-container)', textColor: 'black', icon: 'B' },
            { title: "API Engineering", color: 'var(--primary-container)', iconColor: 'var(--surface-bright)', textColor: 'white', icon: 'A' }
          ].map((item, idx) => (
            <div key={idx} style={{ 
              backgroundColor: item.color, 
              padding: '48px', 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              justifyContent: 'center', 
              textAlign: 'center', 
              gap: '24px',
              borderRight: idx === 3 ? 'none' : '4px solid black',
              borderBottom: 'none'
            }}>
              <div className="glossy-icon" style={{ 
                width: '96px', 
                height: '96px', 
                borderRadius: '50%', 
                backgroundColor: item.iconColor, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                boxShadow: 'inset -2px -2px 8px rgba(0,0,0,0.2), 4px 4px 0px 0px rgba(0,0,0,1)',
                border: '4px solid black'
              }}>
                <span style={{ fontSize: '3rem', fontWeight: 900, color: item.color === 'white' ? 'black' : item.color }}>{item.icon}</span>
              </div>
              <h3 className="uppercase-label" style={{ fontSize: '1.5rem', color: item.textColor }}>{item.title}</h3>
            </div>
          ))}
        </section>

        {/* Trajectory Section: Vertical Timeline */}
        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '48px' }}>
          <div style={{ gridColumn: 'span 4', position: 'sticky', top: '160px', height: 'fit-content' }}>
            <h2 style={{ fontSize: '3.75rem', marginBottom: '16px' }}>TRAJECTORY.</h2>
            <p style={{ color: 'var(--on-surface-variant)', lineHeight: 1.6 }}>
              A chronicle of technical leadership across global engineering teams and disruptive startups.
            </p>
            <div className="neo-border" style={{ 
              marginTop: '32px', 
              padding: '24px', 
              backgroundColor: 'var(--surface-container)', 
              boxShadow: '8px 8px 0px 0px rgba(0,0,0,1)' 
            }}>
              <span className="pink-text" style={{ fontSize: '2.25rem', fontWeight: 900, fontFamily: 'var(--font-headline)' }}>12+</span>
              <p className="uppercase-label" style={{ fontSize: '0.75rem', marginTop: '8px', letterSpacing: '0.1em' }}>Years of Deep Tech Experience</p>
            </div>
          </div>
          <div style={{ gridColumn: 'span 8', borderLeft: '4px solid black', paddingLeft: '64px', position: 'relative' }}>
            {/* Timeline Dot */}
            <div style={{ position: 'absolute', top: 0, left: '-14px', width: '24px', height: '24px', backgroundColor: 'var(--primary)', border: '4px solid black' }}></div>
            
            {trajectory.map((job, idx) => (
              <article key={idx} style={{ paddingBottom: '80px', position: 'relative' }}>
                <span className="pink-text uppercase-label" style={{ fontSize: '1.25rem', marginBottom: '8px', display: 'block' }}>{job.year}</span>
                <h3 style={{ fontSize: '2.25rem', marginBottom: '8px' }}>{job.role}</h3>
                <p className="uppercase-label" style={{ color: 'var(--on-surface-variant)', letterSpacing: '0.1em', marginBottom: '24px' }}>{job.company}</p>
                <div className="neo-border bg-white hover:translate-x-2" style={{ 
                  padding: '32px', 
                  boxShadow: '8px 8px 0px 0px rgba(0,0,0,1)',
                  transition: 'transform 0.2s'
                }}>
                  <p style={{ lineHeight: 1.6, marginBottom: '24px', fontSize: '1.125rem' }}>{job.description}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {job.tags.map(tag => (
                      <span key={tag} style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '4px 12px', fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase' }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* System Philosophy: Manifesto Section */}
        <section style={{ 
          backgroundColor: 'black', 
          color: 'white', 
          padding: '96px', 
          position: 'relative', 
          overflow: 'hidden' 
        }}>
          <div style={{ position: 'absolute', top: 0, right: 0, width: '256px', height: '256px', backgroundColor: 'var(--primary-container)', opacity: 0.2, filter: 'blur(100px)' }}></div>
          <div style={{ maxWidth: '896px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
            <span style={{ color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.3em', marginBottom: '32px', display: 'block', fontSize: '0.875rem', fontWeight: 900 }}>Philosophical Protocol v2.4</span>
            <h2 style={{ fontSize: 'clamp(4rem, 10vw, 6rem)', color: 'white', marginBottom: '64px', lineHeight: 1 }}>THE SYSTEM <br />MANIFESTO.</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px', fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontStyle: 'italic', opacity: 0.9, lineHeight: 1.6 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                <p>Code is not just logic; it is a physical structure. We build systems that resist decay by embracing strict constraints and unapologetic transparency.</p>
                <p>Perfection is found in the friction between high-performance backends and high-fidelity frontends. We do not compromise on the &quot;Saccharine Avant-Garde.&quot;</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                <p>Borders define boundaries. Systems without boundaries are destined for collapse. We celebrate the edges, the frames, and the hard-stops.</p>
                <p>A machine that cannot be read is a machine that cannot be trusted. Our architecture is editorial—narrative, bold, and radically legible.</p>
              </div>
            </div>
            <div style={{ marginTop: '96px', borderTop: '4px solid var(--primary)', paddingTop: '48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div className="uppercase-label" style={{ fontSize: '1.875rem' }}>EXECUTE (0x01)</div>
              <div style={{ fontSize: '4rem', color: 'var(--primary)', fontWeight: 900 }}>#</div>
            </div>
          </div>
        </section>

        {/* Premium Technical Imagery Bento Grid */}
        <section style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(4, 1fr)', 
          gridTemplateRows: 'repeat(2, 1fr)', 
          gap: '32px',
          height: '800px'
        }}>
          <div style={{ gridColumn: 'span 2', gridRow: 'span 2' }} className="neo-border">
            <div style={{ position: 'relative', width: '100%', height: '100%', boxShadow: '12px 12px 0px 0px #000' }}>
              <Image src="/images/noir.png" alt="Server Room" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
          <div style={{ gridColumn: 'span 2', gridRow: 'span 1' }} className="neo-border bg-pink-container">
            <div style={{ padding: '48px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', boxShadow: '12px 12px 0px 0px #000' }}>
              <h4 style={{ fontSize: '2.5rem', color: 'white', marginBottom: '16px' }}>Edge Performance <br /> Optimization</h4>
              <div style={{ width: '96px', height: '4px', backgroundColor: 'white' }}></div>
            </div>
          </div>
          <div style={{ gridColumn: 'span 1', gridRow: 'span 1' }} className="neo-border">
            <div style={{ position: 'relative', width: '100%', height: '100%', boxShadow: '12px 12px 0px 0px #000' }}>
              <Image src="/images/flux.png" alt="Processor Chip" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
          <div style={{ gridColumn: 'span 1', gridRow: 'span 1', backgroundColor: 'var(--surface-container-lowest)' }} className="neo-border">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', boxShadow: '12px 12px 0px 0px #000' }}>
              <span style={{ fontSize: '5rem', fontWeight: 900 }}>+</span>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
